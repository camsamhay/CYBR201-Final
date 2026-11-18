import * as AsciinemaPlayer from 'asciinema-player';
AsciinemaPlayer.create('../assets/dns-demo.cast', document.getElementById('dns-demo'), {
    loop: true
})