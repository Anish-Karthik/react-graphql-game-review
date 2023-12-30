import { gql } from "@apollo/client";

export const GET_GAMES = gql`
  query getGames {
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

export const GET_MYREVIEWS = gql`
  query getMyReviews($authorId: ID!){
    author(id: $authorId) {
      name
      image
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

export const GET_GAME_WITH_REVIEWS = gql`
  query getGameReviews($gameId: ID!) {
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