<script setup>

import { reactive } from 'vue';
 
  const estado = reactive({
      
     filtro:"todas,",
     taskTemp: "",

      tarefas:[
        {
          titulo: "estudar es6",
          finalizada:true
        },

        {
          titulo: "estudar ebac",
          finalizada:false        
        },

        {
          titulo: "jogas bola",
          finalizada:false
        }
      ]
  })

  const getTasksPending=()=>{
    return estado.tarefas.filter(tarefa => !tarefa.finalizada)
  }

  const getFinishTasks=()=>{
    return estado.tarefas.filter(tarefa => tarefa.finalizada)
  }

  const getFilterTasks=()=>{
    
    const filtro = estado.filtro;

    switch(filtro){

      case "pendentes":
        return getTasksPending();


        case "finalizadas":
          return getFinishTasks();


          default:
          return estado.tarefas;


    }
    
  };

  const newTask=()=>{

    const newtask={
        titulo:estado.taskTemp ,
        finalizada: false
    }

    estado.tarefas.push(newtask)
  }



</script>

<template>
  <div class="container">
    <header class="row p-5 mt-4 mb-4 bg-light">
      <div>
        <h1> Minhas tarefas </h1>
        <p>Você possui {{getTasksPending().length}} tarefas pendentes </p>
      </div>
    </header>
    <div class="row">

      <form  @submit.prevent="newTask" >
      <div class="row">
        <input type="text" placeholder="digite a descrição da tarefa " class="form-control"
        @change="event => estado.taskTemp= event.target.value">
     
        <button type="submit" class="btn btn-primary">Cadastrar</button>
     </div>
     
   </form>

      <div class="col-md-2">
        <select @change = "e => estado.filtro = e.target.value" class="form-control">
          <option value="todas">todas tarefas</option>
          <option value="pendentes">Pendentes</option>
          <option value="finalizadas">Finalizadas</option>
        </select>
      </div>

    </div>

    <div class="row bg-light mt-4 mb-2">
      <ul class="list-group">
        <li class="list-group-item" v-for="tarefa in getFilterTasks()">

          <input @change=" e => tarefa.finalizada = e.target.checked" :checked="tarefa.finalizada" :id="tarefa.titulo" type="checkbox">
          <label :class="{done: tarefa.finalizada}" class="ms-3 bg-light" :for="tarefa.titulo">

          {{ tarefa.titulo }}

          </label>

        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.done{
  text-decoration: line-through;
}

</style>
