import data from "../data.json"
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from "recharts";
import { CustomTooltip } from "./CustomTooltip";

export const ChartsComponent = () => {
  return (
    <ResponsiveContainer height={180}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip payload={[]} label={""} active={false} />} />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}