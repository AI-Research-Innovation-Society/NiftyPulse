import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const STOCK_SERIES = {
  RELIANCE: [
    { time: "09:15", price: 2901 },
    { time: "09:45", price: 2912 },
    { time: "10:15", price: 2896 },
    { time: "10:45", price: 2924 },
    { time: "11:15", price: 2932 },
    { time: "11:45", price: 2941 },
    { time: "12:15", price: 2934 },
    { time: "12:45", price: 2953 },
  ],
  INFY: [
    { time: "09:15", price: 1548 },
    { time: "09:45", price: 1553 },
    { time: "10:15", price: 1541 },
    { time: "10:45", price: 1558 },
    { time: "11:15", price: 1564 },
    { time: "11:45", price: 1570 },
    { time: "12:15", price: 1561 },
    { time: "12:45", price: 1574 },
  ],
  HDFCBANK: [
    { time: "09:15", price: 1671 },
    { time: "09:45", price: 1662 },
    { time: "10:15", price: 1669 },
    { time: "10:45", price: 1678 },
    { time: "11:15", price: 1682 },
    { time: "11:45", price: 1676 },
    { time: "12:15", price: 1687 },
    { time: "12:45", price: 1692 },
  ],
};

const SIGNALS = {
  RELIANCE: { RSI: "58.4", MACD: "Bullish", EMA: "Buy", piotroski: 8 },
  INFY: { RSI: "64.1", MACD: "Neutral", EMA: "Buy", piotroski: 7 },
  HDFCBANK: { RSI: "47.8", MACD: "Bearish", EMA: "Hold", piotroski: 6 },
};

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState("RELIANCE");

  const updatedAt = useMemo(
    () =>
      new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date()),
    [selectedStock]
  );

  const chartData = STOCK_SERIES[selectedStock];
  const signal = SIGNALS[selectedStock];

  return (
    <main className="dashboard-shell">
      <section className="dashboard">
        <header className="header">
          <div>
            <h1 className="title">NiftyPulse Signal Dashboard</h1>
            <p className="subtitle">
              Selected Stock: <strong>{selectedStock}</strong> | Last Updated: {updatedAt}
            </p>
          </div>

          <select
            className="stock-picker"
            value={selectedStock}
            onChange={(event) => setSelectedStock(event.target.value)}
            aria-label="Select stock"
          >
            {Object.keys(STOCK_SERIES).map((stock) => (
              <option key={stock} value={stock}>
                {stock}
              </option>
            ))}
          </select>
        </header>

        <section className="grid" aria-label="Signal summary">
          <article className="card signal-card">
            <p className="signal-label">RSI</p>
            <p className="signal-value">{signal.RSI}</p>
          </article>

          <article className="card signal-card">
            <p className="signal-label">MACD</p>
            <p className="signal-value">{signal.MACD}</p>
          </article>

          <article className="card signal-card">
            <p className="signal-label">EMA Signal</p>
            <p className="signal-value">{signal.EMA}</p>
          </article>

          <article className="card fscore">
            <p>Piotroski F-Score</p>
            <p className="fscore-value">{signal.piotroski}/9</p>
          </article>

          <article className="card chart-card" aria-label="Price chart">
            <p className="chart-title">Intraday Price Movement</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={chartData} margin={{ top: 6, right: 20, left: 4, bottom: 5 }}>
                <CartesianGrid stroke="#d9e5f0" strokeDasharray="3 3" />
                <XAxis dataKey="time" tick={{ fill: "#536179", fontSize: 12 }} />
                <YAxis
                  domain={["dataMin - 10", "dataMax + 10"]}
                  tick={{ fill: "#536179", fontSize: 12 }}
                  width={62}
                />
                <Tooltip
                  contentStyle={{
                    background: "#ffffff",
                    border: "1px solid #d7e2ed",
                    borderRadius: "10px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0f8f7c"
                  strokeWidth={3}
                  dot={{ r: 3, strokeWidth: 2, fill: "#fff" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </article>
        </section>
      </section>

      <footer className="sebi">
        SEBI Disclaimer: NiftyPulse provides market insights for educational and informational
        purposes only. This is not investment advice, research recommendation, or a solicitation
        to buy or sell securities. Please consult a SEBI-registered investment advisor before
        making financial decisions.
      </footer>
    </main>
  );
}

export default Dashboard;