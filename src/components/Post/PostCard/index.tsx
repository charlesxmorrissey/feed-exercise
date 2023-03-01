import classNames from 'classnames'
import Image from 'next/image'
import { format } from 'timeago.js'

import MeatballIcon from 'assets/meatball.svg'
import PostActions from 'components/Post/PostActions'
import PostComments from 'components/Post/PostComments'
import {
  AvatarImageSize,
  PostActionTypes,
  PostCommentType,
  PostType,
} from 'constant'
import { useFeedContext } from 'hooks'

import styles from './PostCard.module.css'

import avatar from '/public/images/avatar.png'

export enum PostCardVariant {
  comment = 'Comment',
  default = 'Default',
}

interface Props {
  cardData: PostType | PostCommentType
  comments?: PostCommentType[]
  variant?: PostCardVariant
}

export const PostCard = ({
  cardData,
  comments,
  variant = PostCardVariant.default,
}: Props) => {
  const { dispatch } = useFeedContext()
  const { createdAt, hype, id, text } = cardData
  const isDefaultVariant = variant === PostCardVariant.default

  const handleClickLike = () =>
    dispatch({
      payload: {
        hype: !hype,
        id,
      },
      type:
        comments !== undefined
          ? PostActionTypes.LikePost
          : PostActionTypes.LikeComment,
    })

  return (
    <div
      className={classNames(styles.postCard, {
        [styles[`postCard${variant}`]]: variant,
      })}
    >
      {isDefaultVariant && (
        <button className={styles.postCardMenuButton} type='button'>
          <MeatballIcon className={styles.postCardMenuIcon} />
        </button>
      )}

      <div className={styles.postCardContainer}>
        <header className={styles.userInfo}>
          <Image
            alt=''
            height={
              isDefaultVariant ? AvatarImageSize.post : AvatarImageSize.comment
            }
            layout='fixed'
            placeholder='blur'
            src={avatar}
            width={
              isDefaultVariant ? AvatarImageSize.post : AvatarImageSize.comment
            }
          />

          <div className={styles.userInfoMeta}>
            <h4 className={styles.userInfoName}>Nickmercs</h4>
            <span className={styles.userInfoTime}>{format(createdAt)}</span>
          </div>
        </header>

        <div className={styles.postBody}>
          <p className={styles.postCopy}>{text}</p>
        </div>

        <PostActions
          comments={comments}
          isLiked={hype}
          onClickLike={handleClickLike}
        />

        {comments && <PostComments comments={comments} postId={id} />}
      </div>
    </div>
  )
}
