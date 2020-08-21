import React, { useState, useEffect, useContext } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import RanContext from '../../context/RanContext'


const CountrySelector = () => {
  const [countries, setCountries] = useState([]);
  
  const { _handleCountryChange} = useContext(RanContext)


	useEffect(() => {
		const fetchedCountries = async () => {
			setCountries(await fetchCountries());
		};
		fetchedCountries();
	}, [setCountries]);


	return (
		<>
			<FormControl>
				<NativeSelect defaultValue='' onChange={e => _handleCountryChange(e.target.value)}>
					<option value=''>Global</option>
					{countries.map((country, i) => (
						<option key={i} value={country}>
							{country}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</>
	);
};

export default CountrySelector;
