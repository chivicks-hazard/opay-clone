import { FaAlgolia, FaAngleRight } from "react-icons/fa6"

const BankDetailsCard = () => {
    return (
        <div className='flex flex-col mt-24 rounded-lg bg-white p-4 w-100'>
            <div className="flex flex-row space-x-3">
                <FaAlgolia className="mt-2 text-3xl mr-2 self-center" />
                <div className="flex flex-col">
                    <h3 className="font-medium text-2xl">Bank Transfer</h3>
                    <p className="text-lg text-gray-500">Add money via mobile or internet banking</p>
                </div>
                <FaAngleRight className="mt-2 text-3xl self-center" />
            </div>
            <div className="flex flex-col mt-5">
                <p className="text-gray-500 text-lg">Opay Account Number</p>
                <p className="text-4xl font-bold">123 4567 890</p>
            </div>
            <div className="flex flex-row justify-center space-x-12 mt-3">
                <button className="bg-lightGreen-2 text-green-500 py-1 px-3 rounded-3xl"><span className="font-medium">Copy Number</span></button>
                <button className="bg-green-500 text-white py-1 px-3 rounded-3xl"><span className="font-medium">Share Details</span></button>
            </div>
        </div>
    )
}

export default BankDetailsCard