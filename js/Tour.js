AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "aero",
        title: "Captain Aero",
        url: "./assets/thumbnails/captainaero.jpg",
      },
      {
        id: "spaceboy",
        title: "Outer Space",
        url: "./assets/thumbnails/outerspace.jpg",
      },

      {
        id: "spiderman",
        title: "Spider Man",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "superman",
        title: "Super Man",
        url: "./assets/thumbnails/superman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

 
  
      // Thumbnail Element
     const thumbnailEl=this.createThumbnail(item)
     borderEl.appendChild(thumbnailEl)

 
    }
  },
  createThumbnail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{primitive:"plane", height:28,width:20})
  },

});
entityEl.setAttribute("position",{x:0,y:5,z:0.1});
entityEl.setAttribute("material",{src:item.url});
