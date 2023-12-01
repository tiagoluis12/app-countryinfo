import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Header } from '../components/Header';

export function CountryPage() {
  const location = useLocation();
  const country = location.state[0];
  const navigate = useNavigate();

  const handleBorderCountryClick = (borderCountryCode) => {
    navigate(`/countryinfo/${borderCountryCode}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-grow overflow-auto">
        <div className="container mx-auto px-4 py-4">
          <button
            className="btn btn-ghost mb-4 text-xl" // Adjust the button size and margin as needed
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon fontSize="inherit" />
            Back
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4 py-2">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="max-w-full h-auto md:max-h-96 mx-auto" // Responsive flag image size
            />
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-extrabold mb-4">
                {country.name.common}
              </h1>
              <div className="grid grid-cols-1 gap-4 text-lg md:grid-cols-2">
                <div className="space-y-2">
                  <p><span className="font-bold">Capital:</span> {country.capital}</p>
                  <p><span className="font-bold">Side of driving:</span> {country.car.side}</p>
                  <p><span className="font-bold">Continent(s):</span> {country.continents.join(", ")}</p>
                  <p><span className="font-bold">Landlocked:</span> {country.landlocked ? "Yes" : "No"}</p>
                  <p><span className="font-bold">Population:</span> {country.population.toLocaleString()}</p>
                  <p><span className="font-bold">Timezone:</span> {country.timezones.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-bold">Currencies:</span> {Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(", ")}</p>
                  <p><span className="font-bold">Language(s):</span> {Object.values(country.languages).join(", ")}</p>
                  <p><span className="font-bold">Top Level Domain(s):</span> {country.tld.join(", ")}</p>
                  <p><span className="font-bold">UN Member:</span> {country.unMember ? "Yes" : "No"}</p>
                  <p><span className="font-bold">Sub Region:</span> {country.subregion}</p>


                  <div className="mt-4">
              <span className="font-bold text-lg">Border Countries: </span>
              <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                {country.borders.map((borderCountryCode) => (
                  <button
                    key={borderCountryCode}
                    className="btn btn-outline btn-sm md:btn-md"
                  >
                    {borderCountryCode}
                  </button>
                ))}
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
