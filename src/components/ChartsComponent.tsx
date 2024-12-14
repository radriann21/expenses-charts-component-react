import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar, Cell } from "recharts";
import { CustomTooltip } from "./CustomTooltip";

export const ChartsComponent = ({ data, maxAmount }: ChartsComponentProps) => {
  return (
    <ResponsiveContainer height={180}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip payload={[]} label={""} active={false} />} />
        <Bar dataKey="amount">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.amount === maxAmount ? "#ec775f" : "#76b5bc"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}