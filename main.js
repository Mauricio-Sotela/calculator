
const boton = document.querySelectorAll(".num")
 const input = document.querySelector(".input")
  const operador = document.querySelectorAll(".operador");
    


for (let i = 0; i < boton.length; i++) {
  document.onkeypress = function(event) {
    let teclas = event.charCode; 
    for (let j = 0;j <= 10;j++) {
      if (teclas === 48 +j) {
        input.innerHTML +=j;
      }
    }
    switch (teclas) {
      case 42:
        input.innerHTML += "*";
        break;
      case 43:
        input.innerHTML += "+";
        break;
      case 45:
        input.innerHTML += "-";
        break;
      case 46:
        input.innerHTML += ".";
        break;
      case 47:
        input.innerHTML += "/";
        break;
      case 61:
      case 13:
        let operacion = input.innerHTML;
        if (operacion) {
          try {
            input.innerHTML = eval(operacion);
          } catch (j) {
            alert("Introduce Valid Number");
          }
        }
        break;
      case 67:
      case 99:
        case 8:
        input.innerHTML = "";
        break;
      default:
      
        break;
    }
  };
  boton[i].addEventListener("click", function() {
    let btnVal = this.innerHTML,
      inputVal = input.innerHTML;
   

   
    switch (btnVal) {
      case "CE":
        input.innerHTML = "";
        break;
      case "=":
     
        let operacion = inputVal;

        if (operacion) {
          try {
            input.innerHTML = eval(operacion);
          } catch (j) {
            alert("Introduce Valid Number");
          }
        }
        break;
      default:
        input.innerHTML += btnVal;
        break;
    }
  });
}

for (let i =1 ; i < c.length; i++) {
 
  c[i]["lastElementChild"].click()
}