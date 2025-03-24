import React from "react";
import { formatNumber } from "../../../../utils/formateNumber";

interface IYearRow {
    icon: React.ReactNode,
    minCount: number,
    measurement: string,
    maxCount: number,
    fact: number,
    plan: number,
}

const YearRow: React.FC<IYearRow> = ({ icon, minCount, measurement, maxCount, fact, plan }) => {
    const difference = +(fact - plan).toFixed(1);
    const isPositive = difference > 0;
    return (
        <div className="flex items-center gap-11 w-full">
            {icon}
            <div className="flex items-center gap-3 w-full h-full">
                <div className="flex flex-col text-right">
                    <span className="font-bold text-[24px] leading-[80%] text-blue text-nowrap">{formatNumber(minCount)}</span>
                    <span className="text-[24px] leading-[80%] text-blue text-nowrap">{measurement}</span>
                </div>
                <div className="relative flex items-center w-full bg-lightBlue p-2 rounded-full h-12">
                    <div className="absolute inset-y-0 left-2 flex items-center gap-3 text-2xl font-semibold">
                        <div
                            className={`flex items-center justify-center py-0.5 px-3 select-none min-w-fit h-8 rounded-full ${isPositive ? "bg-blue text-blue" : "bg-red text-red"}`}
                            style={{ width: `${plan}%` }}
                        >
                            {formatNumber(plan)}%
                        </div>
                        <span className={isPositive ? "text-green" : "text-red"}>{isPositive ? "+" : ""}{formatNumber(difference)}%</span>
                    </div>
                    <div className="absolute inset-y-0 left-2 flex items-center gap-3 text-2xl font-semibold">
                        <div
                            className={`flex items-center justify-center py-0.5 px-3 text-textWhite min-w-fit h-8 rounded-full ${isPositive ? "bg-green" : "bg-blue"}`}
                            style={{ width: `${fact}%` }}
                        >
                            {formatNumber(fact)}%
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-bold text-[24px] leading-[80%] text-blue text-nowrap">{formatNumber(maxCount)}</span>
                    <span className="text-[24px] leading-[80%] text-blue text-nowrap">{measurement}</span>
                </div>
            </div>
        </div>
    )
}

export default YearRow
