    function adicionarTarefa(){
        const Tarefa = document.getElementById("inputTarefa");
        let tarefaOne = inputTarefa.value.trim();

        let tarefa = inputTarefa.value;
        document.getElementById("message").textContent = tarefa;
        let messageOne = document.getElementById("message");
        
        inputTarefa.value = "";

        if(tarefa == ""){
            let messageError = "Digite uma tarefa para adicionar";
            messageOne.textContent = messageError;

        }else{
            let message = "Tarefa adicionada com sucesso";
            messageOne.textContent = message;

            const listarTarefa = document.getElementById("listarTarefa");
            let novaTarefa =  document.createElement("li");
            novaTarefa.textContent = tarefa;
            listarTarefa.appendChild(novaTarefa);
        }

        inputTarefa.value = "";

    }