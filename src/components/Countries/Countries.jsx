import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    const handleVisitedCountries = country => {
        console.log('Add this to the visited list')
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountry(newVisitedCountries)
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
    }

    return (


        <div >
            <h3>Counties :  {countries.length}</h3>

            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="flag-Container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="Country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;