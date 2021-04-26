window.onload = function(){

    
    function renderGuardados(){

        let guardados;
        /** Crear / conectar bbdd */
        let db = new PouchDB('guardado');


        let lista = document.querySelector("#guardados");
        lista.innerHTML = "";
        //Retrieving all the documents in PouchDB
        db.allDocs({include_docs: true}, function(err, docs) {
            if (err) {
            return console.log(err);
            } else {                
               guardados = docs.rows;
               guardados.forEach(element => {
                    let guardado = `
               <div class="content_dowland">
                    <div class="day_min_max">
                        <div class="day">${element.doc.dayId}</div>
                        <div class="min_max">${element.doc.temp}</div>
                    </div>
                    <div class="temp_icon">
                        <div class="temp">${element.doc.media}</div>
                        <div class="icon">${element.doc.icon}</div>
                    </div>
                    <div class="trash"><span class="fa fa-minus-circle"></span></div>
                </div>`;
                    lista.innerHTML += guardado;
                    console.log(element);


                });
                
            }
        });
    }
    renderGuardados();

    let borrarElements = document.querySelectorAll(`.trash`);

    borrarElements.forEach( borrarElement => {
                        
    borrarElement.addEventListener(`click`, () =>{

        function deleteInfo(borrarElement) {

            db.remove((borrarElement.parentNode.innerText), (borrarElement.parentNode.innerText), function(err) {
                if (err) {
                    return console.log(err);
                 } else {
                    console.log("Document deleted successfully");
                    renderGuardados();
                 }
            });
        };
        deleteInfo(borrarElement);
    });

    })


}

