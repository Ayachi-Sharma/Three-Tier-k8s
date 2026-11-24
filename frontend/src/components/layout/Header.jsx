import React from "react";
import TestLogo from "../../assets/icons/TestLogo.png";
import more_vert from "../../assets/icons/more_vert.png";
import home from "../../assets/icons/home.png";
import Settings from "../../assets/icons/settings.png"
import Profile from "../../assets/icons/Profile.png";
import chatBubble from "../../assets/icons/chatBubble.png";
import Schedule from "../../assets/icons/Schedule.png";
import Transaction from "../../assets/icons/Transaction.png";
import group from "../../assets/icons/group.png";


const navItems = [
  {
    name: "Overview",
    icon: home,
  },
  {
    name: "Patients",
    icon: group,
    active: true,
  },
  {
    name: "Schedule",
    icon: Schedule,
  },
  {
    name: "Message",
    icon: chatBubble,
  },
  {
    name: "Transactions",
    icon: Transaction,
  },
];

function Header() {
  return (
    <header className="bg-[#FFFFFF] rounded-[70px] h-[68px] px-8 flex items-center justify-between m-4">
      {/* TestLogo */}
      {/* <img src={TestLogo} alt="MediTrack" className="h-7 " /> */}
      <p className="text-[30px] font-extrabold text-[#072635] tracking-tight m-0">MediTrack</p>
      {/* Navigation */}
      <nav className="flex items-center gap-2 ">
        {navItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center shrink-0 gap-2 px-2 py-3 rounded-full cursor-pointer transition
              ${
                item.active
                  ? "bg-[#01F0D0]"
                  : "hover:bg-gray-100"
              }`}
          >
            <img src={item.icon} alt={item.name} className="w-4 h-4" />

            <span
              className="whitespace-nowrap text-[#072635] text-[14px] leading-[19px] font-bold"
              style={{ fontFamily: "Manrope", opacity: 1  }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-2 ">
        <div className="flex items-center gap-3">
          <img
            src={Profile}
            alt="profile"
            className="w-11 h-11 rounded-full"
          />

          <div className="leading-none">
            <h4
              className="text-[#072635] text-[14px] font-bold"
              style={{ fontFamily: "Manrope" }}
            >
              Dr. Jose Simmons
            </h4>

            <p
              className="text-[#707070] text-[14px]"
              style={{ fontFamily: "Manrope" }}
            >
              General Practitioner
            </p>
          </div>
        </div>

        <div className="w-px h-10 bg-gray-300" />

        <button>
          <img src={Settings} alt="settings" className="w-5 h-5" />
        </button>

        <button>
          <img src={more_vert} alt="more" className="w-1 h-5" />
        </button>
      </div>
    </header>
  );
}

export default Header;
