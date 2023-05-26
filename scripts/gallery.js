/* const gallery = (function () {
    const GALLERY = document.querySelector(".gallery__container");
    const FOCUSED_IMAGE = document.createElement("img");
    FOCUSED_IMAGE.classList.add("gallery__focusedImage");
  
    const THUMBSNAILS = document.createElement("div");
    THUMBSNAILS.classList.add("gallery__thumbnails");
  
    let thumbnailCount = 0;
    let rowContainer = null;
  
    function builtThumbnail(image) {
      if (thumbnailCount % 7 === 0) {
        rowContainer = document.createElement("div");
        rowContainer.classList.add("gallery__row");
        THUMBSNAILS.append(rowContainer);
      }
  
      const BUTTON = document.createElement("button");
      BUTTON.addEventListener("mouseover", changeFocus);
      BUTTON.innerHTML = `<img src="${image}" alt="galleri miniature" class="gallery__thumbnail">`;
      BUTTON.classList.add("gallery__button");
      rowContainer.append(BUTTON);
  
      thumbnailCount++;
    }
  
    function changeFocus(event) {
      if (event.target.className == "gallery__thumbnail") {
        FOCUSED_IMAGE.src = event.target.src;
      }
    }
  
    function init(images = []) {
      FOCUSED_IMAGE.src = images[0];
      images.forEach(builtThumbnail);
      GALLERY.append(FOCUSED_IMAGE, THUMBSNAILS);
    }
  
    return {
      init,
    };
  })(); */

    // Ovenstående viser billederne vertikalt




  



    const gallery = (function () {
    const GALLERY = document.querySelector(".gallery__container");
    const FOCUSED_IMAGE = document.createElement("img");
    FOCUSED_IMAGE.classList.add("gallery__focusedImage");

  GALLERY.append(FOCUSED_IMAGE);
  
    function createHouseSection(house, images) {
      const houseLabel = document.createElement("div");
      houseLabel.textContent = house;
      houseLabel.classList.add("gallery__houseLabel");
  
      const houseContainer = document.createElement("div");
      houseContainer.classList.add("gallery__houseContainer");
      houseContainer.append(houseLabel);
  
      const thumbnailsContainer = document.createElement("div");
      thumbnailsContainer.classList.add("gallery__thumbnails");
  
      let thumbnailCount = 0;
      let rowContainer = null;
  
      images.forEach((image) => {
        if (thumbnailCount % 7 === 0) {
          rowContainer = document.createElement("div");
          rowContainer.classList.add("gallery__row");
          thumbnailsContainer.append(rowContainer);
        }
  
        const BUTTON = document.createElement("button");
        BUTTON.addEventListener("mouseover", changeFocus);
        BUTTON.innerHTML = `<img src="${image}" alt="gallery thumbnail" class="gallery__thumbnail">`;
        BUTTON.classList.add("gallery__button");
        rowContainer.append(BUTTON);
  
        thumbnailCount++;
      });
  
      houseContainer.append(thumbnailsContainer);
      return houseContainer;
    }
  
    function changeFocus(event) {
      if (event.target.className == "gallery__thumbnail") {
        FOCUSED_IMAGE.src = event.target.src;
      }
    }
  
    function init(houses) {
      for (const house in houses) {
        const houseSection = createHouseSection(house, houses[house]);
        GALLERY.append(houseSection);
      }
  
      
    }
  
    return {
      init,
    };
  })();  







 