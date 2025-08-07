const WeatherDisplay = ({ data }) => {
  const { location, current } = data;
  const weatherIcon = `https:${current.condition.icon}`;

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
      {/* Location */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">
          {location.name}, {location.country}
        </h2>
        <p className="text-gray-400 text-sm">
          {new Date(location.localtime).toLocaleString()}
        </p>
      </div>

      {/* Current Weather */}
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <img
            src={weatherIcon}
            alt={current.condition.text}
            className="w-16 h-16"
          />
          <span className="ml-2 text-gray-300 capitalize">
            {current.condition.text}
          </span>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-blue-400">{current.temp_c}°C</p>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-700 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Humidity</p>
          <p className="font-semibold text-xl">{current.humidity}%</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Wind Speed</p>
          <p className="font-semibold text-xl">{current.wind_kph} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
