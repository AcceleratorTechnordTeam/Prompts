import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

type DurationBarChartProps = { data: DurationChart[] }

const formatSeconds = (value: number) => `${value}s`

const LABELS: Record<string, string> = {
  prompt_eval_duration: 'Temps de traitement du prompt',
  eval_duration: 'Temps de génération',
  total_duration: 'Durée totale'
}

export const DurationBarChart = ({ data }: DurationBarChartProps) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '990px', maxHeight: '45vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="model" />
      <YAxis width="auto" tickFormatter={formatSeconds} />
      <Tooltip
        labelStyle={{ color: '#000' }}
        cursor={false}
        formatter={(value, name) => [formatSeconds(Number(value)), LABELS[name as string] ?? name]}
      />
      <Legend formatter={(value) => LABELS[value] ?? value} />
      <Bar
        dataKey="prompt_eval_duration"
        name={LABELS.prompt_eval_duration}
        fill="#00fff7"
        activeBar={{ fill: '#84d885', stroke: '#4e9942' }}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="eval_duration"
        name={LABELS.eval_duration}
        fill="#82ca9d"
        activeBar={{ fill: '#82ca9d', stroke: '#82ca9d' }}
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="total_duration"
        name={LABELS.total_duration}
        fill="#cab982"
        activeBar={{ fill: '#cab982', stroke: '#cab982' }}
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  )
}
