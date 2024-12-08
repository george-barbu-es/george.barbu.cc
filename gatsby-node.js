var fs = require('fs-extra');
var path = require('path');
const {
  createDefaultImageResolver,
} = require(`gatsby-plugin-image/graphql-utils`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: ['**/node_modules', '**/public'],
    },
    resolve: {
      fallback: {
        fs: false,
        net: false,
        tls: false,
      },
    },
  });
};

exports.onPostBuild = (pages, callback) => {
  // Copy profile.
  fs.copySync(
    path.join(__dirname, '/data'),
    path.join(__dirname, '/public/api')
  );
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;

  // Create a custom field extension for image data
  createFieldExtension({
    name: `imageResolver`,
    extend() {
      return {
        resolve: createDefaultImageResolver(),
      };
    },
  });

  // Define explicit types to prevent schema conflicts
  createTypes(`
    scalar Date
    scalar JSON

    type CloudinaryMedia implements Node {
      id: ID!
      asset_id: String
      public_id: String
      gatsbyImageData: JSON @imageResolver
    }

    type SiteMetadata {
      title: String
      description: String
      author: String
      siteUrl: String
    }
  `);
};

// Optional: Handle potential node creation issues
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeId, createContentDigest } = actions;
};
