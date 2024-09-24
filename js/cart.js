function changingToDetoxic() {
    let heading = document.querySelector(".products-overview");
    heading.innerHTML = "Detoxic Products";

    document.querySelector('.js-products-container').innerHTML = detoxicHtml

    document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
        button.addEventListener('click', () => {
    
                const productId = button.dataset.productId; // Corrected dataset attribute name
                console.log(productId)
                addToCart(productId);
                updateCartQty();
    
        });
    })
}    
function changingToCleanup() {
    let heading = document.querySelector(".products-overview");
    heading.innerHTML = "Beach Cleanup Products";
    
    document.querySelector('.js-products-container').innerHTML = beachHtml

    document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
        button.addEventListener('click', () => {
    
                const productId = button.dataset.productId; // Corrected dataset attribute name
                console.log(productId)
                addToCart(productId);
                updateCartQty();
    
        });
    })
}
function changingToUpcycled() {
    let heading = document.querySelector(".products-overview");
    heading.innerHTML = "Upcycled Wear";
    
    document.querySelector('.js-products-container').innerHTML = upcycledHtml

    document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
        button.addEventListener('click', () => {
    
                const productId = button.dataset.productId; // Corrected dataset attribute name
                console.log(productId)
                addToCart(productId);
                updateCartQty();
    
        });
    })
}    
function changingToEco() {
    let heading = document.querySelector(".products-overview");
    heading.innerHTML = "Eco-Smart Products";

    document.querySelector('.js-products-container').innerHTML = ecoHtml

    document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
        button.addEventListener('click', () => {
    
                const productId = button.dataset.productId; // Corrected dataset attribute name
                console.log(productId)
                addToCart(productId);
                updateCartQty();
    
        });
    })
}
function changingToTransit() {
    let heading = document.querySelector(".products-overview");
    heading.innerHTML = "Green Transit Products";
    
    document.querySelector('.js-products-container').innerHTML = transitHtml

    document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
        button.addEventListener('click', () => {
    
                const productId = button.dataset.productId; // Corrected dataset attribute name
                console.log(productId)
                addToCart(productId);
                updateCartQty();
    
        });
    })
    
}
const beachProducts = [{
    id: "c1",
    image: "../images/product-images/diykit.webp",
    name: "DIY Cleanup Kit",
    priceCents: 1200 
},
{
    id: "c2",
    image: "../images/product-images/cleanup-pack.webp",
    name: "Basic Cleanup Pack",
    priceCents: 800 
},
{
    id: "c3",
    image: "../images/product-images/litter-picker.png",
    name: "Litter Picker",
    priceCents: 500 
},
{
    id: "c4",
    image: "../images/product-images/litter-kit.webp",
    name: "Litter Kit",
    priceCents: 1250 
},
{
    id: "c5",
    image: "../images/product-images/waterhaul.webp",
    name: "Waterhaul Cleanup Kit",
    priceCents: 4000 
},
{
    id: "c6",
    image: "../images/product-images/debris-remover.png",
    name: "Sifter",
    priceCents: 350 
},
{
    id: "c7",
    image: "../images/product-images/diving-kit.png",
    name: "Diving Kit",
    priceCents: 30000 
},
{
    id: "c8",
    image: "../images/product-images/mini-oxtgen-tank.png",
    name: "Mini Oxygen tank",
    priceCents: 10000 
},
{
    id: "c9",
    image: "../images/product-images/gloves.png",
    name: "Cleaning Gloves",
    priceCents: 2000 
},
{
    id: "c10",
    image: "../images/product-images/trash-compactor.png",
    name: "Trash Compactor",
    priceCents: 25000 
},
{
    id: "c11",
    image: "../images/product-images/bin.jpg",
    name: "Bin",
    priceCents: 3000 
},
{
    id: "c12",
    image: "../images/product-images/bag.png",
    name: "Recycled Litter Bag",
    priceCents: 350 
}]

let beachHtml = ''
beachProducts.forEach((product) =>{
    beachHtml+= ` 
    <div class="individual-product" id = "${product.id}">
    <img class="product-image-1" src="${product.image}">
    <img class="rating" src="product-images/5-star.svg">
    <p class="product-name-1 name">${product.name}</p>
    <p class="product-price-1 price">£${product.priceCents/100}</p>
    <div class="container">
        <button class="js-add-to-cart" data-product-name="${product.name}"data-product-id = "${product.id}">Add to cart</button>
        <select class="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>    
</div> `
})


