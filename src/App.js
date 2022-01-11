import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import PostDetails from './components/PostDetails/PostDetails';
import UserDetails from './components/UserDetails/UserDetails';
import UsersSection from './components/UsersSection/UsersSection';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UsersSection />} />
      <Route path="/messages" element={<ComingSoon />} />
      <Route path="/videos" element={<ComingSoon />} />
      <Route path="/notifications" element={<ComingSoon />} />
      <Route path="/menu" element={<ComingSoon />} />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/user/:userId" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
