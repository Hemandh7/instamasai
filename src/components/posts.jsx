// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://drab-hare-teddy.cyclic.app/posts', {
          headers: {
            Authorization: token,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error in fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://drab-hare-teddy.cyclic.app/posts/delete/${postId}`, {
        headers: {
          Authorization: token,
        },
      });
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error('Error in post deletion:', error);
    }
  };

  const handleUpdate = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://drab-hare-teddy.cyclic.app/posts/update/${postId}`, editFormData, {
        headers: {
          Authorization: token,
        },
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error in post update:', error);
    }
  };

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEdit = (post) => {
    setEditMode(true);
    setEditFormData({
      title: post.title,
      body: post.body,
    });
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          {editMode ? (
            <>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={editFormData.title}
                onChange={handleEditFormChange}
              />
              <input
                type="text"
                name="body"
                placeholder="Body"
                value={editFormData.body}
                onChange={handleEditFormChange}
              />
              <button onClick={() => handleUpdate(post._id)}>Update</button>
            </>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
              <button onClick={() => handleEdit(post)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
