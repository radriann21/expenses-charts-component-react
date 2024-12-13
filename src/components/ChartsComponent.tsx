import data from "../data.json"
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from "recharts";

export const ChartsComponent = () => {
  return (
    <ResponsiveContainer height={180}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}