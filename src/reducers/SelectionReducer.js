export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      // this will retun library id
      return action.payload
    default:
      // if action is not of type 'select_library' then return original state
      return state
  }
}
