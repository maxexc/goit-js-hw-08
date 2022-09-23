import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const fixedTime = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem(fixedTime));

function currentTime(data) {
  localStorage.setItem(fixedTime, data.seconds);
  //   console.log('fixedTime:', localStorage.getItem(fixedTime));
}
