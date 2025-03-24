import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import CustomBar from './CustomBar';

const BarChartContainer = ({data, title}: {data: any, title: string}) => {
    return (
        <div className="relative max-h-[313px] h-full bg-textWhite p-2 rounded-lg">
            <h4 className="absolute text-[20px] font-bold left-[55.91px] -top-[6px]">{title}</h4>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{ top: 15, right: 8, left: -15, bottom: 8 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tick={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 12,
                            fill: 'rgba(0,0,0,0.7)',
                        }}
                        tickLine={false} 
                    />
                    <YAxis
                        tick={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 12,
                            fill: 'rgba(0,0,0,0.7)',
                        }}
                        tickLine={false} 
                        axisLine={{ stroke: '#BFBFBF', strokeDasharray: '3 3' }}
                    />
                    <Tooltip />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconSize={10}
                        wrapperStyle={{
                            position: 'absolute',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.7)',
                            right: 10,
                            top: -8
                        }}
                        payload={[
                            { value: 'факт самцы', type: 'square', id: 'fact', color: '#005CE8' },
                            { value: 'факт самки', type: 'square', id: 'fact', color: '#B900E8' },
                            { value: 'план', type: 'line', id: 'plan', color: '#0FAF62' }
                        ]}
                    />
                    <Bar
                        dataKey="male"
                        fill="#A9B6FE"
                        name="факт самцы"
                        barSize={47}
                        stackId="a"
                        shape={(props: any) => <CustomBar {...props} />}
                    />
                    <Bar
                        dataKey="female"
                        fill="#D3A9FE"
                        stroke="#B900E8"
                        name="факт самки"
                        barSize={47}
                        stackId="a"
                        shape={(props: any) => <CustomBar {...props} />}
                    />
                    <Area
                        type="monotone"
                        dataKey="plan"
                        stroke="#0FAF62"
                        strokeWidth={3}
                        dot={{ fill: '#FFFFFF', stroke: '#0FAF62', fillOpacity: 1, strokeWidth: 1, r: 3 }}
                        fill="url(#colorPlan1)"
                        name="план"
                    />
                    <defs>
                        <linearGradient id="colorPlan1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0FAF624D" stopOpacity={1} />
                            <stop offset="100%" stopColor="#0FAF620D" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartContainer;