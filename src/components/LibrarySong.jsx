import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
    // Handlers
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // Add Active State
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song, active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        // found people online saying that this solution is actually better, since backend wont add labels such as active, and its a better approach to have front end just match ID's, than to rely on backend. className={`library-song ${song.id === currentSong.id ? "selected" : ""} `}
        setSongs(newSongs);
        // check if song is playing, also I need to spend more time on Promise to understand it better
        if (isPlaying) audioRef.current.play();
    };
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;