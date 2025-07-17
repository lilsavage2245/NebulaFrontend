import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { year: '2024', growth: 5 },
  { year: '2026', growth: 10 },
  { year: '2028', growth: 15 },
  { year: '2030', growth: 20 },
  { year: '2032', growth: 25 },
  { year: '2034', growth: 30 },
];

const DemandForecast = () => {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-20 py-10 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-black">Demand Forecast:</h2>
      <h3 className="text-2xl sm:text-3xl font-semibold underline text-black">Global Growth</h3>
      <p className="text-lg sm:text-xl font-medium text-black leading-relaxed max-w-3xl">
        Global Growth: 25% increase in software developer roles by 2032
        (source: U.S. Bureau of Labor Statistics, 2024).
      </p>

      <div className="w-full h-[400px] sm:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: 14 }} />
            <YAxis
              domain={[0, 35]}
              ticks={[5, 10, 15, 20, 25, 30]}
              tick={{ fontSize: 14 }}
              label={{ value: '% Growth', angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="growth"
              stroke="#36319A"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              name="Projected Growth"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DemandForecast;
