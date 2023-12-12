import {createRouter, createWebHistory} from 'vue-router';
import PortHome from '../components/PortHome.vue';
import PortAbout from '../components/PortAbout.vue';
import PortProjects from '../components/PortProjects.vue';
import PortContact from '../components/PortContact.vue';
import PortServices from '../components/PortServices.vue';


const routes = [
    {path: '/', component: PortHome},
    {path: '/PortAbout', component: PortAbout},
    {path: '/PortProjects', component: PortProjects},
    {path: '/PortContact', component: PortContact},
    {path: '/PortServices', component: PortServices}


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;