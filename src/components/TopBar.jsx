import { FaAlgolia, FaAngleLeft, FaHeadset, FaRegBell } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";
import Opay from "../assets/images/Opay.svg?react";
import { Link } from "react-router-dom";

const TopBar = ({page}) => {
    switch (page) {
        case 'homepage':
            return (
                <div className="flex flex-row p-5 bg-white space-x-8 justify-center items-center fixed top-0 left-0 right-0">
                    <div className="flex flex-row mr-5 space-x-1">
                        <FaAlgolia className="mt-2 text-2xl mr-2" />
                        <h1 className="text-2xl">HI, VICTOR</h1>
                    </div>
                    <div className="flex flex-row space-x-5 ml-5 mt-1">
                        <FaHeadset className="text-2xl" />
                        <MdQrCodeScanner className="text-2xl" />
                        <span>
                            <FaRegBell className="text-2xl" />
                        </span>
                    </div>
                </div>
            )
            
        case 'addmoney':
            return (
                <div className="flex flex-row p-5 bg-white fixed top-0 left-0 right-0">
                    <div className="flex justify-center items-center flex-start space-x-5">
                        <Link to="/"><FaAngleLeft className="text-2xl mt-1" /></Link>
                        <h3 className="text-2xl font-medium">Add Money</h3>
                    </div>
                </div>
            )

        case 'cashdeposit':
            return (
                <div className="flex flex-row p-5 bg-white fixed top-0 left-0 right-0">
                    <div className="flex justify-center items-center flex-start space-x-5">
                        <Link to="/add-money"><FaAngleLeft className="text-2xl mt-1" /></Link>
                        <h3 className="text-2xl font-medium">Cash Deposit</h3>
                    </div>
                </div>
            )

        default:
            break;
    }
}

export default TopBar