"use client"; // Marks the file as client-side rendered

import React, { useState } from 'react';
import { FaRegWindowClose, FaThumbsUp, FaHeart, FaThumbtack, FaComment } from 'react-icons/fa'; // For icons
import BottomNavBar from '../components/BottomNavBar';

const App = () => {
  // Dummy data for the blog post
  const blogPost = {
    title: "Gonder",
    description: "In 2014 we Are gonna to Gonder and visite the legendary temples, temples that are not found in other countries.",
    img: "/boat.avif",
    icons: [], // Array to store icon actions (like, favorite, pin)
    comments: [], // Array to store comments
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state to toggle
  const [comment, setComment] = useState(''); // State to manage the comment input
  const [icons, setIcons] = useState(blogPost.icons); // State to manage icon actions
  const [comments, setComments] = useState(blogPost.comments); // State to manage comments
  const [visibleComments, setVisibleComments] = useState(2); // State to manage visible comments

  // Toggle Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle icon click (like, favorite, pin)
  const handleIconClick = (iconType) => {
    setIcons((prevIcons) => [...prevIcons, iconType]);
  };

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment(''); // Clear the input after submission
    }
  };

  // Handle "Show More" button click
  const handleShowMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 2); // Increase visible comments by 2
  };

  // Handle "Show Less" button click
  const handleShowLessComments = () => {
    setVisibleComments(2); // Reset visible comments to the initial value
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-8">
      <p className="text-blue-500 m-auto w-full font-bold text-3xl">Blogs</p>

      {/* Blog Card */}
      <div className="mt-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src={blogPost.img} alt={blogPost.title} />
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-500">{blogPost.title}</h2>
          <p className="mt-2 text-gray-600">{blogPost.description}</p>

          {/* Icons Section */}
          <div className="flex justify-between mt-4">
            <button onClick={() => handleIconClick('like')} className="text-blue-500 hover:text-blue-700">
              <FaThumbsUp size={24} />
            </button>
            <button onClick={() => handleIconClick('favorite')} className="text-red-500 hover:text-red-700">
              <FaHeart size={24} />
            </button>
            <button onClick={() => handleIconClick('pin')} className="text-green-500 hover:text-green-700">
              <FaThumbtack size={24} />
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-4">
            <div className="flex items-center">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-2 border rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700"
              >
                <FaComment size={20} />
              </button>
            </div>

            {/* Display Comments */}
            <div className="mt-4">
              {comments.slice(0, visibleComments).map((comment, index) => (
                <div key={index} className="text-gray-700 bg-gray-100 p-2 rounded-lg mt-2">
                  {comment}
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {comments.length > visibleComments && (
              <button
                onClick={handleShowMoreComments}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                Show More
              </button>
            )}

            {/* Show Less Button */}
            {visibleComments > 2 && (
              <button
                onClick={handleShowLessComments}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal (Optional) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <button onClick={closeModal} className="text-red-500 hover:text-red-700">
              <FaRegWindowClose size={24} />
            </button>
            <p>Modal Content Here</p>
          </div>
        </div>
      )}

      <BottomNavBar />
    </div>
  );
};

export default App;