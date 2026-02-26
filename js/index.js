"option strict";
let index = 1;
let ruota;

function cambiaImg(){
    //h3img.innerHTML = "Immagine n. " + index;
    h3img.innerHTML = `Immagine n. ${index}`;
    setTimeout(eseguiCambioImg,3000);
}

function eseguiCambioImg(){
    imgCarta.src=`img/q${index}.gif`;
    index++;
    if(index>9)
        index=1;
}

function ruotaImg(){
    ruota = setInterval(ruotaImmagini,1500);
}

function ruotaImmagini(){
    imgCarta.src = `img/q${index}.gif`;
    index++;
    if(index>9)
        index=1;
}

function stopRotazione(){
    clearInterval(ruota);
    ruota=null;
}

function apriFinestra(){
    //window.open("new.html","_blank");
    //window.open("new.html","","width=350, height=200, left=400, top=200, fullscreen=yes, menubar=no, toolbar=no, scrollbars=no, status=no");
    window.location.href = "new.html";
}