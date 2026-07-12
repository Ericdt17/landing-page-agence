import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { candidatureSuccess } from "../../assets/lottie";
import {
    APPLICATION_FORM_LABELS,
    AVAILABILITY_OPTIONS,
    EDUCATION_LEVEL_OPTIONS,
    MAX_CV_BYTES,
    RECRUITMENT_MODAL_TITLE,
    SPOKEN_LANGUAGE_OPTIONS,
    STATUS_LABELS,
    TRANSPORT_OPTIONS,
    YES_NO_OPTIONS,
    entrepriseRecrutementPath,
} from "../../constants";
import { submitApplication } from "../../services/recruitmentApi";

const RECRUITMENT_PHOTO_FIELD =
    import.meta.env.VITE_RECRUITMENT_PHOTO_FIELD ?? "photo";
const RECRUITMENT_CV_FIELD =
    import.meta.env.VITE_RECRUITMENT_CV_FIELD ?? "cv";
const RECRUITMENT_COVER_LETTER_FIELD =
    import.meta.env.VITE_RECRUITMENT_COVER_LETTER_FIELD ?? "cover_letter";
const RECRUITMENT_JOB_ID_FIELD =
    import.meta.env.VITE_RECRUITMENT_JOB_ID_FIELD ?? "job_offer_id";
const RECRUITMENT_NEIGHBORHOOD_FIELD =
    import.meta.env.VITE_RECRUITMENT_NEIGHBORHOOD_FIELD ?? "quartier";

const ACCEPTED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const API_FIELD_TO_FORM = {
    full_name: "fullName",
    phone: "phone",
    email: "email",
    quartier: "neighborhood",
    neighborhood: "neighborhood",
    education_level: "educationLevel",
    field_of_study: "fieldOfStudy",
    study_field: "fieldOfStudy",
    school_name: "schoolName",
    school: "schoolName",
    languages: "languages",
    currently_employed: "currentlyEmployed",
    in_other_company: "inOtherCompany",
    transport: "transport",
    availability: "availability",
    photo: "photo",
    cv: "cv",
    cover_letter: "coverLetter",
};

const sectionHeadingClass =
    "font-montserrat text-sm font-semibold text-brand-blue";

const inputClass =
    "w-full rounded-2xl border border-gray-200 px-4 py-3 font-montserrat text-base text-gray-900 outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

const selectClass =
    "w-full rounded-2xl border border-gray-200 px-4 py-3 font-montserrat text-base text-gray-900 outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 bg-white";

const stringifyEntityId = (raw) => {
    if (raw == null || raw === "") return "";
    if (typeof raw === "string" || typeof raw === "number") return String(raw);
    if (typeof raw === "object") {
        if (raw.$oid) return String(raw.$oid);
        if (typeof raw.toHexString === "function") return raw.toHexString();
        const s = String(raw);
        if (s && s !== "[object Object]") return s;
    }
    return "";
};

const resolveJobId = (job) =>
    stringifyEntityId(
        job?.id ??
            job?.uuid ??
            job?.slug ??
            job?._id ??
            job?.job_offer_id,
    );

const resolveQuestionId = (q) =>
    stringifyEntityId(q?.id ?? q?.question_id ?? q?._id);

const validatePdf = (file, setErr) => {
    if (!file) return false;
    if (file.size > MAX_CV_BYTES) {
        setErr(STATUS_LABELS.cvTooLarge);
        return false;
    }
    if (file.type !== "application/pdf") {
        setErr(STATUS_LABELS.cvNotPdf);
        return false;
    }
    return true;
};

const extractApplicationId = (body) => {
    if (!body || typeof body !== "object") return null;
    const id = body.data?.id ?? body.id;
    return id != null && id !== "" ? String(id) : null;
};

const mapInvalidFieldsToForm = (body) => {
    if (!body?.invalidFields || !Array.isArray(body.invalidFields)) return {};
    const err = {};
    for (const item of body.invalidFields) {
        const field =
            typeof item === "string"
                ? item
                : item?.field ?? item?.name;
        if (!field) continue;
        const formKey = API_FIELD_TO_FORM[field] ?? field;
        err[formKey] = true;
    }
    return err;
};

