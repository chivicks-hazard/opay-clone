import { useEffect, useState } from "react"
import { FaAngleRight, FaEye, FaEyeSlash } from "react-icons/fa6"
import { MdGppGood } from "react-icons/md"
import { Link } from "react-router-dom";

const BalanceCard = () => {
    const [displayBalance, setDiplayBalance] = useState(false);

    const toggleDisplayBalance = () => {
        setDiplayBalance(prevState => !prevState)
    }


    return (
        <div className="flex flex-col justify-center items-center rounded-xl bg-green-500 space-y-5 p-3 mt-20 text-white">
            <div className="flex flex-row space-x-2">
                <span className="inline-flex space-x-1">
                    <MdGppGood className="inline mt-1"/>
                    <span>Available Balance</span>
                    <i className="balance-display-btn inline mt-1" onClick={toggleDisplayBalance}>
                        {displayBalance ? <FaEye /> : <FaEyeSlash />}
                    </i>
                </span>
                <a className="inline-flex space-x-1">
                    <span>Transaction History</span>
                    <FaAngleRight className="inline mt-1"/>
                </a>
            </div>
            <div className={`flex flex-row ${displayBalance ? 'space-x-20' : 'space-x-36'}`}>
                <h3 className="text-3xl">
                    {
                        displayBalance ? 
                            <span><span className="text-sm">&#x20A6;</span> 8000.00</span> 
                        : 
                            <span className="tracking-wider">****</span>
                    }
                </h3>
                <Link to="/add-money">
                    <button className="bg-white text-green-500 py-1 px-3 rounded-3xl">
                        <span className="font-medium">+ Add Money</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BalanceCard