import React from "react";
import YoutubePlayerIFrame from "react-native-youtube-iframe";
import { extractStyles } from "../../utilities";
import { YoutubePlayerProps } from "./YoutubePlayerProps";

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videoId,
  playlist,
  autoplay = false,
  style,
}) => {
  const { viewStyles } = extractStyles(style);
  const defaultVideoId = "nwMUpDESXrI";

  return (
    <YoutubePlayerIFrame
      width={viewStyles.width}
      height={viewStyles.height}
      play={autoplay}
      videoId={!videoId && !playlist ? defaultVideoId : videoId}
      playList={playlist}
      webViewStyle={viewStyles}
      webViewProps={{ androidLayerType: "software" }} //Addresses a webview bug causing crashes on android: https://stackoverflow.com/a/71642894/8805150
    />
  );
};

export default YoutubePlayer;
