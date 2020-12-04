export default function Storage(initialState) {
  const state = initialState;

  function getState(prop) {
    return state[prop];
  }

  function setState(prop, value) {
    state[prop] = value;
  }

  return {
    ...state,
    getState,
    setState,
  };
}
