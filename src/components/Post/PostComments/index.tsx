import { PostCard, PostCardVariant } from 'components/Post/PostCard'
import PostCommentForm from 'components/Post/PostCommentForm'
import { PostCommentType } from 'constant'

import styles from './PostComments.module.css'

interface Props {
  comments: PostCommentType[]
  postId: string
}

const PostComments = ({ comments, postId }: Props) => (
  <>
    <PostCommentForm postId={postId} />

    {!!comments.length ? (
      <div className={styles.postComments}>
        {!!comments &&
          comments
            .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
            .map((comment, index) => (
              <PostCard
                cardData={comment}
                key={`comment-${index}`}
                variant={PostCardVariant.comment}
              />
            ))}
      </div>
    ) : null}
  </>
)

export default PostComments
