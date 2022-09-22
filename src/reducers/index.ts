import { PostActionTypes, PostActions, PostType } from 'constant'

export const feedReducer = (state: PostType[], action: PostActions) => {
  const { payload, type } = action

  switch (type) {
    case PostActionTypes.AddComment:
      return state.map((post) => {
        if (post.id === payload.postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                createdAt: payload.createdAt,
                hype: payload.hype,
                id: payload.id,
                postId: payload.postId,
                text: payload.text,
              },
            ],
          }
        }

        return post
      })

    case PostActionTypes.CreatePost:
      return [
        ...state,
        {
          comments: payload.comments,
          createdAt: payload.createdAt,
          hype: payload.hype,
          id: payload.id,
          text: payload.text,
        },
      ]

    case PostActionTypes.LikeComment:
      return state.map((post) => {
        const postComments = post.comments.map((comment) => {
          if (comment.id === payload.id) {
            return {
              ...comment,
              hype: payload.hype,
            }
          }

          return comment
        })

        return {
          ...post,
          comments: [...postComments],
        }
      })

    case PostActionTypes.LikePost:
      return state.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            hype: payload.hype,
          }
        }

        return post
      })

    default:
      return state
  }
}
