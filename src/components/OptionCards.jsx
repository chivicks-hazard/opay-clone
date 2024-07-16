import { Link } from "react-router-dom";
import OptionCard from "./OptionCard";

const options = [
    {
        title: 'Cash Deposit',
        body: 'Fund your account with nearby merchants',
        to: '/add-money/cash-deposit',
        logo: 'cash'
    },
    {
        title: 'Top-up with Card/Account',
        body: 'Add money directly from your bank card or account',
        to: '/add-money/top-up',
        logo: 'top-up'
    },
    {
        title: 'Bank USSD',
        body: "Wtih other banks' USSD code",
        to: '/add-money/ussd',
        logo: 'ussd'
    },
    {
        title: 'Scan my QR code',
        body: 'Show QR code to any Opay user',
        to: '/add-money/qr-code',
        logo: 'qr-code'
    }
];

const OptionCards = () => {
    return (
        <div className="flex flex-col w-100 space-y-5 mb-5">
            {options.map((option) => {
                return (
                    <Link to={option.to}>
                        <OptionCard title={option.title} body={option.body} logo={option.logo} />
                    </Link>
                )
            })}
        </div>
    )
}

export default OptionCards