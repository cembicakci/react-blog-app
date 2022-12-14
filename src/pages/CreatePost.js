import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  //input taki girdileri firebase database aktarmak için. Collection ismi posts olacak şekilde.
  const postCollectionRef = collection(db, 'posts')
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });

    navigate('/');
  }


  // Eğer kullanıcı girişi yoksa, direk login sayfasına yönlendir.
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [])

  return (
    <div className='createPostPage'>

      <div className='cpContainer'>

        <h1>Create A Post</h1>

        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className='inputGp'>
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(e) => setPostText(e.target.value)} />
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost