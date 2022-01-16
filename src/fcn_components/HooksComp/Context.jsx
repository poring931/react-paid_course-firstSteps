import React, { createContext, useState } from 'react'

export const CustomContext = createContext()

const Context = (props) => {

    const[books, setBooks] = useState([
         {id: 1, title: 'js'},
         {id:2, title: 'jss'},
         {id: 3, title: 'jsss'},
         {id: 4, title: 'jssss'},
    ])

    const addBook = (book) => {
        setBooks([book, ...books])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book=> book.id !== id))
    }

    const value ={
        books,
        addBook,
        removeBook
    }
    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    )
}

export default Context
