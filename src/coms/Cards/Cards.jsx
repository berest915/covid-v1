import React, { useState, useEffect, useContext } from 'react';
import { MainCardContainer } from '../commonStyles';
import { Container, Card } from './Styles';
import { fetchData } from '../../api';
import CountUp from 'react-countup';
import RanContext from '../../context/RanContext'

const Cards = () => {
	const [data, setData] = useState({
		confirmed: '',
		recovered: '',
		deaths: '',
		lastUpdate: '',
	});
	const { confirmed, recovered, deaths, lastUpdate } = data;

	const { _currentCountry } = useContext(RanContext)

	useEffect(() => {
		const fetchedData = async (c) => {
			setData(await fetchData(c));
		};
		fetchedData(_currentCountry);
	}, [setData, _currentCountry]);

	return (
		<>
			<MainCardContainer darker>
				<Container>
					<Card gutter='confirmed'>
						<div className='card-content'>
							<p className='style1'>Confirmed</p>
						
							<p className='style2'>
								{confirmed !== '' ? (
									<CountUp
										start={0}
										end={confirmed.value}
										duration={2}
										separator=','
									/>
								) : (
									'loading...'
								)}
							</p>
							<p className='style1'>{new Date(lastUpdate).toDateString()}</p>

							<p className='style3'>Confirm cases of Covid-19</p>
						</div>
					</Card>
					<Card gutter='recovered'>
						<div className='card-content'>
							<p className='style1'>Recovered</p>
							<p className='style2'>
								{recovered !== '' ? (
									<CountUp
										start={0}
										end={recovered.value}
										duration={2}
										separator=','
									/>
								) : (
									'loading...'
								)}
							</p>
							<p className='style1'>{new Date(lastUpdate).toDateString()}</p>
							<p className='style3'>recovered cases of Covid-19</p>
						</div>
					</Card>
					<Card gutter='deaths'>
						<div className='card-content'>
							<p className='style1'>Deaths</p>
							<p className='style2'>
								{deaths !== '' ? (
									<CountUp
										start={0}
										end={deaths.value}
										duration={2}
										separator=','
									/>
								) : (
									'loading...'
								)}
							</p>
							<p className='style1'>{new Date(lastUpdate).toDateString()}</p>
							<p className='style3'>deaths cases of Covid-19</p>
						</div>
					</Card>
				</Container>
			</MainCardContainer>
		</>
	);
};

export default Cards;
