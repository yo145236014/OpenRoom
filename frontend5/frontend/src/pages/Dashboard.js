import { useState, useEffect } from 'react';
import { fetchPosts, createPost, updatePost, deletePost } from '../mock/posts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };
    loadPosts();
  }, []);

  const handleCreate = async (postData) => {
    const newPost = await createPost(postData);
    setPosts([...posts, newPost]);
  };

  const handleUpdate = async (postData) => {
    const updatedPost = await updatePost(editingPost.id, postData);
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
    setEditingPost(null);
  };

  const handleDelete = async (postId) => {
    await deletePost(postId);
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <PostForm
        onSubmit={editingPost ? handleUpdate : handleCreate}
        initialData={editingPost || { title: '', content: '' }}
      />
      <PostList posts={posts} onDelete={handleDelete} onEdit={setEditingPost} />
    </div>
  );
}

export default Dashboard;