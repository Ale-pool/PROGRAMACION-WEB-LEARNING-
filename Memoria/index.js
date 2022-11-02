/* para empezar tenemos generar el arreglo
de numeros aleatorios*/

/*como lo podemos desordenar 
  para crear un arreglo ordenado utilizamos el metodo
  arreglo.sort()

  para ello es necesario evaluar el arreglo con 
  la clase math, en este caso Math.ramdom()
*/

// inicializamos la variable

let targetasDestapadas =0;
let targeta1 = null;
let targeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timerInicial = 30;
let timer = 30;
let tiempoRegresivoId = null;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo =  document.getElementById('t-restante');
// genera numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return Math.random()-0.5});
console.log(numeros);

// funciones

function contarTiempo()
{
  setInterval(()=>{
     timer--;
     mostrarTiempo.innerHTML  = `Tiempo: ${timer} segundos`;
     if(timer ==0)
     {
      clearInterval(tiempoRegresivoId);
      bloquearTargetas();
     }
  },1000);
}

function bloquearTargetas()
{
  let targetaBloqueada = document.getElementById(i);
  targetaBloqueada.innerHTML = `<img src="../juegos/${numeros[i]}.PNG" alt="">`;   // `<img src="../juegos/${numeros[i]}.PNG" alt="">`
  targetaBloqueada.disabled = true;
}
// funcion principal

function destapar(id)
{

  if(temporizador == false)
  {
    contarTiempo();
    temporizador = true;
  }
    targetasDestapadas++;
    console.log(targetasDestapadas);

    if(targetasDestapadas == 1)  // mostrar el primer numero
    {
      targeta1 = document.getElementById(id);
      primerResultado = numeros[id];
      targeta1.innerHTML =  `<img src="./juegos/${primerResultado}.png" alt="">`; // `<img src="../juegos/${primerResultado}.PNG" alt="">`

      // desabilita el primer boton
      targeta1.disabled = true;
    }else if(targetasDestapadas ==2)
    {
      // muestra el segundo numero
      targeta2 = document.getElementById(id);
      segundoResultado = numeros[id];
      targeta2.innerHTML = `<img src="../juegos/${segundoResultado}.PNG" alt="">`;   // `<img src="../juegos/${primerResultado}.PNG" alt="">`//


      targeta2.disabled = true;

      // incremento los movimientos

      movimientos++;
      mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

      if(primerResultado == segundoResultado)
      {
           targetasDestapadas = 0;

           aciertos++;
           mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

           if(aciertos == 8){
            clearInterval(tiempoRegresivoId);
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos} `;
            mostrarTiempo.innerHTML = `Muy bien lo lograste en : ${timerInicial - timer}segundos `;
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
           }

      }else{
           // muestre momentaneamente los diferentes valores
           setTimeout(()=>{
            targeta1.innerHTML = ' ';
            targeta2.innerHTML = ' ';
            targeta1.disabled = false;
            targeta2.disabled = false;
            targetasDestapadas = 0;
           },800)
      }

    }


}

// fragment mejora la experiencia del usuario
