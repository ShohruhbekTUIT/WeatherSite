import { useEffect, useState } from 'react';
import Images from './helper/Images';
import Search from './Assets/Images/search.png';
import './Assets/main.css';

function App() {
	const [city, setCity] = useState('Tashkent');
	const [data, setData] = useState({
		isFetched: false,
		data: {},
		error: false,
	});
	const [state, setState] = useState('metric');
	//apiKey -- 9409920e00ba9d8aef003ba955f51487
	//  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
	//  http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9409920e00ba9d8aef003ba955f51487&units=${state}`,
		)
			.then((response) => response.json())
			.then((data) =>
				setData({
					isFetched: true,
					data: data,
					error: false,
				}),
			);
	}, [city, state]); //, unit
	console.log(data);

	function handleSearch(evt) {
		if (evt.code === 'Enter') {
			setCity(evt.target.value);
		}
	}

	return (
		<>
			<h1 className='sitetitle'>Welcome to our weather site !</h1>
			<div className='siteweather'>
				<label className='sitelabel' htmlFor='search'>
					<img
						className='sitelupa'
						src={Search}
						alt='lupa'
						width={30}
						height={30}
					/>
					<input
						className='siteinput'
						id='search'
						type='text'
						onKeyUp={handleSearch}
						placeholder='Enter a city name'
					/>
				</label>
				<div className='sitebtn'>
					<button className='site-btn' onClick={() => setState('metric')}>
						ﾟC
					</button>
					<button className='site-btn' onClick={() => setState('standard')}>
						F
					</button>
				</div>

				<pre>
					{
						data.isFetched ? (
							<div className='site-info'>
								<div className='site-info-left'>
									<Images code={data.data.weather[0].id} />
									<strong className='sitetemp'>
										{Math.ceil(data.data.main.temp)}
									</strong>
								</div>
								<div className='site-info-right'>
									<h2>🎡City:{data.data.name}</h2>
									<h2>🌉Country:{data.data.sys.country}</h2>
									<h3>🌤Situation:{data.data.weather[0].description}</h3>
									<h2>💨Wind speed:{data.data.wind.speed}km/h</h2>
									<h2>💧Humidity:{data.data.main.humidity}%</h2>
									<h2>🧭Pressure:{data.data.main.pressure}Pa</h2>
								</div>
							</div>
						) : (
							<h2>Loading...</h2>
						)
						// JSON.stringify(data , null , 4)
					}
				</pre>
			</div>
		</>
	);
}

export default App;
