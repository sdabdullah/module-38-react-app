import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedflags }) => {

    const [visited, setVisited] = useState(false)

    // console.log(country.area.area);

    const handleVisited = () => {
        /**
         * Basic system
         */
        // if(Visited){
        //     setVisited(false)
        // }else(
        //     setVisited(true)
        // )

        /**
         * Second system
         */
        // setVisited(visited ? false : true)

        /**
         * Third system
         */
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    
    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited' }`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>population: {country.population.population}</p>
            <p>
                Area: {country.area.area} 
                {country.area.area > 300000 ? " Big Country" : " Small Country"} 
            </p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => {handleVisitedflags(country?.flags?.flags?.png)}}>Add Visited</button>
        </div>
    );
};

export default Country;
