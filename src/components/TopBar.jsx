import { FaAlgolia, FaHeadset, FaRegBell } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";
import Opay from "../assets/images/Opay.svg?react";

const TopBar = () => {
    return (
        <div className="flex flex-row p-5 bg-white space-x-16">
            <div className="flex flex-row mr-5">
                <FaAlgolia className="mt-2 text-2xl mr-2
                "></FaAlgolia>
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
}

export default TopBar