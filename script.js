const elements = $(".item");
let count = 1;

setInterval(() => {
    count++;
    let showItem = document.querySelector(".show");
    showItem.classList.remove("show");

    if (count > elements.length) {
        elements[0].classList.add("show");
        count = 1;
    }
        
    else
        showItem.nextElementSibling.classList.add("show");
    
}, 1500);