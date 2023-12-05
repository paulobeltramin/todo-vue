<script setup>
const props = defineProps(["tarefas"])

</script>

<template>
    <div class="row bg-light mt-4 mb-2">

        <ul class="list-group">

            <li class="list-group-item" v-for="tarefa in props.tarefas">

                <input @change="e => tarefa.finalizada = e.target.checked" :checked="tarefa.finalizada" :id="tarefa.titulo"
                    type="checkbox">
                <label :class="{ done: tarefa.finalizada }" class="ms-3 bg-light" :for="tarefa.titulo">

                    {{ tarefa.titulo }}

                </label>

            </li>
        </ul>

    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>