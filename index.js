const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 232,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 150,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 3,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 3] },
    { id: 5, name: 'Israeli', songs: [3, 5] },
  ],
  playSong(song) {
    console.log(/* your code here */)
  },

}
function minutestosec (time){
  
var mins = ~~((time % 3600) / 60);
var secs = ~~time % 60;
if (secs<10)
  return mins +":0" + secs
  else  return mins +":" + secs

}

function playSong(id) {
  
  if(id==1){
    console.log("Playing "+ player.songs[0].title +" from  " + player.songs[0].album +
    ' by ' + player.songs[0].artist +' | '+minutestosec(player.songs[0].duration) +".")
  }
  if(id==2){
    console.log("Playing "+ player.songs[1].title +" from " + player.songs[1].album +
    ' by ' + player.songs[1].artist +' | '+minutestosec(player.songs[1].duration)+".")
  }
  if(id==7){
    console.log("Playing "+ player.songs[2].title +" from " + player.songs[2].album +
    ' by ' + player.songs[2].artist +' | '+minutestosec(player.songs[2].duration)+".")
  }
  if(id==3){
    console.log("Playing "+ player.songs[3].title +" from " + player.songs[3].album +
    ' by ' + player.songs[3].artist +' | '+minutestosec(player.songs[3].duration)+".")
  }
  if(id==4){
    console.log("Playing "+ player.songs[4].title +" from " + player.songs[4].album +
    ' by ' + player.songs[4].artist +' | '+minutestosec(player.songs[4].duration)+".")
  }
  if(id==5){
    console.log("Playing "+ player.songs[5].title +" from " + player.songs[5].album +
    ' by ' + player.songs[5].artist +' | '+minutestosec(player.songs[5].duration)+".")
  }
  // your code here - `playSong` - Gets a song ID. Uses `player.playSong` to play the song with the given ID.
  //"Playing {song.title}  from  {song.album}  by  {song.artist} | {song.durati o n}."
}

function removeSong(id) {
  // your code here
}

function addSong(title, album, artist, duration, id) {
  // your code here
}

function removePlaylist(id) {
  // your code here
}

function createPlaylist(name, id) {
  // your code here
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}


playSong(5);
  
module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}




