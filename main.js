const scrollContainer = document.querySelector('.gallery');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', event => {
  event.preventDefault();
  scrollContainer.style.scrollBehavior = 'auto';
  scrollContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth';
  scrollContainer.scrollLeft -= 900;
});
