var playlist = { prince: "1999" };

function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle });
}

function removeFromPlaylist(object, artistName) {
  return delete object.artistName;
}