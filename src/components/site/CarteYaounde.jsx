import { carteYaounde } from "../../assets/images";

/**
 * Vraie carte de Yaoundé (Hippodrome, Nlongkak, Bastos) pour les écrans de
 * suivi. Image statique fabriquée une fois à partir des tuiles OpenStreetMap
 * et servie par le site : aucun appel à un service de cartes au chargement,
 * donc aucune donnée de visiteur envoyée hors du site. L'attribution
 * « © contributeurs OpenStreetMap » est obligatoire et reste visible.
 *
 * Coordonnées en pixels dans l'image 768 × 768 (zoom 15).
 */
const HIPPODROME = [159, 494];
const NLONGKAK = [357, 307];
const BASTOS = [101, 85];

const VARIANTS = {
  /* Écran « Où est votre livreur » : de l'Hippodrome jusqu'à Bastos */
  phone: { viewBox: "0 60 768 460", courier: NLONGKAK, destination: BASTOS },
  /* Carte large de l'accueil : de l'Hippodrome jusqu'à Nlongkak */
  wide: { viewBox: "0 170 768 460", courier: [262, 392], destination: NLONGKAK },
};

const Pin = ({ at: [x, y] }) => (
  <g transform={`translate(${x} ${y})`}>
    <path
      d='M0 -30 C 15 -30, 22 -20, 22 -9 C 22 5, 0 24, 0 24 C 0 24, -22 5, -22 -9 C -22 -20, -15 -30, 0 -30 Z'
      style={{ fill: "var(--ls-text)" }}
    />
    <circle cy='-10' r='8' fill='#fff' />
  </g>
);

const CarteYaounde = ({ variant = "phone", className = "" }) => {
  const { viewBox, courier, destination } = VARIANTS[variant];
  const [cx, cy] = courier;
  const [hx, hy] = HIPPODROME;
  const [dx, dy] = destination;

  return (
    <div aria-hidden='true' className={`relative overflow-hidden bg-ls-fill ${className}`}>
      <svg viewBox={viewBox} preserveAspectRatio='xMidYMid slice' className='absolute inset-0 h-full w-full'>
        <image
          href={carteYaounde}
          width='768'
          height='768'
          className='dark:[filter:invert(.92)_hue-rotate(180deg)_saturate(.55)_brightness(.95)]'
        />
        {/* Trajet déjà parcouru, puis trajet restant en pointillés */}
        <path
          d={`M${hx} ${hy} Q ${(hx + cx) / 2 + 40} ${(hy + cy) / 2 + 30}, ${cx} ${cy}`}
          fill='none'
          strokeWidth='9'
          strokeLinecap='round'
          style={{ stroke: "var(--ls-primary)" }}
        />
        <path
          d={`M${cx} ${cy} Q ${(cx + dx) / 2 + 30} ${(cy + dy) / 2 + 10}, ${dx} ${dy}`}
          fill='none'
          strokeWidth='8'
          strokeLinecap='round'
          strokeDasharray='2 18'
          style={{ stroke: "var(--ls-primary)" }}
        />
        <circle cx={hx} cy={hy} r='12' fill='#fff' strokeWidth='6' style={{ stroke: "var(--ls-primary)" }} />
        <Pin at={destination} />
        <g transform={`translate(${cx} ${cy})`}>
          <circle r='30' opacity='.22' style={{ fill: "var(--ls-primary)" }} className='motion-safe:animate-ping' />
          <circle r='20' strokeWidth='6' style={{ fill: "var(--ls-primary)", stroke: "#fff" }} />
          <g transform='translate(-12 -12)' fill='none' stroke='#fff' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round'>
            <circle cx='6' cy='17.5' r='2.4' />
            <circle cx='18' cy='17.5' r='2.4' />
            <path d='M8.4 17.5h6.6L18 9h-3l-1.4 3H9.2L7 9H4' />
          </g>
        </g>
      </svg>
      <span className='absolute bottom-1 right-1.5 rounded bg-white/85 px-1 py-px text-[8px] leading-tight text-[#222]'>
        © contributeurs OpenStreetMap
      </span>
    </div>
  );
};

export default CarteYaounde;
