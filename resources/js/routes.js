import Accueil from "./components/accueil.vue";
import viewArticle from "./components/article/viewArticle.vue";
import AddArticle from "./components/article/addArticle.vue";
import editArticle from "./components/article/editArticle.vue";

export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },
    { name : 'viewArticles' , path: '/listArticles' , component: viewArticle

    },
    { name : 'AddArticle' , path: '/addArticle' , component: AddArticle

    },
    {

        name:"editarticle",
        path:"/editarticle/:id",
        component:editArticle
    },
];
