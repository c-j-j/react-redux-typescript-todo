const Page = {
  openPage(page) {
    browser.url(`http://localhost:3000/${page}`);
  }
};

const TODO_ITEMS_CONTAINER = '[data-id="todo-items"]';
const TODO_ITEM_INPUT = 'input';
const TODO_ITEM_FORM = 'form';

module.exports = {
  open() {
    Page.openPage('/');
  },

  setTodoItemInput(input) {
    $(TODO_ITEM_INPUT).setValue(input);
  },

  submit() {
    browser.submitForm(TODO_ITEM_FORM);
  },

  getTodoItemAtPosition(index) {
    return browser.elements(`${TODO_ITEMS_CONTAINER} *:nth-child(${index})`).getText()
  }
};
