import React from 'react';
import Books from './Books';
import Book from './Book';

import './App.css';
import Header from './header';
import Test from './test';


function App() {
  return (
    <div className="App">
<Header />
<section className='booklist'>
 {
   Books.map(((book, index) => {
     return <Book key={index} {...book}></Book>
   }))
 }

</section>
<Test/>
  
    </div>
  );
}

export default App;
