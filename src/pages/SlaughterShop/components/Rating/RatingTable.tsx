import { DataItem, useRankingGetData } from "../../hooks/Rating/useRankingGetData";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "../../../../components/ui/table";

const RatingTable = () => {
    const { data, loading } = useRankingGetData();

    const totalCountEmployees = data?.result.reduce((acc: number, item: DataItem) => acc + item.countEmployees, 0);
    const totalCountViolations = data?.result.reduce((acc: number, item: DataItem) => acc + item.countViolations, 0);
    const averageRatingPercent = data?.result.reduce((acc: number, item: DataItem) => acc + item.ratingPercent, 0) / data?.result.length;
  
    return (
        <div className="relative flex flex-col gap-3 p-3 w-full h-full bg-textWhite rounded-lg">
            <h4 className="text-[20px] font-bold leading-6 font-sans">Рейтинг отделов</h4>
            <div className="absolute left-0 top-[90px] w-full h-[1.5px] bg-[#C8C8C8]"></div>
            <div className="overflow-y-auto max-h-[701px]">
                <Table>
                    <TableHeader>
                        <TableRow className="uppercase text-[16px] border-b-tableGrey h-[43px]">
                            <TableHead className="w-[100px]">Отдел</TableHead>
                            <TableHead>чел.</TableHead>
                            <TableHead>наруш.</TableHead>
                            <TableHead className="text-right">рейт.</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <p>Загрузка...</p>
                        ) : (
                            data?.result.map((item, i) => (
                                <TableRow key={i} className="h-[43px] border-b-tableGrey">
                                    <TableCell className="text-[16px] w-[262px]">{item.name}</TableCell>
                                    <TableCell className="text-[16px] text-center">{item.countEmployees}</TableCell>
                                    <TableCell className="text-[16px] text-center">{item.countViolations}</TableCell>
                                    <TableCell className="text-[16px] text-right">{item.ratingPercent}%</TableCell>
                                </TableRow>
                            )))}
                    </TableBody>
                    <TableFooter>
                        <TableRow className="font-bold text-[16px] border-b-tableGrey h-[43px]">
                            <TableCell>Всего</TableCell>
                            <TableCell className="text-center">{totalCountEmployees}</TableCell>
                            <TableCell className="text-center">{totalCountViolations}</TableCell>
                            <TableCell className="text-right">{averageRatingPercent}%</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}

export default RatingTable
