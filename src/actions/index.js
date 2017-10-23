// this is an action creator
// action creators return actions
// actions tell reducers to update in a specific fashion

export const selectLibrary = libraryId => {
  return {
    // type is an action
    type: 'select_library',
    payload: libraryId
  }
}
