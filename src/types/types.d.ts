type DataProps = {
  day: string;
  amount: number;
}

type CustomTooltipProps = {
  payload: {
    payload: DataProps;
  }[];
  label: string | number;
  active: boolean;
}

type ChartsComponentProps = {
  data: {
    day: string;
    amount: number;
  }[],
  maxAmount: number;
}