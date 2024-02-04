import { connectDb } from './utils'
import { Post, User } from './models'
import { unstable_noStore as noStore } from 'next/cache'

export const getPosts = async () => {
  try {
    connectDb()
    const posts = await Post.find()
    return posts
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts!')
  }
}

export const getPost = async (slug) => {
  try {
    connectDb()
    const post = await Post.findOne({ slug })
    return post
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch post!')
  }
}

export const getUsers = async () => {
  try {
    connectDb()
    const user = await User.find()
    return user
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch users!')
  }
}

export const getUser = async (userId) => {
  noStore()
  try {
    connectDb()
    const user = await User.findById(userId)
    return user
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch user!')
  }
}
