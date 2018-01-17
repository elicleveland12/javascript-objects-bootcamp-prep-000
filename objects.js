var playlist = { prince: "1999" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle });
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}