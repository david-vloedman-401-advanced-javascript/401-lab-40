import reducer from "../state/store/todo-reducer";

xdescribe("Our Reducer", () => {
  it("does a GET right", () => {
    let initialState = {};
    let action = {
      type: "GET",
      payload: { name: "calvin" }
    };

    let expected = {
      todoList: action.payload
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
