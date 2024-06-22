import { CgSmileMouthOpen } from "react-icons/cg"
import { HiOutlineCreditCard } from "react-icons/hi"
import { IoDiamond } from "react-icons/io5"
import { LuCircleDot } from "react-icons/lu"


const BottomNavBar = () => {
    return (
        <div className="flex flex-row justify-center items-center space-x-7 p-2 fixed bottom-0 left-0 right-0 bg-white" >
            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <LuCircleDot className="text-2xl text-green-700" />
                </div>

                <p className="font-medium mt-1">Home</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <IoDiamond className="text-2xl" />
                </div>

                <p className="font-medium mt-1">Rewards</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <LuCircleDot className="text-2xl" />
                </div>

                <p className="font-medium mt-1">Finances</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <HiOutlineCreditCard className="text-2xl" />
                </div>

                <p className="font-medium mt-1">Card</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <CgSmileMouthOpen className="text-2xl" />
                </div>

                <p className="font-medium mt-1">Me</p>
            </div>
        </div>
    )
}

export default BottomNavBar;