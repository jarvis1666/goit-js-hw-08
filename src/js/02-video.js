import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
let time;

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', `"${event.seconds}"`);
  }, 1100)
);

time = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(time)
  .then(function (seconds) {
    seconds = time;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
