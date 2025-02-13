"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import BottomNavBar from '@/app/components/BottomNavBar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { selectCard } from '../../../../redux/counterSlice';
import { useParams } from 'react-router-dom';
import Image from "next/image";
const DetailPage = () => {
  const pathname = usePathname(); // Get the current path of the page
  const id = pathname.split("/").pop(); // Extract the `id` from the URL path
  const dispatch = useDispatch();
  const [cardDetail, setCardDetail] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [activePage, setActivePage] = useState('service'); // State to toggle between Service and Detail
  const cardData = [
    {id:1, title: "Gonder", description: `5-star hotel with children, chosen `,url:"/gonder.avif" },
    {id:2, title: "Gorgora ", description: `5-star hotel with children, chosen`,url:"/Dembiya.jpg" },
    {id:3, title: "Dembiya", description: `5-star hotel with children, chosen`,url:"/Dembiya.jpg" },
    {id:4, title: " Hamusit", description: "Add a new student to the system" ,url:"/Hamusit.jpg"},
    {id:5, title: "Fogera", description: "Essential items for your trip" ,url:"/gonder.avif"},
    {id:6, title: "Bahita", description: "Price for late home rental" ,url:"/gonder.avif"},
    {id:7, title: "Dek deset", description: "Medicines available for purchase",url:"/gonder.avif" },
  ];
 const [first_name, setFirstName] = useState("");
  const [last_name , setLastName] = useState("");
  const [email, setEmail ]=useState("")
  const [phone , setPhone] = useState("");
  const [amount , setAmount] = useState(100);
  const [card , setCard] = useState({});
  const sanitizedEmail = email.replace(/[^a-zA-Z0-9._-]/g, ''); // Remove invalid characters from email
  const tx_ref = `${sanitizedEmail}-txburusdf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  const public_key = 'CHAPUBK_TEST-XQxA1FKglJqifPTKFg1jBlNKYqHBlAgL'
    const triggerConfetti = () => {
        confetti({
          particleCount: 50, // Lower the number of particles
          angle: 90,
          spread: 50, // Reduce spread
          origin: { x: 0.5, y: 0.5 },
          colors: ['#ff0', '#ff6', '#ff8000', '#ff4d4d'],
        });
      };

      useEffect(()=>{
      setCard(cardData.find((card) => card.id === parseInt(id)))
      
      },[id])
  const [formData, setFormData] = useState({
    nationality: '',
    passportNumber: '',
    email: '',
    phoneNumber: '',
    departureLocation: '',
    destinationLocation: '',
    preferredDate: '',
    numberOfPassengers: 1,
    typeOfTransport: '',
    paymentMethod: '',
    currency: 'USD',
    specialNeeds: '',
    accessibilityNeeds: '',
    foodPreferences: '',
    petInfo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here, you can send the data to your backend or API
  };


  const validatePhone = (phone) => {
    const phoneRegex = /^09\d{8}$/;
    return phoneRegex.test(phone);
  };
  
  const handleBidNow = () => {
    if (!email || !phone) {
      toast.error("Please fill in either email or phone number.");
    } else if (phone && !validatePhone(phone)) {
      toast.error("Please enter a valid phone number starting with '09' followed by 8 digits.");
    } else {
      dispatch(selectCard(cardDetail)); // Dispatch the selected card to the Redux store
      if (!localStorage.getItem('selectedCard')) {
        localStorage.setItem('selectedCard', JSON.stringify(null));
      }
      handleCardSelect(cardDetail.id);
    }
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
    <div className=" space-y-6 bg-white font-playfair text-[#85726a]">

      

      {/* Back to Home Link */}
     

      {/* Content: Conditional rendering of Service or Detail */}
      {activePage === 'service' &&
        <>
        <div className="w-full h-[300px] bg-[url('/boat.avif')] bg-cover bg-center ">
  
        <p className='text-3xl p-5'>
        <Link href="/" passHref className="text-blue-600">
       <FaArrowLeft/>
        </Link>
      </p>
      </div>
        <div className="max-w-4xl mx-auto p-6  shadow-lg ">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Book Your Boat Transport</h2>
         <ToastContainer />

        <form onSubmit={handleSubmit}>
  
          {/* User Information */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={first_name}
              onChange={(e)=>{setFirstName(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">middle Name</label>
            <input
              type="text"
              id="last Name"
              name="last_name"
              value={last_name}
              onChange={(e)=>{setLastName(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="last Name"
              name="last_name"
              value={last_name}
              onChange={(e)=>{setLastName(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          {/* <div className="mb-4">
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">Passport Number</label>
            <input
              type="text"
              id="passportNumber"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div> */}
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder='optional'
              onChange={(e)=>{setEmail(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phone}
              placeholder='optional'
              onChange={(e)=>{setPhone(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          {/* Travel Information */}
          <div className="mb-4">
            <label htmlFor="departureLocation" className="block text-sm font-medium text-gray-700">Departure Location</label>
            <input
              type="text"
              id="departureLocation"
              name="departureLocation"
              value="Bahir Dar"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="destinationLocation" className="block text-sm font-medium text-gray-700">Destination Location</label>
            <input
              type="text"
              id="destinationLocation"
              name="destinationLocation"
              value={card.title}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="numberOfPassengers" className="block text-sm font-medium text-gray-700">Number of Passengers</label>
            <input
              type="number"
              id="numberOfPassengers"
              name="numberOfPassengers"
              value={formData.numberOfPassengers}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="typeOfTransport" className="block text-sm font-medium text-gray-700">Type of Transport</label>
            <select
              id="typeOfTransport"
              name="typeOfTransport"
              value={formData.typeOfTransport}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Type</option>
              <option value="ferry">Ferry</option>
              <option value="cargo_ship">Cargo Ship</option>
              <option value="private_yacht">Private Yacht</option>
            </select>
          </div>
  
          {/* Payment Information */}
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="Chapa">Chapa</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="USD">USD</option>
              <option value="Birr">Birr</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
  
          {/* Special Requests */}
          {/* <div className="mb-4">
            <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700">Special Needs</label>
            <textarea
              id="specialNeeds"
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div> */}
    {/* <Link href="/Splashing" passHref > */}
    <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleBidNow}>
               <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={public_key} />
    <input type="hidden" name="tx_ref" value={tx_ref} />
    <input type="hidden" name="amount" value={amount} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={email} />
    <input type="hidden" name="first_name" value={first_name} />
    <input type="hidden" name="last_name" value={last_name} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="http://localhost:3000/congratulation" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit" className='  border-solid border-2xl border-slate-600 active:bg-slate-100' >Book Now ✨</button>
</form>
          </button>
   
    {/* </Link> */}
        
        
        </form>
      </div>
      </>
      }

      <BottomNavBar />
    </div>
  );
};

export default DetailPage;
