function soma()
{
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let resultado = document.getElementById("resultado");
   
  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  let vr = va+vb;
   
  resultado.textContent = vr;
}
function equa()
{
  var a = document.getElementById("A");
  var b = document.getElementById("B"); 
  var c = document.getElementById("C");

  a = parseFloat(a.value);
  b = parseFloat(b.value);
  c = parseFloat(c.value);

  var result = document.getElementById("result");
  var result2 = document.getElementById("r2");
  var delta = Math.pow(b, 2) - 4 * a * c;
  
  if(delta == 0) {
      result.textContent = 'Apenas uma raiz real ' + ((-b) / (2 * a));
  }
  else if(delta < 0) {
    result.textContent = 'Nao existe raiz real';
  }
  else {
    result.textContent = "x1 = " + (((-b) + Math.pow(delta, 0.5)) / (2 * a)) + ' x2 = ' + (((-b) - Math.pow(delta, 0.5)) / (2 * a));
  }
}
function dc()
{
    let a = document.getElementById("a2");
    let b = document.getElementById("b2");
    let d = document.getElementById("r3");

    a = parseInt(a.value);
    b = parseInt(b.value);

    r3.textContent = "";

    let c = 1;
    if(b>a){
        c = b;
        b = a;
        a = c;
    }
    
    for(c=1;c<=a;c++){
        if(a%c==0 && b%c==0){
            r3.textContent+=c+", ";
        }
    }
}
