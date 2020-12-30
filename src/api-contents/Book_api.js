import axios from 'axios';
const Book = axios.create({
    baseURL:"https://www.googleapis.com/books/",});
const Book_api=(BookId, setBookId, page_number, setTotalPages,sortedby)=>{
    Book.get("/v1/volumes/", {
        
        params:{
            q: BookId,
            startIndex: page_number,
            maxResults: 30,
            orderBy: sortedby,            
        }
    }).then(response=>{
        console.log(response);
        setBookId(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/30));
    }).catch((error)=>{
        
    })
};
export {Book_api};