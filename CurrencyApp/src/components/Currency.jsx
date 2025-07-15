import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_CrfGK3gEn7nGKeM75jFy5s6ufKuMkjbpT8cZFu0f";

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_curreny=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(3);
        setResult(result);
    }


    return (
        <div className='currency-div' >
            <div style={{ fontFamily: 'arial', backgroundColor: 'black', color: '#fff', width: '100%', textAlign: 'center' }}>
                <h3 >DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input
                    value={amount}

                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className='amount' />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TL</option>
                </select>
                <FaArrowCircleRight style={{ fontSize: '25px', marginRight: '10px', marginTop: '5px' }} />

                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option value="TRY">TL</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' /></div>
            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>

            </div>

        </div>
    )
}

export default Currency