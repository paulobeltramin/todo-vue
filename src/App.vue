<script setup>

import { reactive } from 'vue';
import Header from "./components/Header.vue";
import Forms from "./components/Forms.vue";
import Lists from "./components/Lists.vue";

const estado = reactive({

  filtro: "todas,",
  taskTemp: "",

  tarefas: [
    {
      titulo: "estudas java",
      finalizada: false
    },
  ]
})

const getTasksPending = () => {
  return estado.tarefas.filter(tarefa => !tarefa.finalizada)
}

const getFinishTasks = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizada)
}

const getFilterTasks = () => {

  const filtro = estado.filtro;

  switch (filtro) {

    case "pendentes":
      return getTasksPending();


    case "finalizadas":
      return getFinishTasks();


    default:
      return estado.tarefas;


  }

};

const newTask = () => {

  const newtask = {
    titulo: estado.taskTemp,
    finalizada: false
  }

  estado.tarefas.push(newtask)
}



</script>

<template>
  <div class="container">
    <Header :tarefasPendentes="getTasksPending().length" />
    <Forms :newTask="newTask" :taskTemp="event => estado.taskTemp = event.target.value"
      :filtro="event => estado.filtro = event.target.value" />
    <Lists :tarefas="getFilterTasks()" />
  </div>
</template>
