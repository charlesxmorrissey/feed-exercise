import React from 'react'

import { FeedContext } from 'components/FeedProvider'
import { FeedContextType } from 'constant'

export const useFeedContext = (): FeedContextType =>
  React.useContext(FeedContext)
