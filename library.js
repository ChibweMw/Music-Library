function library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.tracks = [],
  this.playLists = []
}

function playlist(name) {
  this.name = name,
  this.tracks = []
}

function track (title, duration, rating) {
  this.title = title,
  this.duration = duration,
  this.rating = rating
}

library.prototype.addTrack = function (name, time, rating) {
  let newlyAddedTrack = new track(name, time, rating);
  this.tracks.push(newlyAddedTrack);
}

library.prototype.addPlaylist = function (newPlayList) {
  let newlyAddedPlaylist;
    if (typeof newPlayList === 'string') {
      const playListName = newPlayList;
      newlyAddedPlaylist = new playlist(playListName);
    } else {
      newlyAddedPlaylist = newPlayList;
    }
  this.playLists.push(newlyAddedPlaylist);
}

playlist.prototype.overallRating = function () {
  let rating = 0;
  this.tracks.forEach(function (track) {
    rating += track.rating;
  });

  return (rating / this.tracks.length);
}

playlist.prototype.totalDuration = function () {
  let playTime = 0;
  this.tracks.forEach(function (track) {
    playTime += track.duration;
  });

  let seconds = playTime % 60;
  let minutes = Math.floor(playTime / 60);
  return `Total Playtime: ${minutes}:${seconds}`
}

playlist.prototype.addTrack = function (name, time, rating) {
  let newlyAddedTrack = new track(name, time, rating);
  this.tracks.push(newlyAddedTrack);
}

const iTunes = new library("Shambhala", "Chibwe");
const summer = new playlist("LazieDaze")
const happyHappy = new track("Happy Happy Joy Joy", 60, 5)

// iTunes.addPlaylist("coolBreeze");
iTunes.addPlaylist(summer);
summer.addTrack("coolie", 120, 5);
summer.addTrack("bybye", 130, 2);
summer.addTrack("Hello", 120, 5);

iTunes.addTrack("Happy Happy Joy Joy", 60, 5);
console.log(summer.totalDuration())
// console.log(iTunes);

// console.log(typeof summer)