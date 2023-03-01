import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AddCommentIcon from 'assets/add.svg'
import CommentIcon from 'assets/comment.svg'
import { PostActionTypes } from 'constant'
import { useFeedContext } from 'hooks'

import styles from './PostCommentForm.module.css'

interface Props {
  postId: string
}

const PostCommentForm = ({ postId }: Props) => {
  const { dispatch } = useFeedContext()
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(true)
  const [commentValue, setCommentValue] = useState<string>('')

  const handleAddComment = (e: React.SyntheticEvent) => {
    e.preventDefault()

    dispatch({
      payload: {
        createdAt: new Date(),
        hype: false,
        id: uuidv4(),
        postId,
        text: commentValue,
      },
      type: PostActionTypes.AddComment,
    })

    setCommentValue('')
    setIsSubmitButtonDisabled(true)
  }

  const handleInputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim().length) {
      setIsSubmitButtonDisabled(true)
    } else {
      setIsSubmitButtonDisabled(false)
    }

    setCommentValue(e.currentTarget.value)
  }

  return (
    <form className={styles.postCommentForm} onSubmit={handleAddComment}>
      <div className={styles.postCommentInputWrapper}>
        <CommentIcon className={styles.commentIcon} />

        <input
          className={styles.postCommentInput}
          name='commentValue'
          onChange={handleInputOnChange}
          placeholder='Add comment'
          type='text'
          value={commentValue}
        />

        <button
          className={styles.postCommentSubmitButton}
          disabled={isSubmitButtonDisabled}
          type='submit'
        >
          <AddCommentIcon className={styles.commentIcon} />
        </button>
      </div>
    </form>
  )
}

export default PostCommentForm
