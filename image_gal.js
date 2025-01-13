document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
      { cardsClass: ".gallery-cards-1", thumbsClass: ".gallery-thumbs-1" },
      { cardsClass: ".gallery-cards-2", thumbsClass: ".gallery-thumbs-2" },
      { cardsClass: ".gallery-cards-3", thumbsClass: ".gallery-thumbs-3" },
      { cardsClass: ".gallery-cards-4", thumbsClass: ".gallery-thumbs-4" },
      { cardsClass: ".gallery-cards-5", thumbsClass: ".gallery-thumbs-5" },
      { cardsClass: ".gallery-cards-6", thumbsClass: ".gallery-thumbs-6" },
      { cardsClass: ".gallery-cards-7", thumbsClass: ".gallery-thumbs-7" },
      { cardsClass: ".gallery-cards-8", thumbsClass: ".gallery-thumbs-8" },
      { cardsClass: ".gallery-cards-9", thumbsClass: ".gallery-thumbs-9" },
      { cardsClass: ".gallery-cards-10", thumbsClass: ".gallery-thumbs-10" },
      { cardsClass: ".gallery-cards-11", thumbsClass: ".gallery-thumbs-11" },
      { cardsClass: ".gallery-cards-12", thumbsClass: ".gallery-thumbs-12" },
      { cardsClass: ".gallery-cards-13", thumbsClass: ".gallery-thumbs-13" },
      { cardsClass: ".gallery-cards-14", thumbsClass: ".gallery-thumbs-14" },
      { cardsClass: ".gallery-cards-15", thumbsClass: ".gallery-thumbs-15" },
      { cardsClass: ".gallery-cards-16", thumbsClass: ".gallery-thumbs-16" },
      { cardsClass: ".gallery-cards-17", thumbsClass: ".gallery-thumbs-17" },
      { cardsClass: ".gallery-cards-18", thumbsClass: ".gallery-thumbs-18" },
      { cardsClass: ".gallery-cards-19", thumbsClass: ".gallery-thumbs-19" }
    ];
  
    galleries.forEach((gallery) => {
      const swiperCards = new Swiper(gallery.cardsClass, {
        loop: true,
        loopedSlides: 3,
        cssMode: true,
        effect: "fade",
      });
  
      const swiperThumbs = new Swiper(gallery.thumbsClass, {
        loop: true,
        loopedSlides: 3,
        slidesPerView: 3,
        centeredSlides: true,
        slideToClickedSlide: true,
  
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
      // Synchronisation des galeries
      swiperThumbs.controller.control = swiperCards;
    });
  });
  