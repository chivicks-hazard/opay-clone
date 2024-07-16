import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AmountCard = () => {
    const [amountText, setAmountText] = useState('For amount above \u20A69,999.00,');
    const [colorClass, setColorClass] = useState('text-black');
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    function changeText(event) {
        let value = event.target.value;

        if (value < 100) {
            setAmountText('Amount must be between \u20A6100.00 and \u20A69,999.00. For amount above \u20A69,999.00,');
            setColorClass('text-red-500');
            setDisabled(true)
        } else {
            setAmountText('For amount above \u20A69,999.00,');
            setColorClass('text-black');
            setDisabled(false);
        }

        if (value === '') {
            setAmountText('For amount above \u20A69,999.00,');
            setColorClass('text-black');
            setDisabled(true);
        }
    }

    function handleSubmit() {
        navigate('/add-money/top-up/bank/card');
    }

    return (
        <div className="flex flex-col mt-24 w-full">
            <form action="" onSubmit={handleSubmit}>
                <div className="p-4 bg-white w-full">
                    <label htmlFor="amount" className="font-medium block mb-2 text-2xl">Amount</label>
                    <span className="font-medium inline-block mr-2 3xs:max-2xs:text-xl text-2xl">&#x20A6;</span>
                    <input type="number" name="amount" id="amount" inputMode="numeric" onChange={changeText} className="3xs:max-2xs:text-xl text-2xl mb-1 focus:outline-none appearance-none caret-green-600" placeholder="100.00-9,999.00" />
                    <div><span className={colorClass}>{amountText}</span> <a href="#" className="text-green-500">use bank transfer <FaAngleRight className="inline" /></a></div>
                </div>

                <div className="flex justify-center items-center p-4 mt-4 mb-72">
                    <input type="submit" disabled={disabled} className="bg-green-500 hover:bg-green-300 disabled:bg-green-300 text-white text-lg py-3 3xs:max-2xs:px-32 px-40 rounded-3xl" value={'Next'} />
                </div>
            </form>
        </div>
    );
}

export default AmountCard;
