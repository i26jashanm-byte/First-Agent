const filters = document.querySelectorAll('.filter');
const listings = document.querySelectorAll('.listing');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((button) => button.classList.remove('active'));
    filter.classList.add('active');
    const category = filter.dataset.category;
    listings.forEach((listing) => {
      listing.hidden = category !== 'all' && listing.dataset.category !== category;
    });
  });
});

document.querySelector('#sell-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const itemName = event.currentTarget.querySelector('input').value;
  document.querySelector('#form-message').textContent = `${itemName} is ready to list — your draft has been created.`;
  event.currentTarget.reset();
});
