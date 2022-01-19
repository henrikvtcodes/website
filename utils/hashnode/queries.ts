import gql from "graphql-tag";

const getPostsQuery = gql`
  query GetUserArticles($page: Int!) {
    user($username: String!) {
      publication {
        posts(page: $page) {
          title
          brief
          slug
        }
      }
    }
  }
`;

export const hashnodeQueries = {
  getPost: getPostsQuery,
};
