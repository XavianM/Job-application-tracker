
'use client';   

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  PieLabelRenderProps,
} from 'recharts';

export interface StatsWheel {
  name: string;
  value: number;
  color: string;
}

const defaultData: StatsWheel[] = [
  { name: 'Applied', value: 24, color: '#3B82F6' },     // Blue
  { name: 'In Progress', value: 8, color: '#F59E0B' }, // Amber
  { name: 'Interviews', value: 3, color: '#A855F7' },  // Purple
  { name: 'Offers', value: 1, color: '#10B981' },      // Emerald
];

const RADIAN = Math.PI / 180;

// Percentage label rendered directly inside each wheel slice
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null || !percent) {
    return null;
  }

  // Skip rendering small labels if slice is < 5% to avoid clutter
  if (percent < 0.05) return null;

  const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[10px] font-bold select-none"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function StatWheelAdvanced({
  data = defaultData,
}: {
  data?: StatsWheel[];
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={95}
            outerRadius={135}
            paddingAngle={4}
            dataKey="value"
            stroke="none"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Statistic Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <span className="text-4xl font-bold text-neutral-900">{total}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
          Active Jobs
        </span>
      </div>
    </div>
  );
}