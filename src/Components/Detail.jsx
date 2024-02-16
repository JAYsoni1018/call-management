import { Link } from "react-router-dom"

const Detail = () => {
    return (
        <div className="detail">
            <div className="data">
                <p className="key">CID</p>
                <p className="value">1</p>
            </div>
            <div className="data">
                <p className="key">Name</p>
                <p className="value">Joyn xyz</p>
            </div>
            <div className="data">
                <p className="key">Email</p>
                <p className="value">joyn@gmail.com</p>
            </div>
            <div className="data">
                <p className="key">Mobile</p>
                <p className="value">9878766666</p>
            </div>
            <div className="data">
                <p className="key">Date</p>
                <p className="value">12/2/2024</p>
            </div>
            <div className="data">
                <p className="key">Problem</p>
                <p className="problem">Lorem, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, laboriosam exercitationem numquam, explicabo consequatur iure et quod facere dolor, incidunt ea! Praesentium sunt, facilis molestiae soluta assumenda minima magni minus officia ut pariatur error? At quis id nihil officia. Amet! ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div className="data">
                <p className="key">Status</p>
                <select className="status">
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                    <option value="reject">Reject</option>
                    <option value="in-progress">In progress</option>
                </select>
            </div>
            <Link to="/" className="submit-btn ">Submit</Link>


            <Link to="/" className="btn-del">Close Ticket</Link>
        </div>
    )
}

export default Detail
