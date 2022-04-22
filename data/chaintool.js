
function chainSearch() {
    let input = parseFloat(document.getElementById("input").value);
    let chain = nearest(input);
    console.log(chain);

    document.getElementById("iso").innerHTML = "ISO: " + sedisData[chain].iso;
    document.getElementById("sedis").innerHTML = "Sedis: " + sedisData[chain].sedis;
    document.getElementById("jako").innerHTML = "Jako: " + sedisData[chain].jako + " mm.";
    document.getElementById("d1").innerHTML = "d1: " + sedisData[chain].d1 + " mm.";
    document.getElementById("b1").innerHTML = "b1: " + sedisData[chain].b1 + " mm.";
    document.getElementById("b4").innerHTML = "b4: " + sedisData[chain].b4 + " mm.";
    document.getElementById("d2").innerHTML = "d2: " + sedisData[chain].d2 + " mm.";
    document.getElementById("h2").innerHTML = "h2: " + sedisData[chain].h2 + " mm.";
    document.getElementById("kg").innerHTML = "Paino: " + sedisData[chain].kg + " kg/m.";

}

function nearest(sValue) {
  let comp = 100;
  let chain;
  for(i in sedisData){
    let b = sedisData[i].jako.replaceAll(",", ".");
    let a = Math.abs(sValue - b);
    //console.log(sValue);
    //console.log(b);
    //console.log(a);
    if(a < comp){
      chain = i;
      comp = a;
    }
  }
  //console.log("Chain: ", chain);
  return chain;
}
