function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-criança-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulta-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idosa-f.jpg')
            }
        }
        res.style.textAlingn = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }    
}