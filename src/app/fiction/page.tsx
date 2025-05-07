"use client";

import React from "react";
import Navbar from "../dashboard/navbar"; // Navbar component
import { useRouter } from "next/navigation";

const FictionPage: React.FC = () => {
  const router = useRouter();

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationDate: "1960-07-11",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationDate: "1949-06-08",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publicationDate: "1925-04-10",
    },
  ];

  const handleEdit = (id: number) => {
    router.push(`/books/edit/${id}`);
  };

  const handleView = (id: number) => {
    router.push(`/books/view/${id}`);
  };

  const handleDelete = (id: number) => {
    router.push(`/books/delete/${id}`);
  };

  const handleUpdate = (id: number) => {
    router.push(`/books/update/${id}`);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

        {/* Main Content */}
        <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">Fiction Books</h1>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="px-4 py-2 text-left border-b">Book ID</th>
                                <th className="px-4 py-2 text-left border-b">Book Title</th>
                                <th className="px-4 py-2 text-left border-b">Author</th>
                                <th className="px-4 py-2 text-left border-b">Genre</th>
                                <th className="px-4 py-2 text-left border-b">Publication Date</th>
                                <th className="px-4 py-2 text-center border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b">{book.id}</td>
                                    <td className="px-4 py-2 border-b">{book.title}</td>
                                    <td className="px-4 py-2 border-b">{book.author}</td>
                                    <td className="px-4 py-2 border-b">{book.genre}</td>
                                    <td className="px-4 py-2 border-b">{book.publicationDate}</td>
                                    <td className="px-4 py-2 border-b text-center">
                                        <button
                                            onClick={() => handleEdit(book.id)}
                                            className="text-blue-500 hover:text-blue-700 mx-1"
                                            title="Edit"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            onClick={() => handleView(book.id)}
                                            className="text-green-500 hover:text-green-700 mx-1"
                                            title="View"
                                        >
                                            👁️
                                        </button>
                                        <button
                                            onClick={() => handleDelete(book.id)}
                                            className="text-red-500 hover:text-red-700 mx-1"
                                            title="Delete"
                                        >
                                            🗑️
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(book.id)}
                                            className="text-yellow-500 hover:text-yellow-700 mx-1"
                                            title="Update"
                                        >
                                            🔄
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FictionPage;