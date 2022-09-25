import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const fixedTime = localStorage.getItem('videoplayerCurrentTime');
// localStorage.fixedTime = 1;

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

if (fixedTime) {
  player.setCurrentTime(fixedTime);
}

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(data) {
  localStorage.setItem('videoplayerCurrentTime', data.seconds);
  // console.log('fixedTime:', localStorage.getItem(fixedTime));
}
