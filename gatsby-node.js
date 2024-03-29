const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug
//     })
//   }
// }
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulBlog {
        edges{
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/single-blog.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
