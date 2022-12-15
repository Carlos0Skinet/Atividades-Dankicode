function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //// var hora = 8
    msg.innerHTML = `Agora são ${hora} horas`
    if( hora >= 0 && hora < 12 ) {
        img.src = 'manhã.jpg'
        // BOM DIA!
        document.body.style.backgroundColor = 'orange'
    } else if ( hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        // BOA TARDE!
    } else {
        img.src = 'noite.jpg'
        // BOA NOITE!
        document.body.style.backgroundColor = 'black'
      }
      
}
