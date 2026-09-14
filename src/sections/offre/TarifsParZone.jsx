import { useLandingPublic } from "../../context/LandingPublicContext";
import { fill, useCopy, useLanguage } from "../../i18n/useCopy";
import { cityZones, feeExtras, formatFcfa } from "../../services/tarifs";
import WhatsAppButton from "../../components/site/WhatsAppButton";

const neighborhoodLabel = (neighborhood, zoneFee, language) => {
  const override =
    neighborhood.fee != null && neighborhood.fee !== zoneFee ? ` (${formatFcfa(neighborhood.fee, language)})` : "";
  return `${neighborhood.name}${override}${neighborhood.entryFee ? " †" : ""}`;
};

const extraValue = (extra, labels, language) => {
  if (extra.id === "clientAbsent") return fill(labels.clientAbsentValue, { percent: extra.percent });
  if (extra.id === "express") return fill(labels.expressValue, { amount: formatFcfa(extra.amount, language) });
  return formatFcfa(extra.amount, language);
};

/**
 * Tarifs par zone, lus en direct depuis l'API publique. Trois états honnêtes :
 * chargement, indisponible (renvoi vers WhatsApp), ou le tableau réel. Les noms
 * de quartiers et de villes viennent de l'API et ne sont pas traduits.
 */
const TarifsParZone = () => {
  const { zones: copy } = useCopy("offre").tarifs;
  const { language } = useLanguage();
  const { landing, status } = useLandingPublic();
  const cities = cityZones(landing);
  const extras = feeExtras(landing);
  const hasEntryFee = cities.some((city) => city.zones.some((zone) => zone.neighborhoods.some((n) => n.entryFee)));

  if (status === "idle" || status === "loading") {
    return (
      <p className='ls-body py-10 text-ls-muted' aria-busy='true'>
        {copy.loading}
      </p>
    );
  }

  if (cities.length === 0) {
    return (
      <div className='flex flex-col items-start gap-5 border-y border-ls-rule py-8'>
        <p className='ls-body max-w-[60ch] text-ls-muted'>{copy.unavailable}</p>
        <WhatsAppButton className='ls-btn ls-btn-line'>
          {copy.unavailableCta}
        </WhatsAppButton>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-10'>
      {cities.map((city) => (
        /* Défilable sur mobile : la zone doit être atteignable au clavier pour être parcourue */
        <div
          key={city.id}
          role='region'
          aria-label={fill(copy.regionLabel, { city: city.name })}
          tabIndex={0}
          className='overflow-x-auto'
        >
          <table className='w-full min-w-[640px] border-collapse text-left'>
            <caption className='ls-h ls-d3 pb-4 text-left'>{city.name}</caption>
            <thead>
              <tr className='border-y border-ls-rule'>
                {copy.headings.map((heading, index) => (
                  <th
                    key={heading}
                    scope='col'
                    className={`ls-kicker py-3 pr-4 text-ls-faint ${index === 4 ? "pr-0 text-right" : ""}`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {city.zones.map((zone, index) => (
                <tr key={zone.id} className='border-b border-ls-rule align-top'>
                  <th scope='row' className='ls-h py-4 pr-4 text-base'>
                    {fill(copy.zoneName, { number: index + 1 })}
                  </th>
                  <td className='ls-cap py-4 pr-4 text-ls-muted'>{zone.distance ?? "·"}</td>
                  <td className='ls-cap py-4 pr-4 text-ls-muted'>{zone.eta ?? "·"}</td>
                  <td className='ls-cap max-w-[42ch] py-4 pr-4 text-ls-muted'>
                    {zone.neighborhoods.length > 0
                      ? zone.neighborhoods.map((n) => neighborhoodLabel(n, zone.fee, language)).join(", ")
                      : "·"}
                  </td>
                  <td className='ls-num whitespace-nowrap py-4 text-right text-lg'>{formatFcfa(zone.fee, language)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {hasEntryFee && <p className='ls-cap text-ls-faint'>† {copy.entryFeeNote}</p>}

      {extras.length > 0 && (
        <div>
          <h3 className='ls-kicker pb-3 text-ls-faint'>{copy.extrasTitle}</h3>
          <dl className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule sm:grid-cols-3'>
            {extras.map((extra) => (
              <div key={extra.id} className='flex flex-col-reverse gap-1 bg-ls-bg py-4 sm:px-4 sm:first:pl-0'>
                <dt className='ls-cap text-ls-muted'>{copy.extras[extra.id]}</dt>
                <dd className='ls-num text-lg'>{extraValue(extra, copy.extras, language)}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

export default TarifsParZone;
