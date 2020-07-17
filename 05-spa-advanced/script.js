function hideAllPages() {
    let pages = $(".page");
    for (let p of pages) {
        $(p).removeClass('show');
        $(p).addClass('hidden')
    }
}

$('.nav-button').click(function(){
    let pageNumber = $(this).data('page');
    hideAllPages();
    $(`#page-${pageNumber}`).addClass('show');
    $(`#page-${pageNumber}`).removeClass('hidden');
})

// $("#page1-btn").click(function(){
//      hideAllPages();   

//     // show page 1
//     $("#page-1").removeClass('hidden');
//     $("#page-1").addClass('show')
// })

// $("#page2-btn").click(function(){
//     hideAllPages();

//     // show page 2
//     $("#page-2").removeClass('hidden');
//     $("#page-2").addClass('show')
// })

// $("#page3-btn").click(function(){
//     hideAllPages();

//     // show page 3
//     $("#page-3").removeClass('hidden');
//     $("#page-3").addClass('show')
// })