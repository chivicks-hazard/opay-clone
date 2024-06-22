import { FaHandHoldingUsd } from "react-icons/fa"
import { FaHandHoldingHeart } from "react-icons/fa6"
import { MdSignalCellularAlt } from "react-icons/md"
import { PiHandWithdrawFill, PiTelevisionSimple } from "react-icons/pi"
import { RiFootballFill, RiSmartphoneFill } from "react-icons/ri"
import { TbLetterW, TbMobiledata } from "react-icons/tb"
import { TfiMoreAlt } from "react-icons/tfi"

const PaymentCard = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-y-4 py-3 px-4 mt-5 bg-white rounded-xl">
            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <RiSmartphoneFill className="text-3xl text-green-700" />
                    <MdSignalCellularAlt className="text-md text-white -mt-5 ml-[0.40rem]" />
                </div>
                
                <p className="font-medium mt-2">Airtime</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <RiSmartphoneFill className="text-3xl text-green-700" />
                    <TbMobiledata className="text-md text-white -mt-5 ml-[0.40rem]" />
                </div>
                
                <p className="font-medium mt-2">Data</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <RiFootballFill className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">Betting</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <PiTelevisionSimple className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">TV</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <TbLetterW className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">OWealth</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <FaHandHoldingUsd className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">Loan</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <FaHandHoldingHeart className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">Play4aChild</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-full">
                    <TfiMoreAlt className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">More</p>
            </div>
        </div>
    )
}

export default PaymentCard