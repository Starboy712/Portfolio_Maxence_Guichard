import Vue from 'vue'
import Router from 'vue-router'

import Accueil from "../components/Accueil.vue";

import Communication  from "../components/Communication.vue";
import Design         from "../components/Design.vue";
import About         from "../components/About.vue";

import Twitch_com from "../components/Twitch_com.vue";
import Dept from "../components/Dept.vue";
import Baguette from "../components/Baguette.vue";

import Pull from "../components/Pull.vue";
import Twitch_design from "../components/Twitch_design.vue";
import SIAFO from "../components/SIAFO.vue";

import Contact from "../components/Contact.vue";
import Legal from "../components/Legal.vue";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',                         name: 'Accueil',           component: Accueil },
    { path: '/Communication',            name: 'Communication',     component: Communication },
    { path: '/Design',                   name: 'Design',            component: Design },
    { path: '/About',                    name: 'About',             component: About },
    { path: '/Twitch_com',               name: 'Twitch_com',        component: Twitch_com },
    { path: '/Dept',                     name: 'Dept',              component: Dept },
    { path: '/Baguette',                 name: 'Baguette',          component: Baguette },
    { path: '/Pull',                     name: 'Pull',              component: Pull },
    { path: '/Twitch_design',            name: 'Twitch_design',     component: Twitch_design },
    { path: '/SIAFO',                    name: 'SIAFO',             component: SIAFO },
    { path: '/Contact',                  name: 'Contact',           component: Contact },
    { path: '/Legal',                  name: 'Legal',           component: Legal },
  ]
})
