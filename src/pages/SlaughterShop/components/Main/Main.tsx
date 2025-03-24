import DayStatistic from "./DayStatistic";
import YearStatistic from "./YearStatistic";
import BarChartContainer from "../../../../components/Charts/BarChartContainer";
import HoursStatisticContainer from "../../../../components/Charts/HoursStatisticContainer";

const data = [
    { name: '25 дек', male: 5000, female: 2000, plan: 7000 },
    { name: '26 дек', male: 6000, female: 1000, plan: 7500 },
    { name: '27 дек', male: 1000, female: 6000, plan: 8000 },
    { name: '28 дек', male: 7000, female: 1000, plan: 8500 },
    { name: '29 дек', male: 6000, female: 2000, plan: 7000 },
    { name: '30 дек', male: 4000, female: 3000, plan: 6000 },
    { name: '31 дек', male: 5000, female: 2000, plan: 7000 },
    { name: '1 фев', male: 6000, female: 1000, plan: 7500 },
    { name: '2 фев', male: 6500, female: 1500, plan: 8000 },
    { name: '3 фев', male: 7000, female: 2000, plan: 8500 },
    { name: '4 фев', male: 6000, female: 2000, plan: 8000 },
    { name: '5 фев', male: 7000, female: 1000, plan: 8500 },
    { name: '6 фев', male: 6000, female: 2000, plan: 8000 },
    { name: '7 фев', male: 7000, female: 2000, plan: 7500 },
];


const Main = () => {
    return (
        <div className="flex flex-col gap-[12px] basis-2/4 max-w-[942px] pt-[2px]">
            <div className="flex items-center gap-[12px]">
                <DayStatistic title={"ЗАбито за сегодня"} count={3878} difference={8} measureUnit={"шт"} percent={59} />
                <DayStatistic title={"разделано за сегодня"} count={2850} difference={-3} measureUnit={"кг"} percent={31} />
            </div>
            <HoursStatisticContainer />
            <BarChartContainer data={data} title={"Поголовье за 2 недели"} />
            <YearStatistic />
        </div>
    )
}

export default Main
