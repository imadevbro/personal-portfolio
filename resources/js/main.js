// Particle animation function
function particleAnimation() {
    const canvas = document.getElementById('particle-canvas');
    const context = canvas.getContext('2d');
    const particles = [];
  
    // Set the initial canvas size
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  
    // Particle class
    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        };
      }
  
      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
      }
  
      update() {
        this.draw();
  
        this.x += this.velocity.x;
        this.y += this.velocity.y;
  
        // Bounce particles off edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x;
        }
  
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y;
        }
      }
    }
  
    // Create particles
    function createParticles() {
      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const color = '#ffffff';
  
        particles.push(new Particle(x, y, radius, color));
      }
    }
  
    // Animation loop
    function animateParticles() {
      requestAnimationFrame(animateParticles);
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      particles.forEach(particle => {
        particle.update();
      });
    }

    function handleResize() {
        // Update the canvas size
        canvasWidth = window.innerWidth;
        canvasHeight = window.innerHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      
        // Perform any other necessary updates for the particle animation based on the new canvas dimensions
        // ...
      }
      
      // Attach the resize event listener
    window.addEventListener('resize', handleResize);
  
    // Initialize particle animation
    function initParticleAnimation() {
      createParticles();
      animateParticles();
    }
  
    // Call the initialization function
    initParticleAnimation();
}
  
// Call particleAnimation() to start the particle animation
particleAnimation();


// Change tabs in experiences section
const experiences = document.querySelectorAll("div.experience-tab");
const experienceButtons = document.querySelectorAll("a.tab-btn, a.tab-btn-active")

const openExperienceTab = (event) => {
    experiences.forEach(experience => experience.style.display = "none");
    let clickedTab = document.getElementById(event.target.innerHTML);
    clickedTab.style.display = "block";
    experienceButtons.forEach(button => button.className = "tab-btn");
    event.target.className = "tab-btn-active";
}

experienceButtons.forEach(button => button.addEventListener('click', openExperienceTab));

// Toggle hamburger menu on mobile
const mobileMenu = document.getElementById('nav-menus');
const menuIcon = document.getElementById('icon-container');

const toggleMenu = () => {
    const computedStyle = window.getComputedStyle(mobileMenu);
    if (computedStyle.display === 'none') {
        mobileMenu.style.display = 'flex';
        mobileMenu.style.flexDirection = 'column';
        mobileMenu.style.alignItems = 'center';
    } else {
        mobileMenu.style.display = 'none';
    }
};

menuIcon.addEventListener('click', toggleMenu);

//Add fade in elements as the page scrolls
const reveals = document.querySelectorAll('.reveal')

const reveal = () => {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();