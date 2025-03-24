export const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    const now = new Date();
  
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    const diffDays = Math.floor(
      (now.setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0)) / 86400000
    );
  
    if (diffDays === 0) return `сегодня в ${hours}:${minutes}`;
    if (diffDays === 1) return `вчера в ${hours}:${minutes}`;
    if (diffDays === 2) return `позавчера в ${hours}:${minutes}`;
  
    return `${day}.${month}.${year} в ${hours}:${minutes}`;
  };
  
export const formateRecordDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day: string = date.getDate().toString().padStart(2, "0"); 
  const month: string = date.toLocaleString("ru-RU", { month: "long" });
  const year: number = date.getFullYear();
  return `${day} ${month} ${year}`;
};
