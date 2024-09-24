
if (cart.length === 0) {
    document.querySelector('.order').innerHTML = "Thank You For Purchasing"
    setTimeout(function() {
        window.location.href = '../html/shop.html'; // Redirect to another page if cart is still empty after 2 seconds
    }, 2000);
}


let cartSummary = '';
let totalPrice = 0;

const shippingCosts = [999,599,0]

cart.forEach((cartItem,index) => {

    const productId = cartItem.productId

    let similarItem;

    beachProducts.forEach((product) =>{
        if(product.id === productId){
            similarItem = product
            totalPrice += similarItem.priceCents * cartItem.quantity
        }
    })
    detoxicProducts.forEach((product) =>{
        if(product.id === productId){
            similarItem = product
            totalPrice += similarItem.priceCents * cartItem.quantity
        }
    })
    ecoProducts.forEach((product) =>{
        if(product.id === productId){
            similarItem = product
            totalPrice += similarItem.priceCents * cartItem.quantity
        }
    })
    upcycledProducts.forEach((product) =>{
        if(product.id === productId){
            similarItem = product
            totalPrice += similarItem.priceCents * cartItem.quantity
        }
    })
    transitProducts.forEach((product) =>{
        if(product.id === productId){
            similarItem = product
            totalPrice += similarItem.priceCents * cartItem.quantity
        }
    })

    cartSummary += `
        <fieldset class="js-cart-container-${similarItem.id}">   
            <div class="review">
                <div class="buyout-info">
                    <p class="delivery">Delivery Days: In 2 days</p>
                    <div class="info-container">
                        <div class="image">
                            <img class="product" src="${similarItem.image}">
                        </div>    
                        <div class="info">    
                            <p class="name">${similarItem.name}</p>
                            <p class="price">£${(similarItem.priceCents / 100).toFixed(2)}</p>
                            <p class="qty">Quantity: ${cartItem.quantity}</p>
                            <div class="change">
                                <span class="remove js-delete" data-product-id="${similarItem.id}">Remove</span>
                            </div>
                        </div> 
                    </div>
                </div>`;

    // Conditionally add shipping options only for the first product
    if (index === 0) {
        cartSummary += `
                <div class="date-info">
                    <p>Choose Delivery Days: </p>
                    <div>
                        <input class="cost-1" type="radio" name="days-option-${similarItem.id}">
                        <label for="days" class="days">2 Days</label>
                        <p>Shipping Fee - £${(shippingCosts[0] / 100).toFixed(2)}</p>
                    </div>
                    <div>
                        <input class="cost-2" type="radio" name="days-option-${similarItem.id}">
                        <label for="days" class="days">5 Days</label>
                        <p>Shipping Fee - £${(shippingCosts[1] / 100).toFixed(2)}</p>
                    </div>
                    <div>
                        <input class="cost-3" type="radio" name="days-option-${similarItem.id}" checked>
                        <label for="days" class="days">1 Week</label>
                        <p>Shipping Fee - Free</p>
                    </div>
                </div>`;
    }

    cartSummary += `
            </div> 
        </fieldset>`;
});

document.querySelector('.js-order-summary').innerHTML = cartSummary; 


document.querySelector('.js-order-summary').innerHTML = cartSummary


document.querySelectorAll('.js-delete').forEach((link) => {
    link.addEventListener('click', () =>{
        const productId = link.dataset.productId
        removeFromCart(productId)
        
        const container = document.querySelector(`.js-cart-container-${productId}`)
        container.remove();
    })
})

const totalCount = cart.length
document.querySelector('.checkout-count').innerHTML = `Checkout(${totalCount})`

document.querySelector('.items').innerHTML = `items(${totalCount})`
document.querySelector('.product-cost').innerHTML = `£${(totalPrice/100).toFixed(2)}`

// Initialize shipping cost
let shippingCost = 0;

// Retrieve shipping cost from localStorage if it exists
const radioButtons = document.querySelectorAll('.cost-1, .cost-2, .cost-3');
radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
        if (radioButton.checked) {
            // Update shipping cost
            shippingCost = shippingCosts[index];
            localStorage.setItem('shippingCost', JSON.stringify(shippingCost)); // Store shipping cost in localStorage
            document.querySelector('.shipping').innerHTML = `£${(shippingCost / 100).toFixed(2)}`;

            // Recalculate and update total price
            const beforeTax = totalPrice + shippingCost;
            const afterTax = beforeTax + (beforeTax * 0.05);
            const total = afterTax / 100;

            // Update displayed totals
            document.querySelector('.before-tax').innerHTML = `£${(beforeTax / 100).toFixed(2)}`;
            document.querySelector('.after-tax').innerHTML = `£${(afterTax / 100).toFixed(2)}`;
            document.querySelector('.total').innerHTML = `£${total.toFixed(2)}`;
        }
    });
});

// Access shipping cost outside the function

let beforeTax;

beforeTax = totalPrice + shippingCost

document.querySelector('.before-tax').innerHTML = `£${(beforeTax/100).toFixed(2)}`

let afterTax;

afterTax = beforeTax + (beforeTax * 0.05)
document.querySelector('.after-tax').innerHTML = `£${(afterTax/100).toFixed(2)}`

document.querySelector('.total').innerHTML = `£${(afterTax/100).toFixed(2)}`