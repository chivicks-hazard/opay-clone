import { FaAlgolia, FaAngleRight } from "react-icons/fa6"

const OptionCard = ({title, body, key}) => {
    return (
        <div className="flex flex-row justify-center items-center space-x-4 mt-5 p-3 rounded-xl bg-white w-100 space-around">
            <FaAlgolia className="mt-2 text-3xl mr-2 self-center" />
            <div className="flex flex-col">
                <h3 className="font-medium text-2xl">{title}</h3>
                <p className="text-lg text-gray-500">{body} {key}</p>
            </div>
            <FaAngleRight className="mt-2 text-3xl self-center" />
        </div>
    )
}

export default OptionCard