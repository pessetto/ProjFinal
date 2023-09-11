import React, { useState } from 'react';
import './Feed.css';
import Header from '../../../Componentes/HeaderForum/Header';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPostText.trim() !== '') {
      setPosts([...posts, newPostText]);
      setNewPostText('');
    }
  };

  return (
    <>
    <Header/>
    <div className="feed">
      <form onSubmit={handlePostSubmit}>
        <textarea
          placeholder="Digite sua postagem aqui..."
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button type="submit">Postar</button>
      </form>

      <div className="post-list">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            {post}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Feed;

