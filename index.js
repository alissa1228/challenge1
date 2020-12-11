

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const query = document.querySelector("h2");

const superEventHandler = {
    over: function mouseOver() {
      query.innerHTML = "The mouse is here!";
      query.style.color = colors[3];
    },
  
    out: function mouseOut() {
      query.innerHTML = "The mouse is gone!";
      query.style.color = colors[2];
    },
  
    on: function mouseClick() {
      query.innerHTML = "That was right Click!";
      query.style.color = colors[1];
    },
  
    resized: function justResize() {
      query.innerHTML = "You just resized!";
      query.style.color = colors[0];
    }
  };
  
  query.addEventListener("mouseover", superEventHandler.over);
  query.addEventListener("mouseout", superEventHandler.out);
  window.addEventListener("click", superEventHandler.on);
  window.addEventListener("resize", superEventHandler.resized);
  
  