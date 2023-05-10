import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    name: "Topic 1",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 2",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 3",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 4",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 5",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 6",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 7",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 8",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 9",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 10",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 11",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 12",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 13",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 14",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
  {
    name: "Topic 15",
    total: Math.floor(Math.random() * 5000) + 1000,
    positive: Math.floor(Math.random() * 500) + 500,
    negative: Math.floor(Math.random() * 500) + 500,
    neutral: Math.floor(Math.random() * 3000) + 1000,
  },
]

const RadarMetrics = () => {
  return (
    <ResponsiveContainer className={"m-auto"} width="80%" height={350}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Total"
          dataKey="total"
          stroke="#888888"
          fill="#adfa1d"
          fillOpacity={0.6}
        />
        <Radar
          name="Neutral"
          dataKey="neutral"
          stroke="#888888"
          fill="#c2c2c2"
          fillOpacity={0.4}
        />
        <Radar
          name="Positive"
          dataKey="positive"
          stroke="#888888"
          fill="#1da5fa"
          fillOpacity={0.8}
        />
        <Radar
          name="Negative"
          dataKey="negative"
          stroke="#888888"
          fill="#f54646"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarMetrics
