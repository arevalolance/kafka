import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Topic 1",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 2",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 3",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 4",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 5",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 6",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 7",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 8",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 9",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 10",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 11",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 12",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 13",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 14",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Topic 15",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

const BarMetrics = () => {
  return (
    <ResponsiveContainer width="90%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarMetrics
