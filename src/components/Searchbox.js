import React from 'react';

const Searchbox=(props)=>{
  return(
    <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <div></div>
        <div>
        <input type="text" placeholder="Search..." onChange={props.handleChange} />
        </div>
        <button type="submit" name="action" style={{marginTop:20}}><i>SEARCH</i></button>
          <button style={{marginTop:20}}
                onClick={()=>{
                  props.setSortedby('Newest')
                }}>Latest</button>
          <button style={{marginTop:20}}
                onClick={()=>{
                  props.setSortedby('Relevant Books')
                }}>Relevant</button>
      </div>
    </form>
  </div>
  )
}

export default Searchbox;