import React,{useState} from 'react';
import NavBar2 from './NavBar2';
import {Link} from 'react-router-dom'

const Book_desc=(props)=>{
    const totalPages=props.location.state.totalPages;
    const sortedby=props.location.state.sortedby;
    const searchedbook=props.location.state.searchedbook;
    const currentPage=props.location.state.currentPage;
    const books=props.location.state.books;
    const param=props.location.state.details.volumeInfo;
    return(
    <div>
        <NavBar2/>
      <div style={{marginLeft:150}}>
        <div style={{margin: 10}}>
            <div>
                <div>
                     <img src={param.imageLinks.thumbnail} style={{width: 300, height:400}}/> 
                </div>
                <div>
                  <p><b>Title : </b><i>{param.title}</i></p>    
                </div>
            </div>
            <Link to={{pathname:"/", state:{currentPage: currentPage, books:books,searchedbook: searchedbook,sortedby: sortedby,totalPages: totalPages}}}>
            <button style={{margintop: 20 , width: 325}}>Back to Homepage....</button></Link>
        </div>
        <div style={{margin: 10}}>
            <div>
                <div>
                  <span><p><b>Book : </b><i>{param.title!=null ? param.title:"Unknown"}</i></p></span> 
                  <span><p><b>Published Date : </b>{param.publishedDate!=null ? param.publishedDate:"Uknown"}</p></span> 
                  <span><p><b>Name of Publisher : </b>{param.publisher!=null ? param.publisher:"Uknown"}</p></span>  
                  <span><p><b>Genre : </b></p>
                  {param.categories!=null ? param.categories.map((category,i) => <li>{ category }</li>):(<li>Unknown</li>)}
                  </span>
                  <span><p><b>Author Name : </b></p>
                  {param.authors!=null ? param.authors.map((author,i) => <li>{ author }</li>):(<li>Unknown</li>)}
                  </span>
                  <span><p><b>Avg Rating : </b>{param.averageRating!=null ? param.averageRating:"Unknown"}</p></span>
                  <span><p><b>Description : </b>{param.description!=null ? param.description:"Unknown"}</p></span>
                  <Link><span><p><b></b>{param.previewLink!=null ? param.previewLink:"Unknown"}</p></span></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
  export default Book_desc;
