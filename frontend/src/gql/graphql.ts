/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CatModel = {
  __typename?: 'CatModel';
  age: Scalars['Int']['output'];
  breed?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CatRequest = {
  age: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCat: Scalars['String']['output'];
  createCat: Scalars['String']['output'];
  deleteCat: Scalars['String']['output'];
  updateCat: Scalars['String']['output'];
};


export type MutationAddCatArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateCatArgs = {
  input: CatRequest;
};


export type MutationDeleteCatArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateCatArgs = {
  age: Scalars['Float']['input'];
  breed: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<CatModel>;
  getCatById: CatModel;
};


export type QueryGetCatByIdArgs = {
  id: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  catAdded: Scalars['String']['output'];
};

export type GetAllCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCatsQuery = { __typename?: 'Query', getAllCats: Array<{ __typename?: 'CatModel', id: string, name: string, age: number, breed?: string | null }> };


export const GetAllCatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"breed"}}]}}]}}]} as unknown as DocumentNode<GetAllCatsQuery, GetAllCatsQueryVariables>;