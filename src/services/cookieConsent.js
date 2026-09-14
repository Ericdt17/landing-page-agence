const STORAGE_KEY = "livsight.cookies";

/* Repli quand le stockage est bloqué (navigation privée stricte, réglages) :
   le choix vaut au moins pour la visite en cours. */
let sessionChoice = null;

/** @returns {"accepted"|"refused"|null} null = aucun choix exprimé */
export const cookieChoice = () => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "refused" ? value : sessionChoice;
  } catch {
    return sessionChoice;
  }
};

export const rememberCookieChoice = (choice) => {
  sessionChoice = choice;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* stockage indisponible : le choix reste en mémoire pour la visite */
  }
};

/** Les cookies de mesure ne doivent être posés que si ceci renvoie vrai. */
export const analyticsAllowed = () => cookieChoice() === "accepted";
