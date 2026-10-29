const relogio = document.getElementById("relogio");
const milissegundos = document.getElementById("milissegundos");
const dataTexto = document.getElementById("data");
const saudacao = document.getElementById("saudacao");
const progresso = document.getElementById("progresso");
const temaBtn = document.getElementById("temaBtn");

function atualizar() {

    const agora = new Date();

    let hora = agora.getHours().toString().padStart(2,"0");
    let minuto = agora.getMinutes().toString().padStart(2,"0");
    let segundo = agora.getSeconds().toString().padStart(2,"0");
    let mili = agora.getMilliseconds().toString().padStart(3,"0");

    relogio.innerHTML = `${hora}:${minuto}:${segundo}`;
    milissegundos.innerHTML = mili;

    dataTexto.innerHTML = agora.toLocaleDateString(
        "pt-BR",
        {
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        }
    );

    const h = agora.getHours();

    if(h < 12){
        saudacao.innerHTML = "☀️ Bom Dia";
    }
    else if(h < 18){
        saudacao.innerHTML = "🌤 Boa Tarde";
    }
    else{
        saudacao.innerHTML = "🌙 Boa Noite";
    }

    progresso.style.width = (agora.getSeconds()/60)*100+"%";
}

setInterval(atualizar,10);

temaBtn.addEventListener("click",()=>{

    document.body.classList.toggle("claro");

    if(document.body.classList.contains("claro")){
        temaBtn.innerHTML="☀️";
    }else{
        temaBtn.innerHTML="🌙";
    }

});

atualizar();