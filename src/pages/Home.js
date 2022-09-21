import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore' //database deki verilei çekmek için 
import { db } from '../firebase';

function Home() {

  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getPosts()
  }, [])

  return (
    <div className='homePage'>

    </div>
  )
}

export default Home