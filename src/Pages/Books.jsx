import React, { useState } from 'react';
import Book from "../Pages/Books";

const Books = ({ books: initialBooks }) => {
    const {books, setBooks} = useState(initialBooks);

    function filterBooks(filter) {
    if (filter === "low-to-high") {
        setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
    }
    if (filter === "high-to-low") {
        setBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));
    }
    if (filter === "rating") {
        setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
}
    return (
     <div id="books__body">
        <main id="books__main">
            <section>
            <div className="books__container">
                <div className="row">
                    <div className="books__header">
                            <h2 className="books__title books__header--title">All Books</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="low-to-high">Price, Low to High</option>
                                <option value="high-to-low">Price, High to Low</option>
                                <option value="rating">Rating</option>
                            </select>
                    </div>
                <div className="books">
                    {books.map((book) => {
                      <Book book ={book} key={book.id} />
                    })}
                     </div>
                </div>
            </div>
            </section>
            </main> 
        </div>
    );
}

export default Books;
