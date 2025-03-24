import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface IPieChartContainer {
  size?: number,
  innerRadius?: number,
  outerRadius?: number,
  textClassName?: string,
  className?: string,
  percent: number,
  colors: string[],
  data: { name: string; value: number; }[]
}

const PieChartContainer: React.FC<IPieChartContainer> = ({ size, colors, data, innerRadius = 24.5, outerRadius = 50, percent, textClassName, className }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue text-[16px] font-semibold ${textClassName}`}>{percent}%</span>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartContainer;
