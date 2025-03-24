import News from "./News";
import Congratulation from "./Congratulation";
import { FeedItem, useFeedGetData } from "../../hooks/useFeedGetData";

const Ads = () => {
  const { data, loading } = useFeedGetData();

  if (!data) {
    return <p>Нет объявлений</p>
  }

  return (
    <div className="basis-1/4 max-w-[465px] flex flex-col gap-3 p-3 h-full bg-textWhite rounded-lg">
      <h4 className="text-[20px] font-bold leading-6 font-sans">Лента объявлений</h4>
      <div className="flex flex-col gap-3 max-h-[968px] overflow-y-auto">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          // @ts-ignore
          data.result.map((item: FeedItem) => 
            item.type === "news" ? (
              <News key={item.id} pic={item.imageUrl} date={item.date} title={item.title} text={item.body} />
            ) : (
              <Congratulation key={item.id} pic={item.imageUrl} date={item.date} title={item.title} text={item.body} />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Ads;
