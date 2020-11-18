export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: "",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_JAZZ_VIBES":
      return {
        ...state,
        jazz_vibes: action.jazz_vibes,
      };
    default:
      return state;
  }
};

export default reducer;
