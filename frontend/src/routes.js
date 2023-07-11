import { Home } from './pages/Home';
import { MainApp } from './pages/MainApp';
import { PaintingDetails } from './pages/PaintingDetails';



export const routes = [
    {
        path: '/painting/:id',
        component: <PaintingDetails/>
    },
    {
        path: '/painting',
        component: <MainApp />
    },
    {
        path: '/',
        component: <Home />
    }
]