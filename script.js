
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

    fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        mode: "*cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Api-Key": "m"
        },
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

