import { Dispatch } from 'react'

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { payload: M[Key]; type: Key }
}

type PostLikeType = {
  hype: boolean
  id: string
}

interface PostPayload {
  [PostActionTypes.AddComment]: PostCommentType
  [PostActionTypes.CreatePost]: PostType
  [PostActionTypes.LikeComment]: PostLikeType
  [PostActionTypes.LikePost]: PostLikeType
}

export const AvatarImageSize = {
  comment: 40,
  post: 60,
}

export enum PostActionTypes {
  AddComment = 'ADD_COMMENT',
  CreatePost = 'CREATE_POST',
  LikeComment = 'LIKE_COMMENT',
  LikePost = 'LIKE_POST',
}

export type PostActions = ActionMap<PostPayload>[keyof ActionMap<PostPayload>]

export interface PostType {
  comments: PostCommentType[]
  createdAt: Date
  hype: boolean
  id: string
  text: string
}

export interface PostCommentType {
  createdAt: Date
  hype: boolean
  id: string
  postId: string
  text: string
}

export interface FeedContextType {
  dispatch: Dispatch<PostActions>
  state: InitialStateType
}

export type InitialStateType = {
  posts: PostType[]
}
