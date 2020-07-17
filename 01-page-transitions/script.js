document.querySelector("#change-size-btn").addEventListener('click', function(){
    let box = document.querySelector("#thebox");
    // add the 'stretch' class to the box element
    box.classList.add('stretch');
})

setTimeout(function(){
    let box = document.querySelector("#thebox");
    // add the 'stretch' class to the box element
    box.classList.add('stretch');
}, 100)