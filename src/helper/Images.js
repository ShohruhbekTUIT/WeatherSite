import Thunderstorm from '../Assets/Images/thunderstorm.png';
import Drizzle from '../Assets/Images/drizzle.png';
import Rain from '../Assets/Images/rain.png';
import Snow from '../Assets/Images/snow.png';
import Atmosphere from '../Assets/Images/atmosphere.png';
import Clear from '../Assets/Images/clearsky.png';
import Clouds from '../Assets/Images/clouds.png';
const Images = ({ code }) => {
	// switch (code) {
	//   case (code >= 200 && code <=232):
	//     return "Thunderstorm";
	//   case (code >= 300 && code <=321):
	//    return "Drizzle";
	//   case (code >= 500 && code <=531):
	//     return "Rain";
	//   case (code >= 600 && code <=622):
	//     return "Snow";
	//   case (code >= 701 && code <=781):
	//     return "Atmosphere";
	//   case (code === 800):
	//     return "Clear";
	//   case (code >= 801 && code <=804):
	//     return "Clouds";
	// }

	if (code >= 200 && code <= 232)
		return <img src={Thunderstorm} alt='template' width={200} height={200} />;
	if (code >= 300 && code <= 321)
		return <img src={Drizzle} alt='template' width={200} height={200} />;
	if (code >= 500 && code <= 531)
		return <img src={Rain} alt='template' width={200} height={200} />;
	if (code >= 600 && code <= 622)
		return <img src={Snow} alt='template' width={200} height={200} />;
	if (code >= 701 && code <= 781)
		return <img src={Atmosphere} alt='template' width={200} height={200} />;
	if (code === 800)
		return <img src={Clear} alt='template' width={200} height={200} />;
	if (code >= 801 && code <= 804)
		return <img src={Clouds} alt='template' width={200} height={200} />;
};
export default Images;
