import React from "react";
import { formatDate } from "../../../../utils/formateDate";

interface ICongratulation {
    pic: string, 
    text: string, 
    date: string
    title: string
}

const Congratulation: React.FC<ICongratulation> = ({pic, text, date, title}) => {
  return (
    <div className="flex gap-[6px] w-full py-2 px-3 bg-lightGreen border-solid border-[1px] border-green rounded-sm">
      <img src={pic} alt="avatar" width={80} height={80} className="max-h-[80px] rounded-full "  />
      <div className="flex flex-col gap-[6px] max-w-[326px]">
        <div className="flex items-center justify-between">
            <span className="text-green text-[16px] leading-5 font-bold">{title}</span>
            <span className="text-[12px] leading-5 text-grey">{formatDate(date)}</span>
        </div>
        <p className="text-[16px] leading-5 text-messageGrey">{text}</p>
      </div>
    </div>
  )
}

export default Congratulation


