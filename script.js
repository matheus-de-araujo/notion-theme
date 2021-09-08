let media = document.body.querySelectorAll("img, picture, video");

media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
})

document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";