import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
const Navbar = () => {

    const [ShowMenu, setShowMenu] = useState(false);

    const [ShowForm, setShowForm] = useState(false);




    useEffect(() => {
        if (ShowMenu) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }

    }, [ShowMenu])


    useEffect(() => {
        if (ShowForm) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }

    }, [ShowForm])




    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "139d1416-16f7-427a-b013-f43420d6f505");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message sent successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <div className="absolute top-0 left-0 w-full z-10" >

            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>Abouts</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button onClick={() => setShowForm(true)} className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>

            {/* signupForm */}


            <div className={` ${ShowForm ? 'fixed w-full block' : 'h-0 w-0 hidden'} fixed top-20 right-10 h-fit w-full max-w-sm z-50 bg-gray-800 p-6 text-white shadow-lg rounded-lg sm:hidden md:block  `} >
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Enter your name</label>
                        <input
                            type="text"
                            name="Name"
                            placeholder="Enter your name"
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Enter your email</label>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter your email"
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Enter your number</label>
                        <input
                            type="number"
                            name="Number"
                            placeholder="Enter your number"
                            required
                            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                        />
                    </div>

                    <div className="text-center text-gray-400 font-light">
                        --------------- or ----------------
                    </div>

                    <div>
                        <button
                            type="button"
                            className="w-full bg-white text-gray-800 font-semibold py-2 rounded hover:bg-gray-400 transition"
                        >
                            Sign up with Google
                        </button>
                    </div>

                    <div>
                        <button
                            type="submit"

                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                            onClick={() => setShowForm(false)}

                        >
                            {result ? result : "Create account "}
                        </button>
                    </div>
                </form>
            </div>




            {/* ------Mobile Menu */}
            <div className={`md:hidden ${ShowMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-200`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" onClick={() => setShowMenu(false)} className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a href="#About" onClick={() => setShowMenu(false)} className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a href="#Projects" onClick={() => setShowMenu(false)} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a href="#Testimonials" onClick={() => setShowMenu(false)} className='px-4 py-2 rounded-full inline-block'>Testtimonials</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
