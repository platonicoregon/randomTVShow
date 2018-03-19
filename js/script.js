var tVShow = [
		{name: "Breaking Bad", poster: "img/breakingBadPoster.jpg"},
		{name: "Game of Thrones", poster: "img/gameOfThronesPoster.jpg"},
		{name: "Vikings", poster: "img/vikingsPoster.jpg"},
		{name: "Altered Carbon", poster: "img/alteredCarbonPoster.jpg"},
		{name: "Black Mirror", poster: "img/blackMirrorPoster.jpg"},
		{name: "Firefly", poster: "img/fireflyPoster.jpg"},
		{name: "Friends", poster: "img/friendsPoster.jpg"},
		{name: "Mr. Robot", poster: "img/mrRobotPoster.jpg"},
		{name: "Preacher", poster: "img/preacherPoster.jpg"},
		{name: "Stranger Things", poster: "img/strangerThingsPoster.jpg"},
		{name: "The Last Kingdom", poster: "img/theLastKingdomPoster.jpg"},
		{name: "American Gods", poster: "img/americanGodsPoster.jpg"}
	],
	figure = document.getElementsByTagName("figure"),
	img = figure[0].appendChild(document.createElement("img")),
	figcaption = figure[0].appendChild(document.createElement("figcaption")),
	button = document.getElementsByTagName("button"),
	i;

button[0].onclick = function() {
	i = Math.floor(Math.random() * tVShow.length);
	img.classList = "poster";
	img.src = tVShow[i].poster;
	figcaption.innerHTML = tVShow[i].name;
};