// import React from 'react'

import { Link } from "react-router-dom"

const Order = () => {
  return (
       <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Ticket</h2>
                        <Link to="/#" className="btn">View All</Link>
                    </div>

                    <table>
                        <thead>
                            <tr >
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Problem</td>
                                <td>Status</td>
                                <td>Date</td>
                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Joyn xyz</td>
                                <td>joyn@gmail.com</td>
                                <td className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta architecto repellendus rem laboriosam </td>
                                <td><span className="status delivered">Delivered</span></td>
                                <td>12/2/2024</td>
                                <td></td>

                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
  )
}

export default Order
