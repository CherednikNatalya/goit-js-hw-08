
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const videoEl = document.querySelector('#vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const CurrentTime = localStorage.getItem(LOCALSTORAGE_KEY)

const player = new Player(videoEl);

const onPlayData = function (data) {
  save(LOCALSTORAGE_KEY, data);
}

player.on('timeupdate', function(data) {
    console.log(data.seconds)
localstorage.setItem()
});

player.setCurrentTime(30.456)


player.setCurrentTime(CurrentTime).then(function(seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
  }
});



// const initPage = load(LOCALSTORAGE_KEY);
// player.on('timeupdate', throttle(onPlayData, 1000));

// if (initPage) {
//   const { seconds } = initPage;
//   player.setCurrentTime(seconds);
// }