
let menu = document.querySelector(".menu");

function abreFechaMenu() {
    if(menu.classList.contains("menu-fechado")){
        menu.classList.remove("menu-fechado");
    }
    else{
        menu.classList.add("menu-fechado");
    }
}

const enviarEmail = (event) => {
    // receber os inputs
    let fieldName = document.getElementById("field-name").value;
    let fieldEmail = document.getElementById("field-email").value;
    let fieldDesc = document.getElementById("field-description").value;


    let body = {
        sender:{ 
            email: "vanessabyorksp@gmail.com",
            name: "GamificaTudo",
        },
        subject: "Bem vindo(a) ao GamificaTudo",
        templateId: 1,
        params: {
            nomeEmpresa: "GamificaTudo",
            nome: fieldName,
            solicitacao: fieldDesc
        },
        messageVersions: [
            {
                to: [
                    {
                        email: fieldEmail,
                        name: fieldName
                    }
                ]  
            }
        ]
    }
    console.log(body)

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    .then(resposta => {
        //document.querySelector("#form form").reset();
        console.log(resposta);
        alert("Solicitação enviada com sucesso!!! ✌️(●'◡'●)");

    })

    .catch(erro => {
        console.log(erro);
        
        alert("Deu erradooo! ＞﹏＜");
    })

    event.preventDefault();
}

const solicitarOrcamento = (event) => {
    let fieldName = document.getElementById("field-name").value;
    let fieldEmail = document.getElementById("field-email").value;
    let fieldDesc = document.getElementById("field-description").value;

    let dataform = {
        name: fieldName,
        email: fieldEmail,
        descricao: fieldDesc
    }

    console.log(dataForm)

    fetch( "http://localhost:3000/solicitacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataform)
    }) 

    .then( resposta => {
        console.log(resposta);

        document.querySelector("#form form").reset();

        alert("Sua solicitação a API foi um sucesso (●'◡'●)");
    })

    .catch( erro => {
        console.log(erro);
        alert("Algo deu erradoooo (╯▔皿▔)╯")
    })

    event.preventDefault();
}