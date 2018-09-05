let retter;
let destination = document.querySelector(".data_container");
let retFilter = "alle";
let modal = document.querySelector("#modal");



document.addEventListener("DOMContentLoaded", hentJson);



async function hentJson(){



        let myJson = await fetch("json/menu.json");
            retter = await myJson.json();
            visRetter();
}

  document.querySelectorAll(".menu_item").forEach(knap =>{
           knap.addEventListener("click", filtrering);

       });

    function filtrering(){

           destination.textContent = "";
           retFilter=this.getAttribute("data-kategori");
           visRetter();
       }


function visRetter(){
      console.log("henterJson");


    let template = document.querySelector(".ret_template");


        retter.forEach (ret=>{

            if(ret.kategori == retFilter || retFilter == "alle"){


            let klon = template.cloneNode(true).content;

            klon.querySelector("h2").textContent = ret.navn;
            klon.querySelector("img").src = "imgs/large/" + ret.billede + ".jpg";
            klon.querySelector(".kortBeskrivelse").textContent = ret.kortbeskrivelse;
            klon.querySelector(".pris").textContent = ret.pris + ".-";

            document.querySelector("h1").textContent = retFilter +":";

                //modal//

             klon.querySelector("img").addEventListener("click", () =>{
                   visModal(ret);
               })

            destination.appendChild(klon);
                }

        })
}


function visModal(ret){
    console.log("vis modal");


    modal.classList.add("vis");

    modal.querySelector(".modal_navn").textContent = ret.navn;
    modal.querySelector("img").src = "imgs/large/" + ret.billede + ".jpg";
    modal.querySelector("img").alt = "Dette er et billede af" + " " + ret.billede;

    modal.querySelector(".modal_langbeskrivelse").textContent = ret.langbeskrivelse;

    modal.querySelector("button").addEventListener("click", skjulModal);


}

function skjulModal(retter){
     modal.classList.remove("vis");
    console.log("remove vis")

}
