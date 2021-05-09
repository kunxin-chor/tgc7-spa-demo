function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let p of pages) {
    p.classList.remove("show");
    p.classList.add("hidden");
  }
}

$(".nav-button").click(function() {
    hideAllPages();
    let pageNumber = this.dataset.page;
    document.querySelector(`#page-${pageNumber}`).classList.remove('hidden');
    document.querySelector(`#page-${pageNumber}`).classList.add('show');
    
});

