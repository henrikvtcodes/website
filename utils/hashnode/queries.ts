import gql from "graphql-tag";

const getPosts = gql`
  query GetUserArticles($page: Int!, $user: String!) {
    user(username: $user) {
      publication {
        posts(page: $page) {
          title
          dateAdded
          slug
          _id
        }
      }
    }
  }
`;

const getPost = gql`
  query GetUserPost($slug: String!, $baseurl: String!) {
    post(slug: $slug, hostname: $baseurl) {
      title
      coverImage
      slug
      contentMarkdown
    }
  }
`;

export const hashnodeQueries = {
  getPosts,
  getPost,
};
