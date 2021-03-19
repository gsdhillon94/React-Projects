const initialState = {};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("task added");
      return state;
    case "ERROR":
      console.log("eoor here");
      return state;
    default:
      return state;
  }
};

export default taskReducer;
