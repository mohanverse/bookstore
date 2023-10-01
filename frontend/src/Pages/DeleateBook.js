import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DotLoading from "../components/DotLoading";

function DeleateBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        alert("Book Deleted Successfully");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
      });
  };
  return (
    <div className="p-4 font-serif">
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <DotLoading /> : ""}
      <div className="flex flex-col items-center border-2 border-black rounded-xl md:w-[600px] p-8 mx-auto">
        <h3 className="text-2xl text-center">
          Are You Sure You want to delete this book?
        </h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleateBook;
