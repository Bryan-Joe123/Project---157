AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Empyre",
        url: "./assets/thumbnails/1.jpg",
      },
      {
        id: "budapest",
        title: "Marvel",
        url: "./assets/thumbnails/2.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Black Panther",
        url: "./assets/thumbnails/3.jpg",
      },
      {
        id: "new-york-city",
        title: "Comic 1000",
        url: "./assets/thumbnails/4.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      console.log(item);

      base = document.createElement("a-entity")
      base.setAttribute("geometry", { primitive:"box",width:17,height:22,depth:0.1})
      base.setAttribute("position",position)
      base.setAttribute("material",{opacity:0.4})
      base.setAttribute("visible",true)
      
      Image = document.createElement("a-plane")
      position.z = position.z+0.2
      Image.setAttribute("position", position)
      Image.setAttribute("src", item.url)
      Image.setAttribute("scale", {x:15,y:20,z:20})

      text = document.createElement("a-entity")
      text.setAttribute("text", { value:item.title, width:34, color:"#000000", font:"exo2bold", align:"center"})
      position.y = position.y-15
      text.setAttribute("position", position)
      text.setAttribute("visible", true)
      
      this.placesContainer.appendChild(base);
      this.placesContainer.appendChild(Image);
      this.placesContainer.appendChild(text);
    }
  },
  
});
