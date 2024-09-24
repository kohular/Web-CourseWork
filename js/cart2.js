let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [ {
            productId: "c1",
            quantity: 5
        },
        {
            productId: "c3",
            quantity: 3
        }];
}


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}

function addToCart(productId){
    let matchingItem;
    let matchingQuantity;

        cart.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem
                matchingQuantity = getQuantity(productId)
                console.log(matchingQuantity)
            }
        })

        if(matchingItem){
            matchingItem.count += 1;
            if (matchingQuantity !== undefined) {
                matchingItem.quantity += parseInt(matchingQuantity);
            } else {
                // Handle the case where matchingQuantity is undefined (quantity selector not found)
                // For example, you might want to use a default quantity or show an error message
            }
        }
        else{
            const quantity = getQuantity(productId)
            cart.push({
                productId: productId,
                count: 1,
                quantity: quantity !== null ? parseInt(quantity) : 1
            }); 
        } 
    saveToStorage() 
    console.log("Final cart data:", cart);       
}

function removeFromCart(productId){
    const newCart = []

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem)
        }
    })

    cart = newCart;
    saveToStorage()
}

function paymentMade() {
    localStorage.setItem('cart', JSON.stringify([]));
}

function getQuantity(productId) {
    const product  = document.getElementById(productId)

    if(product){
        const quantitySel = product.querySelector('.quantity-selector')

        if (quantitySel) {
            return parseInt(quantitySel.value);
        }
    }

    // Return null if quantity selector is not found
    return null
}

function goToPayment(){
    if(cart.length === 0){
        alert('Cart Empty!')
    }
    else{
        window.location.href = "checkout.html"
    }    
}