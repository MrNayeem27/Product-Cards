const Card_Data = [
    {
        id: '1',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/u/2/k/free-3904s476j-siril-unstitched-original-imah4fq9fw33ztse.jpeg?q=70',
        name: 'Dyed, Embellished Bollywood Georgette Saree  (Light Blue)',
        price: '₹100',
        oldprice:'₹200',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.9',
        reviewscount:'1000+ Reviews',
        description: ''
    },
    {
        id: '2',
        image: 'https://via.placeholder.com/300', // Placeholder image
        name: 'Product 2',
        price: '₹200',
        oldprice:'₹250',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.3',
        reviewscount:'500+ Reviews',
        description: ''
    },
    {
        id: '3',
        image: 'https://via.placeholder.com/300',
        name: 'Product 3',
        price: '₹300',
        oldprice:'₹499',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.2',
        reviewscount:'1000+ Reviews',
        description: ''
    },
    {
        id: '4',
        image: 'https://via.placeholder.com/300',
        name: 'Product 4',
        price: '₹400',
        oldprice:'₹515',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'3.9',
        reviewscount:'5000+ Reviews',
        description: ''
    },
    {
        id: '5',
        image: 'https://via.placeholder.com/300',
        name: 'Product 5',
        price: '₹550',
        oldprice:'₹600', // Default value
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'5.0',
        reviewscount:'8000+ Reviews',
        description: ''
    },
    {
        id: '6',
        image: 'https://via.placeholder.com/300',
        name: 'Product 6',
        price: '₹614',
        oldprice:'₹630',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.5',
        reviewscount:'400+ Reviews',
        description: ''
    },
    {
        id: '7',
        image: 'https://via.placeholder.com/300',
        name: 'Product 7',
        price: '₹123',
        oldprice:'₹200',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.8',
        reviewscount:'1000+ Reviews',
        description: ''
    },
    {
        id: '8',
        image: 'https://via.placeholder.com/300',
        name: 'Product 8',
        price: '₹143',
        oldprice:'₹200',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.9',
        reviewscount:'9000+ Reviews',
        description: ''
    },
    {
        id: '9',
        image: '../Meesho/Assets/banner2/Electronics.png',
        name: 'Product 9',
        price: '₹240',
        oldprice:'₹300',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'3.5',
        reviewscount:'100+ Reviews',
        description: ''
    },
    {
        id: '10',
        image: 'https://via.placeholder.com/300',
        name: 'Product 10',
        price: '₹700',
        oldprice:'₹1000',
        discount:'5% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.9',
        reviewscount:'1500+ Reviews',
        description: ''
    }
];


const card_container = document.getElementById('cards-container');
Card_Data.forEach((products)=>{

    const card = document.createElement('div')
    card.classList.add('multiple-Cards')
    card_container.appendChild(card)


    const images = document.createElement('img')
    images.classList.add('product-images')
    images.src = products.image
    card.appendChild(images)


    const childcard = document.createElement('div')
    childcard.classList.add('child-Cards')
    card.appendChild(childcard)

    const name = document.createElement('h4')
    name.classList.add('product-name')
    name.textContent = products.name
    childcard.appendChild(name)

    const price = document.createElement('p')
    price.classList.add('product-price')
    price.textContent = products.price
    childcard.appendChild(price)

    const delprice = document.createElement('del')
    delprice.classList.add('old-price')
    delprice.textContent = products.oldprice
    price.appendChild(delprice)

    const discount = document.createElement('span')
    discount.classList.add('price-discount')
    discount.textContent = products.discount
    price.appendChild(discount)


    const fullReview=document.createElement('div')
    fullReview.classList.add('product-Review')
    childcard.appendChild(fullReview)


    const starrating=document.createElement('div')
    starrating.classList.add('starRating')
    fullReview.appendChild(starrating)

    const ratings = document.createElement('p')
    ratings.classList.add('product-ratings')
    ratings.textContent = products.starrating
    starrating.appendChild(ratings)

    const rateicon = document.createElement('img')
    rateicon.classList.add('rating-image')
    rateicon.src = products.Ratingicon
    ratings.appendChild(rateicon)

    const review = document.createElement('span')
    review.classList.add('product-reviews-count')
    review.textContent = products.reviewscount
    fullReview.appendChild(review)
})