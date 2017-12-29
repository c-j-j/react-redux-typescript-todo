const TodoPage = require('./page-objects/todo.page');

describe('TodoPage', () => {
  it('adds a todo item', () => {
    TodoPage.open();
    TodoPage.setTodoItemInput('item one');
    TodoPage.submit();
    const addedItem = TodoPage.getTodoItemAtPosition(1);
    expect(addedItem).toEqual('item one');
  });
});