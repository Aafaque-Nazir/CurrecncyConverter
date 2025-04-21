import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);      // ✅ get the 'rates' object
                console.log(res.rates);  // debug log
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
