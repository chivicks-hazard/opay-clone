const InstructionsCard = () => {
    return (
        <div className="p-5 mt-5 rounded-xl container bg-white">
            <h2 className="text-lg font-semibold mb-3">How to make a cash deposit</h2>
            <ol className="list-decimal list-outside ml-3">
                <li className="mb-2">
                    <span className="font-bold">Give cash to the POS merchant</span>
                    <p className="text-gray-700">
                        Give cash to the POS merchant and ask for the funds to be transferred to your OPay Account 
                        <span className="font-bold text-green-600"> 906 197 8675</span>
                    </p>
                </li>
                <li>
                    <span className="font-bold">Confirm receipt of funds</span>
                    <p className="text-gray-700">
                        Confirm your OPay Account has been funded with the correct amount
                    </p>
                </li>
            </ol>
        </div>
    )
}

export default InstructionsCard