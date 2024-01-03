import Accueil from "./components/accueil.vue";
import viewArticle from "./components/article/viewArticle.vue";

export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },
    { name : 'viewArticles' , path: '/listArticles' , component: viewArticle

    }
];
