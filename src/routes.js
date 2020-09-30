import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";

import UniversalRouter from 'universal-router'


const routes = [
    {
        path: '',
        action: () => Home,
    },
    {
        path: '/login',
        action: () => Login,
    },
    {
        path: '/contacts',
        action: () => Contacts,
    },
    {
        action: () => NotFound,
    }
];

const router = new UniversalRouter(routes)

export default router