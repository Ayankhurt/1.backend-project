import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/', (req, res) => {
  console.log(req.ip);
  res.send('Hello World');
});

app.get('/get-weather/:cityName', (req, res) => {
  const city = req.params.cityName.toLowerCase();
  let apiRes = {};

  if (city === 'karachi') {
    apiRes = {
      City: 'Karachi',
      temperature: 41,
      humidity: 39,
      wind: '50 km/h',
      min: 30,
      max: 42,
      feelslike: 45,
    };
  } else if (city === 'lahore') {
    apiRes = {
      City: 'Lahore',
      temperature: 42,
      humidity: 39,
      wind: '54 km/h',
      min: 35,
      max: 47,
      feelslike: 41,
    };
  } else if (city === 'islamabad') {
    apiRes = {
      City: 'Islamabad',
      temperature: 43,
      humidity: 37,
      wind: '56 km/h',
      min: 38,
      max: 48,
      feelslike: 45,
    };
  } else {
    apiRes = {
      City: city.charAt(0).toUpperCase() + city.slice(1),
      temperature: 44,
      humidity: 34,
      wind: '50 km/h',
      min: 30,
      max: 42,
      feelslike: 45,
    };
  }
  res.send(apiRes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});