import { Home } from './pages/Home';
import { MainApp } from './pages/MainApp';



export const routes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/main',
        component: <MainApp />
    }
]