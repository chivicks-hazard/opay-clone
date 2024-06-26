import { Outlet } from "react-router-dom"
import BottomNavBar from "../components/BottomNavBar"

const MainLayout = () => {
    return (
        <>
            <Outlet />
            <BottomNavBar />
        </>
    )
}

export default MainLayout