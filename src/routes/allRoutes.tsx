import ReferingProvider from "../pages/ReferingProvider";
import CptCode from "../pages/CptCode";
import NotFound from "../pages/PageNotFound";

export const authProtectedRoutes = [
    { path: '/refering-provider', component: <ReferingProvider /> },
    { path: '/cpt-code', component: <CptCode /> },
    { path: '*', component: <NotFound /> }
];