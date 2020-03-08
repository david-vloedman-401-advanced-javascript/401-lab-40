import thunk from "redux-thunk";
import configMockStore from "redux-mock-store";
import * as actions from "../state/store/todo-action";

const mockStore = configMockStore([thunk]);

xdescribe("Normal Action Creators", () => {
  it("should create a FAKE action", () => {
    const store = mockStore({});
    const expectedAction = [
      {
        type: "POST",
        payload: "foo"
      }
    ];

    store.dispatch(actions.post("foo"));
    let dispatchedActions = store.getActions();

    expect(dispatchedActions).toEqual(expectedAction);
  });
});

describe("async Action Creator", () => {
  it("should create a GET action", () => {
    const store = mockStore({ results: [] });
    return store.dispatch(actions._getTodoItems()).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual("GET");
    });
  });
});
