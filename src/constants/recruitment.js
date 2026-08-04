/**
 * Page Recrutement : textes et chemins.
 * Route : aligner `entrepriseRecrutementPath` avec `App.jsx` et le footer Entreprise.
 */

export const entrepriseRecrutementPath = "/entreprise/recrutement";

/** URL page détail d’une offre (à placer avant la route liste dans `App.jsx` si besoin) */
export const recruitmentOfferDetailPath = (jobId) =>
    `/entreprise/recrutement/offre/${encodeURIComponent(String(jobId))}`;

/** URL page candidature pour une offre */
export const recruitmentApplyPath = (jobId) =>
    `/entreprise/recrutement/offre/${encodeURIComponent(String(jobId))}/postuler`;

export const RECRUITMENT_HERO = {
    title: "Recrutement",
    subtitle: "Rejoignez l’équipe LivSight à Yaoundé.",
    description:
        "Livreurs et agents : nous recrutons des profils motivés, identifiés et formés pour livrer avec sérieux. Postulez en ligne : nous vous répondons rapidement.",
};

/** Badge au-dessus du hero lorsqu’il y a des offres */
export const RECRUITMENT_OPEN_BADGE = "Postes ouverts";

export const FUNNEL_STEPS = [
    {
        step: 1,
        label: "Candidature reçue",
        description: "Votre dossier est enregistré sur la plateforme.",
    },
    {
        step: 2,
        label: "Pré-sélection",
        description: "Vérification de votre profil et de vos disponibilités.",
    },
    {
        step: 3,
        label: "Tests envoyés",
        description: "Épreuves adaptées au poste (livreur ou agent).",
    },
    {
        step: 4,
        label: "Scoring",
        description: "Analyse objective des résultats et du potentiel.",
    },
    {
        step: 5,
        label: "Interview",
        description: "Échange avec l’équipe pour valider le fit culturel.",
    },
    {
        step: 6,
        label: "Intégration",
        description: "Onboarding, formation terrain et suivi.",
    },
];

export const TRANSPORT_OPTIONS = [
    { value: "scooter", label: "Scooter / Moto" },
    { value: "velo", label: "Vélo" },
    { value: "voiture", label: "Voiture" },
    { value: "apied", label: "À pied" },
];

export const AVAILABILITY_OPTIONS = [
    { value: "plein", label: "Temps plein" },
    { value: "partiel", label: "Temps partiel" },
    { value: "weekend", label: "Week-end uniquement" },
];

export const EDUCATION_LEVEL_OPTIONS = [
    { value: "bac", label: "Bac" },
    { value: "licence", label: "Licence" },
    { value: "master", label: "Master" },
    { value: "doctorat", label: "Doctorat" },
];

export const SPOKEN_LANGUAGE_OPTIONS = [
    { value: "francais", label: "Français" },
    { value: "anglais", label: "Anglais" },
];

export const YES_NO_OPTIONS = [
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" },
];

export const STATUS_LABELS = {
    jobDetailLoadError: "Impossible de charger cette offre.",
    jobNotFound: "Cette offre n’existe plus ou n’est plus disponible.",
    submitSuccessTitle: "Candidature envoyée !",
    submitSuccessSubtitle: "Nous reviendrons vers vous très prochainement.",
    submitSuccessApplicationId: (id) =>
        `Référence candidature : #${id}`,
    submitErrorGeneric: "Une erreur est survenue, veuillez réessayer.",
    submitErrorNetwork:
        "Upload impossible. Vérifiez votre connexion et réessayez avec un fichier inférieur à 10 Mo.",
    submitError413: "Fichier trop volumineux (max 10 Mo).",
    submitError409: "Vous avez déjà postulé pour ce poste.",
    submitError400Fallback: "Données invalides. Vérifiez les champs et réessayez.",
    submitErrorMissingJobId:
        "Identifiant du poste manquant. Rechargez la page puis réessayez.",
    cvTooLarge: "Le fichier dépasse 10 Mo. Veuillez choisir un PDF plus léger.",
    cvNotPdf: "Le CV doit être au format PDF.",
    photoTooLarge: "La photo dépasse 10 Mo. Veuillez choisir une image plus légère.",
    photoRequired: "La photo de profil est obligatoire.",
    emailRequired: "L’email est obligatoire.",
    emailInvalid: "Veuillez saisir une adresse email valide.",
    phoneTooLong: "Le téléphone ne doit pas dépasser 32 caractères.",
    fieldRequired: "Ce champ est obligatoire.",
    languagesRequired: "Sélectionnez au moins une langue.",
    yesNoRequired: "Réponse requise.",
    photoInvalidType: "Format non accepté. Utilisez une image JPEG, PNG ou WebP.",
    jobsLoadError: "Impossible de charger les offres pour le moment.",
    questionsLoadError: "Impossible de charger le formulaire pour ce poste.",
    submitError503:
        "Envoi des fichiers indisponible pour le moment. Réessayez plus tard.",
};

