import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { accessBookApi } from '../services/allApis';
import { HiArrowSmLeft } from 'react-icons/hi';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    const getBook = async () => {
        const result = await accessBookApi(id);
        if (result.status >= 200 && result.status < 300) {
            setBook(result.data);
        } else {
            alert("Book access failed");
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    return (
        <div
            style={{
                backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/033/115/388/small_2x/learning-concept-open-textbook-in-a-library-with-academic-surroundings-ai-generated-photo.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="container shadow py-10"
        >
            <Link to={'/library'}>
                <button className="mb-5 bg-purple-500 text-dark hover:text-white px-4 py-2 rounded-full hover:bg-purple-700 flex items-center gap-2">
                    <HiArrowSmLeft />
                    Go back to your Library
                </button>
            </Link>
            {book ? (
                <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-5 rounded shadow-md">
                    <div className="md:w-1/2">
                        <img
                            src={book.coverImg}
                            alt={book.title}
                            className="w-[450px] h-[600px] rounded"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-10 mt-5 md:mt-0">
                        <h1 style={{ color: "pink" }} className="border-text1 text-4xl font-bold mb-5">{book.title}</h1>
                        <h3 className="text-xl font-semibold mb-5"><span style={{ color: "gray" }}>Author: </span>{book.author}</h3>
                        <h3 className="text-xl font-semibold mb-5"><span style={{ color: "gray" }}>Published in: </span>{book.publishedIn}</h3>
                        <div>
                            <h2 style={{ color: "green" }} className="text-2xl font-semibold mb-3">Preface:</h2>
                            <p className="text-gray-700 mb-5">{book.preface}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BookDetails;

