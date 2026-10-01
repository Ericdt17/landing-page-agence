import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import SEO from "../components/SEO";
import {
  contractDocumentUrl,
  declineContract,
  fetchSigningSummary,
  signContract,
} from "../services/contractSigningApi";

const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" });
};

const StatusCard = ({ tone, title, children }) => {
  const tones = {
    ok: "border-ls-ok",
    warn: "border-ls-warn",
    bad: "border-ls-bad",
  };
  return (
    <div
      className={`rounded-xl border bg-ls-surface p-5 text-[15px] leading-relaxed text-ls-text ${tones[tone]}`}
    >
      <p className='font-semibold'>{title}</p>
      <div className='mt-1 text-ls-muted'>{children}</div>
    </div>
  );
};

/**
 * Page publique de signature d'un contrat marchand, ouverte depuis le lien à
 * usage unique envoyé au commerçant. Volontairement sans la navigation du
 * site : le signataire reste concentré sur le document.
 */
const SignatureContratPage = () => {
  const { token } = useParams();
  const [summary, setSummary] = useState(null);
  const [loadState, setLoadState] = useState("loading");
  const [consent, setConsent] = useState(false);
  const [declineOpen, setDeclineOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);

  const documentUrl = contractDocumentUrl(token ?? "");

  const load = useCallback(async () => {
    setLoadState("loading");
    const result = await fetchSigningSummary(token ?? "");
    if (result.success) {
      setSummary(result.data);
      setLoadState("ready");
    } else {
      setLoadState(result.error === "expired" ? "expired" : "invalid");
    }
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  const act = async (action) => {
    setIsSubmitting(true);
    setActionError(null);
    const result = await action();
    setIsSubmitting(false);
    if (result.success) {
      setSummary(result.data);
      return;
    }
    if (result.error === "expired") {
      setLoadState("expired");
      return;
    }
    setActionError(
      result.error === "network"
        ? "Connexion impossible — vérifiez votre réseau puis réessayez."
        : "Une erreur est survenue. Réessayez ou contactez LivSight."
    );
  };

  const status = summary?.status;

  return (
    <main className='min-h-screen bg-ls-bg px-4 py-8 sm:py-12'>
      <SEO
        title='Signature de contrat — LivSight'
        description='Signature électronique de votre contrat de prestation de services de livraison LivSight.'
        noindex
      />
      <div className='mx-auto w-full max-w-3xl rounded-2xl border border-ls-stroke bg-ls-surface p-5 shadow-sm sm:p-8'>
        <p className='text-xl font-bold text-ls-primary'>LivSight</p>
        <p className='text-sm text-ls-muted'>
          Signature électronique de contrat
        </p>
        <div className='my-4 border-b-2 border-ls-primary' />

        {loadState === "loading" && (
          <div
            className='mx-auto my-12 h-10 w-10 animate-spin rounded-full border-4 border-ls-stroke border-t-ls-primary'
            aria-label='Chargement'
          />
        )}

        {loadState === "invalid" && (
          <StatusCard tone='bad' title='Lien de signature introuvable.'>
            Ce lien est invalide ou a déjà été utilisé. Contactez LivSight si
            vous pensez qu&rsquo;il s&rsquo;agit d&rsquo;une erreur.
          </StatusCard>
        )}

        {loadState === "expired" && (
          <StatusCard tone='warn' title='Ce lien de signature a expiré.'>
            Contactez LivSight pour recevoir un nouveau lien de signature.
          </StatusCard>
        )}

        {loadState === "ready" && status === "SIGNED" && (
          <div className='space-y-4'>
            <StatusCard tone='ok' title='Contrat signé.'>
              {summary.signed_at && <>Signé le {formatDate(summary.signed_at)}. </>}
              Un exemplaire scellé, accompagné de son attestation de signature,
              est disponible ci-dessous. Conservez-en une copie.
            </StatusCard>
            <a
              className='inline-block font-semibold text-ls-primary underline-offset-4 hover:underline'
              href={documentUrl}
              target='_blank'
              rel='noreferrer'
            >
              Télécharger le contrat signé (PDF) →
            </a>
          </div>
        )}

        {loadState === "ready" && status === "DECLINED" && (
          <StatusCard tone='bad' title='Vous avez refusé ce contrat.'>
            {summary.declined_at && <>Refusé le {formatDate(summary.declined_at)}. </>}
            Votre motif a été transmis à LivSight, qui reviendra vers vous.
          </StatusCard>
        )}

        {loadState === "ready" &&
          status !== "SIGNED" &&
          status !== "DECLINED" && (
            <div>
              <h1 className='text-lg font-bold text-ls-text'>
                Contrat de prestation de services de livraison n°{" "}
                {summary.contract_id}
              </h1>
              <p className='mt-1 text-sm leading-relaxed text-ls-muted'>
                Entre{" "}
                <strong>{summary.company_legal_name ?? "LivSight"}</strong> et{" "}
                <strong>
                  {summary.business_name ?? "votre établissement"}
                </strong>
                {summary.representative_name && (
                  <>, représenté(e) par {summary.representative_name}</>
                )}
                .
                {summary.expires_at && (
                  <>
                    {" "}
                    Ce lien est valable jusqu&rsquo;au{" "}
                    {formatDate(summary.expires_at)}.
                  </>
                )}
              </p>

              <div className='mt-4 max-h-[65vh] overflow-y-auto rounded-lg border border-ls-stroke bg-white'>
                <PdfViewer url={documentUrl} />
              </div>
              <a
                className='mt-2 inline-block text-sm font-semibold text-ls-primary underline-offset-4 hover:underline'
                href={documentUrl}
                target='_blank'
                rel='noreferrer'
              >
                Ouvrir le PDF dans un nouvel onglet →
              </a>

              <label className='mt-5 flex items-start gap-3 rounded-lg border border-ls-primary bg-ls-primary-soft p-4 text-[15px] text-ls-text'>
                <input
                  type='checkbox'
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className='mt-0.5 h-5 w-5 accent-ls-primary'
                />
                <span>
                  J&rsquo;ai lu l&rsquo;intégralité du contrat et je
                  l&rsquo;approuve.
                  <br />
                  <strong>Mention : « Lu et approuvé »</strong>
                </span>
              </label>

              <div className='mt-5 flex flex-wrap gap-3'>
                <button
                  type='button'
                  disabled={!consent || isSubmitting}
                  onClick={() => act(() => signContract(token ?? ""))}
                  className='rounded-lg bg-ls-primary px-6 py-3 font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-50'
                >
                  {isSubmitting ? "Signature en cours…" : "Signer le contrat"}
                </button>
                <button
                  type='button'
                  disabled={isSubmitting}
                  onClick={() => setDeclineOpen((v) => !v)}
                  className='rounded-lg border border-ls-bad px-6 py-3 font-semibold text-ls-bad'
                >
                  Refuser
                </button>
              </div>

              {declineOpen && (
                <div className='mt-4'>
                  <textarea
                    value={declineReason}
                    onChange={(e) => setDeclineReason(e.target.value)}
                    maxLength={500}
                    placeholder='Indiquez le motif de votre refus (obligatoire)…'
                    className='min-h-[90px] w-full rounded-lg border border-ls-stroke bg-ls-bg p-3 text-sm text-ls-text'
                  />
                  <button
                    type='button'
                    disabled={!declineReason.trim() || isSubmitting}
                    onClick={() =>
                      act(() => declineContract(token ?? "", declineReason.trim()))
                    }
                    className='mt-2 rounded-lg border border-ls-bad px-6 py-3 font-semibold text-ls-bad disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    Confirmer le refus
                  </button>
                </div>
              )}

              {actionError && (
                <p className='mt-4 text-sm text-ls-bad'>{actionError}</p>
              )}
            </div>
          )}

        <p className='mt-8 text-xs leading-relaxed text-ls-faint'>
          En signant, une attestation électronique (date, heure, empreinte du
          document) est jointe au contrat. Besoin d&rsquo;aide ? Contactez
          LivSight.
        </p>
      </div>
    </main>
  );
};

export default SignatureContratPage;
