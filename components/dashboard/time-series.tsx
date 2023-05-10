import React, { useState } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const data: { date: Date; value: number }[] = []
let currentDate = new Date("2022-01-01")

for (let i = 0; i < 100; i++) {
  // Generate a random value between 1 and 1000
  const randomValue = Math.floor(Math.random() * 1000) + 1

  // Add a new item to the data array with the current date and the random value
  data.push({ date: new Date(currentDate), value: randomValue })

  // Increment the current date by one day
  currentDate.setDate(currentDate.getDate() + 1)
}

const TimeSeriesChart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="4" />
        <Line
          type="monotone"
          dataKey="value"
          fill="#888888"
          stroke="#adfa1d"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TimeSeriesChart
