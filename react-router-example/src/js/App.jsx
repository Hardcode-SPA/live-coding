import { useState } from 'react';
import '../scss/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Todo from './components/Todo';


function App() {

  return (
    <div className="App">
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center py-9'>Hallo Welt!</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
               */}

              <Route index element={<><h1>Index</h1></>} />

              <Route path="*" element={<><h1>404</h1><h2>Page not found</h2></>} />

              <Route path='/peter' element={<h1>Peter</h1>} />

              <Route path='/todo' element={<Todo />} />
              <Route path='/todo/:todoId' element={<Todo />} />
            </Route>


            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
