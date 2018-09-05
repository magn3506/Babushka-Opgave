let retter;
let urlParams = new URLSearchParams(window.location.search);
let navn = urlParams.get("id");

console.log(window.location.search);
console.log(navn);


document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson(){



        let myJson = await fetch("json/menu.json");
            retter = await myJson.json();
            visRetter();
}



function visRetter(){
      console.log("henterJson");
let destination = document.querySelector(".data_container");


        retter.forEach (ret=>{


            if(ret.navn == navn){


            destination.querySelector("img").src = "imgs/large/" + ret.billede + ".jpg";

            destination.querySelector("h2").textContent = ret.navn;
            destination.querySelector(".pris").textContent = ret.pris + ".-";


                if(ret.langbeskrivelse == null ){
                     destination.querySelector(".kortBeskrivelse").textContent = ret.kortbeskrivelse;

                   }else{  destination.querySelector(".langBeskrivelse").textContent = ret.langbeskrivelse; };





                }

        })
}


document.querySelector(".tilbage_knap").addEventListener("click", function(){

    window.location.href = "index.html"
;

})



