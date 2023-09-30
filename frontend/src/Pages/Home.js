import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DotLoading from '../components/DotLoading';
import { Link } from 'react-router-dom';
import { BiSolidMessageAltAdd } from 'react-icons/bi';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { BiSolidCommentEdit } from 'react-icons/bi';
import { RiChatDeleteFill } from 'react-icons/ri';


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4 font-serif'>
            <div className='flex justify-between mb-10'>
                <h1 className='text-3xl font-bold font-serif'>All Books</h1>
                <Link to='/books/create'>
                    <BiSolidMessageAltAdd className='text-4xl' />
                </Link>
            </div>
            {loading ? (
                <DotLoading />
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {books.map((book) => (
                        <div
                            key={book._id}
                            className='border border-gray-300 p-2 rounded-md hover:shadow-lg'
                        >
                            <img
                                src={book.imageUrl}
                                className='w-full h-96 object-cover' />
                            <p className='text-gray-500'>{book.author}</p>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-xl font-bold'>{book.title}</h1>
                                <p className='text-gray-500'>{book.publishYear}</p>
                            </div>
                            <div className='flex justify-between items-center p-2 text-2xl'>
                                <Link to={`/books/showbook/${book._id}`}>
                                    <BsFillInfoSquareFill/>
                                </Link>
                                <Link to={`/books/update/${book._id}`}>
                                    <BiSolidCommentEdit/>
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <RiChatDeleteFill/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default Home
