import React, { useContext } from 'react'
import { CustomContext } from '../Context'

const Book = (props) => {

    const {removeBook} = useContext(CustomContext)

    return (
        <div>
            <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>
        </div>
    )
}

export default Book
