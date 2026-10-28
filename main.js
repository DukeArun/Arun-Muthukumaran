const galleryItems = [
  { src: 'assets/gallery/guided-coding.jpeg', alt: 'Educator guiding students as they work on a laptop', caption: 'Guided coding', category: 'learning' },
  { src: 'assets/gallery/robotics-demo.jpeg', alt: 'Students watching a robotics project demonstration', caption: 'Robotics demonstration', category: 'learning' },
  { src: 'assets/gallery/robot-project.jpeg', alt: 'Students gathered around a robot they are testing', caption: 'Testing a robot project', category: 'learning' },
  { src: 'assets/gallery/robot-arena.jpeg', alt: 'Students watching robots on a practice arena', caption: 'Robot arena activity', category: 'learning' },
  { src: 'assets/gallery/laptop-guidance.jpeg', alt: 'Educator helping students at a laptop', caption: 'Learning together', category: 'learning' },
  { src: 'assets/gallery/robot-demonstration.jpeg', alt: 'Students watching a small robot demonstration', caption: 'Robot demonstration', category: 'learning' },
  { src: 'assets/gallery/educator-workshop.jpeg', alt: 'Educator leading a technology workshop for adults', caption: 'Educator workshop', category: 'learning' },
  { src: 'assets/gallery/technology-class.jpeg', alt: 'Students attending a technology lesson', caption: 'Technology class', category: 'learning' },
  { src: 'assets/gallery/computer-lab-group.jpeg', alt: 'Students and educators in a computer lab', caption: 'Computer lab', category: 'learning' },
  { src: 'assets/gallery/stem-projects-group.jpeg', alt: 'Students presenting their STEM projects', caption: 'STEM projects', category: 'learning' },
  { src: 'assets/gallery/robot-activity.jpeg', alt: 'Students watching a robot activity', caption: 'Robot activity', category: 'learning' },
  { src: 'assets/gallery/stem-class-group.jpeg', alt: 'Students and educators after a STEM session', caption: 'STEM session', category: 'learning' },
  { src: 'assets/gallery/class-project-group.jpeg', alt: 'Students sharing their classroom projects', caption: 'Class projects', category: 'learning' },
  { src: 'assets/gallery/robot-closeup.jpeg', alt: 'Students looking closely at a robot they built', caption: 'Exploring a robot', category: 'learning' },
  { src: 'assets/gallery/coding-workshop.jpeg', alt: 'Students learning coding during a workshop', caption: 'Coding workshop', category: 'learning' },
  { src: 'assets/gallery/coding-lesson.jpeg', alt: 'Educator presenting a coding lesson to students', caption: 'Coding lesson', category: 'learning' },
  { src: 'assets/gallery/classroom-session.jpeg', alt: 'Students following a classroom session', caption: 'Classroom session', category: 'learning' },
  { src: 'assets/gallery/robotics-introduction.jpeg', alt: 'Educator introducing robotics to students', caption: 'Robotics introduction', category: 'learning' },
  { src: 'assets/gallery/hands-on-project.jpeg', alt: 'Educator and students working together on a project', caption: 'Hands-on project', category: 'learning' },
  { src: 'assets/gallery/stem-presentation.jpeg', alt: 'Educator presenting STEM concepts', caption: 'STEM presentation', category: 'learning' },
  { src: 'assets/gallery/robot-guidance.jpeg', alt: 'Students receiving guidance while working with a robot', caption: 'Guided robot practice', category: 'learning' },
  { src: 'assets/gallery/face-detection-lesson.jpeg', alt: 'Students attending a lesson about face detection', caption: 'Face detection lesson', category: 'learning' },
  { src: 'assets/gallery/student-robot-practice.jpeg', alt: 'Students trying a robot activity together', caption: 'Robot practice', category: 'learning' },
  { src: 'assets/gallery/robotics-lab.jpeg', alt: 'Students learning in a robotics computer lab', caption: 'Robotics lab', category: 'learning' },
  { src: 'assets/gallery/achievements/codeavour-01.jpeg', alt: 'Students and educators at Codeavour 7.0 with certificates', caption: 'Codeavour 7.0 · Certificate recipients', category: 'awards' },
  { src: 'assets/gallery/achievements/codeavour-02.jpeg', alt: 'Students holding certificates at Codeavour 7.0', caption: 'Codeavour 7.0 · Student participants', category: 'awards' },
  { src: 'assets/gallery/achievements/codeavour-03.jpeg', alt: 'Student team with certificates at Codeavour 7.0', caption: 'Codeavour 7.0 · Student team', category: 'awards' },
  { src: 'assets/gallery/achievements/codeavour-04.jpeg', alt: 'Students and mentor at the Codeavour 7.0 event', caption: 'Codeavour 7.0 · Certificate recipients', category: 'awards' },
  { src: 'assets/gallery/achievements/codeavour-05.jpeg', alt: 'A large group of student participants at Codeavour 7.0', caption: 'Codeavour 7.0 · Participants', category: 'awards' },
  { src: 'assets/gallery/achievements/strive-awards-01.jpg', alt: 'Students receiving a STRIVE Track Pioneer award', caption: 'STRIVE · Track Pioneer · 1st place', category: 'awards' },
  { src: 'assets/gallery/achievements/strive-awards-02.jpg', alt: 'Students receiving a STRIVE Cyber Spectacle award', caption: 'STRIVE · Cyber Spectacle · 1st place', category: 'awards' },
  { src: 'assets/gallery/achievements/strive-awards-03.jpg', alt: 'Students holding their STRIVE Track Pioneer award', caption: 'STRIVE · Track Pioneer · 2nd place', category: 'awards' },
  { src: 'assets/gallery/achievements/strive-awards-04.jpg', alt: 'Students receiving a STRIVE Robo Warrior award', caption: 'STRIVE · Robo Warrior · 1st place', category: 'awards' },
  { src: 'assets/gallery/achievements/sjce-awards-01.jpg', alt: 'Students at an award presentation at St. Joseph’s College of Engineering', caption: 'St. Joseph’s College of Engineering · Award presentation', category: 'awards' },
  { src: 'assets/gallery/achievements/sjce-awards-02.jpg', alt: 'Student award recipients at a college competition', caption: 'College competition · Student award recipients', category: 'awards' },
  { src: 'assets/gallery/achievements/sjce-awards-03.jpg', alt: 'Students holding certificates at St. Joseph’s College of Engineering', caption: 'St. Joseph’s College of Engineering · Certificates', category: 'awards' },
  { src: 'assets/gallery/achievements/technova-winners.jpg', alt: 'Student robotics team with their project at Tech Nova', caption: 'Tech Nova · Robotics competition winners', category: 'awards' },
  { src: 'assets/gallery/achievements/saram-project-expo-winners.jpg', alt: 'Students holding certificates and an award cheque at SARAM Project Expo', caption: 'SARAM Project Expo · Winners', category: 'awards' }
];

