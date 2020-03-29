import ReactAudioPlayer from "react-audio-player";

import React, { Component } from "react";
export default class TestAudio extends Component {
  render() {
    return (
      <div>
        <ReactAudioPlayer src="http://www.iman.co.nz/audio/106.mp3" controls />
      </div>
    );
  }
}
