// GSAP animation

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 1199px)", () => {

  gsap.from(".header", {
    scrollTrigger: ".header",
    y: -20,
    duration: .8,
    opacity: 0
  });

  gsap.from(".left_image", {
    scrollTrigger: ".left_image",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".description h1", {
    scrollTrigger: ".description h1",
    x: 100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".description p", {
    scrollTrigger: ".description p",
    x: 100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".btn", {
    scrollTrigger: ".btn",
    y: 70,
    duration: .8,
    opacity: 1
  });

  gsap.from(".description_about h1", {
    scrollTrigger: ".description_about h1",
    x: -100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".description_about p", {
    scrollTrigger: ".description_about p",
    x: -100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".icon_list", {
    scrollTrigger: ".icon_list",
    y: 100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".backgound_img", {
    scrollTrigger: ".backgound_img",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".yoga_breathing", {
    scrollTrigger: ".yoga_breathing",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".text_left h2", {
    scrollTrigger: ".text_left h2",
    x: -100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".text_left p", {
    scrollTrigger: ".text_left p",
    x: -100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".offer_join h2", {
    scrollTrigger: ".offer_join h2",
    x: 100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".offer_join p", {
    scrollTrigger: ".offer_join p",
    x: 100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".btn_join", {
    scrollTrigger: ".btn_join",
    y: 70,
    duration: .8,
    opacity: 0
  })

  gsap.from(".block_description h2", {
    scrollTrigger: ".block_description h2",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".block_description p", {
    scrollTrigger: ".block_description p",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".gallery_cards", {
    scrollTrigger: ".gallery_cards",
    y: 100,
    duration: .8,
    opacity: 0
  });

  gsap.from(".content_block video", {
    scrollTrigger: ".content_block video",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".text_and_social h2", {
    scrollTrigger: ".text_and_social h2",
    x: 200,
    duration: .8,
    opacity: 0
  });

  gsap.from(".text_and_social p", {
    scrollTrigger: ".text_and_social p",
    x: 200,
    duration: .8,
    opacity: 0
  });

  gsap.from(".social_item li", {
    scrollTrigger: ".social_item li",
    x: 200,
    duration: .8,
    stagger: 0.2,
    opacity: 0
  });

  gsap.from(".form_description h2", {
    scrollTrigger: ".block_description h2",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".form_description p", {
    scrollTrigger: ".form_description p",
    scale: 1.3,
    duration: .8,
    opacity: 0
  });

  gsap.from(".contact_form input", {
    scrollTrigger: ".contact_form input",
    y: 100,
    duration: .8,
    stagger: 0.2,
    opacity: 0
  });

  gsap.from(".contact_form textarea", {
    scrollTrigger: ".contact_form textarea",
    y: 100,
    duration: .8,
    stagger: 0.33,
    opacity: 0
  });

  gsap.from(".btn_send", {
    y: 200,
    duration: .8,
    opacity: 0
  });

});