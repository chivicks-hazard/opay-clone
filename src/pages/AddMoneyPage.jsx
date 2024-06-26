import BankDetailsCard from "../components/BankDetailsCard"
import OptionCard from "../components/OptionCard"
import OptionCards from "../components/OptionCards"
import TopBar from "../components/TopBar"

const AddMoneyPage = () => {
    return (
        <div className="bg-gray-50 mx-auto">
            <div className="flex flex-col justify-cemter items-center mx-4">
                <TopBar page="addmoney" />
                <BankDetailsCard />
                <div className="flex flex-row p-5 text-lg font-bold">
                    OR
                </div>
                <OptionCards />
            </div>
        </div>
    )
}

export default AddMoneyPage