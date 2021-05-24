import axios from 'axios'
import React from 'react'

function Test() {

    axios
      .get(
        // `https://www.googleapis.com/books/v1/volumes?q=9782259206006+isbn&maxResults=1`
        `https://googlebooksraygorodskijv1.p.rapidapi.com/getMyBookshelf`
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch(console.error('there is error'))

    return (
        <div>
            
            
        </div>
    )
}

export default Test
