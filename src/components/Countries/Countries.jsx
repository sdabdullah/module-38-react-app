import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setvisitedflags] = useState([])
    
    const handleVisitedCountries = (country) => {
        console.log('Handle visited country Clicked', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedflags = (flags) => {
        console.log('Falgs', flags);
        
        const newVisitedFlags = [...visitedFlags, flags];
        setvisitedflags(newVisitedFlags);
        
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flags, index) => <img key={index} src={flags}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedflags={handleVisitedflags}
                        >
                        {/* Country এর মধ্যে থাকা Visited বাটনে Click event এ্যাড করার জন্য 
                        handleVisitedCountries={handleVisitedCountries} কে ডাইনামিক ভাবে পাঠানো হয়েছে */}
                        
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;