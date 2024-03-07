export const initialState = {
  user: true,
  groupBy: "status",
  sortBy: "title",
};

const reducer = (state, action) => {
  // console.log('Action:', action.type, action)
  switch (action.type) {
    case "GENERAL":
      return {
        ...state,
        ...action?.data,
      };
    case "CHANGE_GROUP_BY":
      return {
        ...state,
        groupBy: action.groupBy,
      };
    case "CHANGE_SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case "SET_TICKETS_DATA":
      return {
        ...state,
        taskData: action.taskData,
      };
    default:
      return state;
  }
};

export default reducer;
