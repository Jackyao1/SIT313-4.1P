import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Search from './Search';
import CardListRow1 from './CardListRow1';
import CardListRow2 from './CardListRow2';
import Email from './Email';
import Footer from './Footer';

ReactDOM.render(
  <body>
    <Search />
    <div>
      <img className='image' src={require('./CSS/hero.jpg')}alt="cover"/>
    </div>
    <p className='feature'>Featured Articles</p>
    <CardListRow1 />
    <button className='button'>See all articles</button>
    <p className='feature'>Featured Tutorials</p>
    <CardListRow2 />
    <button className='button'>See all tutorials</button>
    <Email />
    <Footer />
  </body>,
  document.getElementById('root')
);
