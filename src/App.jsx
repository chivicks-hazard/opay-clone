import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AddMoneyPage from "./pages/AddMoneyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/add-money" element={<AddMoneyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App