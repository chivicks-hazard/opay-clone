import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AddMoneyPage from "./pages/AddMoneyPage";
import CashDepositPage from "./pages/CashDepositPage";
import TopUpPage from "./pages/TopUpPage";
import TopUpBankPage from "./layouts/TopUpBankPage";
import BankCardForm from "./components/BankCardForm";
import BankAmountForm from "./components/BankAccountForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/add-money" element={<AddMoneyPage />} />
        <Route path="/add-money/cash-deposit" element={<CashDepositPage />} />
        <Route path="/add-money/top-up" element={<TopUpPage />} />
        <Route path="/add-money/top-up/bank" element={<TopUpBankPage />}>
          <Route path="card" element={<BankCardForm />} />
          <Route path="amount" element={<BankAmountForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App