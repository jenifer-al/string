
// Buscamos las id

const input = document.getElementById("uno");
const cajaResultado = document.getElementById("resultado");
  


function mostrarstring(){
// 1. Obtener número input y lo paso a entero
    let nuInput = input.value;

// Validación:Si no se ha introducido nada, hay que avisar

if(nuInput.trim() === "")  {
        cajaResultado.innerHTML = "Por favor, introduce un texto válido.";
        return;
    }
    // 2. Variable vacía donde iremos metiendo las letras al revés
    let textoAlReves = "";
    
    // 3. El bucle FOR marcha atrás:
    // - Empezamos en la última posición: nuInput.length - 1
    // - Paramos al llegar a la posición 0: i >= 0
    // - Vamos restando uno en cada vuelta: i--

    for (let i = nuInput.length - 1; i >= 0; i--) {

     // Vamos acumulando la letra de la posición 'i' en nuestra variable
        textoAlReves = textoAlReves + nuInput[i];
    }   
   


   

    // 4. Mostramos el resultado final. 
    // Usamos .join(", ") para que los números del array salgan bonitos separados por comas
    cajaResultado.innerHTML = `Texto al revés: <strong>${textoAlReves}</strong>`;  
}


    



    
   



  

   





