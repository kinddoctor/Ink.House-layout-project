const tabButtons = document.querySelectorAll('.main-content__title-tab-btn');
const tabs = document.querySelectorAll('.tab-content');
const deactivateElements = (elements) => elements.forEach((el) => el.classList.remove('active'));
const activateElement = (element) => element.classList.add('active');
const findRelatedTab = (id) => document.querySelector(`#${id}`);

tabButtons.forEach((btn) => {
  btn.addEventListener('click', ({ target }) => {
    deactivateElements(tabButtons);
    activateElement(target);
    deactivateElements(tabs);
    activateElement(findRelatedTab(target.getAttribute('data-link')));
  });
});
