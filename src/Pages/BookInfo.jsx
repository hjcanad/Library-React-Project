import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import react from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" /> Back to Books
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>

                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src="" alt="" className="book__selected--img" />
                            </figure>

                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    Crack the Coding Interview: 189 Programming Questions and Solutions
                                </h2>
                                <Rating rating={4.5} />
                                <div className="book__selected--price">
                                    <Price originalPrice={50} salePrice={null} />
                                </div>
                                <div className="book__summary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookInfo;
