const navLinks = document.querySelectorAll('#site-header a.nav-link');
const sections = document.querySelectorAll('main section[id]');
const revealItems = document.querySelectorAll('.section-content');

// Throttle function to limit function calls
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function updateActiveNav() {
  const scrollPosition = window.scrollY + 90;
  console.log('Scroll position:', scrollPosition);

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    console.log(`Section ${section.id}: top=${top}, bottom=${bottom}`);
    const link = document.querySelector(`#site-header a[href="#${section.id}"]`);

    if (scrollPosition >= top && scrollPosition < bottom) {
      console.log(`Activating ${section.id}`);
      link?.classList.add('active');
    } else {
      link?.classList.remove('active');
    }
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

revealItems.forEach((item) => revealObserver.observe(item));

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', throttle(updateActiveNav, 100));
window.addEventListener('DOMContentLoaded', () => {
  updateActiveNav();
});

// // Tab switching for featured projects
// const tabs = document.querySelectorAll('.tab');
// const tabContents = document.querySelectorAll('.tab-content');

// tabs.forEach((tab) => {
//   tab.addEventListener('click', () => {
//     // Remove active class from all tabs and contents
//     tabs.forEach((t) => t.classList.remove('active'));
//     tabContents.forEach((content) => content.classList.remove('active'));

//     // Add active class to clicked tab and corresponding content
//     tab.classList.add('active');
//     const targetContent = document.getElementById(tab.dataset.tab);
//     targetContent.classList.add('active');
//   });
// });

// Tab switching for featured projects (Scoped to individual folders)
const tabButtons = document.querySelectorAll('.tab');

tabButtons.forEach((tab) => {
  tab.addEventListener('click', () => {
    const currentFolder = tab.closest('.folder-tabs');
    
    const folderTabs = currentFolder.querySelectorAll('.tab');
    const folderContents = currentFolder.querySelectorAll('.tab-content');

    folderTabs.forEach((t) => t.classList.remove('active'));
    folderContents.forEach((content) => content.classList.remove('active'));

    tab.classList.add('active');
    const targetId = tab.dataset.tab;
    const targetContent = document.getElementById(targetId);
    
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("full-img");
const images = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Function to update the image in the lightbox
function updateLightbox() {
  modalImg.src = images[currentIndex].src;
}

// Open Lightbox on Click
images.forEach((img, index) => {
  img.onclick = () => {
    currentIndex = index;
    updateLightbox();
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Freeze background scroll
  };
});

// Navigation
nextBtn.onclick = (e) => {
  e.stopPropagation(); 
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
};

prevBtn.onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
};

// Close Lightbox
closeBtn.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scroll
};

// // Close if user clicks the black background (not the image)
// modal.onclick = (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
//   }
// };

// Close if user clicks the background (anything that isn't the image or buttons)
modal.onclick = (e) => {
  // If the item clicked (e.target) is the modal background or the container, close it
  if (e.target === modal || e.target.classList.contains('lightbox-container')) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
};
// Function to close the lightbox
const closeLightbox = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable background scrolling
};

// 1. Close via "X" button
closeBtn.onclick = closeLightbox;

// 2. Close via clicking the background
modal.onclick = (e) => {
  if (e.target === modal || e.target.classList.contains('lightbox-container')) {
    closeLightbox();
  }
};

// 3. Close via Escape Button
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
  
  // Optional: Left/Right arrows to navigate
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightbox();
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightbox();
    }
  }
});

