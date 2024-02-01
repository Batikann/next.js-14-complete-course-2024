import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/18037931/pexels-photo-18037931/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/17371711/pexels-photo-17371711/free-photo-of-pretty-girl-with-a-yellow-flower-between-her-fingers-as-a-ring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={40}
            height={40}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          pariatur laboriosam consectetur? Sit necessitatibus quidem, architecto
          recusandae veniam molestias quaerat, excepturi itaque accusamus libero
          a voluptatibus eum. Ad, quasi autem?
        </div>
      </div>
    </div>
  )
}
export default SinglePost
