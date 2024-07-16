import { BsCashCoin, BsQrCodeScan } from "react-icons/bs"
import { FaAlgolia, FaAngleRight } from "react-icons/fa6"
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoKeypad } from "react-icons/io5";

const OptionCard = ({title, body, logo}) => {
    let LogoComponent;

    switch (logo) {
        case 'cash':
            LogoComponent = BsCashCoin;
            break;

        case 'top-up':
            LogoComponent = HiOutlineCreditCard;
            break;

        case 'ussd':
            LogoComponent = IoKeypad;
            break;

        case 'qr-code':
            LogoComponent = BsQrCodeScan;
            break;
    
        default:
            break;
    }

    return (
        <div className="flex flex-row justify-center items-center space-x-4 mt-5 p-3 rounded-xl bg-white w-full space-around">
            <LogoComponent className="mt-2 text-4xl mr-2 self-center" />
            <div className="flex flex-col">
                <h3 className="font-medium text-2xl">{title}</h3>
                <p className="text-lg text-gray-500">{body}</p>
            </div>
            <FaAngleRight className="mt-2 text-3xl self-center" />
        </div>
    )
}

export default OptionCard