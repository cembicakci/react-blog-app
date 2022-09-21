import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore' //database deki verilei çekmek için 
import { auth, db } from '../firebase';


function Home({ isAuth }) {

  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, 'posts')


  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id); //hangi post silinecekse o 'doc' ile tanımlanır.
    await deleteDoc(postDoc)
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getPosts()
  }, [deletePost])


  return (
    <div className='homePage'>
      {postList.map((post, idx) => {
        return (
          <div className='post'>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>

              <div className='deletePost'>
                {/* unicode */}
                {
                  isAuth && post.author.id === auth.currentUser.uid &&
                  <button onClick={() => deletePost(post.id)}>&#128465;</button>
                }
              </div>

            </div>

            <div className='postTextContainer'>
              {post.postText}
            </div>
            <h3>@{post.author.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Home