import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createAuthor($author: AddAuthorInput!){
    addAuthor(author: $author) {
      id
    }
  }
`;

export const CREATE_GAME = gql`
  mutation AddGame($game: AddGameInput!){
    addGame(game: $game) {
      id
      name
      image
      description
      price
      company
      platform
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation createReview($review: AddReviewInput!){
    addReview(review: $review) {
      id
      rating
      content
      author {
        name
        image
      }
    }
  }
`
