"use client"
import React, { useState , useEffect } from 'react';
import {  useSelector } from 'react-redux';
import BottomNavBar from './components/BottomNavBar';
import Link from 'next/link';
const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const users = useSelector((state) => state.counter.users);
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const blogs = [
    { title: "Blog 1", content: "Content of blog 1", url: "late.avif" },
    { title: "Blog 2", content: "Content of blog 2", url: "student.jpeg" },
    { title: "Blog 3", content: "Content of blog 3", url: "wife.avif" },
    { title: "Blog 4", content: "Content of blog 4", url: "wed.jpg" },
  ];
  const cardData = [
    {id:1, title: "Night Stay", description: `5-star hotel with children, chosen date: ${selectedDate}` },
    {id:2, title: "Day Stay", description: `5-star hotel with children, chosen date: ${selectedDate}` },
    {id:3, title: "Weekend Stay", description: `5-star hotel with children, chosen date: ${selectedDate}` },
    {id:4, title: "Add Student", description: "Add a new student to the system" },
    {id:5, title: "Bag and Pen", description: "Essential items for your trip" },
    {id:6, title: "Late Home Rental Price", description: "Price for late home rental" },
    {id:7, title: "Medicine", description: "Medicines available for purchase" },
  ];

  useEffect(() => {
    const checkAssetsLoaded = async () => {
      // Simulate a delay for loading assets
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust time as needed
      setLoading(false);
    };

    checkAssetsLoaded();
    if (!localStorage.getItem('selectedCard')) {
      localStorage.setItem('selectedCard', JSON.stringify(null)); // or set a default card ID if needed
    }
       // Save the selected card ID to localStorage
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [blogs.length]);
  if (loading) {
    return (
      <div className='flex gap-4 bg-yellow-50 flex-col justify-center items-center h-screen'>
      <svg
        height={`100px`}
        width={`100px`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#85726a"
      >
        <g>
          <path
            d="M449.525,105.602L288.456,8.989C278.474,2.994,267.228,0,256,0c-11.232,0-22.476,2.994-32.46,8.989 L62.469,105.602c-19.01,11.406-30.641,31.95-30.641,54.117v192.562c0,22.168,11.631,42.711,30.641,54.117l161.072,96.613 C233.524,508.999,244.772,512,256,512c11.228,0,22.474-3.001,32.456-8.989l161.069-96.613 c19.012-11.406,30.647-31.95,30.647-54.117V159.719C480.172,137.552,468.537,117.008,449.525,105.602z M250.593,492.733 c-6.026-0.745-11.927-2.719-17.32-5.948L72.203,390.172c-13.31-7.99-21.453-22.37-21.453-37.891V159.719 c0-6.022,1.238-11.862,3.514-17.233l196.328,117.76V492.733z M59.663,133.114c3.366-4.464,7.596-8.318,12.541-11.285 l161.069-96.613c7.002-4.196,14.856-6.291,22.728-6.291c7.868,0,15.726,2.095,22.725,6.291l161.065,96.613 c4.955,2.967,9.184,6.821,12.541,11.285L256,250.881L59.663,133.114z M461.247,352.281c0,15.521-8.15,29.901-21.456,37.891 l-161.065,96.613c-5.391,3.229-11.296,5.203-17.321,5.948V260.246l196.325-117.76c2.282,5.37,3.518,11.211,3.518,17.233V352.281z"
          ></path>
          <path d="M202.061,309.771c11.158,6.082,20.201,1.967,20.201-9.191c0-11.15-9.043-25.128-20.201-31.21 c-11.154-6.076-20.201-1.961-20.201,9.19C181.86,289.718,190.907,303.689,202.061,309.771z"></path>
          <path d="M89.283,361.082c11.154,6.076,20.197,1.961,20.197-9.197c0-11.151-9.043-25.122-20.197-31.204 c-11.155-6.083-20.201-1.968-20.201,9.19C69.081,341.022,78.128,355,89.283,361.082z"></path>
          <path d="M145.672,335.424c11.154,6.082,20.201,1.967,20.201-9.191c0-11.151-9.047-25.128-20.201-31.204 c-11.158-6.082-20.201-1.967-20.201,9.184C125.471,315.37,134.514,329.341,145.672,335.424z"></path>
          <path d="M418.335,207.902c-11.158,6.082-20.208,20.053-20.208,31.21c0,11.151,9.05,15.266,20.208,9.19 c11.151-6.082,20.194-20.059,20.194-31.21C438.529,205.934,429.486,201.819,418.335,207.902z"></path>
          <path d="M305.552,269.37c-11.161,6.082-20.201,20.06-20.201,31.21c0,11.158,9.04,15.273,20.201,9.191 c11.155-6.082,20.198-20.053,20.198-31.211C325.749,267.409,316.707,263.294,305.552,269.37z"></path>
          <path d="M418.335,320.681c-11.158,6.082-20.208,20.052-20.208,31.204c0,11.158,9.05,15.273,20.208,9.197 c11.151-6.082,20.194-20.06,20.194-31.21C438.529,318.714,429.486,314.598,418.335,320.681z"></path>
          <path d="M305.552,382.149c-11.161,6.082-20.201,20.059-20.201,31.21c0,11.158,9.04,15.273,20.201,9.191 c11.155-6.083,20.198-20.053,20.198-31.211C325.749,380.188,316.707,376.074,305.552,382.149z"></path>
          <path d="M284.992,107.012c-15.726-11.648-41.627-11.936-57.86-0.658c-16.227,11.285-16.643,29.875-0.913,41.509 c15.726,11.648,41.63,11.943,57.867,0.658C300.312,137.243,300.722,118.654,284.992,107.012z"></path>
        </g>
      </svg>
        <p className='text-3xl text-[#85726a]'>Lucky Me</p>
  </div>  
    );
  }

  return (
    <div className="pl-3 pr-3 pb-3 font-playfair space-y-8 bg-yellow-50">
      {/* Top Section: Profile, Search, Notifications */}
      <div className='sticky top-0 pt-3 bg-yellow-50'>
      <div className="grid grid-cols-5 ">
        <div className="col-span-1 place-items-center text-lg font-semibold h-10 w-10 bg-white rounded-full">
        <Link href={`/create`} passHref>
        <img
    src={users && users[0] && users[0].fileUrl ? users[0].fileUrl : '/defuser.jpg'}
    className="rounded-full h-full w-full"
    alt="User"
  />
  </Link>
          </div>
        <div className="flex-2 w-full col-span-3 bg-[#c5b8b2] rounded-lg place-items-center ml-0 ">
          <input
            type="text"
            placeholder="Search..."
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full h-full rounded-lg box-border p-2 bg-[#c5b8b2]"
          />
        </div>
        <div className=" text-lg font-semibold place-items-center col-span-1 flex justify-center items-center">
            <i class="fas fa-bell text-xl text-[#85726a] mr-2"></i>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="space-y-4 mt-10">
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`min-w-[240px] p-4 h-40 rounded-xl  shadow-lg backdrop-blur-lg transition-all duration-500 ease-in-out transform ${
              index === activeBlogIndex ? "scale-105" : "scale-100"
            }`}
            style={{
              backgroundImage: `url(${blog.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-xl font-medium text-[#85726a]">{blog.title}</h3>
            <p className="mt-2 font-bold text-[#85726a] text-2xl">{blog.content}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <span className="text-2xl">
          {blogs.map((_, index) => (
            <span
              key={index}
              className={`px-2 transition-all duration-300 ${
                index === activeBlogIndex ? "text-blue-500" : "text-gray-400"
              }`}
            >
              •
            </span>
          ))}
        </span>
      </div>
    </div>
</div>
      {/* Booking Cards Section */}
      <div className="space-y-6">
      <div className="grid grid-cols-2 place-items-center gap-6 overflow-x-auto pb-4">
        {cardData.map((card, index) => (
          <Link key={index} href={`/details/${card.id}`} passHref>
            <div className="flex-1 p-6 rounded-xl bg-[#85726a] w-full m-auto shadow-lg text-center cursor-pointer">
              <h4 className="text-xl font-semibold">{card.title}</h4>
              <p className="mt-2">{card.description}</p>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
};

export default HomePage;
