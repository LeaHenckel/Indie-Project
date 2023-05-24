const gallery = (function () {
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
  })();
