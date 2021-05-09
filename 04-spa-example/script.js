document.querySelector('#page1-btn').addEventListener('click', function(){
    // hide all the pages
    let pages = document.querySelectorAll('.page');
    for (let p of pages) {
        p.classList.remove('show')
        p.classList.add('hidden')
    }

    // show page 1
    document.querySelector('#page-1').classList.add('show')

})

document.querySelector('#page2-btn').addEventListener('click', function(){
    // hide all the pages
    let pages = document.querySelectorAll('.page');
    for (let p of pages) {
        p.classList.remove('show')
    }

    // show page 2
    document.querySelector('#page-2').classList.add('show')

})

document.querySelector('#page3-btn').addEventListener('click', function(){
    // hide all the pages
    let pages = document.querySelectorAll('.page');
    for (let p of pages) {
        p.classList.remove('show')
    }

    // show page 3
    document.querySelector('#page-3').classList.add('show')

})
