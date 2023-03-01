import { PostCard } from 'components/Post/PostCard'
import PostForm from 'components/Post/PostForm'
import { useFeedContext } from 'hooks'

const Posts = () => {
  const { state } = useFeedContext()

  return (
    <>
      <PostForm />

      {!!state.posts &&
        state.posts
          .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
          .map((post, index) => (
            <PostCard
              cardData={post}
              comments={post.comments}
              key={`card-${index}`}
            />
          ))}
    </>
  )
}

export default Posts
