import { useState } from 'react';

function PostForm({ onSubmit, initialData = { title: '', content: '' } }) {
  const [postData, setPostData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={postData.content}
        onChange={(e) => setPostData({ ...postData, content: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;