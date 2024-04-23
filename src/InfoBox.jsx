import SearchBox from "./SearchBox"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}){
  let INIT_URL="https://timeskuwait.com/news/wp-content/uploads/2022/05/Dust.jpg";
  let HOT_URL="https://timeskuwait.com/news/wp-content/uploads/2021/02/hot-kuwait-e1613375802259.jpg";
  let COLD_URL="https://www.indiansinkuwait.com/ShowImage.aspx?img=/Newsfile/24120236650120cold1.jpg&w=650";
    let RAIN_URL="https://timeskuwait.com/news/wp-content/uploads/2023/04/c559599f-fcaa-4aab-aaf6-a61f2c5d781a.jpg";
        
  return (
  <div className="InfoBox">
   
    <div className="cardContainer">
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL : 
          info.temp > 15
           ? HOT_URL 
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
           info.humidity > 80 
          ? <ThunderstormIcon/> : 
          info.temp < 15
           ? <AcUnitIcon/>
           : <WbSunnyIcon/>

         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}</p>
          <p>Max Temp={info.tempMax}</p>
          <p>The weather is described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent> 
    </Card>
    </div>
  </div>




  );
}