window.onload = function(){


    // ***** FETCH PLUS.HTML *****

    fetch('https://mars-weather-rems.netlify.app/rems.json') // Poner la abreviatura del pais, para españa "es", para francia "fr"...
    .then(res => res.json())
    .then(res => {
    

    // SOL-INFO
    let sol_info = document.getElementById("sol_info");

    let solActual = parseInt(`${res.weather_report.sol}`);
    let restaSI01 = parseInt(`${res.weather_report.sol}`) - 1;
    let restaSI02 = parseInt(`${res.weather_report.sol}`) - 2;
    let sumaSI01 = parseInt(`${res.weather_report.sol}`) + 1;
    let sumaSI02 = parseInt(`${res.weather_report.sol}`) + 2;
    let itemSolInfo=
         `<div class="puntos">...</div>
         <div class="sol_02">${restaSI02}</div>
         <div class="sol_01">${restaSI01}</div>
         <div class="sol_actual">${solActual}</div>
         <div class="sol_01">${sumaSI01}</div>
         <div class="sol_02">${sumaSI02}</div>
         <div class="puntos">...</div>`;

         sol_info.innerHTML += itemSolInfo;


    // Longitud al Sol
    let longSol = document.getElementById("grados");
    
     let itemLongSol=
          `${res.weather_report.magnitudes[0].ls}º`;
 
    longSol.innerHTML += itemLongSol;
    });
 // FOTO MARTE ***************************

 fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY') // Poner la abreviatura del pais, para españa "es", para francia "fr"...
 .then(res => res.json())
 .then(res => {

 
 let imagenMarte = document.getElementById("imagen_marte");
 let aleatorio = Math.floor((Math.random() * (23 - 0 + 1)) + 0);
 console.log(aleatorio);
 let imgMarte=
      `<img src="${res.photos[aleatorio].img_src}" alt="">`;

      imagenMarte.innerHTML += imgMarte;
  });

  const martPicButton = () => {

       let buttonPic = document.querySelector('.fa-image')
       let buttonClosePic = document.querySelector('.close_pic_mart');
       let pic = document.querySelector('.plus_04');
   
       let picMartOn = false;
   
       let picOn = () => {
            pic.classList.add('visibility');
            picMartOn = true;
       };
   
       let picOff = () => {
           pic.classList.remove('visibility');
           picMartOn = false;
       };
   
       buttonPic.addEventListener('click', () => {
           if (!picMartOn) {
            picOn();
           }
       });
       buttonClosePic.addEventListener('click', () => {
            if (picMartOn = true) {
            picOff();
            }
        });
   }
   martPicButton();
}

