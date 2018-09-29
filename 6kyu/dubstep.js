function songDecoder(song) {
  return song
    .split('WUB')
    .filter(s => !!s)
    .join(' ')
}
