import React from 'react';
import Book_card from './Book_card';

const Book_list=(props)=>{
  return(
    <div style={{marginLeft:130}}>
     <div> 
        {props.books.map((book,i)=>{
            return(
            <Book_card book={book} currentPage={props.currentPage} books={props.books} searchedbook={props.searchedbook} sortedby={props.sortedby} totalPages={props.totalPages}/>)
        })}
     </div> 
    </div>
  )
}
export default Book_list;