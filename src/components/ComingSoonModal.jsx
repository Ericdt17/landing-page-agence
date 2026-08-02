import { RocketLaunchIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useModal } from "../context/ModalContext";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const INITIAL = { email: "", phone: "" };

const ComingSoonModal = () => {
  const { isOpen, close } = useModal();
  const [fields, setFields] = useState(INITIAL);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | duplicate | error
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      // reset after close animation finishes
      const t = setTimeout(() => {
        setFields(INITIAL);
        setFieldErrors({});
        setStatus("idle");
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic client-side presence check
    const errors = {};
    if (!fields.email.trim()) errors.email = true;
    if (!fields.phone.trim()) errors.phone = true;
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`${API_BASE}/api/v1/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "omit",
        body: JSON.stringify({ email: fields.email.trim(), phone: fields.phone.trim() }),
      });

      if (res.status === 201) {
        setStatus("success");
        return;
      }

      const body = await res.json().catch(() => ({}));

      if (res.status === 409) {
        setStatus("duplicate");
        return;
      }

      if (res.status === 422 && body.fields?.length) {
        const fe = {};
        body.fields.forEach((f) => { fe[f] = true; });
        setFieldErrors(fe);
        setStatus("idle");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (name) =>
    `w-full rounded-full border px-5 py-3.5 font-montserrat text-base text-gray-900 outline-none transition-all ${
      fieldErrors[name]
        ? "border-coral-red ring-2 ring-coral-red/20"
        : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
    }`;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      <div
        className={`relative w-full max-w-md rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-8 shadow-2xl transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
          aria-label="Fermer"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* ── Success ── */}
        {status === "success" && (
          <div className="flex flex-col items-center py-6 text-center">
            <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            <p className="mt-6 font-montserrat text-2xl font-bold text-gray-900">Vous êtes sur la liste !</p>
            <p className="mt-2 font-montserrat text-base leading-6 text-gray-500">
              Nous vous contacterons dès le lancement de LivSight.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 rounded-full bg-brand-blue px-8 py-3 font-montserrat text-base font-bold text-white transition-opacity hover:opacity-95"
            >
              Fermer
            </button>
          </div>
        )}

        {/* ── Duplicate ── */}
        {status === "duplicate" && (
          <div className="flex flex-col items-center py-6 text-center">
            <RocketLaunchIcon className="h-8 w-8 text-brand-blue" aria-hidden="true" />
            <p className="mt-6 font-montserrat text-2xl font-bold text-gray-900">Déjà inscrit !</p>
            <p className="mt-2 font-montserrat text-base leading-6 text-gray-500">
              Ces coordonnées sont déjà sur notre liste. Vous serez notifié au lancement.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 rounded-full bg-brand-blue px-8 py-3 font-montserrat text-base font-bold text-white transition-opacity hover:opacity-95"
            >
              Parfait
            </button>
          </div>
        )}

        {/* ── Form (idle / loading / error) ── */}
        {(status === "idle" || status === "loading" || status === "error") && (
          <>
            <div className="text-center">
              <RocketLaunchIcon className="mx-auto h-8 w-8 text-brand-blue" aria-hidden="true" />
              <h2
                id="modal-title"
                className="mt-6 font-montserrat text-2xl font-bold text-gray-900"
              >
                Bientôt disponible !
              </h2>
              <p className="mt-3 font-montserrat text-base leading-6 text-gray-500">
                Laissez vos coordonnées pour être parmi les premiers notifiés au lancement.
              </p>
            </div>

            <form className="mt-8 flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-1">
                <input
                  ref={inputRef}
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  autoComplete="email"
                  className={inputClass("email")}
                />
                {fieldErrors.email && (
                  <p className="pl-5 font-montserrat text-xs text-coral-red">Email invalide ou manquant.</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  type="tel"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="+237 6XX XXX XXX"
                  autoComplete="tel"
                  className={inputClass("phone")}
                />
                {fieldErrors.phone && (
                  <p className="pl-5 font-montserrat text-xs text-coral-red">Numéro invalide ou manquant.</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-center font-montserrat text-sm text-coral-red">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 w-full rounded-full bg-brand-blue px-6 py-3.5 font-montserrat text-base font-bold text-white shadow-lg shadow-brand-blue/20 transition-opacity hover:opacity-95 disabled:opacity-60"
              >
                {status === "loading" ? "Envoi en cours…" : "Me notifier au lancement"}
              </button>
            </form>

            <p className="mt-4 text-center font-montserrat text-xs text-gray-400">
              Pas de spam. Désabonnement en un clic.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ComingSoonModal;
