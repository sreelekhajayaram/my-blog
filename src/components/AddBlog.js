import React, { useState } from 'react';

function AddBlog() {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, we log the data. In a real app, send it to your backend.
    console.log({ blogName, description, authorName });
    alert('Blog submitted!');
    // Reset form fields
    setBlogName('');
    setDescription('');
    setAuthorName('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Blog Name:</label>
          <input
            type="text"
            value={blogName}
            onChange={(e) => setBlogName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ ...styles.input, height: '100px' }}
            required
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Author Name:</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AddBlog;
