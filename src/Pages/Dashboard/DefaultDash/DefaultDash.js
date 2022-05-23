import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
   
  } from "recharts";
  import './DefaultDash.css'

const DefaultDash = () => {
    const data = [
        {
          month: "Mar",
          investment: 100000,
          sell: 241,
          revenue: 10401,
        },
        {
          month: "Apr",
          investment: 200000,
          sell: 423,
          revenue: 24500,
        },
        {
          month: "May",
          investment: 500000,
          sell: 726,
          revenue: 67010,
        },
        {
          month: "Jun",
          investment: 500000,
          sell: 529,
          revenue: 40405,
        },
        {
          month: "Jul",
          investment: 600000,
          sell: 601,
          revenue: 50900,
        },
        {
          month: "Aug",
          investment: 700000,
          sell: 670,
          revenue: 61000,
        },
      ];
    
    return (
        <>
        <h1 className='gradient-text mb-5'>Welcome to dashboard</h1>
         <div className="charts">

<div className="chart">
<h4>Investment VS Revenue</h4>
<LineChart width={450} height={400} data={data}>
  <XAxis dataKey="month" />
  <YAxis dataKey="sell" />
  <Tooltip />
  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
  <Line type="monotone" dataKey="sell" stroke="#8884d8" />
  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
</LineChart>
</div>

<div className="chart"> 
<h4>Investment VS Revenue</h4>
<BarChart width={400} height={400} data={data}>
<XAxis dataKey="month" />
  <YAxis dataKey="sell" />
  <Tooltip />
  <Bar dataKey="sell" fill="#7bf3f7" />
</BarChart>
</div>
<div className="chart">
<h4>Investment VS Revenue</h4>
<PieChart width={400} height={300}>
    <Pie
      dataKey="revenue"
      startAngle={400}
      endAngle={0}
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
      label
    />
     <Tooltip />
  </PieChart>
</div>

</div>
        
        </>
       
    );
};

export default DefaultDash;