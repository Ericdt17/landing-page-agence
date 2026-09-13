import { tarifsZones } from "../../constants/offre";
import { siteWhatsappHref } from "../../constants/site";
import { useLandingPublic } from "../../context/LandingPublicContext";
import { cityZones, feeExtras, formatFcfa } from "../../services/tarifs";

const neighborhoodLabel = (neighborhood, zoneFee) => {
  const override = neighborhood.fee != null && neighborhood.fee !== zoneFee ? ` (${formatFcfa(neighborhood.fee)})` : "";
  return `${neighborhood.name}${override}${neighborhood.entryFee ? " †" : ""}`;
};

/**
 * Tarifs par zone, lus en direct depuis l'API publique. Trois états honnêtes :
 * chargement, indisponible (renvoi vers WhatsApp), ou le tableau réel.
 */
const TarifsParZone = () => {
  const { landing, status } = useLandingPublic();
  const cities = cityZones(landing);
  const extras = feeExtras(landing);
  const hasEntryFee = cities.some((city) => city.zones.some((zone) => zone.neighborhoods.some((n) => n.entryFee)));

  if (status === "idle" || status === "loading") {
    return (
      <p className='ls-body py-10 text-ls-muted' aria-busy='true'>
        {tarifsZones.loading}
      </p>
    );
  }

  if (cities.length === 0) {
    return (
      <div className='flex flex-col items-start gap-5 border-y border-ls-rule py-8'>
        <p className='ls-body max-w-[60ch] text-ls-muted'>{tarifsZones.unavailable}</p>
        <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-line'>
          {tarifsZones.unavailableCta}
        </a>
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
          aria-label={`Tarifs par zone, ${city.name}`}
          tabIndex={0}
          className='overflow-x-auto'
        >
          <table className='w-full min-w-[640px] border-collapse text-left'>
            <caption className='ls-h ls-d3 pb-4 text-left'>{city.name}</caption>
            <thead>
              <tr className='border-y border-ls-rule'>
                {["Zone", "Distance", "Délai indicatif", "Quartiers", "Tarif"].map((heading, index) => (
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
                    Zone {index + 1}
                  </th>
                  <td className='ls-cap py-4 pr-4 text-ls-muted'>{zone.distance ?? "—"}</td>
                  <td className='ls-cap py-4 pr-4 text-ls-muted'>{zone.eta ?? "—"}</td>
                  <td className='ls-cap max-w-[42ch] py-4 pr-4 text-ls-muted'>
                    {zone.neighborhoods.length > 0
                      ? zone.neighborhoods.map((n) => neighborhoodLabel(n, zone.fee)).join(", ")
                      : "—"}
                  </td>
                  <td className='ls-num whitespace-nowrap py-4 text-right text-lg'>{formatFcfa(zone.fee)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {hasEntryFee && <p className='ls-cap text-ls-faint'>† {tarifsZones.entryFeeNote}</p>}

      {extras.length > 0 && (
        <div>
          <h3 className='ls-kicker pb-3 text-ls-faint'>{tarifsZones.extrasTitle}</h3>
          <dl className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule sm:grid-cols-3'>
            {extras.map((extra) => (
              <div key={extra.label} className='flex flex-col-reverse gap-1 bg-ls-bg py-4 sm:px-4 sm:first:pl-0'>
                <dt className='ls-cap text-ls-muted'>{extra.label}</dt>
                <dd className='ls-num text-lg'>{extra.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

export default TarifsParZone;