const gallery = document.querySelector('#gallery-grid');
const count = document.querySelector('#gallery-count');
const filters = [...document.querySelectorAll('.filter-button')];
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
let currentFilter = 'all';
let currentVisibleItems = [];
let currentImageIndex = 0;

function renderGallery() {
  currentVisibleItems = galleryItems.filter((item) => currentFilter === 'all' || item.category === currentFilter);
  count.textContent = String(currentVisibleItems.length);
  gallery.replaceChildren(...currentVisibleItems.map((item, index) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-card';
    const button = document.createElement('button');
    button.className = 'gallery-open';
    button.type = 'button';
    button.setAttribute('aria-label', `Open photo: ${item.caption}`);
    button.addEventListener('click', () => openLightbox(index));
    const image = document.createElement('img');
    image.src = item.src;
    image.alt = item.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    const caption = document.createElement('figcaption');
    caption.textContent = item.caption;
    button.append(image);
    figure.append(button, caption);
    return figure;
  }));
}

function openLightbox(index) {
  currentImageIndex = index;
  const item = currentVisibleItems[currentImageIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
  lightbox.showModal();
}

function stepLightbox(direction) {
  currentImageIndex = (currentImageIndex + direction + currentVisibleItems.length) % currentVisibleItems.length;
  const item = currentVisibleItems[currentImageIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
}

filters.forEach((button) => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  filters.forEach((filter) => {
    const active = filter === button;
    filter.classList.toggle('is-active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  renderGallery();
}));

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => stepLightbox(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') stepLightbox(-1);
  if (event.key === 'ArrowRight') stepLightbox(1);
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}));

document.querySelector('#year').textContent = String(new Date().getFullYear());
renderGallery();
