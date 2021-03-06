import React, { useState, useRef } from "react";
// Import Styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import Data
import data from "./data";


function App() {
  // Reference
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // Find Handlers below
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration * 100));
    console.log(animation);

    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animation });
    // set Volume
    // audioRef.current.volume(50 %)

  }
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} setSongs={setSongs} />
      <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
