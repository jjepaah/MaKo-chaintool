
function myFunction() {
    let pituus = document.getElementById("pituus").value;
    
    let jako = parseFloat(document.getElementById("jako").value);

    document.getElementById("title").innerHTML = "Ketju on " + sedisData[nearest(jako)].iso;

    /*
    for(i in sedisData){
      let jako = parseFloat(document.getElementById("jako").value);

      let muunnos = sedisData[i].jako.replaceAll(",", ".");
      let sedisJako = parseFloat(muunnos);

      console.log(nearest(jako));

      if(jako == sedisJako){
        document.getElementById("title").innerHTML = "Ketju on " + sedisData[i].iso;
        break;
      } else {
        document.getElementById("title").innerHTML = "Sopivaa ketjua ei löytynyt";
        //console.log("Haku: ", jako, " / Vertaus: ", sedisJako);
      }
    }
    */

}

function nearest(sValue) {
  let comp = 100;
  let chain;
  for(i in sedisData){
    let b = sedisData[i].jako.replaceAll(",", ".");
    let a = Math.abs(sValue - b);
    //console.log(sedisData[i].jako);
    //console.log(a);
    if(a < comp){
      chain = i;
      comp = a;
    }
  }
  //console.log("Chain: ", chain);
  return chain;
}
