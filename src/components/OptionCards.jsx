import OptionCard from "./OptionCard";

const options = [
    {
        title: 'Cash Deposit',
        body: 'Fund your account with nearby merchants'
    },
    {
        title: 'Top-up with Card/Account',
        body: 'Add money directly from your bank card or account'
    },
    {
        title: 'Bank USSD',
        body: "Wtih other banks' USSD code"
    },
    {
        title: 'Scan my QR code',
        body: 'Show QR code to any Opay user'
    }
];

const OptionCards = () => {
    return (
        <div className="flex flex-col w-100 space-y-5 mb-5">
            {options.map((option) => {
                return (
                    <OptionCard title={option.title} body={option.body} />
                )
            })}
        </div>
    )
}

export default OptionCards