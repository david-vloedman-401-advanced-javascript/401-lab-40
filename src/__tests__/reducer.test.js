import reducer from '../state/store/todo-reducer.js';

describe('Reducer Testing', () => {
  it('performs a GET request succesfully', () => {
    let initialState = {};
    let action = {
      type: 'GET',
      payload: 'foo'
    };
    expect(reducer(initialState, action)).toEqual({ todoList: action.payload });
  });

  it('performs a POST request succesfully', () => {
    let initialState = { todoList: '' };
    let action = {
      type: 'POST',
      payload: 'foo'
    };
    expect(reducer(initialState, action)).toEqual({
      todoList: [action.payload]
    });
  });

  it('performs a DELETE request succesfully', () => {
    let initialState = {
      todoList: [
        {
          _id: 1,
          difficulty: 4,
          complete: false,
          text: 'Homework',
          assignee: 'Natalie',
          due: '2020-03-08'
        }
      ]
    };
    let action = {
      type: 'DELETE',
      payload: {
        _id: 1,
        difficulty: 4,
        complete: false,
        text: 'Homework',
        assignee: 'Natalie',
        due: '2020-03-08'
      }
    };
    expect(reducer(initialState, action)).toEqual({
      todoList: [action.payload]
    });
  });

  it('does a TOGGLE right', () => {
    let initialState = {
      todoList: [
        {
          _id: 1,
          difficulty: 4,
          complete: false,
          text: 'Homework',
          assignee: 'Natalie',
          due: '2020-03-08'
        }
      ]
    };
    let action = {
      type: 'TOGGLE',
      payload: {
        _id: 1,
        difficulty: 4,
        complete: false,
        text: 'Homework',
        assignee: 'Natalie',
        due: '2020-03-08'
      }
    };
    expect(reducer(initialState, action)).toEqual({
      todoList: [action.payload]
    });
  });
});
