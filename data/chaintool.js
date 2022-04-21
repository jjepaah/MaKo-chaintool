
function myFunction() {
    let pituus = document.getElementById("pituus").value;
    

    

    
    for(i in sedisData){
      let jako = parseFloat(document.getElementById("jako").value);

      let muunnos = sedisData[i].jako.replaceAll(",", ".");
      let sedisJako = parseFloat(muunnos);

      

      if(jako == sedisJako){
        document.getElementById("title").innerHTML = "Ketju on " + sedisData[i].iso;
        break;
      } else {
        document.getElementById("title").innerHTML = "Sopivaa ketjua ei löytynyt";
        console.log("Haku: ", jako, " / Vertaus: ", sedisJako);
      }
    }

}
