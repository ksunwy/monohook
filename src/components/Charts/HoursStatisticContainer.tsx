import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import CustomBar from './CustomBar';

const data = [
    { hour: '08', fact: 500, plan: 800 },
    { hour: '09', fact: 1200, plan: 1600 },
    { hour: '10', fact: 1800, plan: 2400 },
    { hour: '11', fact: 2500, plan: 3200 },
    { hour: '12', fact: 3100, plan: 4000 },
    { hour: '13', fact: 3700, plan: 4800 },
    { hour: '14', fact: 4300, plan: 5600 },
    { hour: '15', fact: 4900, plan: 6400 },
    { hour: '16', fact: 5500, plan: 7200 },
    { hour: '17', fact: 6100, plan: 8000 },
    { hour: '18', fact: 6800, plan: 8800 },
    { hour: '19', fact: 7500, plan: 9600 },
    { hour: '20', fact: 8200, plan: 10400 },
    { hour: '21', fact: 8900, plan: 11200 },
    { hour: '22', fact: 9600, plan: 12000 },
    { hour: '23', fact: 10300, plan: 12800 },
    { hour: '00', fact: 11000, plan: 13600 },
    { hour: '01', fact: 11800, plan: 14400 },
    { hour: '02', fact: 12500, plan: 15200 },
    { hour: '03', fact: 13200, plan: 16000 },
    { hour: '04', fact: 14000, plan: 16800 },
    { hour: '05', fact: 14800, plan: 17600 },
];

const HoursStatisticContainer = () => {
    return (
        <div className="relative max-h-[332px] h-full bg-textWhite p-2 rounded-lg">
            <h4 className="absolute text-[20px] font-bold left-[55.91px] -top-[6px]">Поголовье на убой за сегодня по часам накопительно</h4>
            <div className="absolute top-[55px] left-[100px] flex flex-col gap-[2px] bg-[#F7E5E5] border-[#BA3838] border-[1px] border-solid w-[247px] h-[116px] rounded-lg p-3 z-10">
                <span className='font-semibold text-[20px] leading-6 text-[#BA3838]'>Отставание от плана</span>
                <p className='text-[16px]'>Необходимо увеличить скорость убоя и разделки</p>
                <span className='text-[20px] leading-6 text-[#BA3838] font-bold'>на 256 шт в час (12%)</span>
            </div>
            <ResponsiveContainer width="100%" height={"100%"}>
                <ComposedChart data={data} margin={{ top: 15, right: 8, left: -15, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="hour"
                        tick={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 12,
                            fill: 'rgba(0, 0, 0, 0.7)'
                        }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: 12,
                            fill: 'rgba(0, 0, 0, 0.7)'
                        }}
                        tickLine={false}
                        axisLine={{ stroke: '#BFBFBF', strokeDasharray: '3 3' }}
                    />
                    <Tooltip wrapperStyle={{ zIndex: 11 }} />
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
                            { value: 'факт', type: 'square', id: 'fact', color: '#0268D4' },
                            { value: 'план', type: 'line', id: 'plan', color: '#BA3838' }
                        ]}
                    />
                    <Bar
                        dataKey="fact"
                        name="факт"
                        fill="#A9B6FE"
                        barSize={24}
                        shape={(props: any) => <CustomBar {...props} />}
                    />
                    <Area type="monotone" dataKey="plan" stroke="#BA3838" strokeWidth={3} dot={{ fill: '#FFFFFF', stroke: '#BA3838', fillOpacity: 1, strokeWidth: 1, r: 3 }} fill="url(#colorPlan)" name="план" />
                    <defs>
                        <linearGradient id="colorPlan" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#BA38384D" stopOpacity={1} />
                            <stop offset="100%" stopColor="#BA38380D" stopOpacity={0.3} />
                        </linearGradient>
                    </defs>
                    <Line type="monotone" dataKey="fact" stroke="#0268D4" strokeWidth={3} dot={false} name="факт" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HoursStatisticContainer;