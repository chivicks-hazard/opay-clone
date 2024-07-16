import AmountCard from "../components/AmountCard"
import TopBar from "../components/TopBar"

const TopUpPage = () => {
    return (
        <div className="bg-gray-50 mx-auto">
            <div className="flex flex-col justify-center items-center mx-4">
                <TopBar page="top-up" />
                <AmountCard />
            </div>
        </div>
    )
}

export default TopUpPage