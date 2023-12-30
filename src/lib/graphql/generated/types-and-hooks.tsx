import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddAuthorInput = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};

export type AddGameInput = {
  company: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  platform: Array<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type AddReviewInput = {
  authorId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  gameId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  reviews?: Maybe<Array<Review>>;
  userId: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type Game = {
  __typename?: 'Game';
  company: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  platform: Array<Platform>;
  price: Scalars['Float']['output'];
  reviews?: Maybe<Array<Review>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor: Author;
  addGame: Game;
  addReview: Review;
  deleteAuthor: Author;
  deleteGame: Game;
  deleteReview: Review;
  updateAuthor: Author;
  updateGame: Game;
  updateReview: Review;
};


export type MutationAddAuthorArgs = {
  author: AddAuthorInput;
};


export type MutationAddGameArgs = {
  game: AddGameInput;
};


export type MutationAddReviewArgs = {
  review: AddReviewInput;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAuthorArgs = {
  author: UpdateAuthorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGameArgs = {
  game: UpdateGameInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID']['input'];
  review: UpdateReviewInput;
};

export enum Platform {
  Android = 'Android',
  Ios = 'IOS',
  Nintendo = 'Nintendo',
  Other = 'Other',
  Pc = 'PC',
  Playstation = 'Playstation',
  Xbox = 'Xbox'
}

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Author>;
  game: Game;
  games: Array<Game>;
  review: Review;
  reviews: Array<Review>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: Author;
  content: Scalars['String']['output'];
  game: Game;
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
};

export type UpdateAuthorInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGameInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateReviewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateAuthorMutationVariables = Exact<{
  author: AddAuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', addAuthor: { __typename?: 'Author', id: string } };

export type AddGameMutationVariables = Exact<{
  game: AddGameInput;
}>;


export type AddGameMutation = { __typename?: 'Mutation', addGame: { __typename?: 'Game', id: string, name: string, image: string, description: string, price: number, company: string, platform: Array<Platform> } };

export type CreateReviewMutationVariables = Exact<{
  review: AddReviewInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', addReview: { __typename?: 'Review', id: string, rating: number, content: string, author: { __typename?: 'Author', name: string, image: string } } };

export type GetGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: string, name: string, description: string, image: string, price: number, platform: Array<Platform>, company: string }> };

export type GetAuthorQueryVariables = Exact<{
  authorId: Scalars['ID']['input'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: string } };

export type MyReviewsQueryVariables = Exact<{
  authorId: Scalars['ID']['input'];
}>;


export type MyReviewsQuery = { __typename?: 'Query', author: { __typename?: 'Author', reviews?: Array<{ __typename?: 'Review', id: string, rating: number, content: string, game: { __typename?: 'Game', id: string, name: string, image: string, company: string, description: string, price: number, platform: Array<Platform> } }> | null } };

export type GetGameReviewsQueryVariables = Exact<{
  gameId: Scalars['ID']['input'];
}>;


export type GetGameReviewsQuery = { __typename?: 'Query', game: { __typename?: 'Game', id: string, name: string, image: string, company: string, description: string, price: number, platform: Array<Platform>, reviews?: Array<{ __typename?: 'Review', content: string, rating: number, author: { __typename?: 'Author', name: string, image: string } }> | null } };


export const CreateAuthorDocument = gql`
    mutation createAuthor($author: AddAuthorInput!) {
  addAuthor(author: $author) {
    id
  }
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      author: // value for 'author'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const AddGameDocument = gql`
    mutation AddGame($game: AddGameInput!) {
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
    `;
export type AddGameMutationFn = Apollo.MutationFunction<AddGameMutation, AddGameMutationVariables>;

/**
 * __useAddGameMutation__
 *
 * To run a mutation, you first call `useAddGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGameMutation, { data, loading, error }] = useAddGameMutation({
 *   variables: {
 *      game: // value for 'game'
 *   },
 * });
 */
export function useAddGameMutation(baseOptions?: Apollo.MutationHookOptions<AddGameMutation, AddGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGameMutation, AddGameMutationVariables>(AddGameDocument, options);
      }
export type AddGameMutationHookResult = ReturnType<typeof useAddGameMutation>;
export type AddGameMutationResult = Apollo.MutationResult<AddGameMutation>;
export type AddGameMutationOptions = Apollo.BaseMutationOptions<AddGameMutation, AddGameMutationVariables>;
export const CreateReviewDocument = gql`
    mutation createReview($review: AddReviewInput!) {
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
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const GetGamesDocument = gql`
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

/**
 * __useGetGamesQuery__
 *
 * To run a query within a React component, call `useGetGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGamesQuery(baseOptions?: Apollo.QueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
      }
export function useGetGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export function useGetGamesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export type GetGamesQueryHookResult = ReturnType<typeof useGetGamesQuery>;
export type GetGamesLazyQueryHookResult = ReturnType<typeof useGetGamesLazyQuery>;
export type GetGamesSuspenseQueryHookResult = ReturnType<typeof useGetGamesSuspenseQuery>;
export type GetGamesQueryResult = Apollo.QueryResult<GetGamesQuery, GetGamesQueryVariables>;
export const GetAuthorDocument = gql`
    query getAuthor($authorId: ID!) {
  author(id: $authorId) {
    id
  }
}
    `;

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useGetAuthorQuery(baseOptions: Apollo.QueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
      }
export function useGetAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
        }
export function useGetAuthorSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
        }
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>;
export type GetAuthorLazyQueryHookResult = ReturnType<typeof useGetAuthorLazyQuery>;
export type GetAuthorSuspenseQueryHookResult = ReturnType<typeof useGetAuthorSuspenseQuery>;
export type GetAuthorQueryResult = Apollo.QueryResult<GetAuthorQuery, GetAuthorQueryVariables>;
export const MyReviewsDocument = gql`
    query myReviews($authorId: ID!) {
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
    `;

/**
 * __useMyReviewsQuery__
 *
 * To run a query within a React component, call `useMyReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyReviewsQuery({
 *   variables: {
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useMyReviewsQuery(baseOptions: Apollo.QueryHookOptions<MyReviewsQuery, MyReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyReviewsQuery, MyReviewsQueryVariables>(MyReviewsDocument, options);
      }
export function useMyReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyReviewsQuery, MyReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyReviewsQuery, MyReviewsQueryVariables>(MyReviewsDocument, options);
        }
export function useMyReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MyReviewsQuery, MyReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyReviewsQuery, MyReviewsQueryVariables>(MyReviewsDocument, options);
        }
export type MyReviewsQueryHookResult = ReturnType<typeof useMyReviewsQuery>;
export type MyReviewsLazyQueryHookResult = ReturnType<typeof useMyReviewsLazyQuery>;
export type MyReviewsSuspenseQueryHookResult = ReturnType<typeof useMyReviewsSuspenseQuery>;
export type MyReviewsQueryResult = Apollo.QueryResult<MyReviewsQuery, MyReviewsQueryVariables>;
export const GetGameReviewsDocument = gql`
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
    `;

/**
 * __useGetGameReviewsQuery__
 *
 * To run a query within a React component, call `useGetGameReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameReviewsQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGetGameReviewsQuery(baseOptions: Apollo.QueryHookOptions<GetGameReviewsQuery, GetGameReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGameReviewsQuery, GetGameReviewsQueryVariables>(GetGameReviewsDocument, options);
      }
export function useGetGameReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGameReviewsQuery, GetGameReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGameReviewsQuery, GetGameReviewsQueryVariables>(GetGameReviewsDocument, options);
        }
export function useGetGameReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGameReviewsQuery, GetGameReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGameReviewsQuery, GetGameReviewsQueryVariables>(GetGameReviewsDocument, options);
        }
export type GetGameReviewsQueryHookResult = ReturnType<typeof useGetGameReviewsQuery>;
export type GetGameReviewsLazyQueryHookResult = ReturnType<typeof useGetGameReviewsLazyQuery>;
export type GetGameReviewsSuspenseQueryHookResult = ReturnType<typeof useGetGameReviewsSuspenseQuery>;
export type GetGameReviewsQueryResult = Apollo.QueryResult<GetGameReviewsQuery, GetGameReviewsQueryVariables>;