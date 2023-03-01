import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CameraIcon from 'assets/camera.svg'
import VideoIcon from 'assets/video.svg'
import { PostActionTypes } from 'constant'
import { useFeedContext } from 'hooks'

import styles from './PostForm.module.css'

const PostForm = () => {
  const { dispatch } = useFeedContext()
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(true)
  const [postValue, setPostValue] = useState<string>('')

  const handleCreatePost = (e: React.SyntheticEvent) => {
    e.preventDefault()

    dispatch({
      payload: {
        comments: [],
        createdAt: new Date(),
        hype: false,
        id: uuidv4(),
        text: postValue,
      },
      type: PostActionTypes.CreatePost,
    })

    setPostValue('')
    setIsSubmitButtonDisabled(true)
  }

  const handleInputOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim().length) {
      setIsSubmitButtonDisabled(true)
    } else {
      setIsSubmitButtonDisabled(false)
    }

    setPostValue(e.currentTarget.value)
  }

  return (
    <form className={styles.postForm} onSubmit={handleCreatePost}>
      <div className={styles.postFormContainer}>
        <input
          className={styles.postFormInput}
          name='postValue'
          onChange={handleInputOnChange}
          placeholder="What's on your mind?"
          type='text'
          value={postValue}
        />

        <div className={styles.postFormActionsWrapper}>
          <div className={styles.postFormSecondaryActions}>
            <button
              className={styles.postFormSecondaryActionButton}
              type='button'
            >
              <CameraIcon className={styles.postFormIcon} />
              Add Media
            </button>

            <button
              className={styles.postFormSecondaryActionButton}
              type='button'
            >
              <VideoIcon className={styles.postFormIcon} />
              Go Live
            </button>
          </div>

          <button
            className={styles.postFormSubmitButton}
            disabled={isSubmitButtonDisabled}
            type='submit'
          >
            Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostForm
