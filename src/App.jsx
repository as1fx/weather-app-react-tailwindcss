import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHERAPI_KEY
        }&q=${city}`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-3xl font-bold text-center my-6">
          Weather <span className="text-blue-400">App</span>
        </h1>

        <SearchBar onSearch={fetchWeather} />

        {loading && (
          <div className="text-center my-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        )}

        {error && (
          <p className="text-red-400 text-center my-4 p-3 bg-gray-800 rounded-lg">
            ⚠️ {error}
          </p>
        )}

        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
