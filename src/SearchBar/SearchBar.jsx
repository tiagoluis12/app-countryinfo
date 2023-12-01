import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";
import { useGetCountriesQuery } from "../api/apiRest";
import { Spinner } from "../components/Spinner";
import { Header } from "../components/Header";
import Box from "@mui/material/Box";

export function SearchBar() {
  const navigate = useNavigate();
  const {
    data: countries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCountriesQuery();

  return (
    <div>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          width="100%"
          maxWidth={500}
          p={3}
          boxShadow={3}
          borderRadius={2}
          textAlign="center"
          bgcolor="background.paper"
        >
          {isLoading && <Spinner text="Loading..." />}
          {isSuccess && (
            <>
              <h1 className="text-2xl font-bold mb-2">
                Country Info App: Exploring the Nations of the World
              </h1>
              <p className="mb-4">By Bounce Insights</p>
              <ReactSearchAutocomplete
                items={countries.map((country, id) => {
                  return {
                    id: id,
                    ...country,
                    countryName: country.name.common,
                  };
                })}
                fuseOptions={{
                  keys: ["countryName"],
                  threshold: 0.0,
                }}
                resultStringKeyName="countryName"
                autoFocus
                className="w-full max-w-xs"
                onSelect={(item) => {
                  navigate(`/countryinfo/${item.cca2}`, {
                    state: [item],
                  });
                }}
              />
            </>
          )}
          {isError && <div className="text-error">{error.toString()}</div>}
        </Box>
      </Box>
    </div>
  );
}
