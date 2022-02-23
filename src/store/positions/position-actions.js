const ADD_POSITIONS = "ADD_POSITIONS";

const addPosition = (positions) => ({
  type: ADD_POSITIONS,
  positions,
});

export { ADD_POSITIONS, addPosition };
