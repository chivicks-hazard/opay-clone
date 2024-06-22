import { BsBank2, BsChatSquareFill, BsPersonFill } from "react-icons/bs"
import { PiHandWithdrawFill } from "react-icons/pi"

const TransferCard = () => {
    return (
        <div className="flex flex-row mt-5 bg-white py-5 px-4 rounded-xl space-x-16 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-lg">
                    <BsChatSquareFill className="text-3xl text-green-700"/>
                    <BsPersonFill className="text-md -mt-[1.60rem] ml-[0.45rem] text-white" />
                </div>
                
                <p className="font-medium mt-2">To Opay</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-lg">
                    <BsBank2 className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">To Bank</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="p-3 bg-lightGreen-2 rounded-lg">
                    <PiHandWithdrawFill className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-2">Withdraw</p>
            </div>
        </div>
    )
}

export default TransferCard