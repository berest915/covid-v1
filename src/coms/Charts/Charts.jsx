import React, { useState, useEffect, useContext } from 'react';
import { MainCardContainer } from '../commonStyles';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import RanContext from '../../context/RanContext'

const Charts = () => {
	const [dailyData, setDailyData] = useState([]);

	const { _currentCountry, _data } = useContext(RanContext)
	const { confirmed, recovered, deaths, lastUpdate } = _data

	useEffect(() => {
		const fetchedDailyData = async () => {
			setDailyData(await fetchDailyData());
		};
		fetchedDailyData();
	}, [setDailyData]);

	const lineChart = dailyData.length ? (
		<Line
			data={{
				// x-axis
				labels: dailyData.map(({ reportDate }) => reportDate),

				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: 'Confirmed',
						borderColor: '#3333ff',
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true,
					},
				],
			}}
		/>
	) : null;

	const barChart = confirmed !== undefined ? (

		<Bar
			data={{
				labels: ['Confirmed', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.5)',
						],
						data: [confirmed.value, recovered.value, deaths.value]
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current State in ${_currentCountry}` },
			}}
		/>
	) : null;

	return (
		<div>
			{_currentCountry ? barChart: lineChart  }
		</div>)
};

export default Charts;
