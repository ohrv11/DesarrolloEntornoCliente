
let value = document.querySelector('#value');
let count = 0;

// function addColor(){
//     if(count > 0){
//         value.style.color = "green";
//     } 
//     else if(count < 0){
//         value.style.color = "red";
//     } 
//     else if(count === 0){
//         value.style.color = "blue";
//     }
// }

document.querySelector('.decrease').addEventListener("click", () => {
    
    count--;
    value.textContent = count;
    console.log("boton decrease pulsado");
    addColor();

} );

document.querySelector('.reset').addEventListener("click", () => {
    
    count = 0;
    value.textContent = count;
    console.log("boton reset pulsado");
    addColor();
} );

document.querySelector('.increase').addEventListener("click", () => {
   
    count++;
    value.textContent = count;
    console.log("boton  pulsado");
    addColor();
} );

let intervalo = setInterval(function() {
    if(count > 0){
        value.style.color = "green";
    } 
    else if(count < 0){
        value.style.color = "red";
    } 
    else if(count === 0){
        value.style.color = "darkblue";
    }

  }, 200);

