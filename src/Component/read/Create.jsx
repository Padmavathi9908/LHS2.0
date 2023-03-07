import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';


function Create() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3002/posts')
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
        });
    }, []);
  
    return <ul>{/* TODO */}</ul>;
  return (
    <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
  );
  }

export default Create