import React, { useContext } from 'react'
import { CustomContext } from '../Context'
import Book from './Book'

const Books = () => {

    const {books = []} = useContext(CustomContext)

    return (
        <div className="books">
            {
                books.map((book) =>  (<Book key={book.id} {...book}/>))
            }
        </div>
    )
}

export default Books
