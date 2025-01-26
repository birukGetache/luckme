"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BottomNavBar from '@/app/components/BottomNavBar';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { selectCard } from '../../../../redux/counterSlice';
const DetailPage = () => {
  const pathname = usePathname(); // Get the current path of the page
  const id = pathname.split("/").pop(); // Extract the `id` from the URL path
  const dispatch = useDispatch();
  const [cardDetail, setCardDetail] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [activePage, setActivePage] = useState('service'); // State to toggle between Service and Detail
  const cardData = [
    { id: 1, title: "Night Stay", description: "5-star hotel with children" },
    { id: 2, title: "Day Stay", description: "5-star hotel with children" },
    { id: 3, title: "Weekend Stay", description: "5-star hotel with children" },
    { id: 4, title: "Add Student", description: "Add a new student to the system" },
    { id: 5, title: "Bag and Pen", description: "Essential items for your trip" },
    { id: 6, title: "Late Home Rental Price", description: "Price for late home rental" },
    { id: 7, title: "Medicine", description: "Medicines available for purchase" },
  ];

  const handleBidNow = () => {
    dispatch(selectCard(cardDetail)); // Dispatch the selected card to the Redux store
       if (!localStorage.getItem('selectedCard')) {
          localStorage.setItem('selectedCard', JSON.stringify(null)); // or set a default card ID if needed
        }
        handleCardSelect(cardDetail.id)
  };
  const handleCardSelect = (cardId) => {
    // Save the selected card ID to localStorage
    localStorage.setItem('selectedCard', JSON.stringify(cardId));
    // Optionally, trigger a re-render or action here (e.g., reload the page, or use state updates)
  //  window.location.reload(); // This is a simple way to force a re-render (though not ideal)
  };
  useEffect(() => {
    if (id) {
      // Find the card with the matching ID
      const detail = cardData.find((card) => card.id === parseInt(id));
      setCardDetail(detail);
    }
  }, [id]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToPage = (page) => {
    setActivePage(page);
  };

  if (!cardDetail) {
    return <div>Loading...</div>; // Display loading while fetching data
  }

  return (
    <div className="p-4 space-y-6 bg-yellow-50 font-playfair text-[#85726a]">
      {/* Hamburger Icon */}
      <div className="absolute border-none top-4 right-4">
        <button onClick={toggleMenu} className="text-2xl border-none ">
          {isMenuOpen ? (
            <i className="fas fa-times"></i> // Close icon
          ) : (
            <i className="fas fa-bars"></i> // Hamburger icon
          )}
        </button>
      </div>

      {/* Menu - Conditional display based on isMenuOpen */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white p-4 shadow-lg rounded-md">
          <div className="space-y-2">
            <button
              onClick={() => goToPage('service')}
              className="text-lg text-[#85726a]  border-none rounded-xl hover:text-blue-500 "
            >
              Service
            </button><br></br>
            <button
              onClick={() => goToPage('detail')}
              className="text-lg text-[#85726a] border-none  rounded-xl hover:text-blue-500"
            >
              Detail
            </button>
          </div>
        </div>
      )}

      {/* Back to Home Link */}
      <p>
        <Link href="/" passHref className="text-[#85726a]">
          Back to Home
        </Link>
      </p>

      {/* Content: Conditional rendering of Service or Detail */}
      {activePage === 'service' ? (
        <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out'>
          <h2 className="text-3xl font-bold">{cardDetail.title}</h2>
          <p className="text-lg">{cardDetail.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">Start Date</h3>
              <p className="text-[#85726a]">ሐሙስ, ግንቦት 15, 2016 / Thursday, May 23, 2024</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">End Date</h3>
              <p className="text-[#85726a]">ሐሙስ, ግንቦት 25, 2016 / Thursday, June 3, 2024</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">Number of People</h3>
              <p className="text-[#85726a]">225 People</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">Capacity People</h3>
              <p className="text-[#85726a]">400 People</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold">Detail Page</h2>
         <div>
         <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-start space-y-4">
  <h3 className="text-xl text-[#85726a] flex items-center space-x-2">
    <i className="fas fa-hotel text-[#85726a]"></i>
    <span>Hotel Name: Kuriftu</span>
  </h3>
  <h3 className="text-xl  text-[#85726a] flex items-center space-x-2">
    <i className="fas fa-map-marker-alt text-[#85726a]"></i>
    <span>Location: Bahir Dar</span>
  </h3>
  <h4 className="text-xl font-medium text-[#85726a] flex items-center space-x-2">
    <i className="fas fa-phone text-[#85726a]"></i>
    <span>0987654321</span>
  </h4>
</div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">Start Date of Vacation</h3>
              <p className="text-[#85726a]">ሐሙስ, ግንቦት 15, 2016 / Thursday, May 23, 2024</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">End Date of Vacation</h3>
              <p className="text-[#85726a]">ሐሙስ, ግንቦት 25, 2016 / Thursday, June 3, 2024</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-[#85726a] mb-4">Number of People Allowed</h3>
              <p className="text-[#85726a]">5 People</p>
            </div>
          </div>
         </div>
        
         <Link href="/Splashing" passHref className=" h-10 w-30 flex justify-center items-center  fixed p-6 bg-slate-300 bottom-20 right-5 rounded-full border-solid border-2 border-yellow-400">
         <button className="text-[#634f46] rounded-lg" onClick={handleBidNow}>Bid Now</button>
        </Link>
        <div>Gion It soltion</div>
        <div></div>
        <div></div>
        </div>
      )}

      <BottomNavBar />
    </div>
  );
};

export default DetailPage;
