import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"

const TopUpBankPage = () => {
    return (
        <div className="bg-white mx-auto">
            <div className="flex justify-center items-center mx-4">
                <TopBar page="top-up-bank" />
                <div className="mt-32">
                    <form action="" className="">
                        <div className="flex flex-col space-y-3 bg-gray-50 p-4">
                            <Outlet />
                        </div>
                        <input type="submit" disabled className="bg-green-500 hover:bg-green-300 disabled:bg-green-300 text-white text-lg mt-6 py-3 3xs:max-2xs:px-32 px-40 rounded-3xl" value="Confirm" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TopUpBankPage