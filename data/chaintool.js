


function myFunction() {
    //document.getElementById("demo").innerHTML = "Hello!";
    fetch("data/sedis-delta-data.json")
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data));

  }
