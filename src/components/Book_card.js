import React from 'react';
import {Link} from 'react-router-dom';

const Book_card=(props)=>{
    const imgsrc=props.book.volumeInfo.imageLinks;
    const authors=props.book.volumeInfo.authors;
    const title=props.book.volumeInfo.title;
  return(
    <div style={{margin: 15}}>
    <div>
    <div>
      {imgsrc!=undefined?<img src={imgsrc.thumbnail} style={{width: 180, height:250}}/>:
      <img src="https://picsum.photos/185/250" alt="" />}
    </div>
    <div>
    <div style={{height:100}}>
      <p>{title!=null ?<b><i>{title}</i></b>:"Unknown"}</p>
      <p>Author: </p>
      {authors!=null ? authors.map((author,i) => <p>{i+1}. { author }</p>):"Unknown"}     
    </div>
    <div>
      <Link to={{pathname:"/book/:id"+ props.book.id, state: {details: props.book, currentPage: props.currentPage, books: props.books,searchedbook: props.searchedbook, sortedby: props.sortedby,
              totalPages: props.totalPages}}
              }>See More Details</Link>
    </div>
    </div>
  </div>
  </div>
  )
}


export default Book_card;