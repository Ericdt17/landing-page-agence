import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import ConfidentialitePage from "./pages/ConfidentialitePage";
import ConditionsPage from "./pages/ConditionsPage";
import SecuritePage from "./pages/SecuritePage";
import CookiesPage from "./pages/CookiesPage";
import AProposPage from "./pages/AProposPage";
import SolutionClientPage from "./pages/SolutionClientPage";
import CoursesParticuliersPage from "./pages/CoursesParticuliersPage";
import PortailAgentPage from "./pages/PortailAgentPage";
import PortailLivreurPage from "./pages/PortailLivreurPage";
import IntegrationsApiPage from "./pages/IntegrationsApiPage";
import ContactPage from "./pages/ContactPage";
import RecruitmentOfferPage from "./pages/RecruitmentOfferPage";
import RecruitmentApplyPage from "./pages/RecruitmentApplyPage";
import RecruitmentJobLayout from "./pages/RecruitmentJobLayout";
import RecruitmentPage from "./pages/RecruitmentPage";

/** Évite `basename: './'` (Vite `base: './'`) : aucune route ne matche → `*` renvoie à `/`. */
const routerBasename = (() => {
  const raw = import.meta.env.BASE_URL ?? "/";
  if (raw === "./" || raw === "." || raw === "/" || raw === "")
    return undefined;
  return raw.endsWith("/") ? raw.slice(0, -1) || undefined : raw;
})();

const App = () => {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
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
          path='/plateforme/solution-client'
          element={<SolutionClientPage />}
        />
        <Route
          path='/plateforme/courses-particuliers'
          element={<CoursesParticuliersPage />}
        />
        <Route
          path='/plateforme/portail-agent'
          element={<PortailAgentPage />}
        />
        <Route
          path='/plateforme/portail-livreur'
          element={<PortailLivreurPage />}
        />
        <Route
          path='/plateforme/integrations-api'
          element={<IntegrationsApiPage />}
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
