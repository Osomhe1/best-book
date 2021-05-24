import React from 'react'

function Book(props) {
    const { img, tittle, author, description } = props
    return (
      <div className='book'>
        <article>
          <img src={img} alt='' />
          <h1>{tittle}</h1>
          <h4>{author}</h4>
          <h6 className="describe">{description}</h6>
        </article>
      </div>
    )
}

export default Book;
