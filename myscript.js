const targetDiv1=document.getElementById("xpText");
const targetDiv2=document.getElementById("edText");
const targetDiv3=document.getElementById("skText");
const targetDiv4=document.getElementById("lgText");

const names=["xpText", "edText", "skText", "lgText"];

function show(botao){
    
    for(const n of names){
        
        if(botao.name==n){
            document.getElementById(n).style.display = 'block';
        }else{
            
            document.getElementById(n).style.display = 'none';
        }
        
    }

}

function validate(){

    const emailFormat= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(document.formulario.Titulo.value==""
    || document.formulario.Mensagem.value==""
    || document.formulario.Contato.value==""
    || document.formulario.Nome.value==""){
        alert("Preencha todos os campos do formulário")
        return false;
    }
    else{
        if(document.formulario.Contato.value.match(emailFormat)){
            alert("Mensagem enviada!")
            return true;
        }
        else{
            alert("Email inválido")
            return false;
        }
            
    }
}
