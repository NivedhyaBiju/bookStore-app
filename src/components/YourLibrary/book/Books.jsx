import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { deleteBookApi } from '../../../services/allApis'


const Books = ({ book, onDelete }) => {

    const navigate = useNavigate();


    const handleCardClick = () => {
        navigate(`/details/${book.id}`);
    }

    const handleDeleteClick = async (e) => {
        e.stopPropagation();
        try {
            await deleteBookApi(book.id);
            onDelete(book.id);
        } catch (error) {
            console.error('Failed to delete book:', error);
        }
    };


    return (
        <>
            <div
                data-aos="zoom-out"
                data-aos-duration="500"
                className="book-card py-10 cursor-pointer"
            >
                {/* CARD SECTION */}
                <Row>
                    <Col>
                        <div
                            className="rounded-5xl bg-orange-100 dark:bg-amber-800 hover:bg-green-100 dark:hover:bg-blue-400 hover:text-white relative shadow-xl duration-high group max-w-[300px] mx-auto">
                            <h1 className="border-text1 text-2xl font-bold text-center">{book.title}</h1>
                            <div className="h-[250px] py-5">
                                <img
                                    src={book.coverImg}
                                    alt={book.title}
                                    onClick={handleCardClick}
                                    className="max-w-[230px] block mx-auto transform group-hover:scale-105 duration-300 shadow-md"
                                />
                            </div>
                            <div className="p-14 mt-20 text-center">
                                <h3 className='text-xl font-bold'>{book.author}</h3>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.preface}</p>
                            </div>
                            <div className='text-end'>
                                <button className="text-white px-4 hover:text-red-700" onClick={handleDeleteClick}>
                                    <MdDelete style={{ fontSize: '30px' }}></MdDelete>
                                </button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Books
