import axios, { AxiosResponse } from 'axios';

interface Valute {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

interface CurrencyData {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    Valute: {
        USD: Valute;
        EUR: Valute;
    };
}

export const fetchCurrencyValues = async (): Promise<{ USD: Valute, EUR: Valute }> => {
    try {
        const response: AxiosResponse<CurrencyData> = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        const data: CurrencyData = response.data;
        
        const { USD, EUR } = data.Valute;
        
        return { USD, EUR };
    } catch (error) {
        console.error("Error fetching currency values:", error);
        throw error;
    }
};
