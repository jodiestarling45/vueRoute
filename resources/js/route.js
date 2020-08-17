import Home from './components/Home'
import User from './components/User'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'index',
    },
    {
        path: '/users',
        component: User,
        name: 'user',
    }
];

export default routes;
