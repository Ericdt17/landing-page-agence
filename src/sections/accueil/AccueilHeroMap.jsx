/**
 * Carte dessinée du héros.
 * Deux compositions : `portrait` couvre tout le premier écran mobile derrière
 * le texte (viewBox 390x640), la version paysage occupe la colonne droite sur
 * bureau (viewBox 390x340). Itinéraire animé avec `ls-route` (longueur du
 * tracé < 620, voir index.css). Décorative uniquement, d'où aria-hidden ; le
 * fond reprend --ls-bg pour se fondre dans la page sans cadre.
 */
const AccueilHeroMap = ({ portrait = false }) =>
  portrait ? (
    <svg
      aria-hidden='true'
      viewBox='0 0 390 640'
      preserveAspectRatio='xMidYMid slice'
      className='absolute inset-0 block h-full w-full'
    >
      <rect width='390' height='640' style={{ fill: "var(--ls-bg)" }} />
      <g style={{ fill: "var(--ls-rule)" }} opacity='.4'>
        <rect x='34' y='28' width='54' height='34' rx='4' transform='rotate(-4 61 45)' />
        <rect x='128' y='20' width='48' height='30' rx='4' transform='rotate(2 152 35)' />
        <rect x='240' y='30' width='56' height='32' rx='4' transform='rotate(-3 268 46)' />
        <rect x='318' y='48' width='48' height='30' rx='4' transform='rotate(3 342 63)' />
        <rect x='44' y='140' width='50' height='32' rx='4' transform='rotate(3 69 156)' />
        <rect x='140' y='132' width='54' height='28' rx='4' transform='rotate(-2 167 146)' />
        <rect x='228' y='146' width='44' height='30' rx='4' transform='rotate(4 250 161)' />
        <rect x='36' y='252' width='52' height='32' rx='4' transform='rotate(-2 62 268)' />
        <rect x='144' y='260' width='46' height='28' rx='4' transform='rotate(3 167 274)' />
        <rect x='296' y='250' width='54' height='32' rx='4' transform='rotate(-3 323 266)' />
        <rect x='52' y='370' width='50' height='30' rx='4' transform='rotate(2 77 385)' />
        <rect x='150' y='380' width='44' height='26' rx='4' transform='rotate(-3 172 393)' />
        <rect x='288' y='368' width='56' height='30' rx='4' transform='rotate(2 316 383)' />
        <rect x='40' y='476' width='54' height='32' rx='4' transform='rotate(-2 67 492)' />
        <rect x='156' y='486' width='48' height='28' rx='4' transform='rotate(3 180 500)' />
        <rect x='292' y='478' width='52' height='30' rx='4' transform='rotate(-2 318 493)' />
        <rect x='120' y='584' width='50' height='30' rx='4' transform='rotate(2 145 599)' />
        <rect x='254' y='590' width='54' height='28' rx='4' transform='rotate(-3 281 604)' />
      </g>
      <ellipse
        cx='262'
        cy='436'
        rx='42'
        ry='22'
        transform='rotate(-8 262 436)'
        style={{ fill: "var(--ls-primary)" }}
        opacity='.12'
      />
      <g fill='none' strokeLinecap='round' style={{ stroke: "var(--ls-rule)" }}>
        <path d='M-10 108 C 80 100, 170 118, 250 106 S 356 92, 400 98' strokeWidth='4' />
        <path d='M-10 248 C 86 242, 190 256, 282 244 S 368 232, 400 238' strokeWidth='5' />
        <path d='M-10 412 C 76 406, 160 420, 238 410 S 352 396, 400 402' strokeWidth='2' />
        <path d='M-10 548 C 90 542, 180 556, 262 546 S 362 534, 400 540' strokeWidth='4' />
        <path d='M96 -10 C 106 90, 86 190, 112 290 S 146 540, 152 650' strokeWidth='4' />
        <path d='M288 -10 C 280 80, 300 170, 284 270 S 262 540, 270 650' strokeWidth='4' />
        <path d='M196 -10 C 200 110, 188 230, 200 350 S 212 560, 206 650' strokeWidth='1.6' />
      </g>
      {/* Itinéraire : entrepôt (Hippodrome) vers le client. Tracé volontairement
         sur le tiers droit pour ne pas passer derrière le bloc de texte */}
      <path
        d='M250 580 C 320 540, 300 440, 310 360 S 290 220, 308 152'
        fill='none'
        strokeWidth='4'
        strokeLinecap='round'
        className='ls-route'
        style={{ stroke: "var(--ls-primary)" }}
      />
      <circle cx='250' cy='580' r='5' opacity='.5' style={{ fill: "var(--ls-primary)" }} />
      <g transform='translate(308 152)'>
        <path
          d='M0 -14 C 7 -14, 10.5 -9, 10.5 -4.4 C 10.5 2.2, 0 12, 0 12 C 0 12, -10.5 2.2, -10.5 -4.4 C -10.5 -9, -7 -14, 0 -14 Z'
          style={{ fill: "var(--ls-text)" }}
        />
        <circle cy='-4.8' r='3.7' style={{ fill: "var(--ls-bg)" }} />
      </g>
      <g transform='translate(310 360)'>
        <circle r='13' opacity='.18' style={{ fill: "var(--ls-primary)" }} className='motion-safe:animate-ping' />
        <circle r='7.5' strokeWidth='2.5' style={{ fill: "var(--ls-primary)", stroke: "var(--ls-surface)" }} />
      </g>
      <g fontSize='8' fontWeight='700' letterSpacing='.08em' style={{ fill: "var(--ls-faint)" }}>
        <text x='162' y='584'>HIPPODROME</text>
        <text x='270' y='126'>BASTOS</text>
        <text x='130' y='446'>MVOG-ADA</text>
      </g>
    </svg>
  ) : (
    <svg
      aria-hidden='true'
      viewBox='0 0 390 340'
      preserveAspectRatio='xMidYMid slice'
      className='absolute inset-0 block h-full w-full'
    >
      <rect width='390' height='340' style={{ fill: "var(--ls-bg)" }} />
      <g style={{ fill: "var(--ls-rule)" }} opacity='.4'>
        <rect x='22' y='30' width='56' height='36' rx='4' transform='rotate(-4 50 48)' />
        <rect x='96' y='18' width='46' height='30' rx='4' transform='rotate(-3 119 33)' />
        <rect x='170' y='34' width='62' height='32' rx='4' transform='rotate(2 201 50)' />
        <rect x='252' y='20' width='48' height='28' rx='4' transform='rotate(-3 276 34)' />
        <rect x='316' y='40' width='56' height='34' rx='4' transform='rotate(3 344 57)' />
        <rect x='30' y='104' width='48' height='32' rx='4' transform='rotate(3 54 120)' />
        <rect x='104' y='96' width='54' height='28' rx='4' transform='rotate(-2 131 110)' />
        <rect x='184' y='108' width='42' height='30' rx='4' transform='rotate(4 205 123)' />
        <rect x='296' y='112' width='56' height='32' rx='4' transform='rotate(-3 324 128)' />
        <rect x='44' y='186' width='52' height='32' rx='4' transform='rotate(-2 70 202)' />
        <rect x='132' y='192' width='46' height='28' rx='4' transform='rotate(3 155 206)' />
        <rect x='216' y='184' width='58' height='30' rx='4' transform='rotate(-2 245 199)' />
        <rect x='300' y='196' width='54' height='30' rx='4' transform='rotate(2 327 211)' />
        <rect x='60' y='262' width='50' height='30' rx='4' transform='rotate(2 85 277)' />
        <rect x='150' y='270' width='44' height='26' rx='4' transform='rotate(-3 172 283)' />
        <rect x='288' y='264' width='56' height='28' rx='4' transform='rotate(3 316 278)' />
      </g>
      <ellipse
        cx='250'
        cy='240'
        rx='40'
        ry='20'
        transform='rotate(-8 250 240)'
        style={{ fill: "var(--ls-primary)" }}
        opacity='.12'
      />
      <g fill='none' strokeLinecap='round' style={{ stroke: "var(--ls-rule)" }}>
        <path d='M-10 86 C 70 78, 140 100, 184 136 S 268 206, 348 198 S 384 188, 400 182' strokeWidth='5' />
        <path d='M90 -10 C 100 60, 80 120, 108 184 S 142 288, 150 350' strokeWidth='4' />
        <path d='M278 -10 C 270 50, 292 92, 274 150 S 254 270, 262 350' strokeWidth='4' />
        <path d='M-10 150 C 76 146, 160 158, 238 146 S 352 128, 400 136' strokeWidth='2' />
        <path d='M-10 36 C 80 32, 160 44, 240 34 S 356 20, 400 26' strokeWidth='1.6' />
        <path d='M186 -10 C 190 54, 178 110, 192 170 S 206 290, 200 350' strokeWidth='1.6' />
        <path d='M-10 236 C 86 230, 190 244, 282 232 S 368 220, 400 226' strokeWidth='2' />
      </g>
      {/* Itinéraire : entrepôt (Hippodrome) vers le client, tracé animé.
         Tout l'itinéraire tient dans la bande y 60-280, qui reste visible
         quel que soit le recadrage vertical (slice) du conteneur. */}
      <path
        d='M56 268 C 120 244, 130 192, 196 158 S 300 118, 330 96'
        fill='none'
        strokeWidth='4'
        strokeLinecap='round'
        className='ls-route'
        style={{ stroke: "var(--ls-primary)" }}
      />
      <circle cx='56' cy='268' r='5' opacity='.5' style={{ fill: "var(--ls-primary)" }} />
      <g transform='translate(330 96)'>
        <path
          d='M0 -14 C 7 -14, 10.5 -9, 10.5 -4.4 C 10.5 2.2, 0 12, 0 12 C 0 12, -10.5 2.2, -10.5 -4.4 C -10.5 -9, -7 -14, 0 -14 Z'
          style={{ fill: "var(--ls-text)" }}
        />
        <circle cy='-4.8' r='3.7' style={{ fill: "var(--ls-bg)" }} />
      </g>
      <g transform='translate(196 158)'>
        <circle r='13' opacity='.18' style={{ fill: "var(--ls-primary)" }} className='motion-safe:animate-ping' />
        <circle r='7.5' strokeWidth='2.5' style={{ fill: "var(--ls-primary)", stroke: "var(--ls-surface)" }} />
      </g>
      <g fontSize='8' fontWeight='700' letterSpacing='.08em' style={{ fill: "var(--ls-faint)" }}>
        <text x='68' y='272'>HIPPODROME</text>
        <text x='296' y='74'>BASTOS</text>
        <text x='254' y='252'>MVOG-ADA</text>
      </g>
    </svg>
  );

export default AccueilHeroMap;
