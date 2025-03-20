const translations = {
  en: {
    pb: "Hey,",
    pb1: "My name is Saed Kasab and I am writing regarding the advertised position that caught my interest. With my background in computer science and IT, I see this as an exciting opportunity to contribute my knowledge while continuing to develop professionally in a dynamic environment.",
    pb2: "After completing the technical program with a specialization in Information and Media Technology at Herrgårdsgymnasiet in Säffle, I chose to deepen my knowledge through the computer science program at Linnaeus University in Växjö. During my studies, I gained a broad foundation in both theoretical and practical IT subjects, from networking and security to software design and web design. These experiences have not only strengthened my technical skills but also my ability to work in a structured manner both independently and as part of a team.",
    pb3: "After university, I continued to challenge myself through practical projects. What I love about such tasks is the combination of logical thinking and creativity. Solving a technical problem feels like cracking a cryptic puzzle piece. At the same time, I have always had one foot in the more human side of technology. During my CompTIA A+ certification, I learned not only about hardware troubleshooting but also how to explain technical solutions in a pedagogical way to users. For me, technology is a tool to create solutions, not a goal in itself. That is why I enjoy customer service as much as coding. I’m the one who always goes the extra mile to ensure that things not only work but are also intuitive and user-friendly.",
    pb4: "As a person, I am structured and analytical yet flexible. I believe in finding a balance between order and creative experimentation. My experience in both technical and customer service-related roles has taught me to listen, collaborate, and quickly adapt to new challenges.",
    pb5: "In my free time, I manage and maintain Windows and Linux servers for some friends and explore new technologies such as LLMs. When I’m not working or diving into new technology, I enjoy playing basketball, hanging out with friends, and keeping up with the latest movies. This balance between technology and other interests helps me maintain a creative and open mind.",
    pb6: "Thank you for taking the time to read my letter. I hope that I have sparked your interest and I'm looking forward to hearing from you soon.",
    pb7: "Kind regards,",
    pb8: "Saed Kasab",
    // Header
    profileTitle: "",
    // About Me
    aboutMeTitle: "Personal Letter",
    aboutMeText:
      "A positive, efficient and responsible person with a background in computer science and IT. I have experience in both technical and customer service-related roles.",

    // Contact Form
    contactTitle: "Contact Me",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    sendButton: "Send Message",
    sending: "Sending...",
    downButton: "Download",
    // Footer
    copyright: "All rights reserved.",
  },
  sv: {
    pb: "Hej,",
    pb1: "Mitt namn är Saed Kasab och jag skriver angående den utannonserade tjänsten som verkligen fångade mitt intresse. Med min bakgrund inom datavetenskap och IT ser jag detta som en spännande möjlighet att bidra med mina kunskaper samtidigt som jag fortsätter att utvecklas professionellt i en dynamisk miljö.",
    pb2: "Efter att ha avslutat teknikprogrammet med inriktning på Informations- och medieteknik vid Herrgårdsgymnasiet i Säffle, valde jag att fördjupa mina kunskaper genom datavetenskapsprogrammet vid Linnéuniversitetet i Växjö. Under mina studier fick jag en bred grund inom både teoretiska och praktiska IT-ämnen, från nätverk och säkerhet till mjukvarudesign och webbdesign. Dessa erfarenheter har inte bara stärkt mina tekniska färdigheter, utan även min förmåga att arbeta strukturerat både självständigt och som en del av ett team.",
    pb3: "Efter universitetet har jag fortsatt att utmana mig själv genom praktiska projekt. Det jag älskar med sådana uppgifter är kombinationen av logiskt tänkande och kreativitet. Att lösa ett tekniskt problem känns som att knäcka en kryptisk pusselbit. Samtidigt har jag alltid haft en fot i den mer mänskliga sidan av teknik. Under min CompTIA A+-certifiering lärde jag mig inte bara om hårdvarufelsökning, utan också hur man förklarar tekniska lösningar på ett pedagogiskt sätt till användare. För mig är teknik ett verktyg för att skapa lösningar, inte ett mål i sig. Det är därför jag trivs lika bra med kundservice som med kodning. Jag är den som alltid tar ett extra steg för att säkerställa att det inte bara fungerar, utan också är intuitiva och användarvänliga. ",
    pb4: "Som person är jag strukturerad och analytisk men också flexibel. Jag tror på att hitta en balans mellan ordning och kreativ experimentering. Min erfarenhet från både tekniska och kundservice-relaterade roller har lärt mig att lyssna, samarbeta och snabbt anpassa mig till nya utmaningar. ",
    pb5: "På fritiden hanterar och underhåller jag Windows- och Linux-servrar åt några vänner och utforskar nya teknologier som LLM:er. När jag inte arbetar eller fördjupar mig i ny teknik, tycker jag om att spela basket, umgås med vänner och hålla mig uppdaterad om de senaste filmerna. Denna balans mellan teknik och andra intressen hjälper mig att behålla ett kreativt och öppet sinne.",
    pb6: "Tack för att ni tar er tid att läsa mitt brev. Jag hoppas att jag har väckt ert intresse och att vi hörs och ses inom kort.",
    pb7: "Med vänlig hälsning",
    pb8: "Saed Kasab",
    // About Me
    aboutMeTitle: "Personligt Brev",
    aboutMeText:
      "En positiv, effektiv och ansvarande person med en bakgrund inom datavetenskap och IT. Jag har erfarenhet av både tekniska och kundservice-relaterade roller.",

    // Contact Form
    contactTitle: "Kontakta Mig",
    namePlaceholder: "Ditt Namn",
    emailPlaceholder: "Din E-post",
    subjectPlaceholder: "Ämne",
    messagePlaceholder: "Ditt Meddelande",
    sendButton: "Skicka Meddelande",
    skickar: "Skickar...",
    downButton: "Ladda ner",
    // Footer
    copyright: "Alla rättigheter förbehållna.",
  },
};

