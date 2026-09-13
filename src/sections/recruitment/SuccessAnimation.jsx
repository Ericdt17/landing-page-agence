import Lottie from "lottie-react";
import { candidatureSuccess } from "../../assets/lottie";

/**
 * Isolé dans son propre fichier pour être chargé à la demande : le lecteur
 * Lottie et l'animation pèsent plus que tout le reste du formulaire, et ne
 * servent qu'une fois la candidature envoyée.
 */
const SuccessAnimation = () => (
    <Lottie animationData={candidatureSuccess} loop={false} autoplay />
);

export default SuccessAnimation;
