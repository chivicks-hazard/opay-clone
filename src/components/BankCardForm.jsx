const BankCardForm = ({children}) => {
    return (
        <>
            <div className="space-y-4 text-lg">
                <label htmlFor="cardnumber">Card Number</label>
                <input type="number" inputMode="numeric" id="cardnumber" className="w-full p-2 focus:outline-none rounded-md" placeholder="Enter 16-19 digit card number" />
            </div>
            <div className="flex flex-row justify-center space-x-4">
                <div className="w-1/2 space-y-4 text-lg">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input type="text" id="expiry" className="w-full p-2 focus:outline-none rounded-md" placeholder="MM/YY" />
                </div>
                <div className="w-1/2 space-y-4 text-lg">
                    <label htmlFor="cvv">CVV</label>
                    <input type="number" inputMode="numeric" id="cvv" className="w-full p-2 focus:outline-none rounded-md" placeholder="CVV" />
                </div>
            </div>
            <div className="space-y-4 text-lg">
                <label htmlFor="pin">PIN</label>
                <input type="number" inputMode="numeric" id="pin" className="w-full p-2 focus:outline-none rounded-md" placeholder="Enter Card PIN" />
            </div>
        </>
    )
}

export default BankCardForm