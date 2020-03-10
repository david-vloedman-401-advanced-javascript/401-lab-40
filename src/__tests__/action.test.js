import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import * as actions from '../state/store/todo-action.js';

const mockStore = configMockStore([thunk]);
// Credit Travis Skyles for tests
describe('Normal Action Creators', () => {
  it('should create a GET action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'GET',
      payload: 'foo'
    };

    store.dispatch(actions.get('foo'));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it('should create a post action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'POST',
      payload: 'foo'
    };

    store.dispatch(actions.post('foo'));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it('should create a DELETE action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'DELETE',
      payload: 'foo'
    };

    store.dispatch(actions.destroy('foo'));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it('should create a GET action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'GET',
      payload: 'foo'
    };

    store.dispatch(actions.get('foo'));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it('should create a toggle action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'TOGGLE',
      payload: 'foo'
    };

    store.dispatch(actions._toggle('foo'));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });

  it('should create a DETAILS action', () => {
    const store = mockStore({ results: [] });
    const expectedAction = {
      type: 'DETAILS',
      payload: 'foo'
    };

    store.dispatch(actions.details('foo'));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions[0]).toEqual(expectedAction);
  });
});
