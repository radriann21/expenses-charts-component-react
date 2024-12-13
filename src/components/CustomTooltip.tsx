export const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 w-fit h-fit bg-neutral-dark-brown rounded-md text-sm font-bold text-neutral-cream">
        <span>${payload[0].payload.amount}</span>
      </div>
    )
  }
  return null
}