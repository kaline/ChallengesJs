var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro:"Centro",
    cidade:"São Paulo",
    uf:"SP"   
};

console.log("O usuário mora em" + endereco.cidade + "/" +endereco.uf +", no bairro"  +
endereco.bairro +" na "  + endereco.rua + " com n° " + endereco.numero);

function pares(x, y){
   for(var i = x; i < y; i+=2){
       console.log(i);
   }
}
pares(32, 321)

function temHabilidade(skills){
    if(skills = "Javascript"){
        console.log(true)
        return true;
    }else{
        return false;
    }
}
var skills = ["Javascript", "ReactJS","React Native"];
temHabilidade(skills);


function experiencia(anos){
   if(anos < 1){
       console.log('Iniciante');
   }else if(anos > 1 && anos < 3){
       console.log('Intermediario');
   }else if(anos > 3 && anos < 6){
        console.log('Avançado');
   }else{
       console.log('Jedi Master')
   }

}
var anosEstudo = 7;
experiencia(anosEstudo);


var usuarios = [
    {
        nome:"Kaline",
        habilidades:["HTML", "CSS", "JS"]
    },
    {
        nome:"Pinguim",
        habilidades:["Swift", "Mobile", "C#"]
    },

];

function UsuariosExperiencia(){
    
    
    console.log( usuarios[0].nome +" possui as seguintes habilidades:"+ usuarios[0].habilidades)
    console.log( usuarios[1].nome+" possui as seguintes habilidades:"+ usuarios[1].habilidades);
}

UsuariosExperiencia(usuarios);