import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ChevronDown} from "lucide-react";
import logoShopee from "../../../assets/logo-shopee.png";

const TopbarMitra = () => {

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
                            src={logoShopee}
                            alt="Logo Shopee"
                            className="
                                w-8
                                h-8
                                rounded
                                object-contain
                            "
                        />
                        {/* NAME */}
                        <span className="
                            text-sm
                            font-regular
                            text-gray-800
                        ">
                            Shopee Indonesia
                        </span>

                        {/* DROPDOWN ICON */}
                        <ChevronDown
                            size={18}
                            className={`
                                text-gray-600
                                transition-transform
                                duration-300
                                ${
                                    showDropdown
                                    ? "rotate-180"
                                    : ""
                                }
                            `}
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
                                        "/profile-mitra"
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

export default TopbarMitra;