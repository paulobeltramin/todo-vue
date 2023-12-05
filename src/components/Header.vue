<script setup>
const props = defineProps(["tarefasPendentes"])

</script>

<template>
    <header class="row p-5 mt-4 mb-4 bg-light">
        <div>
            <h1> Minhas tarefas </h1>
            <p>Você possui {{ props.tarefasPendentes }} tarefas pendentes </p>
        </div>
    </header>
</template>