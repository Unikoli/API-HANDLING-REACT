
import React, { useEffect, useState } from 'react';

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    console.log("Fetching posts.......");

    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}`);
        const posts = await response.json();
        setPosts(posts);
        console.log(posts);
        console.log(posts.length);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
    console.log("posts fetched successfully!");
  }, []);

  if (isLoading) {
    return (
      <div>Loading..........</div>
    );
  }

  if (error) {
    return (
      <h1>Something went wrong ..please try again!!!!</h1>
    );
  }

  return (
    <div>
      <button onClick={handleClick}>Click me::{count}</button>
      <ul>
        
        {Array.from({ length: count }).map((_, index) => (
          
          <React.Fragment key={index}>
                  <h1>Data Fetching in React JS</h1>

            {posts.map(post => (
              
              <li key={`${index}-${post.id}`}>{post.id} {post.title}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>
     
    </div>
  );
}
