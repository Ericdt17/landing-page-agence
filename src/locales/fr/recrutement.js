/**
 * Recrutement : liste des postes, fiche d'un poste, candidature (français).
 *
 * Écarts volontaires avec la maquette « Rejoindre l'équipe » :
 * - pas de « tournées calculées par nos algorithmes » qui assignent les
 *   livreurs : un agent choisit le livreur de chaque tournée ;
 * - pas de « travail au noir » ni d'« équipe locale » tant que le statut des
 *   livreurs n'est pas tranché (#9) ;
 * - les postes viennent de l'API de recrutement, pas d'une liste écrite ici ;
 * - candidature : pas de « réponse sous 5 jours ouvrés », et le CV reste
 *   obligatoire comme dans le formulaire réel.
 * Les intitulés et descriptions des postes sont saisis en français dans le
 * back-office et ne sont pas traduits.
 */
export default {
    seo: {
        title: "Rejoindre l'équipe",
        description:
            "LivSight recrute à Yaoundé : livreurs et agents, recrutés, formés et rattachés à l'agence. Postulez en ligne.",
    },
    hero: {
        kicker: "Rejoindre l'équipe",
        title: "Un vrai emploi, pas une course au hasard.",
        lede: "Chez LivSight, chaque livreur est recruté, formé et rattaché à l'agence. Vous postulez en ligne, et chaque étape du recrutement est suivie par l'équipe.",
        cta: "Voir les postes ouverts",
    },
    valuesLabel: "Pourquoi nous rejoindre",
    values: [
        {
            title: "Formation assurée",
            text: "Un parcours d'intégration et une formation terrain avant de commencer : l'application, les statuts, l'encaissement.",
        },
        {
            title: "Des tournées calculées",
            text: "Les livraisons proches sont regroupées en tournées et l'ordre des arrêts est calculé pour le trajet le plus court.",
        },
        {
            title: "Rattaché à l'agence",
            text: "Chaque livreur est identifié par l'agence et dispose d'un compte nominatif sur la plateforme.",
        },
    ],
    jobs: {
        kicker: "Postes ouverts",
        title: "Les postes ouverts en ce moment.",
        languageNote: "",
        open: "Ouvert",
        viewDetail: "Voir le poste",
        viewDetailLabel: "Voir le poste : {{title}}",
        loadError: "Impossible de charger les offres pour le moment.",
        empty: "Il n'y a aucun poste ouvert pour le moment. Revenez bientôt ou écrivez-nous sur WhatsApp.",
        emptyCta: "Nous écrire sur WhatsApp",
        positionsOne: "{{count}} poste disponible",
        positionsOther: "{{count}} postes disponibles",
        unknownLocation: "Lieu non précisé",
        jobFallback: "Poste",
        types: { livreur: "Livreur", agent: "Agent", default: "Poste" },
    },
    process: {
        kicker: "Le recrutement",
        title: "Six étapes, suivies par l'équipe.",
        steps: [
            { title: "Candidature reçue", text: "Votre dossier est enregistré sur la plateforme." },
            { title: "Pré-sélection", text: "Vérification de votre profil et de vos disponibilités." },
            { title: "Tests", text: "Des épreuves adaptées au poste, livreur ou agent." },
            { title: "Évaluation", text: "Analyse des résultats et du potentiel." },
            { title: "Entretien", text: "Un échange avec l'équipe." },
            { title: "Intégration", text: "Formation terrain et suivi." },
        ],
    },
    offer: {
        kicker: "Offre d'emploi",
        backToOffers: "Rejoindre l'équipe",
        descriptionHeading: "Le poste",
        noDescription: "Aucune description détaillée n'est disponible pour ce poste.",
        loadError: "Impossible de charger cette offre.",
        notFound: "Cette offre n'existe plus ou n'est plus disponible.",
        apply: "Postuler",
        seoFallback: "Postulez chez LivSight à Yaoundé.",
    },
    apply: {
        kicker: "Candidature",
        backToOffer: "Retour au poste",
        lede: "Remplissez ce formulaire en une fois. Les champs marqués d'un astérisque sont obligatoires.",
        stepsLabel: "Étapes de la candidature",
        steps: { profile: "Votre profil", questions: "Questions sur le poste", sent: "Envoi" },
        note: "Préparez une photo, votre CV et votre lettre de motivation en PDF, 10 Mo maximum chacun.",
        consent: "En envoyant, vous acceptez que nous conservions ces informations le temps du recrutement.",
        privacyLink: "Politique de confidentialité",
        seoDescription: "Candidature : {{title}}. Postulez en ligne chez LivSight à Yaoundé.",
    },
    form: {
        title: "Candidature",
        step2Title: "Questions sur le poste",
        sectionIdentity: "Identité & contact",
        sectionEducation: "Formation",
        sectionLanguages: "Langues parlées",
        languagesHint: "Cochez au moins une langue.",
        sectionProfessional: "Situation professionnelle",
        currentlyEmployed: "Êtes-vous actuellement en poste ?",
        inOtherCompany: "Travaillez-vous actuellement pour une autre entreprise ?",
        sectionMobility: "Mobilité & disponibilité",
        sectionDocuments: "Documents",
        fullName: "Nom complet",
        phone: "Téléphone",
        phonePlaceholder: "+237 6XX XXX XXX",
        email: "Email",
        neighborhood: "Quartier de résidence",
        educationLevel: "Niveau d'études",
        fieldOfStudy: "Filière ou domaine d'études",
        schoolName: "École ou université",
        transport: "Moyen de transport",
        availability: "Disponibilité",
        photo: "Photo de profil (JPEG, PNG ou WebP, 10 Mo maximum)",
        cv: "Votre CV (PDF uniquement, 10 Mo maximum)",
        coverLetter: "Lettre de motivation (PDF uniquement, 10 Mo maximum)",
        next: "Suivant",
        back: "Retour",
        submit: "Envoyer ma candidature",
        sending: "Envoi…",
        textareaPlaceholder: "Votre réponse…",
        close: "Revenir aux postes",
        choose: "Choisir…",
        jobFallback: "Poste",
    },
    options: {
        transport: [
            { value: "scooter", label: "Scooter ou moto" },
            { value: "velo", label: "Vélo" },
            { value: "voiture", label: "Voiture" },
            { value: "apied", label: "À pied" },
        ],
        availability: [
            { value: "plein", label: "Temps plein" },
            { value: "partiel", label: "Temps partiel" },
            { value: "weekend", label: "Week-end uniquement" },
        ],
        education: [
            { value: "bac", label: "Bac" },
            { value: "licence", label: "Licence" },
            { value: "master", label: "Master" },
            { value: "doctorat", label: "Doctorat" },
        ],
        languages: [
            { value: "francais", label: "Français" },
            { value: "anglais", label: "Anglais" },
        ],
        yesNo: [
            { value: "oui", label: "Oui" },
            { value: "non", label: "Non" },
        ],
    },
    status: {
        submitSuccessTitle: "Candidature envoyée !",
        submitSuccessSubtitle: "Nous reviendrons vers vous très prochainement.",
        submitSuccessApplicationId: "Référence de candidature : #{{id}}",
        submitErrorGeneric: "Une erreur est survenue, veuillez réessayer.",
        submitErrorNetwork: "L'envoi n'a pas abouti. Vérifiez votre connexion puis réessayez : vos réponses sont conservées.",
        submitErrorOffline: "Vous êtes hors ligne. Reconnectez-vous puis renvoyez : vos réponses sont conservées.",
        submitErrorTimeout: "L'envoi prend trop de temps, la connexion a sans doute été coupée. Réessayez : vos réponses sont conservées.",
        submitError413: "Fichier trop volumineux (10 Mo maximum).",
        submitError409: "Vous avez déjà postulé pour ce poste.",
        submitError400Fallback: "Données invalides. Vérifiez les champs et réessayez.",
        submitErrorMissingJobId: "Identifiant du poste manquant. Rechargez la page puis réessayez.",
        submitError503: "Envoi des fichiers indisponible pour le moment. Réessayez plus tard.",
        cvTooLarge: "Le fichier dépasse 10 Mo. Choisissez un PDF plus léger.",
        cvNotPdf: "Le fichier doit être au format PDF.",
        cvRequired: "CV requis (PDF, 10 Mo maximum).",
        coverLetterRequired: "Lettre de motivation requise (PDF, 10 Mo maximum).",
        photoTooLarge: "La photo dépasse 10 Mo. Choisissez une image plus légère.",
        photoRequired: "La photo de profil est obligatoire.",
        photoInvalidType: "Format non accepté. Utilisez une image JPEG, PNG ou WebP.",
        emailRequired: "L'email est obligatoire.",
        emailInvalid: "Saisissez une adresse email valide.",
        phoneTooLong: "Le téléphone ne doit pas dépasser 32 caractères.",
        fieldRequired: "Ce champ est obligatoire.",
        languagesRequired: "Sélectionnez au moins une langue.",
        answerRequired: "Réponse requise.",
        questionsLoadError: "Impossible de charger le formulaire pour ce poste.",
    },
};
