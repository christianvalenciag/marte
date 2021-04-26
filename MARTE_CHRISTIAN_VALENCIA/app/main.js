window.onload = function(){
 
    // ***** FETCH INDEX.HTML *****

    fetch('https://mars-weather-rems.netlify.app/rems.json') // Poner la abreviatura del pais, para españa "es", para francia "fr"...
    .then(res => res.json())
    .then(res => {
    
        console.log(`${res.weather_report.sol}`);

    // SOL
    let sol_actual = document.getElementById("sol_actual");

    let item=
         `${res.weather_report.sol}`;

    sol_actual.innerHTML += item;

    // DIA TERRESTRE
    let today = document.getElementById("today"); 
    
    let itemTwo=
         `${res.weather_report.terrestrial_date}`;

    today.innerHTML += itemTwo;

    //PRESIÓN
    let press = document.getElementById("unid_press"); 
    console.log(`${res.weather_report.magnitudes[0].pressure}`);
    
    let itemThree=
         `${res.weather_report.magnitudes[0].pressure} mbar`;

    press.innerHTML += itemThree;

    //Temp Superficial
    let tempSup = document.getElementById("temp_sup"); 
    
    let itemFour=
         `Máx.${res.weather_report.magnitudes[0].max_gts_temp}º Min.${res.weather_report.magnitudes[0].min_gts_temp}º`;

    tempSup.innerHTML += itemFour;

     //Temp Atmosferica
     let tempAtm = document.getElementById("temp_at"); 
    
     let itemFive=
          `Máx.${res.weather_report.magnitudes[0].max_temp}º Min.${res.weather_report.magnitudes[0].min_temp}º`;
 
    tempAtm.innerHTML += itemFive;

     //Tiempo-Iconos
     let opacAt = document.getElementById("opacity_atm"); 
    
    if (`${res.weather_report.magnitudes[0].atmo_opacity}` == `Sunny`){
        let itemSix= `<span class="fa fa-sun"></span>`
        opacAt.innerHTML += itemSix;
     }if (`${res.weather_report.magnitudes[0].atmo_opacity}` == `Cloudy`){
        let itemSix= `<span class="fa fa-cloud"></span>`
        opacAt.innerHTML += itemSix;
     }if (`${res.weather_report.magnitudes[0].atmo_opacity}` == `Raining`){
        let itemSix= `<span class="fa fa-cloud-rain"></span>`
        opacAt.innerHTML += itemSix;
     }if (`${res.weather_report.magnitudes[0].atmo_opacity}` == `Snowing`){
        let itemSix= `<span class="fa fa-snowflake"></span>`
        opacAt.innerHTML += itemSix;
     };
 
    //Otros soles
    let solAnterior01 = document.getElementById("soles");
    
    let resta01 = parseInt(`${res.weather_report.sol}`) - 1;
    console.log(resta01);
    let resta02 = parseInt(`${res.weather_report.sol}`) - 2;
    let resta03 = parseInt(`${res.weather_report.sol}`) - 3;
    let resta04 = parseInt(`${res.weather_report.sol}`) - 4;
    let resta05 = parseInt(`${res.weather_report.sol}`) - 5;
    let resta06 = parseInt(`${res.weather_report.sol}`) - 6;
    let resta07 = parseInt(`${res.weather_report.sol}`) - 7;
    let itemSolAnterior01 =
     `<div class="sol_tittle">Sol</div>
     <div class="sol">${resta01}</div>
     <div class="sol">${resta02}</div>
     <div class="sol">${resta03}</div>
     <div class="sol">${resta04}</div>
     <div class="sol">${resta05}</div>
     <div class="sol">${resta06}</div>
     <div class="sol">${resta07}</div>`;

     solAnterior01.innerHTML += itemSolAnterior01;

    // TEMPERATURA MEDIA
    let tempMedia = document.getElementById("temp_media");
    
    let mediaT = parseInt(`${res.weather_report.magnitudes[0].max_temp}`) + parseInt(`${res.weather_report.magnitudes[0].min_temp}`);
    let mediaT2 = mediaT /2;
    console.log(resta01);
    let itemTempMedia =
     `${mediaT2}º`;

     tempMedia.innerHTML += itemTempMedia;
     
    });
    
     //*************************************************************
     
     //   **** GUARDADOS *****

     function guardadosDeTiempo(){
         
          let guardados;
          console.log(guardados);
          /** Crear / conectar bbdd */
          let db = new PouchDB('guardado');
          
          /** Escuechar eventos de los botones */
          let btnAdd = document.querySelector("#guardar_plus");
          btnAdd.addEventListener("click", anhadirGuardados, false);

      
          /** Función para añadir usuarios */
          function anhadirGuardados(){
              let today = document.querySelector("#today");
              let at = document.querySelector("#temp_at");
              let media = document.querySelector("#temp_media");
              let atm = document.querySelector("#opacity_atm");
              
               let siguienteGuardado = Math.floor(Math.random() * 10000000000000);
               
               // Añadir registro a la BBDD
               let doc = {
                    "_id": `guardado${siguienteGuardado}`,
                    "dayId": today.innerHTML,
                    "temp": at.innerHTML,
                    "media": media.innerHTML,
                    "icon": atm.innerHTML
               };            
               db.put(doc);

          }

          const buttonDowland = () => {

               let buttonDow = document.querySelector('.guardar')
          
               buttonDow.addEventListener('click', () => {
                    buttonDow.classList.add('guardado');
               });
           }
           buttonDowland();

     }
     guardadosDeTiempo();


    

    
    
}
