import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Bell,
    ChevronDown,
} from "lucide-react";

import fotoMhs from "../../../assets/profile-mahasiswa.jpg";

const TopbarMhs = () => {

    const [showDropdown, setShowDropdown] =
        useState(false);

    const navigate = useNavigate();

    return (

        <header className="
            bg-white
            border-b
            border-gray-200
            px-6
            py-4
            flex
            justify-end
            items-center
        ">

            {/* RIGHT SECTION */}
            <div className="
                flex
                items-center
                gap-4
            ">

                {/* NOTIFICATION */}
                <button className="
                    text-indigo-800
                    hover:text-indigo-600
                    transition
                ">
                    <Bell size={20}/>
                </button>

                {/* PROFILE WRAPPER */}
                <div className="relative">
                    {/* PROFILE */}
                    <div
                        onClick={() =>
                            setShowDropdown(
                                !showDropdown
                            )
                        }
                        className="
                            flex
                            items-center
                            gap-3
                            cursor-pointer
                        "
                    >
                        {/* AVATAR */}
                        <img
                            src={fotoMhs}
                            alt="Foto Mahasiswa"
                            className="
                                w-7
                                h-7
                                rounded-full
                                object-cover
                            "
                        />

                        {/* NAME */}
                        <span className="
                            text-sm
                            font-regular
                            text-gray-800
                        ">
                            Fatiyya Ilmi Zahra
                        </span>

                        {/* DROPDOWN */}
                        <ChevronDown
                            size={18}
                            className="text-gray-600"
                        />

                    </div>

                    {/* DROPDOWN MENU */}
                    {showDropdown && (
                        <div className="
                            absolute
                            top-12
                            right-0
                            z-20
                            w-48
                            bg-white
                            border
                            border-light-blue
                            rounded-xl
                            shadow-lg
                            overflow-hidden
                        ">

                            {/* EDIT PROFILE */}
                            <button
                                onClick={() =>
                                    navigate(
                                        "/profile-mahasiswa"
                                    )
                                }
                                className="
                                    block
                                    w-full
                                    px-4
                                    py-3
                                    text-left
                                    text-sm
                                    text-gray-700
                                    hover:bg-light-blue-2
                                    transition
                                    cursor-pointer
                                "
                            >
                                Edit Profile
                            </button>

                            {/* LOGOUT */}
                            <button
                                onClick={() =>
                                    navigate("/")
                                }
                                className="
                                    block
                                    w-full
                                    px-4
                                    py-3
                                    text-left
                                    text-sm
                                    text-red-600
                                    hover:bg-red-50
                                    transition
                                    cursor-pointer
                                "
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default TopbarMhs;