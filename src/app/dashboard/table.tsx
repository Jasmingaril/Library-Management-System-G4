"use client";

import React, { useState } from "react";

// Book type
export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

// TableProps for receiving books from parent
interface TableProps {
  books: Book[];
  onEdit?: (book: Book) => void;
  onView?: (book: Book) => void;
  onDelete?: (book: Book) => void;
}

// Table component (stateless, receives books as prop)
const Table: React.FC<TableProps> = ({ books, onEdit, onView, onDelete }) => {
  return (
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
                    onClick={() => onEdit && onEdit(book)}
                    className="text-blue-500 hover:text-blue-700 mx-1"
                    title="Edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onView && onView(book)}
                    className="text-green-500 hover:text-green-700 mx-1"
                    title="View"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onDelete && onDelete(book)}
                    className="text-red-500 hover:text-red-700 mx-1"
                    title="Delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;