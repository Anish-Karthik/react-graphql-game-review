import { gql } from "@apollo/client";

export const GET_GAMES = gql`
  query GetGames {
    games {
      id
      name
      description
      image
      price
      platform
      company
    }
  }
`;

export const GET_USER = gql`
  query getAuthor($authorId: ID!) {
    author(id: $authorId) {
      id
    }
  }
`;

export const GET_MyReviews = gql`
  query myReviews($authorId: ID!){
    author(id: $authorId) {
      reviews {
        id
        game {
          id
          name
          image
          company
          description
          price
          platform
        }
        rating
        content
      }
    }
  }
`

export const GET_GAME = gql`
  query GameReviewsQuery($gameId: ID!) {
    game(id: $gameId) {
      id
      name
      image
      company
      description
      price
      platform
      reviews {
        author {
          name
          image
        }
        content
        rating
      }
    }
  }
`