const ApplicationForm = ({
    jobOffer,
    questions: questionsProp = [],
    onSuccess,
    hideHeader = false,
    successHref = entrepriseRecrutementPath,
}) => {
    const questions = Array.isArray(questionsProp) ? questionsProp : [];
    const hasQuestions = questions.length > 0;

    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [educationLevel, setEducationLevel] = useState("");
    const [fieldOfStudy, setFieldOfStudy] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [currentlyEmployed, setCurrentlyEmployed] = useState("");
    const [inOtherCompany, setInOtherCompany] = useState("");
    const [transport, setTransport] = useState("");
    const [availability, setAvailability] = useState("");
    const [photoFile, setPhotoFile] = useState(null);
    const [photoError, setPhotoError] = useState("");
    const [cvFile, setCvFile] = useState(null);
    const [cvError, setCvError] = useState("");
    const [coverLetterFile, setCoverLetterFile] = useState(null);
    const [coverLetterError, setCoverLetterError] = useState("");
    const [textAnswers, setTextAnswers] = useState({});
    const [mcqAnswers, setMcqAnswers] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState("idle");
    const [submitError, setSubmitError] = useState("");
    const [submittedApplicationId, setSubmittedApplicationId] = useState("");

    useEffect(() => {
        setStep(1);
        setFullName("");
        setPhone("");
        setEmail("");
        setNeighborhood("");
        setEducationLevel("");
        setFieldOfStudy("");
        setSchoolName("");
        setSelectedLanguages([]);
        setCurrentlyEmployed("");
        setInOtherCompany("");
        setTransport("");
        setAvailability("");
        setPhotoFile(null);
        setPhotoError("");
        setCvFile(null);
        setCvError("");
        setCoverLetterFile(null);
        setCoverLetterError("");
        setTextAnswers({});
        setMcqAnswers({});
        setFieldErrors({});
        setSubmitStatus("idle");
        setSubmitError("");
        setSubmittedApplicationId("");
    }, [jobOffer, questionsProp]);

    const handlePhotoChange = (e) => {
        const file = e.target.files?.[0];
        setPhotoError("");
        if (!file) {
            setPhotoFile(null);
            return;
        }
        if (file.size > MAX_CV_BYTES) {
            setPhotoError(STATUS_LABELS.photoTooLarge);
            setPhotoFile(null);
            e.target.value = "";
            return;
        }
        if (!ACCEPTED_PHOTO_TYPES.includes(file.type)) {
            setPhotoError(STATUS_LABELS.photoInvalidType);
            setPhotoFile(null);
            e.target.value = "";
            return;
        }
        setPhotoFile(file);
    };

    const handleCvChange = (e) => {
        const file = e.target.files?.[0];
        setCvError("");
        if (!file) {
            setCvFile(null);
            return;
        }
        if (!validatePdf(file, setCvError)) {
            setCvFile(null);
            e.target.value = "";
            return;
        }
        setCvFile(file);
        if (fieldErrors.cv) {
            setFieldErrors((prev) => ({ ...prev, cv: false }));
        }
    };

    const handleCoverLetterChange = (e) => {
        const file = e.target.files?.[0];
        setCoverLetterError("");
        if (!file) {
            setCoverLetterFile(null);
            return;
        }
        if (!validatePdf(file, setCoverLetterError)) {
            setCoverLetterFile(null);
            e.target.value = "";
            return;
        }
        setCoverLetterFile(file);
        if (fieldErrors.coverLetter) {
            setFieldErrors((prev) => ({ ...prev, coverLetter: false }));
        }
    };

    const toggleLanguage = (lang, checked) => {
        setSelectedLanguages((prev) =>
            checked ? [...prev, lang] : prev.filter((l) => l !== lang),
        );
        if (fieldErrors.languages) {
            setFieldErrors((prev) => ({ ...prev, languages: false }));
        }
    };

    const validateStep1 = () => {
        const err = {};
        if (!fullName.trim()) err.fullName = true;
        if (!phone.trim()) err.phone = true;
        else if (phone.trim().length > 32) err.phone = true;
        if (!email.trim()) err.email = true;
        else if (!EMAIL_REGEX.test(email.trim())) err.email = true;
        if (!neighborhood.trim()) err.neighborhood = true;
        if (!educationLevel) err.educationLevel = true;
        if (!fieldOfStudy.trim()) err.fieldOfStudy = true;
        if (!schoolName.trim()) err.schoolName = true;
        if (selectedLanguages.length === 0) err.languages = true;
        if (!currentlyEmployed) err.currentlyEmployed = true;
        if (!inOtherCompany) err.inOtherCompany = true;
        if (!transport) err.transport = true;
        if (!availability) err.availability = true;
        if (!photoFile) err.photo = true;
        else if (photoError) err.photo = true;
        if (!cvFile) err.cv = true;
        else if (!validatePdf(cvFile, setCvError)) err.cv = true;
        if (!coverLetterFile) err.coverLetter = true;
        else if (!validatePdf(coverLetterFile, setCoverLetterError))
            err.coverLetter = true;
        setFieldErrors(err);
        return Object.keys(err).length === 0;
    };

    const validateStep2 = () => {
        const err = {};
        for (const q of questions) {
            const id = resolveQuestionId(q);
            if (!id) continue;
            if (q.question_type === "text" || q.question_type === "long_text") {
                if (!(textAnswers[id] || "").trim()) err[id] = true;
            } else if (q.question_type === "mcq" || q.question_type === "choice") {
                if (!mcqAnswers[id]) err[id] = true;
            }
        }
        setFieldErrors(err);
        return Object.keys(err).length === 0;
    };

    const buildAnswersJson = () => {
        const rows = [];
        for (const q of questions) {
            const id = resolveQuestionId(q);
            if (!id) continue;
            if (q.question_type === "text" || q.question_type === "long_text") {
                rows.push({
                    question_id: id,
                    answer_text: (textAnswers[id] || "").trim(),
                });
            } else {
                rows.push({
                    question_id: id,
                    answer_text: mcqAnswers[id] || "",
                });
            }
        }
        return JSON.stringify(rows);
    };

    const appendCommonFields = (formData) => {
        const jobId = resolveJobId(jobOffer);
        if (!jobId) return null;
        formData.append(RECRUITMENT_JOB_ID_FIELD, jobId);
        formData.append("full_name", fullName.trim());
        formData.append("phone", phone.trim());
        formData.append("email", email.trim());
        formData.append(RECRUITMENT_NEIGHBORHOOD_FIELD, neighborhood.trim());
        formData.append("education_level", educationLevel);
        formData.append("field_of_study", fieldOfStudy.trim());
        formData.append("school_name", schoolName.trim());
        formData.append("languages", selectedLanguages.join(","));
        formData.append("currently_employed", currentlyEmployed);
        formData.append("in_other_company", inOtherCompany);
        formData.append("transport", transport);
        formData.append("availability", availability);
        formData.append(RECRUITMENT_PHOTO_FIELD, photoFile, photoFile.name);
        formData.append(RECRUITMENT_CV_FIELD, cvFile, cvFile.name);
        formData.append(
            RECRUITMENT_COVER_LETTER_FIELD,
            coverLetterFile,
            coverLetterFile.name,
        );
        formData.append(
            "answers",
            hasQuestions ? buildAnswersJson() : "[]",
        );
        return jobId;
    };

    const runSubmit = async () => {
        setSubmitError("");
        if (!validateStep1()) return;

        const jobId = resolveJobId(jobOffer);
        if (!jobId) {
            setSubmitError(STATUS_LABELS.submitErrorMissingJobId);
            return;
        }

        const formData = new FormData();
        if (!appendCommonFields(formData)) {
            setSubmitError(STATUS_LABELS.submitErrorMissingJobId);
            return;
        }

        setSubmitStatus("loading");
        const result = await submitApplication(formData);

        if (result.success) {
            setSubmittedApplicationId(
                extractApplicationId(result.data) ?? "",
            );
            setSubmitStatus("success");
            return;
        }

        setSubmitStatus("idle");
        if (result.status === 400 && result.data) {
            const mapped = mapInvalidFieldsToForm(result.data);
            if (Object.keys(mapped).length) setFieldErrors(mapped);
        }
        if (result?.error === "network") {
            // Aucun body lisible (CORS / proxy / réseau). On affiche un message actionnable.
            setSubmitError(STATUS_LABELS.submitErrorNetwork);
            return;
        }
        if (result.status === 413) {
            setSubmitError(STATUS_LABELS.submitError413);
            return;
        }
        if (result.status === 409) {
            setSubmitError(STATUS_LABELS.submitError409);
            return;
        }
        if (result.status === 503) {
            setSubmitError(STATUS_LABELS.submitError503);
            return;
        }
        if (result.status === 400) {
            setSubmitError(
                result.message || STATUS_LABELS.submitError400Fallback,
            );
            return;
        }
        if (result?.message) {
            setSubmitError(result.message);
            return;
        }
        setSubmitError(STATUS_LABELS.submitErrorGeneric);
    };

    const handleNext = () => {
        if (!validateStep1()) return;
        if (!hasQuestions) {
            runSubmit();
            return;
        }
        setStep(2);
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep2()) return;
        await runSubmit();
    };

    const handleCloseSuccess = () => {
        if (typeof onSuccess === "function") {
            onSuccess();
        }
    };

    const step1Fields = (
        <>
            <p className={sectionHeadingClass}>
                {APPLICATION_FORM_LABELS.sectionIdentity}
            </p>
            <div>
                <label
                    htmlFor='full_name'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.fullName} *
                </label>
                <input
                    id='full_name'
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.fullName
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                    autoComplete='name'
                />
            </div>
            <div>
                <label
                    htmlFor='phone'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.phone} *
                </label>
                <input
                    id='phone'
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={
                        APPLICATION_FORM_LABELS.phonePlaceholder
                    }
                    maxLength={32}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.phone
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                    autoComplete='tel'
                />
                {fieldErrors.phone && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {phone.trim().length > 32
                            ? STATUS_LABELS.phoneTooLong
                            : STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='email'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.email} *
                </label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.email
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                    autoComplete='email'
                />
                {fieldErrors.email && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {!email.trim()
                            ? STATUS_LABELS.emailRequired
                            : STATUS_LABELS.emailInvalid}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='neighborhood'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.neighborhood} *
                </label>
                <input
                    id='neighborhood'
                    type='text'
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.neighborhood
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                />
                {fieldErrors.neighborhood && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>

            <p className={`${sectionHeadingClass} mt-2`}>
                {APPLICATION_FORM_LABELS.sectionEducation}
            </p>
            <div>
                <label
                    htmlFor='education_level'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.educationLevel} *
                </label>
                <select
                    id='education_level'
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    className={`${selectClass} mt-1 ${
                        fieldErrors.educationLevel
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                >
                    <option value=''>
                        {APPLICATION_FORM_LABELS.selectEducationLevel}
                    </option>
                    {EDUCATION_LEVEL_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {fieldErrors.educationLevel && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='field_of_study'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.fieldOfStudy} *
                </label>
                <input
                    id='field_of_study'
                    type='text'
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.fieldOfStudy
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                />
                {fieldErrors.fieldOfStudy && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='school_name'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.schoolName} *
                </label>
                <input
                    id='school_name'
                    type='text'
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className={`${inputClass} mt-1 ${
                        fieldErrors.schoolName
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                />
                {fieldErrors.schoolName && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>

            <fieldset className='mt-2 border-0 p-0'>
                <legend className={sectionHeadingClass}>
                    {APPLICATION_FORM_LABELS.sectionLanguages}
                </legend>
                <p className='mt-1 font-montserrat text-xs text-gray-500'>
                    {APPLICATION_FORM_LABELS.languagesHint}
                </p>
                <div className='mt-3 grid grid-cols-2 gap-3'>
                    {SPOKEN_LANGUAGE_OPTIONS.map((opt) => (
                        <label
                            key={opt.value}
                            htmlFor={`lang-${opt.value}`}
                            className='flex cursor-pointer items-center gap-2 font-montserrat text-sm text-gray-800'
                        >
                            <input
                                id={`lang-${opt.value}`}
                                type='checkbox'
                                checked={selectedLanguages.includes(opt.value)}
                                onChange={(e) =>
                                    toggleLanguage(opt.value, e.target.checked)
                                }
                                className='h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue'
                            />
                            <span>{opt.label}</span>
                        </label>
                    ))}
                </div>
                {fieldErrors.languages && (
                    <p className='mt-2 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.languagesRequired}
                    </p>
                )}
            </fieldset>

            <fieldset className='mt-2 space-y-4 border-0 p-0'>
                <legend className={sectionHeadingClass}>
                    {APPLICATION_FORM_LABELS.sectionProfessional}
                </legend>
                <div>
                    <p className='font-montserrat text-sm font-medium text-gray-700'>
                        {APPLICATION_FORM_LABELS.currentlyEmployed} *
                    </p>
                    <div className='mt-2 flex gap-4'>
                        {YES_NO_OPTIONS.map((opt) => (
                            <label
                                key={`employed-${opt.value}`}
                                className='flex cursor-pointer items-center gap-2 font-montserrat text-sm text-gray-800'
                            >
                                <input
                                    type='radio'
                                    name='currently_employed'
                                    value={opt.value}
                                    checked={currentlyEmployed === opt.value}
                                    onChange={() => {
                                        setCurrentlyEmployed(opt.value);
                                        if (fieldErrors.currentlyEmployed) {
                                            setFieldErrors((prev) => ({
                                                ...prev,
                                                currentlyEmployed: false,
                                            }));
                                        }
                                    }}
                                    className='h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue'
                                />
                                <span>{opt.label}</span>
                            </label>
                        ))}
                    </div>
                    {fieldErrors.currentlyEmployed && (
                        <p className='mt-1 font-montserrat text-xs text-coral-red'>
                            {STATUS_LABELS.yesNoRequired}
                        </p>
                    )}
                </div>
                <div>
                    <p className='font-montserrat text-sm font-medium text-gray-700'>
                        {APPLICATION_FORM_LABELS.inOtherCompany} *
                    </p>
                    <div className='mt-2 flex gap-4'>
                        {YES_NO_OPTIONS.map((opt) => (
                            <label
                                key={`other-company-${opt.value}`}
                                className='flex cursor-pointer items-center gap-2 font-montserrat text-sm text-gray-800'
                            >
                                <input
                                    type='radio'
                                    name='in_other_company'
                                    value={opt.value}
                                    checked={inOtherCompany === opt.value}
                                    onChange={() => {
                                        setInOtherCompany(opt.value);
                                        if (fieldErrors.inOtherCompany) {
                                            setFieldErrors((prev) => ({
                                                ...prev,
                                                inOtherCompany: false,
                                            }));
                                        }
                                    }}
                                    className='h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue'
                                />
                                <span>{opt.label}</span>
                            </label>
                        ))}
                    </div>
                    {fieldErrors.inOtherCompany && (
                        <p className='mt-1 font-montserrat text-xs text-coral-red'>
                            {STATUS_LABELS.yesNoRequired}
                        </p>
                    )}
                </div>
            </fieldset>

            <p className={`${sectionHeadingClass} mt-2`}>
                {APPLICATION_FORM_LABELS.sectionMobility}
            </p>
            <div>
                <label
                    htmlFor='transport'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.transport} *
                </label>
                <select
                    id='transport'
                    value={transport}
                    onChange={(e) => setTransport(e.target.value)}
                    className={`${selectClass} mt-1 ${
                        fieldErrors.transport
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                >
                    <option value=''>
                        {APPLICATION_FORM_LABELS.selectTransport}
                    </option>
                    {TRANSPORT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {fieldErrors.transport && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='availability'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.availability} *
                </label>
                <select
                    id='availability'
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className={`${selectClass} mt-1 ${
                        fieldErrors.availability
                            ? "border-coral-red ring-2 ring-coral-red/20"
                            : ""
                    }`}
                >
                    <option value=''>
                        {APPLICATION_FORM_LABELS.selectAvailability}
                    </option>
                    {AVAILABILITY_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                {fieldErrors.availability && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {STATUS_LABELS.fieldRequired}
                    </p>
                )}
            </div>

            <p className={`${sectionHeadingClass} mt-2`}>
                {APPLICATION_FORM_LABELS.sectionDocuments}
            </p>
            <div>
                <label
                    htmlFor='photo'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.photo} *
                </label>
                <input
                    id='photo'
                    type='file'
                    accept='image/jpeg,image/png,image/webp'
                    onChange={handlePhotoChange}
                    className='mt-2 w-full font-montserrat text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white'
                />
                {photoFile && (
                    <p className='mt-2 font-montserrat text-xs text-gray-600'>
                        {photoFile.name}
                    </p>
                )}
                {(photoError || fieldErrors.photo) && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {photoError || STATUS_LABELS.photoRequired}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='cv'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.cv} *
                </label>
                <input
                    id='cv'
                    type='file'
                    accept='.pdf,application/pdf'
                    onChange={handleCvChange}
                    className='mt-2 w-full font-montserrat text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white'
                />
                {cvFile && (
                    <p className='mt-2 font-montserrat text-xs text-gray-600'>
                        {cvFile.name}
                    </p>
                )}
                {(cvError || fieldErrors.cv) && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {cvError || "CV requis (PDF, max 10 Mo)."}
                    </p>
                )}
            </div>
            <div>
                <label
                    htmlFor='cover_letter'
                    className='font-montserrat text-sm font-medium text-gray-700'
                >
                    {APPLICATION_FORM_LABELS.coverLetter} *
                </label>
                <input
                    id='cover_letter'
                    type='file'
                    accept='.pdf,application/pdf'
                    onChange={handleCoverLetterChange}
                    className='mt-2 w-full font-montserrat text-sm text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:py-2 file:font-semibold file:text-white'
                />
                {coverLetterFile && (
                    <p className='mt-2 font-montserrat text-xs text-gray-600'>
                        {coverLetterFile.name}
                    </p>
                )}
                {(coverLetterError || fieldErrors.coverLetter) && (
                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                        {coverLetterError ||
                            "Lettre requise (PDF, max 10 Mo)."}
                    </p>
                )}
            </div>
        </>
    );

    return (
        <div>
            {submitStatus === "success" && (
                <div className='flex flex-col items-center py-6 text-center sm:py-10'>
                    <div
                        className='h-36 w-36 sm:h-40 sm:w-40'
                        aria-hidden='true'
                    >
                        <Lottie
                            animationData={candidatureSuccess}
                            loop={false}
                            autoplay
                        />
                    </div>
                    <p className='mt-6 font-montserrat text-2xl font-bold text-gray-900'>
                        {STATUS_LABELS.submitSuccessTitle}
                    </p>
                    <p className='mt-2 font-montserrat text-base leading-6 text-gray-500'>
                        {STATUS_LABELS.submitSuccessSubtitle}
                    </p>
                    {submittedApplicationId && (
                        <p className='mt-3 font-montserrat text-sm font-semibold text-brand-blue'>
                            {STATUS_LABELS.submitSuccessApplicationId(
                                submittedApplicationId,
                            )}
                        </p>
                    )}
                    <Link
                        to={successHref}
                        onClick={handleCloseSuccess}
                        className='mt-8 rounded-full bg-brand-blue px-8 py-3 font-montserrat text-base font-bold text-white transition-opacity hover:opacity-95'
                    >
                        {APPLICATION_FORM_LABELS.close}
                    </Link>
                </div>
            )}

            {submitStatus !== "success" && (
                <>
                    {!hideHeader && (
                        <>
                            <h2
                                id='application-form-title'
                                className='font-montserrat text-xl font-bold text-gray-900 sm:text-2xl'
                            >
                                {RECRUITMENT_MODAL_TITLE}
                            </h2>
                            <p className='mt-1 font-montserrat text-sm text-gray-500'>
                                {jobOffer?.title ?? jobOffer?.name ?? "Poste"}
                            </p>
                        </>
                    )}

                    <form
                        className={`flex flex-col gap-4 ${hideHeader ? "" : "mt-6"}`}
                        onSubmit={
                            step === 2 && hasQuestions
                                ? handleFinalSubmit
                                : (e) => e.preventDefault()
                        }
                        noValidate
                        aria-labelledby={
                            hideHeader ? undefined : "application-form-title"
                        }
                    >
                            {step === 1 && step1Fields}

                            {step === 2 && hasQuestions && (
                                <div className='flex flex-col gap-6'>
                                    <p className='font-montserrat text-sm font-semibold text-brand-blue'>
                                        {APPLICATION_FORM_LABELS.step2Title}
                                    </p>
                                    {questions
                                        .filter((q) =>
                                            Boolean(resolveQuestionId(q)),
                                        )
                                        .map((q, index) => {
                                        const qid = resolveQuestionId(q);
                                        const num = index + 1;
                                        const qtype = q.question_type || "text";
                                        if (
                                            qtype === "text" ||
                                            qtype === "long_text"
                                        ) {
                                            return (
                                                <div key={String(qid)}>
                                                    <label
                                                        htmlFor={`q-${qid}`}
                                                        className='font-montserrat text-sm font-medium text-gray-700'
                                                    >
                                                        {num}. {q.question_text} *
                                                    </label>
                                                    <textarea
                                                        id={`q-${qid}`}
                                                        rows={4}
                                                        value={
                                                            textAnswers[qid] ||
                                                            ""
                                                        }
                                                        onChange={(e) =>
                                                            setTextAnswers(
                                                                (prev) => ({
                                                                    ...prev,
                                                                    [qid]: e
                                                                        .target
                                                                        .value,
                                                                }),
                                                            )
                                                        }
                                                        placeholder={
                                                            APPLICATION_FORM_LABELS.textareaPlaceholder
                                                        }
                                                        className={`${inputClass} mt-1 min-h-[100px] resize-y ${
                                                            fieldErrors[qid]
                                                                ? "border-coral-red ring-2 ring-coral-red/20"
                                                                : ""
                                                        }`}
                                                    />
                                                    {fieldErrors[qid] && (
                                                        <p className='mt-1 font-montserrat text-xs text-coral-red'>
                                                            Réponse requise.
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        }
                                        const options = Array.isArray(q.options)
                                            ? q.options
                                            : [];
                                        return (
                                            <fieldset
                                                key={String(qid)}
                                                className='border-0 p-0'
                                            >
                                                <legend className='font-montserrat text-sm font-medium text-gray-700'>
                                                    {num}. {q.question_text} *
                                                </legend>
                                                <div className='mt-2 flex flex-col gap-2'>
                                                    {options.map((opt, idx) => {
                                                        const val =
                                                            typeof opt ===
                                                            "string"
                                                                ? opt
                                                                : opt.value ??
                                                                  opt.label ??
                                                                  String(idx);
                                                        const lab =
                                                            typeof opt ===
                                                            "string"
                                                                ? opt
                                                                : opt.label ??
                                                                  opt.value ??
                                                                  String(idx);
                                                        return (
                                                            <label
                                                                key={`${qid}-${val}`}
                                                                className='flex cursor-pointer items-start gap-2 font-montserrat text-sm text-gray-800'
                                                            >
                                                                <input
                                                                    type='radio'
                                                                    name={`question-${qid}`}
                                                                    value={val}
                                                                    checked={
                                                                        mcqAnswers[
                                                                            qid
                                                                        ] ===
                                                                        val
                                                                    }
                                                                    onChange={() =>
                                                                        setMcqAnswers(
                                                                            (
                                                                                prev,
                                                                            ) => ({
                                                                                ...prev,
                                                                                [qid]: val,
                                                                            }),
                                                                        )
                                                                    }
                                                                    className='mt-1 h-4 w-4 border-gray-300 text-brand-blue focus:ring-brand-blue'
                                                                />
                                                                <span>
                                                                    {lab}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                                {fieldErrors[qid] && (
                                                    <p className='mt-1 font-montserrat text-xs text-coral-red'>
                                                        Réponse requise.
                                                    </p>
                                                )}
                                            </fieldset>
                                        );
                                    })}

                                    <div className='flex flex-col gap-3 sm:flex-row sm:justify-between'>
                                        <button
                                            type='button'
                                            onClick={() => setStep(1)}
                                            disabled={
                                                submitStatus === "loading"
                                            }
                                            className='rounded-full border border-gray-200 px-6 py-3 font-montserrat text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 disabled:opacity-50'
                                        >
                                            ← {APPLICATION_FORM_LABELS.back}
                                        </button>
                                        <button
                                            type='submit'
                                            disabled={
                                                submitStatus === "loading"
                                            }
                                            className='rounded-full bg-brand-blue px-6 py-3 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-opacity hover:opacity-95 disabled:opacity-60'
                                        >
                                            {submitStatus === "loading" ? (
                                                <span className='inline-flex items-center justify-center gap-2'>
                                                    <span
                                                        className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'
                                                        aria-hidden='true'
                                                    />
                                                    Envoi…
                                                </span>
                                            ) : (
                                                APPLICATION_FORM_LABELS.submit
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 1 && (
                                <button
                                    type='button'
                                    onClick={handleNext}
                                    disabled={submitStatus === "loading"}
                                    className='mt-2 w-full rounded-full bg-brand-blue px-6 py-3.5 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-opacity hover:opacity-95 disabled:opacity-60'
                                >
                                    {submitStatus === "loading" &&
                                    !hasQuestions ? (
                                        <span className='inline-flex items-center justify-center gap-2'>
                                            <span
                                                className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'
                                                aria-hidden='true'
                                            />
                                            Envoi…
                                        </span>
                                    ) : hasQuestions ? (
                                        `${APPLICATION_FORM_LABELS.next} →`
                                    ) : (
                                        APPLICATION_FORM_LABELS.submit
                                    )}
                                </button>
                            )}

                            {submitError && (
                                <p className='mt-2 text-center font-montserrat text-sm text-coral-red'>
                                    {submitError}
                                </p>
                            )}
                        </form>
                    </>
                )}
        </div>
    );
};

export default ApplicationForm;
