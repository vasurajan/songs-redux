import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: "Tu Hi Re",
            duration: "7:15"
        },
        {
            title: "Hum Tum",
            duration: "3:09"
        },
        {
            title: "Tum Hi Aana",
            duration: "4:09"
        },
        {
            title: "Katra Katra",
            duration: "6:21"
        }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})