import { Time } from '@angular/common';

export interface Moedas {
    USD: {
        code: string;
        codein: string;
        name: string;
        high: number;
        low: number;
        varBid: number;
        pctChange: number;
        bid: number;
        ask: number;
        timestamp: Time;
        create_date: Date;
    };
    EUR: string[];
    BTC: string[];
}
