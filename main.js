import './style.css'

document.addEventListener('DOMContentLoaded', init);

function init(){
  // ...
}


// anonim / névtelen függvénnyel eseménykezelő felvétele
document.addEventListener('DOMContentLoaded', function(){
  console.log("Anonim függvény ami akkor hívódik meg amikor az oldal betöltődött");
});

//arrow function
const arrowFunction = (parameter1, parameter2, parameterN) => {
  // utasítás1
  // utasítás2
  // utasításN
  console.log("parameter1",paramter1)
  console.log("parameter2",paramter2)
  console.log("parameterN",paramterN)
  obj.logThis1();
  obj.logThis2();
}

//eseménykezelo megadas arrow functionnal (lambda function)
document.addEventListener('DOMContentLoaded', () =>{
  arrowFunction(1,2,3);
});

/*
anonim fuggvenyek eseteben, szintaxistol fuggoen maskep viselkedik a 'this' 
*/

const obj={
logThis1: function(){
  console.log(this);
},

logThis2: () => {
  console.log(this);
}
}


document.addEventListener('DOMContentLoaded', () =>{
  const gomb=document.getElementById("gomb");
  gomb.addEventListener('click', ()=> {
    alert("Hello World!");
  })
} )

//const lista=[3,7,2,11,28,1,9]

//DRY - Dont Repeat Yourself

const lista=[];

lista.push({
  vezetekNev: "Gipsz",
  keresztNev: "Jakab",
  eletkor:15
});
lista.push({
  vezetekNev: "Major",
  keresztNev: "Dominik",
  eletkor:25
});
lista.push({
  vezetekNev: "Torok",
  keresztNev: "Janos",
  eletkor:35
});
lista.push({
  vezetekNev: "Kovacs",
  keresztNev: "Istvan",
  eletkor:23
});

// Válogassuk ki a 20 évnél idősebbeket
/* filter függvény - végigmegy a listán bemenő paramétere egy függvény amit a
lista minden elemén lefuttat és amelyik elemre igaz értéket ad vissz a
függvény azt fogja új listába belerakni */

function kivalogato(szemely)
{
  return szemely.eletkor>20;
}

const idosebbMint20Anonim=lista.filter(kivalogato);

const idosebbMint20=lista.filter((szemely)=>{
  return szemely.eletkor>20
});

//arrow function eseten ha csak 1 bemeno parameter van a sima zarojel elhagyahto,
//ha csak 1 uatsitast szeretnenk futtatni a kapcsos zarojel is elhegyhato.
const idosebbMint20v2=lista.filter(szemely => szemely.eletkor>20)

console.log(idosebbMint20);
console.log(idosebbMint20v2);
console.log(idosebbMint20Anonim)

//valogasuk ki a 20-nál idosebbeket, akinek a neve Gipsz
const idosebbMint20Gipsz=
lista.filter(szemely=>szemely.eletkor >20&& szemely.vezetekNev=="Gipsz");

const idosebbMint20Gipszv2=
lista.filter(szemely=>szemely.eletkor>20)
.filter(szemely=>szemely.vezetekNev=="Gipsz");
console.log(idosebbMint20Gipsz);
console.log(idosebbMint20Gipszv2);


//C# and LinQ-> Language INtegrated Query - hasonlít az sql selectre

//Gyujtsunk ki az osszes szemely teljes nevet
const nevek=lista.map(szemely=>{
  return szemely.vezetekNev + " " + szemely.keresztNev
});
console.log(lista);
console.log(nevek);

//20-évnél idosebbek Teljes nev: (.filter majd .map)

const idosebbeket20Teljes=lista
.filter(szemely=>szemely.eletkor>20)
.map(szemely=>szemely.vezetekNev+""+szemely.keresztNev)

console.log(idosebbeket20Teljes);

//A filter,map és a hasonló fuggvenyek nem modositjak az eredeti tömböt, hanem új tömböt hoznak létre

/*
Tiszta Fügvény(Pure Function)
  -programon belul léteznek globális változok pl: document, window
  -Tiszta fuggveny nem hivatkozhat semmilyen kulso globalis dologra
  -Viselkedest a parameterei fogjak meghatarozni 
  -Nem haználhat fel,globalis valtozot, nem modositja azok erteket

Filter és map fuggvenyek akkor megbizhatoak, ha ezek tiszta fuggvenyek 
React keretrendszer kompenseik tiszta fuggvenyeknek kell lenie lásd később  
*/

//JS-ben a rendezes szamar letrehozott sort a fuggveny nem uj listat hoz letre, hanem modositja a listaban az elemek sorrendjét.

//Gyakorlo feladat: Jelenitsuk meg az összes teljes nevet a HTML oldalon 