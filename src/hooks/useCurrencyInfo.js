import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
        const url = `/api/v6/${API_KEY}/latest/${currency}`;  // Using the proxy path `/api`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.conversion_rates) {
                    setData(data.conversion_rates); // Assuming the API returns data in conversion_rates
                }
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
