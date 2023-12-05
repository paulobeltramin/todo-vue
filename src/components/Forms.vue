<script setup>

const props = defineProps(["newTask", "taskTemp", "filtro"])

</script>

<template>
    <div class="row">

        <form @submit.prevent="props.newTask">
            <div class="row">
                <input type="text" placeholder="digite a descrição da tarefa " class="form-control"
                    @change="props.taskTemp">

                <button type="submit" class="btn btn-primary mt-4">Cadastrar</button>
            </div>

        </form>

        <div class="col-md-2">
            <select @change="props.filtro" class="form-control mt-4 ">
                <option value="todas">todas tarefas</option>
                <option value="pendentes">Pendentes</option>
                <option value="finalizadas">Finalizadas</option>
            </select>
        </div>

    </div>
</template>