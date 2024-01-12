import './App.css';
import { useEffect, useState } from 'react';
import PostCard from './components/PostCard/PostCard';
import PostService from './services/postService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import { Post } from './models/post';
import Posts from './pages/Post/Posts';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';


function App() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    //axios.get("https://jsonplaceholder.typicode.com/posts")
    //.then((response) => {console.log(response)})
    //.catch((error) => {console.log(error)})
    //.finally(()=>{console.log("Async işlem bitti")});
    //{posts.map((post) => <PostCard onDelete={removePost} post={post}/>)}
    try {
      let response = await PostService.getAll();
      setPosts(response.data)
    } catch (error) {
      console.log(error);
    }  
  }

  const removePost = (id:any) => {
    setPosts(posts.filter((i:any) => i.id !== id))
  }
  return (

      <>     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </>
    
  );
}
export default App;
