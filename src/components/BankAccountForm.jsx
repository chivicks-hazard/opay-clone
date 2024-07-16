import React from 'react'

const BankAccountForm = () => {
    return (
        <>
            <div className="space-y-4 text-lg">
                <label htmlFor="cardnumber">Bank</label>
                <input type="text" inputMode="numeric" id="cardnumber" className="w-full p-2 focus:outline-none rounded-md" placeholder="Enter 16-19 digit card number" />
            </div>
            <div className="space-y-4 text-lg">
                <label htmlFor="cardnumber">Bank Account</label>
                <input type="number" inputMode="numeric" id="cardnumber" className="w-full p-2 focus:outline-none rounded-md" placeholder="Enter 10 digit number" />
            </div>
            <div className="space-y-4 text-lg">
                <label htmlFor="pin">Enter you</label>
                <input type="number" inputMode="numeric" id="pin" className="w-full p-2 focus:outline-none rounded-md" placeholder="Enter you" />
            </div>
        </>
    )
}

export default BankAccountForm