import React from "react";
import { formatDate } from "../../../../utils/formateDate";

interface INews {
    pic: string, 
    title: string, 
    text: string, 
    date: string
}

const News: React.FC<INews> = ({pic, date, title, text}) => {
  return (
    <div className="flex flex-col gap-[6px] bg-[rgba(255,255,255,0.15)] w-full py-2 px-3 border-solid border-[1px] border-[#CACFD1] rounded-sm">
      <div className="flex items-center justify-between">
        <span className="text-[16px] leading-5 text-grey font-bold">Новость</span>
        <span className="text-[12px] leading-5 text-grey">{formatDate(date)}</span>
      </div>
      <img src={pic} alt="picture" width={417} height={224} className="rounded-lg" />
      <div className="flex flex-col gap-7 text-[16px] leading-5 text-messageGrey">
        <span>{title}</span>
        <p className="max-w-[397px]">{text}</p>
      </div>
    </div>
  )
}

export default News
