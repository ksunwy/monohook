import React from "react";
import { formatNumber } from "../../../../utils/formateNumber";
import PieChartContainer from "../../../../components/Charts/PieChartContainer";

interface IDayStatistic {
    title: string,
    count: number,
    difference: number,
    percent: number,
    measureUnit: string,
}

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ];
  const colors = ['#005CE826', '#005CE8'];

const DayStatistic: React.FC<IDayStatistic> = ({ title, count, difference, measureUnit, percent }) => {
    let isPositive = difference > 0;
    return (
        <div className="flex items-center justify-between w-full bg-textWhite rounded-lg px-3 h-[124px]">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <span className="uppercase text-[16px] text-grey font-medium">{title}</span>
                    <span className="text-[48px] leading-8 font-bold text-messageGrey">{formatNumber(count)} {measureUnit}</span>
                </div>
                <p className={`flex items-center gap-[7.25px] text-[16px] leading-5 font-medium ${isPositive ? "text-green" : "text-red"}`}>
                    <svg className={`${isPositive ? "" : "rotate-180"}`} width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L0.469667 4.46967C0.176773 4.76256 0.176773 5.23744 0.469667 5.53033C0.76256 5.82322 1.23743 5.82322 1.53033 5.53033L4.25 2.81066L4.25 12.5C4.25 12.9142 4.58579 13.25 5 13.25C5.41421 13.25 5.75 12.9142 5.75 12.5L5.75 2.81066L8.46967 5.53033Z" fill={isPositive ? "#0FAF62" : "#BA3838"} />
                    </svg>
                    на {Math.abs(difference)}% {isPositive ? "быстрее" : "медленнее"}, чем вчера
                </p>
            </div>

            <PieChartContainer size={100} data={data} colors={colors} percent={percent} />
        </div>
    )
}

export default DayStatistic
