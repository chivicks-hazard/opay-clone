import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AddMoneyPage from "./pages/AddMoneyPage";
import CashDepositPage from "./pages/CashDepositPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/add-money" element={<AddMoneyPage />} />
        <Route path="/add-money/cash-deposit" element={<CashDepositPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App