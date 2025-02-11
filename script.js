document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".img-container img");

  if (!image) {
      console.error("Image not found! Check your HTML and selector.");
      return;
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          console.log("Image visibility:", entry.isIntersecting); // Debugging
          if (entry.isIntersecting) { 
              image.classList.add("animate");
          } else { 
              image.classList.remove("animate"); // Remove class when out of view
          }
      });
  }, { threshold: 0.5 });

  observer.observe(image);
});










document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.5; // Adjust if needed
  
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
  
        if (cardTop < triggerBottom) {
          setTimeout(() => {
            card.classList.add("animate");
          }, index * 10); // Delay each card animation by 10ms
        } else {
          card.classList.remove("animate"); // Remove class when scrolled back up
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on load in case cards are already in view
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const contactImage = document.querySelector(".contact-right img");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactImage.classList.add("show"); // Apply animation when visible
          } else {
            contactImage.classList.remove("show"); // Remove to replay animation
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );
  
    observer.observe(contactImage);
  });
  