import { useEffect, useState } from 'react';
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./Loading";
import Message from "./Message";

import styles from './weatherApp.module.css'

export default function WeatherApp() {
const [weather, setWeather] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    loadInfo();
}, [])

useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
}, [weather])

async function loadInfo(city = 'london') {
try {
    const request = await fetch(`${'http://api.weatherapi.com/v1/current.json?aqi=no'}&key=${'ababc8b254934d87911122843230401'}&q=${city}`);

    if(request.status === 200) {
        const json = await request.json();
                    setTimeout(() => {
                        setWeather(json);
                    }, 400);
        setError(null);
    } 
    else {
            setWeather(null);
            if (request.status === 400) {
                setError(`City not found, please try another`);
            } else {
                setError(`Something went wrong: ${request.status}, ${request.statusText}`);
            }
    }
} catch(err) {
    console.log(`An error has ocurred: ${err}`);
    }
}

function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
}

return (
    <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        { weather ? <WeatherMainInfo weather={weather} /> : error ? <Message text={error} /> : <Loading /> }
    </div>)
}