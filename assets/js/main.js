// --------------------------------------------------
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log("clicked");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((navItem) => {
  navItem.addEventListener("click", linkAction);
});

// Show/hide skill list

const skillsList = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

skillsHeader.forEach((headerItem) => {
  headerItem.addEventListener("click", () => {
    const clickedHeader = headerItem.parentNode.className;

    for (var i = 0; i < skillsList.length; i++) {
      console.log((skillsList[i].className = "skills__content skills-close"));
    }
    if (clickedHeader == "skills__content skills-close") {
      headerItem.parentNode.className = "skills__content skills-open";
    }
  });
});

// QUALIFICATION TABS
const tabs = document.querySelectorAll("[data-target]");
const tabsContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // get the content element
    contentTarget = document.querySelector(tab.dataset.target);
    // toggle for content
    tabsContent.forEach((content) => {
      content.classList.remove("qualification__active");
    });
    contentTarget.classList.add("qualification__active");
    // toggle for section
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// Project swiper
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll active
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = document.documentElement.scrollTop;
  sections.forEach((currentSection) => {
    const currentSectionHeight = currentSection.offsetHeight;
    const currentTopHeight = currentSection.offsetTop - 50;
    const currentId = currentSection.getAttribute("id");
    if (
      scrollY > currentTopHeight &&
      scrollY <= currentSectionHeight + currentTopHeight
    ) {
      document
        .querySelector(`.nav__menu a[href='#${currentId}']`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href='#${currentId}']`)
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Submit respond Form
const contactForm = document.querySelector("#submitContactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#name").value;
  const email = $("#email").value;
  const message = $("#message").value;
  window.alert(`
    Underdeveloped!
    Receive Information {
      Name: ${name},
      Email: ${email},
      Message: ${message}
    }
  `);
});

// Show croll top button
const scrollTopBtn = document.querySelector("#scroll-top");

const showScrollTop = () => {
  if (this.scrollY >= 560) {
    scrollTopBtn.classList.add("show-scroll");
  } else if (this.scrollY < 560) {
    scrollTopBtn.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", showScrollTop);

//  Project modal

const projectModalView = document.querySelectorAll(".project__modal");
const projectModalClose = document.querySelectorAll(".project-modal__close");
const projectModalButton = document.querySelectorAll(".show-detail__button");

// console.log(projectModalView[0].classList.remove("show-project-modal"));
projectModalButton.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    showProjectModal(index);
  });
});
const showProjectModal = (projectIndex) => {
  projectModalView[projectIndex].classList.add("show-project-modal");
};

const hideProjectModal = () => {
  projectModalView.forEach((project) => {
    project.classList.remove("show-project-modal");
  });
};

projectModalClose.forEach((closeBtn) => {
  closeBtn.addEventListener("click", hideProjectModal);
});
