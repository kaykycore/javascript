function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#99BBCE'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#CE7724'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#141B20'
    }
}