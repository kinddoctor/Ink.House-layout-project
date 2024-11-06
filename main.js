const tabButtons = document.querySelectorAll('.main-content__title-tab-btn');
const tabs = document.querySelectorAll('.tab-content');

const activateElement = (element) => element.classList.add('active');
const deactivateElement = (element) => element.classList.remove('active');
const findRelatedElement = (id) => document.querySelector(`#${id}`);

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.getElementById('extraRequirements');
  const optionCount = selectElement.options.length;
  const optionHeight = 25;
  const paddings = 10;
  selectElement.style.height = `${(optionCount * optionHeight) + paddings}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  const mdMediaQuery = window.matchMedia('(max-width: 768px)');
  function handleViewportChange(mql) {
    return mql.matches
      ? document.querySelector('.modal-header').classList.add('border-bottom')
      : document.querySelector('.modal-header').classList.remove('border-bottom');
  }
  handleViewportChange(mdMediaQuery);
  mdMediaQuery.addEventListener('change', handleViewportChange);
});

tabButtons.forEach((btn) => {
  btn.addEventListener('click', ({ target }) => {
    tabButtons.forEach((el) => deactivateElement(el));
    tabs.forEach((el) => deactivateElement(el));
    const relatedTab = findRelatedElement(target.getAttribute('data-link'));
    activateElement(target);
    activateElement(relatedTab);
  });
});
