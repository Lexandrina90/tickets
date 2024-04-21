import useTicketStore from '../store/index';

const convertPrice = (price: number, currency: string) => {
    const USD = useTicketStore.getState().usdRate;
    const EUR = useTicketStore.getState().eurRate;


    if (currency === 'rub') {
        return price;
    }

    if (currency === 'usd' && USD) {
        const convertedPrice = price / USD;

        return convertedPrice.toFixed(2);

    }

    if (currency === 'eur' && EUR) {
        const convertedPrice = price / EUR;

        return convertedPrice.toFixed(2);
    }

    throw new Error('Unknown currency');
};

export default convertPrice;
