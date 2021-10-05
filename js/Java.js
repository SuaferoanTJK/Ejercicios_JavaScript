/* ADIVINO */
function FT(){
  var JT = ["Mesero", "Cocinero", "Deportista", "Comediante"];
  var GL = ["Bogotá","París","Roma","Istanbul"];
  var PN = ["Luisa","Julian","Monica","Arnulfo"];
  var NC = [1,2,3,4,5];
  var X = JT[Math.floor(Math.random() * JT.length)];
  var Y = GL[Math.floor(Math.random() * GL.length)];
  var Z = PN[Math.floor(Math.random() * PN.length)];
  var N = NC[Math.floor(Math.random() * NC.length)];
  document.getElementById("FT").innerHTML = "Ud será un " + X + " en " + Y + ", casado con " + Z + " y con " + N + " hijo(s)." ;
}
/* CALCULADOR DE EDAD */
function CE(){
  var AN = document.getElementById("AñoN").value;
  var AF = document.getElementById("AñoF").value;
  var Cal = AF - AN;
  var Cal1 = Cal - 1;
  document.getElementById("CalcEdad").innerHTML = "Yo tendré " + Cal1 + " o " + Cal + " años en el año " + AF + "." ;
}
/* SUPLEMENTOS DE COMIDA */
function SC(){
  var EA = document.getElementById("EdadA").value;
  var EM = document.getElementById("EdadM").value;
  var CO = document.getElementById("Comida").value;
  var Cal = (EM - EA)*365;
  var Com = Cal*CO;
  document.getElementById("CalcComida").innerHTML = "Necesitarás " + Com + " días para que sobrevivas hasta que mueras de vejez a los " + EM + " años." ;
}
/* TEMPERATURA */
function CF(){
  var CEL = document.getElementById("Cel").value;
  var RES = ((CEL/5)*9)+32;
  document.getElementById("CalcCF").innerHTML = CEL + "°C son " + RES + "°F." ;
}
function FC(){
  var FAH = document.getElementById("Fah").value;
  var RES = ((FAH-32)*5)/9;
  document.getElementById("CalcFC").innerHTML = FAH + "°F son " + RES + "°C." ;
}
/* GEOMETRIZADOR */
function Circunferencia(){
  var RAD = document.getElementById("Radio").value;
  var PI = 3.141592;
  var CIR = (2*PI)*RAD;
  var Area = PI*(RAD*RAD);
  document.getElementById("CalcCircunferencia").innerHTML = "La circunferencia es " + CIR;
  document.getElementById("CalcArea").innerHTML = "El área es " + Area;
}
/* EDAD CACHORRO */
function DogAge(PuppyAge){
  var Edad = PuppyAge*7;
  document.getElementById("CalcPuppy").innerHTML = "Tu perro tiene " + Edad + " años en años perrunos.";
}
/* TAREA */
function squareNumber(Numero){
  var Exp = Numero*Numero;
  document.getElementById("CalcSquare").innerHTML = "El resultado del cuadrado de " + Numero + " es " + Exp;
  return Exp;
}
function halfNumber(Numero){
  var Mitad = Numero/2;
  document.getElementById("CalcHalf").innerHTML = "La mitad de " + Numero + " es " + Mitad;
  return Mitad;
}
function percentOf(Numero1, Numero2){
  var PORC = (Numero1*100)/Numero2;
  document.getElementById("CalcPercen").innerHTML = Numero1 + " es el " + PORC + "% de " + Numero2;
  return PORC;
}
function AreaC(Radio){
  var PI = 3.141592;
  var Area = PI*(Radio*Radio);
  Area = Area.toFixed(2);
  document.getElementById("CalcAreaC").innerHTML = "El área de " + Radio + " es " + Area;
  return Area;
}
function Compilatorio(Numero){
  var A = halfNumber(Numero);
  var B = squareNumber(A);
  var C = AreaC(B);
  var D = percentOf(B,C);
}
