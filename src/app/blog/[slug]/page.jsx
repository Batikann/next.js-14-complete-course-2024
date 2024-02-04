import Image from 'next/image'
import styles from './singlePost.module.css'
import { getPost } from '../../../lib/data'
import { Suspense } from 'react'
import PostUser from '../../../components/postUser/postUser'

export const generateMetadata = async ({ params }) => {
  const { slug } = params
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePost = async ({ params }) => {
  const { slug } = params

  const post = await getPost(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post?.img} alt="" className={styles.img} fill />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  )
}
export default SinglePost
