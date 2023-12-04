import { reactive } from 'vue';

  const estado = reactive({
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