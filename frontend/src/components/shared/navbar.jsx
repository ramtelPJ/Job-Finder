import React from 'react'

const Navbar=() => {
    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">Job Portal</div>
            <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="/jobs" className="text-white hover:text-gray-300">Jobs</a></li>
            <li><a href="/about" className="text-white hover:text-gray-300">About Us</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </div>
        </nav>
    )
}
export default Navbar;