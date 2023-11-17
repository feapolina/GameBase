
var listaJogos = [
  "https://m.media-amazon.com/images/I/71aqYbO8-xL.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTA5ZWM4MjMtZWM5YS00MGE3LTk3NjYtMmNlYTU3ZDc0ZmMxXkEyXkFqcGdeQXVyMTEzMjE5NDg4._V1_.jpg",
  "https://image.api.playstation.com/vulcan/ap/rnd/202208/1100/Z6YXKnfK5GMK5GngWIViRdsf.png",
  "https://imusic.b-cdn.net/images/item/original/710/5028486386710.jpg?gro-es-poster-2019-minecraft-poster-world-beyond-91-5x61-toys&class=scaled&v=1617903531",
  "https://m.media-amazon.com/images/I/71k0BMp4U1L.jpg",
];

var nomeDosJogos = [
  "Stardew Valley",
  "Graveyard Keeper",
  "Harvest Moon",
  "Minecraft",
  "Terraria",
];

for (var i = 0; i < listaJogos.length; i++) {
  document.write("<div class='jogo-container'>");
  document.write("<img src=" + listaJogos[i] + ">");
  document.write("<p>" + nomeDosJogos[i] + "</p>");
  document.write("</div>");
}
