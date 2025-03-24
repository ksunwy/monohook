import RecordCard from "./RecordCard";
import RatingTable from "./RatingTable";
import { useRecordGetData } from "../../hooks/Rating/useRecordGetData";

const Rating = () => {
  const {data, loading} = useRecordGetData();

  return (
    <div className="flex flex-col gap-3 basis-1/4 max-w-[465px]">
         {loading ? (
          <p>Загрузка...</p>
        ) : (
          // @ts-ignore
          <RecordCard dateCount={data?.result.slaughter.date} dateWeight={data?.result.butchering.date} count={data?.result.slaughter.total} weight={data?.result.butchering.total} />  
        )}
      <RatingTable />
    </div>
  )
}

export default Rating
