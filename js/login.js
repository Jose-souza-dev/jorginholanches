
        function logar() {
            // Captura os valores dos campos
            const usuario = document.getElementById("adm").value;
            const senha = document.getElementById("pass").value;

            // Validação básica
            if (usuario === "" || senha === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Simula validação (substitua pelo seu processo real de autenticação)
            if (usuario === "admin" && senha === "j2l2") {
                window.location.href ="plano.html";
                // Redirecionar ou outra ação
                console.log("Usuário autenticado com sucesso.");
            } else {
                alert("Usuário ou senha inválidos.");
                console.log("Falha na autenticação.");
            }
        }