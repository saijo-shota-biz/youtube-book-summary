import * as React from "react";
import styled from "styled-components";

const Flex = styled.ol`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const GridItem = styled.li`
  position: relative;
  width: 853px;
  height: 480px;
  margin: 30px;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TestPage = ({ pageContext }) => {
  const videoList = pageContext.videos;

  return (
    <Flex>
      {videoList.map((video, i) => (
        <GridItem key={i}>
          <Video
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Video>
        </GridItem>
      ))}
    </Flex>
  );
};

export default TestPage;
