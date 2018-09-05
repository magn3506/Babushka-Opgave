let retter;
let destination = document.querySelector(".data_container");
let retFilter = "alle";




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

            klon.querySelector("img").addEventListener("click", () => {
                    window.location.href = "single.html?id=" + ret.navn;
                });



            destination.appendChild(klon);
                }

        })
}




