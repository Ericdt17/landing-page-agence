import LegalPage from "../components/site/LegalPage";
import { routes } from "../constants/routes";

const ConditionsPage = () => <LegalPage namespace='legalConditions' canonical={routes.conditions} />;

export default ConditionsPage;
