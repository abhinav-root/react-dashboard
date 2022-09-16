import React, { PureComponent } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 760,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 2190,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  return (
    <main>
      <div className="income">
        <h4 className="title">total income</h4>
        <div className="data">
          <div className="value">$124,563.00</div>
          <div className="increment">+6.9%</div>
        </div>
        <div className="container">
          <div className="bar"></div>
        </div>
        <div className="caption">yearly goal</div>
      </div>
      <div className="income new-users">
        <h4 className="title">new users</h4>
        <div className="data">
          <div className="value">94.2%</div>
          <div className="increment">+5.3%</div>
        </div>
        <BarChart className="barchart" width={400} height={100} data={data}>
          <Bar className="bar" dataKey="uv" background />
        </BarChart>
      </div>
      <div className="balance">
        <div className="header">
          <div className="title">balance</div>
          <div className="picker">
            <div className="month">monthly</div>
            <FiChevronDown />
          </div>
        </div>
        <div className="stats">
          <div className="earnings box">
            <div className="title">Earnings</div>
            <div className="data">
              <div className="value">94.2%</div>
              <div className="increment">+2.5%</div>
            </div>
          </div>
          <div className="sales-value box">
            <div className="title">Sales Value</div>
            <div className="data">
              <div className="value">94.2%</div>
              <div className="increment">+13.6%</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
