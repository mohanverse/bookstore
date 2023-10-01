import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DotLoading from "../components/DotLoading";

const ShowSingleBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center my-4 font-serif">
      {loading ? (
        <DotLoading />
      ) : (
        <div className=" md:flex border border-black rounded-xl w-fit p-4">
          <div className="">
            <img src={book.imageUrl} className="w-full h-[500px] rounded-md" />
          </div>
          <div className="p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowSingleBook;