const detoxicProducts = [{
    id: "d1",
    image: "../images/product-images/air-drone.jpg",
    name: "Air Drone",
    priceCents: 90000 
},
{
    id: "d2",
    image: "../images/product-images/aquatroll.png",
    name: "Aquatroll",
    priceCents: 40000 
},
{
    id: "d3",
    image: "../images/product-images/biorock.png",
    name: "Biorock",
    priceCents: 200000 
},
{
    id: "d4",
    image: "../images/product-images/drone.png",
    name: "Under-water Drone",
    priceCents: 100000
},
{
    id: "d5",
    image: "../images/product-images/seabin.png",
    name: "Seabin",
    priceCents: 40000 
},
{
    id: "d6",
    image: "../images/product-images/drone2.png",
    name: "Under-water Drone",
    priceCents: 100000 
},
{
    id: "d7",
    image: "../images/product-images/tester1.png",
    name: "Water Quality Tester",
    priceCents: 15000 
},
{
    id: "d8",
    image: "../images/product-images/tester2.png",
    name: "Sediment Testing Kit",
    priceCents: 10000 
},
{
    id: "d9",
    image: "../images/product-images/algae-tester.png",
    name: "Algae tester",
    priceCents: 25000 
},
{
    id: "d10",
    image: "../images/product-images/net.png",
    name: "Microplastic Net",
    priceCents: 10000
},
{
    id: "d11",
    image: "../images/product-images/camera.jpg",
    name: "Marine Camera",
    priceCents: 20000 
},
{
    id: "d12",
    image: "../images/product-images/water-filter.png",
    name: "Water Filter",
    priceCents: 40000 
}]

let detoxicHtml = ''
detoxicProducts.forEach((product) =>{
    detoxicHtml+= ` 
    <div class="individual-product" id = "${product.id}">
    <img class="product-image-1" src="${product.image}">
    <img class="rating" src="product-images/5-star.svg">
    <p class="product-name-1 name">${product.name}</p>
    <p class="product-price-1 price" >£${product.priceCents/100}</p>
    <div class="container">
        <button class="js-add-to-cart" data-product-name="${product.name}"data-product-id = "${product.id}">Add to cart</button>
        <select class="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>    
</div> `
})

const upcycledProducts = [{
    id: "u1",
    image: "../images/product-images/cap.webp",
    name: "Upcycled Cap",
    priceCents: 1000
},
{
    id: "u2",
    image: "../images/product-images/hoodies.jpg",
    name: "Upcycled Hoodies",
    priceCents: 15000
},
{
    id: "u3",
    image: "../images/product-images/jacket.png",
    name: "Upcycled Jacket",
    priceCents: 15000 
},
{
    id: "u4",
    image: "../images/product-images/pants.png",
    name: "Upcycled Pants",
    priceCents: 20000
},
{
    id: "u5",
    image: "../images/product-images/shirt.webp",
    name: "Upycycled Shirt",
    priceCents: 10000 
},
{
    id: "u6",
    image: "../images/product-images/shirt2.png",
    name: "Upcycled Shirt",
    priceCents: 8000 
},
{
    id: "u7",
    image: "../images/product-images/shoes.png",
    name: "Upcycled Shoes",
    priceCents: 20000 
},
{
    id: "u8",
    image: "../images/product-images/shorts.webp",
    name: "Upcycled Shorts",
    priceCents: 2000 
},
{
    id: "u9",
    image: "../images/product-images/swimsuit.png",
    name: "Upcycled Swimsuit",
    priceCents: 10000
},
{
    id: "u10",
    image: "../images/product-images/tshirt.webp",
    name: "Upcycled T-shirt",
    priceCents: 5000 
},
{
    id: "u11",
    image: "../images/product-images/watch.webp",
    name: "Upycycled Watch",
    priceCents: 40000 
},
{
    id: "u12",
    image: "../images/product-images/watch2.png",
    name: "Upcycled Watch",
    priceCents: 35000
}]

let upcycledHtml = ''
upcycledProducts.forEach((product) =>{
    upcycledHtml+= ` 
    <div class="individual-product" id = "${product.id}">
    <img class="product-image-1" src="${product.image}">
    <img class="rating" src="product-images/5-star.svg">
    <p class="product-name-1 name">${product.name}</p>
    <p class="product-price-1 price">£${product.priceCents/100}</p>
    <div class="container">
        <button class="js-add-to-cart" data-product-name="${product.name}" data-product-id = "${product.id}">Add to cart</button>
        <select class="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>    
</div> `
})

