import classNames from 'classnames'

import CommentIcon from 'assets/comment.svg'
import HypeIcon from 'assets/hype.svg'
import ShareIcon from 'assets/share.svg'
import { PostCommentType } from 'constant'

import styles from './PostActions.module.css'

interface Props {
  comments?: PostCommentType[]
  isLiked: boolean
  onClickLike: () => void
}

const PostActions = ({ comments, isLiked, onClickLike }: Props) => (
  <ul className={styles.postActions}>
    <li className={styles.postActionItem}>
      <button
        className={classNames(styles.postActionButton, {
          [styles.postActionButtonActive]: isLiked,
        })}
        onClick={onClickLike}
        type='button'
      >
        <HypeIcon className={styles.postActionIcon} />
        <em className={styles.emphasize}>{isLiked ? 1 : 0}</em> Hypes
      </button>
    </li>

    <li className={styles.postActionItem}>
      <button className={styles.postActionButton} type='button'>
        <CommentIcon className={styles.postActionIcon} />
        <em className={styles.emphasize}>
          {comments?.length ? comments?.length : 0}
        </em>

        {comments ? `Comments` : `Replies`}
      </button>
    </li>

    <li className={styles.postActionItem}>
      <button className={styles.postActionButton} type='button'>
        <ShareIcon className={styles.postActionIcon} />
        <em className={styles.emphasize}>12</em> Shares
      </button>
    </li>

    {!!comments && (
      <li className={styles.postActionItem}>
        <button className={styles.postActionButton} type='button'>
          <em className={styles.emphasize}>100</em> Views
        </button>
      </li>
    )}
  </ul>
)

export default PostActions
