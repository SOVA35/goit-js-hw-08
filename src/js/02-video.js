import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');


const player = new Vimeo(iframe);
player.getCurrentTime().then((time) => {
   localStorage.setItem('videoplayer-current-time', time);
});


player.on('timeupdate', throttle((event) => {
  const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));


const savedTime = localStorage.getItem('videoplayer-current-time');


if (savedTime) {
  player.setCurrentTime(savedTime);
}

