import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import BottomNavBar from "../components/BottomNavBar";
import PaymentCard from "../components/PaymentCard";
import TopNav from "../components/TopBar";
import TransferCard from "../components/TransferCard";

const Homepage = () => {

    return (
        <>
            <div className="bg-gray-50 mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <TopNav page="homepage" />
                    <BalanceCard />
                    <TransferCard />
                    <PaymentCard />
                </div>
            </div>
        </>
    )
}

export default Homepage