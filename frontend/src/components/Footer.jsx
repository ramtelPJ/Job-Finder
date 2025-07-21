import React from 'react'

function Footer() {
return (
    <footer className="bg-[#dad8d6] text-black border-t-4 border-[#FDB913] mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div className="space-y-2">
                <h4 className="font-semibold">Explore</h4>
                <ul className="space-y-1">
                    <li><a href="https://www.ulm.edu/students/" className="hover:text-[#FDB913]">Students</a></li>
                    <li><a href="https://www.ulm.edu/employees/" className="hover:text-[#FDB913]">Faculty & Staff</a></li>
                    <li><a href="https://www.ulm.edu/admissions/" className="hover:text-[#FDB913]">Admissions</a></li>
                    <li><a href="https://www.ulm.edu/alumni/" className="hover:text-[#FDB913]">Alumni</a></li>
                    <li><a href="https://www.ulm.edu/visit/" className="hover:text-[#FDB913]">Visit</a></li>
                </ul>
            </div>
            {/* Column 2 */}
            <div className="space-y-2">
                <h4 className="font-semibold">Resources</h4>
                <ul className="space-y-1">
                    <li><a href="https://www.ulm.edu/employ/" className="hover:text-[#FDB913]">Employment</a></li>
                    <li><a href="https://www.ulm.edu/library/" className="hover:text-[#FDB913]">Library</a></li>
                    <li><a href="https://www.ulm.edu/studenthandbook/" className="hover:text-[#FDB913]">Student Handbook</a></li>
                    <li><a href="https://www.ulm.edu/emergency/" className="hover:text-[#FDB913]">Emergency Info</a></li>
                </ul>
            </div>
            {/* Column 3 */}
            <div className="space-y-2">
                <h4 className="font-semibold">Contact</h4>
                <p>
                    University of Louisiana Monroe<br />
                    700 University Avenue<br />
                    Monroe, LA 71209<br />
                    <a href="tel:3183421000" className="hover:text-[#FDB913]">318.342.1000</a>
                </p>
            </div>
        </div>
    </footer>
)
}

export default Footer