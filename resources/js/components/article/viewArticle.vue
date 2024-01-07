
<template>
    <div v-if="isLoading">
        <h2> Loading .... </h2>
    </div>
    <div v-else class="py-6">
        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">

                <router-link :to="{name: 'AddArticle'}" class="btn btn-
outline-light">

                    <i class="fa-solid fa-square-plus"></i> New Article
                </router-link>

            </div>
        </nav>
        <table class="table table-striped shadow">
            <thead>
            <tr>
            <th> Image </th>
            <th> Reference  </th>
            <th> designation </th>
            <th> price </th>
            <th> quantile </th>
            <th> Marque  </th>isan
            <th> Delete </th>
            </tr></thead>
            <tbody>
            <tr v-for ="art in listArticles" :key="art.id">
                <td>  <img :src="art.imageart"  width="80"   height="80"  alt=""/>  </td>
                <td> {{art.reference}}</td>
                <td> {{ art.designation}}</td>
                <td> {{ art.qtestock}}</td>
                <td> {{ art.prix}}</td>

                <td><button class="btn btn-outline-primary mx-2">
                    <router-link :to="{name: 'editarticle', params: { id: art.id }}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    Edit </router-link> </button></td>
                <td><button class="btn btn-outline-danger mx-2" @click="deleteArticle(art.id)">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                </button></td>
            </tr> </tbody>
        </table>


    </div>
</template>

<script setup>

import {ref,onMounted} from "vue"
import axios from "axios"
const listArticles = ref([])
const isLoading=ref(true)

const getArticles = async ()  =>{ await axios.get("http://localhost:8000/api/articles").then(res=>{
    listArticles.value= res.data
    isLoading.value=false
}).catch(error=>{
    console.log(error)
})
}
onMounted(()=> {  getArticles() ;
})

const deleteArticle = async (id)=> {

        if(window.confirm("vouley vous supprimer  larticle ")) {
            await axios.delete(`http://localhost:8000/api/articles/${id}`).then(res=>{
                getArticles();
                console.log("aritcle supprime avec succes ")
            }).catch(error=>{
                console.log(error)
            })
        }

}

</script>

<style lang="scss" scoped>

</style>