export const EMPTY_JOBS_MESSAGE =
    "Il n’y a aucun poste ouvert pour le moment. Revenez bientôt ou écrivez-nous sur WhatsApp.";

/** Libellés de badge selon le type de poste renvoyé par l’API */
export const JOB_TYPE_LABELS = {
    livreur: "Livreur",
    agent: "Agent",
    default: "Poste",
};

/** Section valeurs (3 cartes) : iconId : shield | academic | user-group */
export const RECRUITMENT_VALUES = [
    {
        iconId: "shield",
        title: "Livreurs identifiés",
        description:
            "Chaque livreur est recruté, formé et rattaché à l’agence : pas de travail au noir.",
    },
    {
        iconId: "academic",
        title: "Formation assurée",
        description:
            "Parcours d’intégration et accompagnement pour être opérationnel rapidement.",
    },
    {
        iconId: "users",
        title: "Équipe soudée",
        description:
            "Une culture terrain où l’agent, le livreur et le commerçant travaillent main dans la main.",
    },
];

export const RECRUITMENT_VALUES_TITLE = "Pourquoi nous rejoindre";

export const RECRUITMENT_PROCESS_TITLE = "Notre processus de recrutement";

export const RECRUITMENT_PROCESS_INTRO =
    "De la candidature à l’intégration, chaque étape est claire et suivie par l’équipe.";

/** Formulaire : étape 1 */
/** Liste + page détail offre */
export const RECRUITMENT_JOB_UI = {
    viewDetail: "Voir le détail",
    backToOffers: "← Retour aux offres",
    backToOffer: "← Retour à l’offre",
    descriptionHeading: "Description du poste",
    noDescription:
        "Aucune description détaillée n’est disponible pour ce poste.",
};

export const APPLICATION_FORM_LABELS = {
    step1Title: "Votre profil",
    step2Title: "Questions complémentaires",
    sectionIdentity: "Identité & contact",
    sectionEducation: "Formation",
    sectionLanguages: "Langues parlées",
    languagesHint: "Cochez au moins une langue.",
    sectionProfessional: "Situation professionnelle",
    currentlyEmployed: "Êtes-vous actuellement en poste ?",
    inOtherCompany: "Êtes-vous actuellement dans une autre boîte ?",
    sectionMobility: "Mobilité & disponibilité",
    sectionDocuments: "Documents",
    fullName: "Nom complet",
    phone: "Téléphone",
    phonePlaceholder: "+237 6XX XXX XXX",
    email: "Email",
    neighborhood: "Quartier de résidence",
    educationLevel: "Niveau d’études",
    fieldOfStudy: "Filière / domaine d’études",
    schoolName: "École ou université",
    transport: "Moyen de transport",
    availability: "Disponibilité",
    photo: "Photo de profil (JPEG, PNG ou WebP, 10 Mo max)",
    cv: "Votre CV (PDF uniquement, 10 Mo max)",
    coverLetter: "Lettre de motivation (PDF uniquement, 10 Mo max)",
    next: "Suivant",
    back: "Retour",
    submit: "Envoyer ma candidature",
    textareaPlaceholder: "Votre réponse…",
    close: "Fermer",
    apply: "Postuler",
    selectTransport: "Choisir…",
    selectAvailability: "Choisir…",
    selectEducationLevel: "Choisir…",
};

export const RECRUITMENT_MODAL_TITLE = "Candidature";

export const MAX_CV_BYTES = 10 * 1024 * 1024;
