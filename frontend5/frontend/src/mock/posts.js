// Mock posts database
let posts = [
  { id: 1, title: "First Post", content: "Hello world!", userId: 1 },
];

export const fetchPosts = async () => {
  return posts;
};

export const createPost = async (postData) => {
  const newPost = { ...postData, id: posts.length + 1, userId: 1 };
  posts.push(newPost);
  return newPost;
};

export const updatePost = async (postId, postData) => {
  posts = posts.map((post) => (post.id === postId ? { ...post, ...postData } : post));
  return { ...postData, id: postId };
};

export const deletePost = async (postId) => {
  posts = posts.filter((post) => post.id !== postId);
  return { success: true };
};