const ecoProducts = [{
    id: "e1",
    image: "../images/product-images/sbag.png",
    name: "Recycled Bag",
    priceCents: 1500 
},
{
    id: "e2",
    image: "../images/product-images/chair.jpg",
    name: "Recycled Chair",
    priceCents: 10000
},
{
    id: "e3",
    image: "../images/product-images/charger.jpg",
    name: "Solar powered Power-bank",
    priceCents: 25000
},
{
    id: "e4",
    image: "../images/product-images/food.webp",
    name: "Fish Food",
    priceCents: 550
},
{
    id: "e5",
    image: "../images/product-images/packaging.png",
    name: "Biodegradable Packaging",
    priceCents: 500
},
{
    id: "e6",
    image: "../images/product-images/seaweed-sheet.png",
    name: "Seaweed Sheet",
    priceCents: 87
},
{
    id: "e7",
    image: "../images/product-images/soap.png",
    name: "Reed Safe Soap",
    priceCents: 150
},
{
    id: "e8",
    image: "../images/product-images/sponges.webp",
    name: "Seaweed Sponges",
    priceCents: 250
},
{
    id: "e9",
    image: "../images/product-images/sppons.png",
    name: "Edible Spoons",
    priceCents: 4500
},
{
    id: "e10",
    image: "../images/product-images/sunscreen.png",
    name: "Reed Safe Sunscreen",
    priceCents: 1000
},
{
    id: "e11",
    image: "../images/product-images/toy.png",
    name: "Recycled Dog Toy",
    priceCents: 3000 
},
{
    id: "e12",
    image: "../images/product-images/washable-bags.png",
    name: "Reuseable Bags",
    priceCents: 350 
}]

let ecoHtml = ''
ecoProducts.forEach((product) =>{
    ecoHtml+= ` 
    <div class="individual-product" id = "${product.id}">
    <img class="product-image-1" src="${product.image}">
    <img class="rating" src="product-images/5-star.svg">
    <p class="product-name-1 name">${product.name}</p>
    <p class="product-price-1 price">£${product.priceCents/100}</p>
    <div class="container">
        <button class="js-add-to-cart" data-product-name="${product.name}"data-product-id = "${product.id}">Add to cart</button>
        <select class="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>    
</div> `
})

const transitProducts = [{
    id: "t1",
    image: "../images/product-images/bicycle1.jpg",
    name: "Bicycle",
    priceCents: 90000 
},
{
    id: "t2",
    image: "../images/product-images/bicycle2.jpg",
    name: "Bicycle",
    priceCents: 80000
},
{
    id: "t3",
    image: "../images/product-images/ebicycle.jpg",
    name: "E-Bicycle",
    priceCents: 110000 
},
{
    id: "t4",
    image: "../images/product-images/ebicycle2.png",
    name: "E-Bicycle",
    priceCents: 100000 
},
{
    id: "t5",
    image: "../images/product-images/roller-blades1.png",
    name: "Roller Blades",
    priceCents: 20000 
},
{
    id: "t6",
    image: "../images/product-images/roller-blades2.png",
    name: "Roller Blades",
    priceCents: 15000 
},
{
    id: "t7",
    image: "../images/product-images/scooter.jpg",
    name: "Scooter",
    priceCents: 32000
},
{
    id: "t8",
    image: "../images/product-images/scooter2.jpg",
    name: "Scooter",
    priceCents: 35000
},
{
    id: "t9",
    image: "../images/product-images/skate1.png",
    name: "Skateboard",
    priceCents: 15000
},{
    id: "t10",
    image: "../images/product-images/skate2.png",
    name: "Skateboard",
    priceCents: 10000 
},
{
    id: "t11",
    image: "../images/product-images/surf1.png",
    name: "Surf board",
    priceCents: 30000 
},
{
    id: "t12",
    image: "../images/product-images/surf2.png",
    name: "Surf board",
    priceCents: 35000 
}]
let transitHtml = ''
transitProducts.forEach((product) =>{
    transitHtml+= ` 
    <div class="individual-product" id = "${product.id}">
    <img class="product-image-1" src="${product.image}">
    <img class="rating" src="product-images/5-star.svg">
    <p class="product-name-1 name">${product.name}</p>
    <p class="product-price-1 price">£${(product.priceCents/100).toFixed(2)}</p>
    <div class="container">
        <button class="js-add-to-cart" data-product-name="${product.name}" data-product-id = "${product.id}">Add to cart</button>
        <select class="quantity-selector">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>    
</div> `
})
function updateCartQty(){
    
    let cartCount = 0;

    cart.forEach((cartItem) => {
        cartCount += cartItem.count;
    })

    document.querySelector('.cart-count-number').innerHTML = cartCount
}

document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
    button.addEventListener('click', () => {

            const productId = button.dataset.productId; // Corrected dataset attribute name
            console.log(productId)
            addToCart(productId);
            updateCartQty();

    });
})