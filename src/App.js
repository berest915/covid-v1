import React from 'react';
import './App.css';

import Navbar from './layout/navbar/Navbar';
import Cards from './coms/Cards/Cards';
import Charts from './coms/Charts/Charts';
import CountrySelector from './coms/CountrySelector/CountrySelector';

import RanState from './context/RanState';

function App() {
	return (
		<>
			<RanState>
				<Navbar />
				<>
					<Cards />
					<CountrySelector />
					<Charts />
				</>
			</RanState>
		</>
	);
}

export default App;
