import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import {
  FaBookMedical,
  FaBookOpen,
  FaFileImage,
  FaRegPlusSquare,
  FaEdit,
} from "react-icons/fa";

import { MdDelete } from "react-icons/md";

import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
// import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

import { FaEye } from "react-icons/fa6";
const routes = [
  { path: "/admin/", name: "AdminDashboard", icon: <FaHome /> },
  { path: "/admin/getallchapters", name: "GetAllChapters", icon: <FaEye /> },

  {
    path: "/admin/adminDashboard",
    name: "Add",
    icon: <FaRegPlusSquare />,
    subRoutes: [
      {
        path: "/admin/addchapter",
        name: "AddChapter",
        icon: <FaBookMedical />,
      },
      {
        path: "/admin/addsubchapter",
        name: "AddSubChapter",
        icon: <FaBookOpen />,
      },
      {
        path: "/admin/addimage",
        name: "AddImage",
        icon: <FaFileImage />,
      },
    ],
  },
  {
    path: "/admin/adminDashboard",
    name: "Update",
    icon: <FaEdit />,
    subRoutes: [
      {
        path: "/admin/updatechapter",
        name: "UpdateChapter",
        icon: <FaBookMedical />,
      },
      {
        path: "/admin/updatesubchapter",
        name: "UpdateSubChapter",
        icon: <FaBookOpen />,
      },
      {
        path: "/admin/updateimage",
        name: "UpdateImage",
        icon: <FaFileImage />,
      },
    ],
  },

  {
    path: "/admin/adminDashboard",
    name: "Delete",
    icon: <MdDelete />,
    subRoutes: [
      {
        path: "/admin/deletechapter",
        name: "DeleteChapter",
        icon: <FaBookMedical />,
      },
      {
        path: "/admin/deletesubchapter",
        name: "DeleteSubChapter",
        icon: <FaBookOpen />,
      },
      {
        path: "/admin/deleteimage",
        name: "DeleteImage",
        icon: <FaFileImage />,
      },
    ],
  },

  {
    path: "/admin/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/admin/messages",
    name: "Messages",
    icon: <MdMessage />,
  },

  {
    path: "/admin/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/admin/settings",
    name: "Setting",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h3
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                ></motion.h3>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
