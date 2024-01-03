<template>
    <div v-if="isLoading">
        <h2> Loading .... </h2>
    </div>
    <div v-else class="py-6">
        <table class="table table-striped shadow">
            <thead>
            <tr>
            <th> Image </th>
            <th> Reference  </th>
            <th> designation </th>
            <th> price </th>
            <th> quantile </th>
            <th> Marque  </th>
            <th> Delete </th>
            </tr></thead>
            <tbody>
            <tr v-for ="art in listArticles" :key="art.id">
                <td>  <img :src="art.imageart"  width="80"   height="80"  alt=""/>  </td>
                <td> {{art.reference}}</td>
                <td> {{ art.designation}}</td>
                <td> {{ art.qtestock}}</td>
                <td> {{ art.prix}}</td>
                <td > <button class = "btn btn-warning" > <i class ="fa-solid fa-pen-to-square"> </i>  Update </button></td>
                <td > <button class = "btn btn-danger" > <i class ="fa-solid fa-trash" @click="deleteArticle(art.id)"> </i>  Delete </button></td>




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

const deleteArticle = id => async (id)=> {
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
