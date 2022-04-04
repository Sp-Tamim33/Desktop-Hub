import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashbord = () => {

    const [chartData, setCahrt] = useState();

    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setCahrt(data))
    }, [])

    return (
        <div className='flex justify-center'>

            <div className='mr-10'>
                <h2 className='text-4xl pl-5 my-10'>Line Chart :</h2>
                <LineChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="sell" stroke="#f9ca24" />
                </LineChart>
            </div>


            <div className='ml-10'>
                <h2 className='text-4xl pl-5 my-10'>Area Chart :</h2>
                <AreaChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>

        </div>
    );
};

export default Dashbord;