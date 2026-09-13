import { links } from "../../constants/routes";
import WhatsAppIcon from "../WhatsAppIcon";

/**
 * Tout bouton qui ouvre WhatsApp passe par ici : l'icône annonce où mène le
 * clic. Libellés prévus : « Commencer à livrer », « Écrire sur WhatsApp » et,
 * pour les courses, « Commander sur WhatsApp ».
 */
const WhatsAppButton = ({ className = "", onClick, children }) => (
  <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' onClick={onClick} className={`${className} gap-2`}>
    <WhatsAppIcon className='h-4 w-4 shrink-0' />
    {children}
  </a>
);

export default WhatsAppButton;
