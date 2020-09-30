import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UniversalRouter from 'universal-router'


const routes = [
    {
        path: '',
        action: () => Home,
    },
    {
        action: () => NotFound,
    }
];

const router = new UniversalRouter(routes)

export default router