import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";

const unique = (
  array: { node: { channelId: string; channelTitle: string } }[]
): { channelId: string; channelTitle: string }[] => {
  const map = new Map<string, string>();
  array.forEach(({ node }) => {
    map.set(node.channelId, node.channelTitle);
  });
  return Array.from(map.keys()).map(channelId => ({ channelId, channelTitle: map.get(channelId) }));
};

const IndexPage = () => {
  const allChannels = getAllChannels();
  const channels = unique(allChannels.allYoutubeVideo.edges);
  return (
    <>
      <div>Home</div>
      {channels.map((channel, i) => (
        <Link key={i} to={`/channel/${channel.channelId}`}>
          {channel.channelTitle}
        </Link>
      ))}
    </>
  );
};

const getAllChannels = () =>
  useStaticQuery(graphql`
    query list {
      allYoutubeVideo {
        edges {
          node {
            channelTitle
            channelId
          }
        }
      }
    }
  `);

export default IndexPage;
