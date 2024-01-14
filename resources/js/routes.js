import Accueil from "./components/accueil.vue";
import viewArticle from "./components/article/viewArticle.vue";
import AddArticle from "./components/article/addArticle.vue";
import editArticle from "./components/article/editArticle.vue";
import HomeCart from './components/cart/HomeCart.vue';
import Cart from "@/components/cart/Cart.vue";
import Payment from "@/components/cart/Payment.vue";
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
    {
        path:'/shopping',
        name:'HomeCart',
        component:HomeCart
    },
    {
        path:'/cart',
        name:'Cart',
        component:Cart
    },
    {
        path:'/payment',
        name:'Payment',
        component:Payment
    },
];
