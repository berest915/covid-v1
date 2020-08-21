import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  
  let url = baseUrl
  if(country){
    url = `${baseUrl}/countries/${country}`
  }
	try {
		const { data } = await axios.get(url);
		const { confirmed, recovered, deaths, lastUpdate } = data;

		const structData = {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};

		return structData;
	} catch (err) {
		console.error(err);
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/daily`);
		const structData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			incidentRate: dailyData.incidentRate,
			reportDate: dailyData.reportDate,
    }));
    
    return structData
	} catch (err) {
		console.error(err);
	}
};

export const fetchCountries = async () => {
  try {
    const {data} = await axios.get(`${baseUrl}/countries`)
    const { countries } = data
    const co = countries.map(country => country.name)
    // console.log('before mapped')
    // console.log(countries)
    // console.log('after mapped')
    // console.log(co)
    return countries.map(country => country.name)
  } catch (err) {
    console.error(err)
  }
}
