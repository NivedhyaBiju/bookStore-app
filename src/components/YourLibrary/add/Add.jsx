import React, { useEffect, useState } from 'react';
import './add.css';
import { Link } from 'react-router-dom';
import Books from '../book/Books';
import { accessBookApi } from '../../../services/allApis';
import { Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
    const [allBooks, setAllBooks] = useState([]);

    const getBooks = async () => {
        try {
            const result = await accessBookApi();
            if (result.status >= 200 && result.status < 300) {
                setAllBooks(result.data);
            } else {
                toast.error('Failed to access books');
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            toast.error('Failed to access books');
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    const handleDelete = (id) => {
        setAllBooks(allBooks.filter((book) => book.id !== id));
        toast.success('Book deleted successfully');
    };

    return (
        <>
            <div className="py-10">
                <div className="container py-10">
                    {/* HEADER SECTION */}
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <h1 id="createBook" className="border-text1 text-4xl font-bold">
                            Create Your Lost World
                        </h1>
                        <p className="text-xs text-gray-600 py-2">Awaken the Past, Shape Your Hidden Universe</p>
                    </div>
                </div>
                <div className="px-20 -mt-20">
                    <p className="text-xs text-gray-1000 py-2">Rediscover Wonder, One Adventure at a Time</p>
                    <Link to={'/create'} style={{ textDecoration: 'none' }}>
                        <button className="rounded-xl animated-button">Add Books +</button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-5 place-items-center py-8">
                    {allBooks.length > 0 ? (
                        allBooks.map((book) => (
                            <Col lg={4} key={book.id}>
                                <Books book={book} onDelete={handleDelete}></Books>
                            </Col>
                        ))
                    ) : (
                        <h1 className="text-center" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                            No Books Added Yet
                        </h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default Add;
