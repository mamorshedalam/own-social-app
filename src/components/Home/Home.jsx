import { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

     // load posts
     const [posts, setPosts] = useState([]);
     useEffect(() => {
          const url = 'https://jsonplaceholder.typicode.com/posts';
          fetch(url).then(res => res.json()).then(data => setPosts(data))
     }, [])
     return (
          <section id="mainSection">
               <div className="container">
                    <div className="row">
                         {
                              posts.length > 0 && posts.map(data => <Post post={data} key={data.id} />)
                         }
                    </div>
               </div>
          </section>
     );
};

export default Home;