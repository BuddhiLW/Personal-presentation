// var a = document.
var title = document.querySelectorAll('section.title__alien h3');
title.forEach(e => {e.classList.add("float--right")
                   console.log(e)})

var title = document.querySelectorAll('section.title__cards h3');
title.forEach(e => {e.classList.add("float--bottom")
                   console.log(e)})

Reveal.on( 'title__alien', () => {
    console.log('✨')
    var title = document.querySelectorAll('section.title__cards h3');
    title.forEach(e => {e.classList.add("float--bottom")
                       console.log(e)})
} );
