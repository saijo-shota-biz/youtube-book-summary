const path = require("path");
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allYoutubeVideo {
        edges {
          node {
            thumbnail {
              url
              height
              width
            }
            title
            videoId
            publishedAt
            id
            description
            channelTitle
            channelId
          }
        }
      }
    }
  `);

  const videos = result.data.allYoutubeVideo.edges;

  [...new Set(videos.map(({ node }) => node.channelId))]
    .map(channelId => ({
      channelId,
      videos: videos.filter(({ node }) => node.channelId === channelId).map(({ node }) => node),
    }))
    .forEach(channel => {
      createPage({
        path: `/channel/${channel.channelId}`,
        component: path.resolve("./src/template/Test.tsx"),
        context: {
          videos: channel.videos,
        },
      });
    });
};
