import { Link } from 'react-router-dom'

const Customers = () => {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>All Customers</h2>
                    {/* <Link to="/detail" className="btn">View All</Link> */}
                </div>

                <table>
                    <thead>
                        <tr >
                            <td>CID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Mobile</td>
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
                            <td>9878766666</td>
                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status delivered">Delivered</span></td>
                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>

                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Joyn xyz</td>
                            <td>joyn@gmail.com</td>
                            <td>9878766666</td>
                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status pending">Pending</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Joyn xyz</td>
                            <td>joyn@gmail.com</td>
                            <td>9878766666</td>
                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status return">Return</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Joyn xyz</td>
                            <td>joyn@gmail.com</td>
                            <td>9878766666</td>
                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status inProgress">In Progress</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Joyn xyz</td>
                            <td>joyn@gmail.com</td>
                            <td>9878766666</td>
                            <td className="problem">Lorem, ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td><span className="status delivered">Delivered</span></td>

                            <td>12/2/2024</td>
                            <td  >
                                <Link to="/detail" className="btn">View</Link>
                                <Link to="/#" className="btn-del">Close</Link>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Joyn xyz</td>
                            <td>joyn@gmail.com</td>
                            <td>9878766666</td>
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

export default Customers
