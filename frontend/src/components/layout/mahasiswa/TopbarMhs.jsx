import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

import {
    Bell,
    ChevronDown,
    CircleCheck,
    CircleX,
    BriefcaseBusiness,
} from "lucide-react";

import fotoMhs from "../../../assets/profile-mahasiswa.jpg";

const TopbarMhs = () => {

    // NAVIGATE
    const navigate = useNavigate();

    // DROPDOWN PROFILE
    const [
        showDropdown,
        setShowDropdown,
    ] = useState(false);

    // DROPDOWN NOTIFICATION
    const [
        showNotification,
        setShowNotification,
    ] = useState(false);

    
    
    // DUMMY NOTIFICATION
    const [
    notifications,
    setNotifications,
    ] = useState([

        {
            id: 1,

            title:
                "UI/UX Designer Internship",

            message:
                "Lamaran Anda masuk tahap wawancara.",

            status: "Wawancara",

            isRead: false,
        },

        {
            id: 2,

            title:
                "Data Analyst Internship",

            message:
                "Lamaran Anda diterima.",

            status: "Diterima",

            isRead: false,
        },

        {
            id: 3,

            title:
                "Business Case Competition",

            message:
                "Lamaran Anda ditolak.",

            status: "Ditolak",

            isRead: true,
        },

    ]);

    const hasUnreadNotification =
    notifications.some(
        (notif) => !notif.isRead
    );

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
                gap-5
            ">

                {/* NOTIFICATION */}
                <div className="relative">

                    {/* NOTIFICATION BUTTON */}
                    <button
                        onClick={() => {

                            setShowNotification(
                                !showNotification
                            );

                            
                        }}

                        className="
                            text-bold-blue
                            hover:text-indigo-500
                            transition
                            cursor-pointer
                        "
                    >

                        <div className="relative">

                            {/* BELL ICON */}
                            <Bell size={22}/>

                            {/* NOTIFICATION DOT */}
                            {hasUnreadNotification && (

                                <span className="
                                    absolute
                                    -top-1
                                    -right-1

                                    w-3
                                    h-3

                                    rounded-full

                                    bg-light-blue

                                    border-2
                                    border-white
                                "></span>

                            )}

                        </div>

                    </button>

                    {/* NOTIFICATION DROPDOWN */}
                    {showNotification && (

                        <div className="
                            absolute
                            top-12
                            right-0
                            z-50

                            w-[360px]

                            bg-white
                            rounded-2xl
                            shadow-2xl

                            border
                            border-light-blue

                            overflow-hidden

                            animate-fadeInUp
                        ">

                            {/* HEADER */}
                            <div className="
                                px-5
                                py-4

                                border-b
                                border-gray-100

                                bg-light-blue-2
                            ">

                                <h2 className="
                                    text-lg
                                    font-bold
                                    text-bold-blue
                                ">
                                    Notifikasi
                                </h2>

                                <p className="
                                    text-sm
                                    text-gray-500
                                    mt-1
                                ">
                                    Update terbaru lamaran Anda
                                </p>

                            </div>

                            {/* NOTIFICATION LIST */}
                            <div className="
                                max-h-[350px]
                                overflow-y-auto
                            ">

                                {notifications.map(
                                    (notif) => {

                                    let icon;
                                    let iconStyle = "";

                                    // WAWANCARA
                                    if (
                                        notif.status ===
                                        "Wawancara"
                                    ) {

                                        icon = (
                                            <BriefcaseBusiness
                                                size={18}
                                            />
                                        );

                                        iconStyle =
                                            "bg-yellow-100 text-yellow-600";
                                    }

                                    // DITERIMA
                                    else if (
                                        notif.status ===
                                        "Diterima"
                                    ) {

                                        icon = (
                                            <CircleCheck
                                                size={18}
                                            />
                                        );

                                        iconStyle =
                                            "bg-green-100 text-green-600";
                                    }

                                    // DITOLAK
                                    else {

                                        icon = (
                                            <CircleX
                                                size={18}
                                            />
                                        );

                                        iconStyle =
                                            "bg-red-100 text-red-500";
                                    }

                                    return (

                                        <div
                                            key={notif.id}

                                            onClick={() => {

                                                // UPDATE READ STATUS
                                                const updatedNotifications =
                                                    notifications.map(
                                                        (item) => {

                                                        if (
                                                            item.id === notif.id
                                                        ) {

                                                            return {
                                                                ...item,
                                                                isRead: true,
                                                            };
                                                        }

                                                        return item;
                                                    });

                                                setNotifications(
                                                    updatedNotifications
                                                );

                                                // CLOSE NOTIFICATION
                                                setShowNotification(false);

                                                // NAVIGATE
                                                navigate("/lamaran-list");
                                            }}

                                            className={`
                                                flex
                                                gap-4

                                                px-5
                                                py-4

                                                border-b
                                                border-gray-100

                                                transition
                                                cursor-pointer

                                                hover:bg-light-blue-2

                                                ${
                                                    !notif.isRead
                                                        ? "bg-light-blue-2"
                                                        : "bg-white"
                                                }
                                            `}
                                        >

                                            {/* ICON */}
                                            <div className={`
                                                w-10
                                                h-10

                                                rounded-full

                                                flex
                                                items-center
                                                justify-center

                                                ${iconStyle}
                                            `}>

                                                {icon}

                                            </div>

                                            {/* TEXT */}
                                            <div className="flex-1">

                                                {/* TITLE */}
                                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                ">

                                    <h3 className={`
                                        text-sm
                                        text-black

                                        ${
                                            !notif.isRead
                                                ? "font-bold"
                                                : "font-semibold"
                                        }
                                    `}>

                                        {notif.title}

                                    </h3>

                                    {/* UNREAD DOT */}
                                    {!notif.isRead && (

                                        <span className="
                                            w-2
                                            h-2

                                            rounded-full

                                            bg-light-blue
                                        "></span>

                                    )}

                                </div>

                                                {/* MESSAGE */}
                                                <p className="
                                                    text-sm
                                                    text-gray-500
                                                    mt-1
                                                    leading-relaxed
                                                ">
                                                    {notif.message}
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>
                    )}

                </div>

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

                        {/* PHOTO */}
                        <img
                            src={fotoMhs}
                            alt="Foto Mahasiswa"

                            className="
                                w-9
                                h-9

                                rounded-full
                                object-cover
                            "
                        />

                        {/* NAME */}
                        <span className="
                            text-sm
                            font-medium
                            text-gray-800
                        ">
                            Fatiyya Ilmi Zahra
                        </span>

                        {/* ICON */}
                        <ChevronDown
                            size={18}
                            className="text-gray-600"
                        />

                    </div>

                    {/* PROFILE DROPDOWN */}
                    {showDropdown && (

                        <div className="
                            absolute
                            top-12
                            right-0
                            z-40

                            w-52

                            bg-white

                            border
                            border-light-blue

                            rounded-2xl
                            shadow-xl

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

                                    px-5
                                    py-4

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
                                    logout(navigate)
                                }
                                className="
                                    block
                                    w-full
                                    px-5
                                    py-4
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