window.addEventListener("load", () => {
  // Hide loader
  setTimeout(() => {
    document.querySelector(".loader-container").classList.add("loader-hidden");
  }, 1000);

  // Initialize animations
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => {
    observer.observe(el);
  });

  // Initialize progress bars
  const progressBars = document.querySelectorAll(".progress-fill");
  setTimeout(() => {
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  }, 1500);

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Language switcher
  const languageSwitch = document.getElementById("languageSwitch");
  const languageBtns = document.querySelectorAll(".language-btn");
  let currentLang = localStorage.getItem("language") || "sv";

  // Initialize page with saved language
  document.documentElement.setAttribute("lang", currentLang);
  updateLanguage(currentLang);

  // Add language switching functionality
  languageBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.lang === currentLang) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      currentLang = lang;

      // Update active button
      languageBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Save preference
      localStorage.setItem("language", lang);
      document.documentElement.setAttribute("lang", lang);

      // Update text content
      updateLanguage(lang);
    });
  });

  function updateLanguage(lang) {
    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
  }

  const themeSwitch = document.getElementById("themeSwitch");

  themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode")
    );
  });

  // Check for saved theme preference
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;

      card.style.transform = `perspective(4000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.022, 1.022, 1.022)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(4000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
  });

  // Particle background effect
  const createParticleBackground = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);

    let particles = [];
    const particleCount = 50;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;

        // Choose color based on theme
        this.color = document.body.classList.contains("dark-mode")
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(0, 50, 100, 0.1)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = document.body.classList.contains("dark-mode")
              ? `rgba(100, 150, 255, ${opacity * 0.2})`
              : `rgba(0, 50, 100, ${opacity * 0.1})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    }

    // Update particle colors when theme changes
    themeSwitch.addEventListener("click", () => {
      particles.forEach((particle) => {
        particle.color = document.body.classList.contains("dark-mode")
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(0, 50, 100, 0.1)";
      });
    });

    initParticles();
    animate();
  };
  // Create particle background if the browser has enough performance
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    createParticleBackground();
  }

  const contactButton = document.getElementById("contactButton");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.querySelector(".close-modal");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactButton.addEventListener("click", () => {
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close modal when close button is clicked
  closeModal.addEventListener("click", () => {
    contactModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Close modal when clicking outside the modal content
  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Handle form submission
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === "en" ? "Sending..." : "Skickar...";
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://formspree.io/f/xyzezpnb", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      formStatus.textContent =
        currentLang === "en"
          ? "Message sent successfully!"
          : "Meddelandet har skickats!";
      formStatus.className = "form-status success";
      contactForm.reset();

      // Hide success message and close modal after 3 seconds
      setTimeout(() => {
        formStatus.style.display = "none";
        contactModal.classList.remove("active");
        document.body.style.overflow = "";
      }, 3000);
    } catch (error) {
      // Error sending email
      formStatus.textContent =
        currentLang === "en"
          ? "Failed to send message. Please try again."
          : "Det gick inte att skicka meddelandet. Försök igen.";
      formStatus.className = "form-status error";
    } finally {
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  // Add ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && contactModal.classList.contains("active")) {
      contactModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  function initCollapsibleContent() {
    const projectDescriptions = document.querySelectorAll(".project-content p");

    projectDescriptions.forEach((paragraph) => {
      if (paragraph.textContent.length > 20) {
        // Create wrapper for the collapsible content
        const wrapper = document.createElement("div");
        wrapper.className = "collapsible-wrapper";

        // Create the collapsible content container
        const collapsible = document.createElement("div");
        collapsible.className = "collapsible-content";

        // Move the paragraph into the collapsible div
        paragraph.parentNode.insertBefore(wrapper, paragraph);
        collapsible.appendChild(paragraph);
        wrapper.appendChild(collapsible);

        // Create the toggle button
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "toggle-btn";
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
        wrapper.appendChild(toggleBtn);

        // Add click event to toggle button
        toggleBtn.addEventListener("click", () => {
          collapsible.classList.toggle("expanded");
          toggleBtn.classList.toggle("expanded");
        });
      }
    });
  }
  initCollapsibleContent();
});
