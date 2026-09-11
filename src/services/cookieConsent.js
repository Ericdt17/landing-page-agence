const STORAGE_KEY = "livsight.cookies";

/** @returns {"accepted"|"refused"|null} null = aucun choix exprimé */
export const cookieChoice = () => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "refused" ? value : null;
  } catch {
    return null;
  }
};

export const rememberCookieChoice = (choice) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* stockage indisponible : rien n'est posé, donc rien à mémoriser */
  }
};

/** Les cookies de mesure ne doivent être posés que si ceci renvoie vrai. */
export const analyticsAllowed = () => cookieChoice() === "accepted";
