const titlePage = document.querySelector("#titlepage");

titlePage.addEventListener("keyup", event => {
  if (event.code !== "Enter") return;
  window.location = "game.html";
  event.preventDefault();
});

titlePage.addEventListener("click", event => {
  window.location = "game.html";
  event.preventDefault();
});