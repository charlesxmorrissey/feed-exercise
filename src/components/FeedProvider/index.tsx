import React, { createContext, useReducer } from 'react'

import { FeedContextType, InitialStateType, PostActions } from 'constant'
import { feedReducer } from 'reducers'

const initialState = {
  posts: [],
}

export const FeedContext = createContext<FeedContextType>({
  dispatch: () => null,
  state: initialState,
})

interface Props {
  children: React.ReactNode
}

const rootReducer = ({ posts }: InitialStateType, action: PostActions) => ({
  posts: feedReducer(posts, action),
})

export const FeedProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <FeedContext.Provider value={{ dispatch, state }}>
      {children}
    </FeedContext.Provider>
  )
}
