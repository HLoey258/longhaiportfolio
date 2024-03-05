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

// service modal box
const modalView = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloseBtns = document.querySelectorAll(".services__modal-close");

const showModal = (btnIndex) => {
  modalView[btnIndex].classList.add("service__modal-show");
};

modalBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    showModal(index);
  });
});

modalCloseBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalView.forEach((modalView) => {
      modalView.classList.remove("service__modal-show");
    });
  });
});

// Project swiper
let swiper = new Swiper(".projects__container", {
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
