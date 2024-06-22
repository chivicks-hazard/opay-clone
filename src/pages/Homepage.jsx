import BalanceCard from "../components/BalanceCard";
import BottomNavBar from "../components/BottomNavBar";
import PaymentCard from "../components/PaymentCard";
import TopNav from "../components/TopBar";
import TransferCard from "../components/TransferCard";

const Homepage = () => {
    return (
        <div className="container p-5 bg-gray-50">
            <div className="flex flex-col">
                <TopNav />
                <BalanceCard />
                <TransferCard />
                <PaymentCard />
                <BottomNavBar />
            </div>
        </div>
    )
}

export default Homepage