$("#page1-btn").click(function(){
    // hide page 2
    $("#page-2").removeClass('show'); // jQuery for element.classList.remove('shown')
    $("#page-2").addClass('hidden'); // jQuery for element.cassList.add('hidden)
    // hide page 3
    $("#page-3").removeClass('show'); // jQuery for element.classList.remove('shown')
    $("#page-3").addClass('hidden'); // jQuery for element.cassList.add('hidden)

    // show page 1
    $("#page-1").removeClass('hidden');
    $("#page-1").addClass('show')
})

$("#page2-btn").click(function(){
    // hide page 1
    $("#page-1").removeClass('show'); // jQuery for element.classList.remove('shown')
    $("#page-1").addClass('hidden'); // jQuery for element.cassList.add('hidden)
    // hide page 3
    $("#page-3").removeClass('show'); // jQuery for element.classList.remove('shown')
    $("#page-3").addClass('hidden'); // jQuery for element.cassList.add('hidden)

    // show page 2
    $("#page-2").removeClass('hidden');
    $("#page-2").addClass('show')
})

$("#page3-btn").click(function(){
     // hide page 1
    $("#page-1").removeClass('show'); // jQuery for element.classList.remove('shown')
    $("#page-1").addClass('hidden'); // jQuery for element.cassList.add('hidden)
    // hide page 2
    $("#page-2").removeClass('show'); // jQuery for element.classList.remove('shown')
    $("#page-2").addClass('hidden'); // jQuery for element.cassList.add('hidden)

    // show page 3
    $("#page-3").removeClass('hidden');
    $("#page-3").addClass('show')
})