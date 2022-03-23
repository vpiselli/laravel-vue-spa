import { createRouter, createWebHistory } from 'vue-router'
import Colors from './components/Colors';
import Illustrations from './components/Illustrations';
import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Mascot from './components/Mascot';
import Typography from './components/Typography';
import Wallpapers from './components/Wallpapers';
import NotFound from './components/NotFound';
import SiteStats from './components/SiteStats';

let LoadersAndAnimations = () => import('./components/LoadersAndAnimations');

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/',
        component: Logo
    },
    {
        path: '/logo-symbol',
        component: LogoSymbol,
    },
    {
        path: '/colors',
        component: Colors,
    },
    {
        path: '/illustrations',
        component: Illustrations,
    },
    {
        path: '/loaders-and-animations',
        component: LoadersAndAnimations,
    },
    {
        path: '/mascot',
        component: Mascot,
    },
    {
        path: '/typography',
        component: Typography,
    },
    {
        path: '/wallpapers',
        component: Wallpapers,
    },
    {
        path: '/site-stats',
        component: SiteStats,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "font-bold",
})

export default router