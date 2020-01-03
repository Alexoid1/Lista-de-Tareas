
   
    //variables

let score=0;
var puntaje=document.getElementById("puntaje");
var btn=document.getElementById("btn-agregar");
var tareainput=document.getElementById("tareaInput");
var tarea=document.querySelector('.key');



    
   



    //funciones
function comprobarinput(){
    tareainput.className="";
    tareainput.setAttribute("placeholder","Escriba la tarea");
}


function submit(e){
    // agregamos las input en local storage
    var titulo=document.getElementById("tareaInput").value;
    if(titulo===""){
        //comprobamos si no esta nada escrito
        tareainput.setAttribute("placeholder", "Agrega una tarea valida !");
        tareainput.className="error";
        return false
    }
    
    const task={
        titulo:titulo
    };
   
    if(localStorage.getItem("tasks")===null){
        let tasks=[];
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        tareainput.value="";
        
    }else{
        let tasks=JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        tareainput.value="";
        
    };
    obtener();
    
    e.preventDefault();
    
    
};  
function obtener(){
    let lista= document.getElementById("lista");
    let tasks=JSON.parse(localStorage.getItem("tasks"));
    
    
    
    
    let score=localStorage.getItem("score");
    
    puntaje.innerHTML=score;
    lista.innerHTML="";
    
    
    
    for(let i=0;i<tasks.length;i++){
        let titulo=tasks[i].titulo;
        
        lista.innerHTML+=`<li>
        <a href="#" onclick="eliminarTarea('${titulo}')">${titulo}</a>
        </li>`;
    }
};





function eliminarTarea(titulo){
    let tasks=JSON.parse(localStorage.getItem("tasks"));
    let score=JSON.parse(localStorage.getItem("score"));
    
    
    
    for(let i=0; i<tasks.length;i++){
        if(tasks[i].titulo==titulo){
            tasks.splice(i,1);
            score+=50;
            puntaje.innerHTML=score;
            
            
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("score", score);
    
    obtener();
};



//eventos

btn.addEventListener("click", submit);
tarea.addEventListener('keydown', function(e){
    if(e.keyCode===13){
        submit();
    }
});
tareainput.addEventListener("click", comprobarinpu);

obtener();








