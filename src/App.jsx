import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import { legacyRedirects } from "./constants/routes";
import Accueil from "./pages/Accueil";

/**
 * L'accueil reste dans le paquet principal : c'est la page la plus visitée.
 * Toutes les autres pages sont chargées à la demande, pour qu'ouvrir l'accueil
 * ne télécharge pas le code du recrutement, des pages légales ou plateforme.
 */
const ConfidentialitePage = lazy(() => import("./pages/ConfidentialitePage"));
const ConditionsPage = lazy(() => import("./pages/ConditionsPage"));
const SecuritePage = lazy(() => import("./pages/SecuritePage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const AProposPage = lazy(() => import("./pages/AProposPage"));
const CoursesParticuliersPage = lazy(() =>
  import("./pages/CoursesParticuliersPage"),
);
const ContactPage = lazy(() => import("./pages/ContactPage"));
const RecruitmentOfferPage = lazy(() => import("./pages/RecruitmentOfferPage"));
const RecruitmentApplyPage = lazy(() => import("./pages/RecruitmentApplyPage"));
const RecruitmentJobLayout = lazy(() => import("./pages/RecruitmentJobLayout"));
const RecruitmentPage = lazy(() => import("./pages/RecruitmentPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ApplicationPage = lazy(() => import("./pages/ApplicationPage"));
const LivraisonStockagePage = lazy(() => import("./pages/LivraisonStockagePage"));
const TarifsPage = lazy(() => import("./pages/TarifsPage"));
const TechnologiePage = lazy(() => import("./pages/TechnologiePage"));
const MarketplacePage = lazy(() => import("./pages/MarketplacePage"));
const ApiLivraisonPage = lazy(() => import("./pages/ApiLivraisonPage"));

/** Évite `basename: './'` (Vite `base: './'`) : aucune route ne matche → `*` renvoie à `/`. */
const routerBasename = (() => {
  const raw = import.meta.env.BASE_URL ?? "/";
  if (raw === "./" || raw === "." || raw === "/" || raw === "")
    return undefined;
  return raw.endsWith("/") ? raw.slice(0, -1) || undefined : raw;
})();

/** Fond neutre le temps qu'une page arrive : pas de saut de mise en page. */
const PageFallback = () => (
  <div className='min-h-screen bg-ls-bg' aria-busy='true' />
);

const App = () => {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <CookieConsent />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/espace-commercant' element={<ApplicationPage />} />
          <Route path='/livraison-stockage' element={<LivraisonStockagePage />} />
          <Route path='/tarifs' element={<TarifsPage />} />
          <Route path='/technologie' element={<TechnologiePage />} />
          <Route path='/marketplace' element={<MarketplacePage />} />
          <Route path='/api-livraison' element={<ApiLivraisonPage />} />
          <Route
            path='/legal/confidentialite'
            element={<ConfidentialitePage />}
          />
          <Route path='/legal/conditions' element={<ConditionsPage />} />
          <Route path='/legal/securite' element={<SecuritePage />} />
          <Route path='/legal/cookies' element={<CookiesPage />} />
          <Route path='/entreprise/a-propos' element={<AProposPage />} />
          <Route path='/entreprise/contact' element={<ContactPage />} />
          <Route
            path='/entreprise/recrutement/offre/:jobId'
            element={<RecruitmentJobLayout />}
          >
            <Route index element={<RecruitmentOfferPage />} />
            <Route path='postuler' element={<RecruitmentApplyPage />} />
          </Route>
          <Route
            path='/entreprise/recrutement'
            element={<RecruitmentPage />}
          />
          <Route
            path='/plateforme/courses-particuliers'
            element={<CoursesParticuliersPage />}
          />
          {Object.entries(legacyRedirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
