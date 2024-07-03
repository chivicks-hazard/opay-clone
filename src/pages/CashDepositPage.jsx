import React from 'react'
import TopBar from '../components/TopBar'
import BankDetailsCard from '../components/BankDetailsCard'
import InstructionsCard from '../components/InstructionsCard'

const CashDepositPage = () => {
    return (
        <div className='bg-gray-50 mx-auto'>
            <div className="flex flex-col justify-center items-center mx-4">
                <TopBar page="cashdeposit" />
                <BankDetailsCard page="cashdeposit" />
                <InstructionsCard />
            </div>
        </div>
    )
}

export default CashDepositPage