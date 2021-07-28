import React, { Component, Fragment } from 'react';
import path from 'D:/tt/QAOH9547.MP4'
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl,  // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,  // 倍速播放选项
  VolumeMenuButton
} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css


class Home extends Component {
  componentDidMount() {
    console.log(this.player);
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    console.log(state)
  }

  render() {
    return (
      <Fragment>
        <div style={{ width: 500, height: 300, margin: 50 }}>
          <Player
            ref={c => {
              this.player = c;
            }}
            poster="https://video-react.js.org/assets/poster.png"
          >
            <source
              src={path}
              type="video/mp4"
            />
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <PlayToggle />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
              <VolumeMenuButton />
            </ControlBar>
          </Player>
        </div>
      </Fragment>
    )
  }
}


export default Home;