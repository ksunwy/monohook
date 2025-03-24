import Shipments from "./components/Shipments";
import SmallStatistic from "./components/SmallStatistic";

const ForManagers = () => {
  return (
    <section className="w-full h-full flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          <SmallStatistic title={"Поголовье за вчера"} plan={6325} fact={6197} isWeight={false} measurement={"шт"} />
          <SmallStatistic title={"Живой вес за вчера"} plan={114220} fact={130211} isWeight={true} measurement={"кг"} />
          <SmallStatistic title={"Убойный вес за вчера"} plan={93150} fact={95013} isWeight={false} measurement={"кг"} />
        </div>
        <div className="flex flex-col gap-3">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className="flex gap-3">
        <Shipments />
        <SmallStatistic title={"Соответствие веса отгрузки продукции плановому весу на прошлой неделе"} plan={86560} fact={87426} isWeight={false} measurement={"кг"} />
        <div className=""></div>
      </div>
    </section>
  )
}

export default ForManagers
