function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/static/og-image.png";
            break;
        case 2:
            imagen.src = "https://a.espncdn.com/photo/2022/1022/r1079702_1296x518_5-2.jpg";
            break;
        case 3:
            imagen.src = "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-05/KroosCasemiroModric%20-%20cropped.jpg?itok=ej3GCFAo";
            break;
        case 4:
            imagen.src = "https://editorial.uefa.com/resources/0275-15415832f216-7c7b8180589c-1000/16x9_uclf_winner_rm_noconfetti.jpeg";
            break;
        case 5:
            imagen.src = "https://phantom-marca.unidadeditorial.es/60dc92db90d63ef189764e6a6d436a99/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/21/16505570751332.jpg";
            break;
        default:
            break;
    }
}