let featuedImg = document.getElementById('featured-image');
let smallImgs = document.getElementsByClassName('small-Img');

function calculatePercentageOff() {
    const ogPrice = parseFloat(document.getElementById("ogprice").innerText.substring(1));
    const newPrice = parseFloat(document.getElementById("price").innerText.substring(1));
    
    var difference = ogPrice - newPrice;
    
    var percentageOff = (difference / ogPrice) * 100;
    
    const percentageElement = document.getElementById("percentage");
    percentageElement.innerHTML = percentageOff.toFixed(2) + "% Off";
}

calculatePercentageOff();

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.getElementById("add-to-cart-button");
    
    addToCartButton.addEventListener("click", function() {
        const selectedColor = document.querySelector('input[name="color"]:checked').value;
        const selectedSize = document.querySelector('input[name="size"]:checked').value;
        const quantity = document.querySelector('.quantity input').value;
        
        const cartMessage = `Added to cart: ${quantity} ${selectedColor} ${selectedSize}`;
        
        alert(cartMessage);
    });
    

    const colorRadios = document.querySelectorAll('input[name="color"]');
    

    colorRadios.forEach(function(radio) {
        radio.addEventListener("change", function() {
            const selectedColor = this.value;
            console.log("Selected color:", selectedColor);
        });
    });
    

    const sizeRadios = document.querySelectorAll('input[name="size"]');
    
    sizeRadios.forEach(function(radio) {
        radio.addEventListener("change", function() {
            const selectedSize = this.value;
            console.log("Selected size:", selectedSize);
        });
    });
});


smallImgs[0].addEventListener('click', () => {
    featuedImg.src = smallImgs[0].src;
    smallImgs[0].classList.add('sm-card')
    smallImgs[1].classList.remove('sm-card')
    smallImgs[2].classList.remove('sm-card')
    smallImgs[3].classList.remove('sm-card')
    smallImgs[4].classList.remove('sm-card')
})
smallImgs[1].addEventListener('click', () => {
    featuedImg.src = smallImgs[1].src;
    smallImgs[0].classList.remove('sm-card')
    smallImgs[1].classList.add('sm-card')
    smallImgs[2].classList.remove('sm-card')
    smallImgs[3].classList.remove('sm-card')
    smallImgs[4].classList.remove('sm-card')
})
smallImgs[2].addEventListener('click', () => {
    featuedImg.src = smallImgs[2].src;
    smallImgs[0].classList.remove('sm-card')
    smallImgs[1].classList.remove('sm-card')
    smallImgs[2].classList.add('sm-card')
    smallImgs[3].classList.remove('sm-card')
    smallImgs[4].classList.remove('sm-card')
})
smallImgs[3].addEventListener('click', () => {
    featuedImg.src = smallImgs[3].src;
    smallImgs[0].classList.remove('sm-card')
    smallImgs[1].classList.remove('sm-card')
    smallImgs[2].classList.remove('sm-card')
    smallImgs[3].classList.add('sm-card')
    smallImgs[4].classList.remove('sm-card')
})
smallImgs[4].addEventListener('click', () => {
    featuedImg.src = smallImgs[4].src;
    smallImgs[0].classList.remove('sm-card')
    smallImgs[1].classList.remove('sm-card')
    smallImgs[2].classList.remove('sm-card')
    smallImgs[3].classList.remove('sm-card')
    smallImgs[4].classList.add('sm-card')
})