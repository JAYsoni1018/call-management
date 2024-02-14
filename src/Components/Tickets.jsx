// import React from 'react'

import { Link } from "react-router-dom"

const Tickets = () => {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>All Tickets</h2>
                    {/* <Link to="/detail" className="btn">View All</Link> */}
                </div>

                <table>
                    <thead>
                        <tr >
                            <td>TID</td>
                            <td>CID</td>
                            <td>CName</td>

                            <td>Problem</td>
                            <td>Status</td>
                            <td>Date</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1098</td>
                            <td>1</td>
                            <td>Joyn xyz</td>

                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status delivered">Delivered</span></td>
                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>

                        </tr>

                        <tr>
                            <td>2968</td>
                            <td>2</td>
                            <td>Joyn xyz</td>

                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status pending">Pending</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>9876</td>
                            <td>3</td>
                            <td>Joyn xyz</td>

                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status return">Return</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>876768</td>
                            <td>4</td>
                            <td>Joyn xyz</td>

                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status inProgress">In Progress</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>89898</td>
                            <td>4</td>
                            <td>Joyn xyz</td>

                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status delivered">Delivered</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>98</td>
                            <td>6</td>
                            <td>Joyn xyz</td>

                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status pending">Pending</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tickets
