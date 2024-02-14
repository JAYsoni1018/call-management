// import React from 'react'

import { faCircleQuestion, faComment } from "@fortawesome/free-regular-svg-icons"
import { faGear, faHouse, faLock, faMagnifyingGlass, faRightFromBracket, faTicket, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import person from '../assets/imgs/customer01.jpg'

const SideBar = () => {
    return (
        <div className="container">
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/#">
                            <span className="icon">
                            </span>
                            {/* <span className="title">Brand Name</span> */}
                        </Link>
                    </li>

                    <li>
                        <Link to="/#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faHouse} size="xl" />
                            </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/customers">
                            <span className="icon">
                                <FontAwesomeIcon icon={faUsers} size="xl" />
                            </span>
                            <span className="title">Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tickets">
                            <span className="icon">
                                <FontAwesomeIcon icon={faTicket} size="xl" />
                            </span>
                            <span className="title">Ticket</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faComment} size="xl" />
                            </span>
                            <span className="title">Messages</span>
                        </Link>
                    </li>



                    {/* <li>
                        <Link to="/#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faGear} size="xl" />
                            </span>
                            <span className="title">Settings</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faLock} size="xl" />
                            </span>
                            <span className="title">Password</span>
                        </Link>
                    </li> */}

                    <li>
                        <Link to="/#">
                            <span className="icon">
                                <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
                            </span>
                            <span className="title">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div className="main"> */}
                <div className="topbar">
                    <div className="toggle">
                    {/* <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /> */}
                    </div>

                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                        </label>
                    </div>

                    <div className="user">
                        <img src={person} alt="loading" />
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default SideBar

