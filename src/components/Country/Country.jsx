import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handelVisited = () => {
        setVisited(!visited);
    }
    // const passWithParams = () => handleVisitedCountries(country);




    return (
        <div className={`Country ${visited && 'visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population = {population}</p>
            <p>Area={area}</p>
            <p>Code ={cca3}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <br />
            <button onClick={handelVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I Have Visited This Country.' : 'I want to visit'}
        </div>
    );
};

export default Country;