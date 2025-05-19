"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// EditModal component
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (book: Book) => void;
  book?: Book;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, book }) => {
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [genre, setGenre] = useState(book?.genre || "");
  const [publicationDate, setPublicationDate] = useState(book?.publicationDate || "");

  // Update fields when book changes
  React.useEffect(() => {
    setTitle(book?.title || "");
    setAuthor(book?.author || "");
    setGenre(book?.genre || "");
    setPublicationDate(book?.publicationDate || "");
  }, [book]);

  const handleSubmit = () => {
    if (!book) return;
    onSave({
      id: book.id,
      title,
      author,
      genre,
      publicationDate,
    });
    onClose();
  };

  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Publication Date</label>
          <input
            type="date"
            value={publicationDate}
            onChange={e => setPublicationDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

const Tables: React.FC = () => {
  const router = useRouter();

  const [books, setBooks] = useState<Book[]>([
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
  ]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);

  const handleEdit = (id: number) => {
    const book = books.find(b => b.id === id);
    setSelectedBook(book);
    setEditModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setBooks(books.filter(b => b.id !== id));
  };

  const handleUpdate = (id: number) => {
    // You can implement update logic here if needed
  };

  const handleSave = (updatedBook: Book) => {
    setBooks(books.map(b => (b.id === updatedBook.id ? updatedBook : b)));
  };

  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSave}
        book={selectedBook}
      />
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
                    Edit
                  </button>
                  <Link
                    href={`/crud/view/${book.id}`}
                    className="text-green-500 hover:text-green-700 mx-1"
                    title="View"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this book?")) {
                        handleDelete(book.id);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 mx-1"
                    title="Delete"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(book.id)}
                    className="text-yellow-500 hover:text-yellow-700 mx-1"
                    title="Update"
                  >
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

export default Tables;