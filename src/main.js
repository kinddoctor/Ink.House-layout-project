const tabButtons = document.querySelectorAll('.main-content__title-tab-btn');
const tabs = document.querySelectorAll('.tab-content');

const activateElement = (element) => element.classList.add('active');
const deactivateElement = (element) => element.classList.remove('active');
const findRelatedElement = (id) => document.querySelector(`#${id}`);

tabButtons.forEach((btn) => {
  btn.addEventListener('click', ({ target }) => {
    tabButtons.forEach((el) => deactivateElement(el));
    tabs.forEach((el) => deactivateElement(el));
    const relatedTab = findRelatedElement(target.getAttribute('data-link'));
    activateElement(target);
    activateElement(relatedTab);
  });
});
