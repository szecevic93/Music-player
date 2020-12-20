const pesme = [
    'creativeminds.mp3',
    'funnysong.mp3',
    'happyrock.mp3',
    'jazzfrenchy.mp3',
    'summer.mp3',
    'ukulele.mp3'
]

const kreirajListuPesama = () => {
    const lista = document.createElement('ol')
    
    for(let i = 0;i < pesme.length;i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(pesme[i]))
        
        lista.appendChild(item)
        
    }
    
    return lista
    
}

document.getElementById('listaPesama').appendChild(kreirajListuPesama())

listaPesama.onclick = (e) => {
    //console.log(e)
    const kliknutaPesma = e.target
    const source = document.getElementById('source')
    source.src = 'songs/' + kliknutaPesma.innerText
    //console.log(kliknutaPesma.innerText)
    player.load()
    player.play()
    
    document.getElementById('trenutnoSvira').innerText = 'Trenutno svira pesme: '
    document.getElementById('trenutnaPesma').innerText = kliknutaPesma.innerText
    
}

const pokreniPesmu = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauzirajPesmu = () => {
    player.pause()
}

const klizac = document.getElementById('volumeKlizac')
klizac.oninput = (e) => {
    //console.log(e)
    const volume = e.target.value
    //console.log(volume)
    player.volume = volume
}


const updateProgress = () => {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progressBar')
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}





