// change about link
document.querySelectorAll("aside ul li a")[1].href="./about.html";

// add students review section
for(let i=2;i<=7;i++){
    document.querySelector(".students-reviews .container .reviews .swiper-wrapper").innerHTML+=`
    <div class="review swiper-slide">
                        <i class="quote fa-solid fa-quote-right"></i>
                        <div class="info">
                            <img src="../files/imgs/avatars/pic-${i}.jpg" alt="">
                            <div class="text">
                                <p>john deo</p>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                            </div>
                        </div>
                        <p class="rev">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed 
                            ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. 
                            Eligendi eaque molestiae modi?</p>
                    </div>`
};

// swiper
const swiper = new Swiper('.reviews', {
    spaceBetween: 20,
    centeredSlider: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    // Optional parameters
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3.2,
        },
    }
});