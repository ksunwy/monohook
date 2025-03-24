import YearRow from "./YearRow";

const YearStatistic = () => {
    return (
        <div className="bg-textWhite rounded-lg p-3 w-full flex flex-col gap-3">
            <span className="font-medium text-[16px] uppercase text-blue">Выполнение годового плана (поголовье и убойный вес)</span>
            <div className="flex items-center w-full justify-end">
                <div className="flex items-center gap-[28px]">
                    <div className="flex items-center gap-[6px] text-[14px] leading-[17px] text-[rgba(0,0,0,0.7)]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="9" height="9" fill="#005CE8" stroke="white" />
                        </svg>
                        <span>факт</span>
                    </div>
                    <div className="flex items-center gap-[6px] text-[14px] leading-[17px] text-[rgba(0,0,0,0.7)]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="9" height="9" fill="#BA3838" stroke="white" />
                        </svg>
                        <span>отставание по плану</span>
                    </div>
                    <div className="flex items-center gap-[6px] text-[14px] leading-[17px] text-[rgba(0,0,0,0.7)]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="9" height="9" fill="#0FAF62" stroke="white" />
                        </svg>
                        <span>план с опережением</span>
                    </div>
                </div>
            </div>
            <YearRow minCount={197} measurement={"тыс шт"} maxCount={2300} fact={10} plan={12.1} icon={ <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.87722 18.8654H0.496269C0.305794 14.6273 1.49627 11.1035 3.25817 8.29396L6.87722 11.1987C7.0677 11.3416 7.30579 11.4368 7.54389 11.4368C7.87722 11.4368 8.16294 11.294 8.40104 11.0559C8.78199 10.5797 8.68675 9.91301 8.25818 9.53206L4.82961 6.81777L4.54389 6.48444C6.73436 3.6273 9.49627 1.19873 10.9248 0.246345C11.5439 -0.182226 12.401 -0.0393693 12.8772 0.579678L21.9725 13.4844L13.401 16.7225C13.1153 16.8178 12.9248 17.0559 12.782 17.294C12.6868 17.5797 12.6868 17.8654 12.782 18.1511C12.9248 18.4368 15.9248 25.3416 20.5439 26.1987C20.7344 26.2463 20.9725 26.2463 21.2582 26.2463C23.4963 26.2463 27.401 25.0082 28.2106 24.7225C28.782 24.5321 29.0677 23.913 28.8772 23.3892C28.6868 22.8654 28.0677 22.5321 27.5439 22.7225C25.4487 23.4368 21.9725 24.294 20.9248 24.1035C18.4963 23.6273 16.3058 20.3416 15.2106 18.294C15.2106 18.294 21.0677 16.1035 23.0201 15.4368C24.1153 15.0559 26.6868 14.294 26.9725 13.0083C27.3058 11.4844 26.5439 9.00825 26.5439 6.72254C26.5439 3.53206 29.2582 1.91301 31.9248 1.96063C35.1629 1.96063 37.3058 4.19873 36.6868 7.34158C36.6868 7.34158 38.8772 7.96063 39.3534 10.2463C39.4487 10.7225 39.0677 11.1511 38.6391 11.1035C37.3534 11.0559 35.4487 11.1987 35.0201 12.1511C34.3534 13.6749 35.3534 15.7702 36.3058 17.3892C37.2582 19.0083 38.3534 21.6273 38.1153 24.7702C37.7344 29.6749 35.0201 34.9606 23.5439 36.2463L24.782 37.8178H27.782C28.3534 37.8178 28.8772 38.294 28.8772 38.913C28.8772 39.5321 28.401 40.0082 27.782 40.0082H17.4963C16.9248 40.0082 16.401 39.5321 16.401 38.913C16.401 38.294 16.8772 37.8178 17.4963 37.8178H20.0677L15.782 34.2463C15.782 34.2463 12.8296 36.8654 11.0201 38.1035C10.4487 38.5321 9.63913 38.4368 9.16294 37.8654C8.3058 36.8654 6.87722 34.913 5.44865 32.7225L10.0201 29.913C10.5439 29.6273 10.6868 28.9606 10.3534 28.4368C10.0677 27.913 9.40104 27.7702 8.87723 28.1035L4.25817 30.8654C2.63913 28.1035 1.11532 24.7702 0.591511 21.0082H5.87722C6.44865 21.0082 6.97246 20.5321 6.97246 19.913C6.97246 19.294 6.44865 18.8654 5.87722 18.8654ZM32.6391 7.57968C33.4487 7.57968 34.0677 6.96063 34.0677 6.15111C34.0677 5.34158 33.4487 4.72254 32.6391 4.72254C31.8296 4.72254 31.2106 5.34158 31.2106 6.15111C31.2106 6.91301 31.8296 7.57968 32.6391 7.57968Z" fill="#005CE8" /> </svg>} />
            <YearRow minCount={4500} measurement={"тонн"} maxCount={32000} fact={14} plan={13.4} icon={ <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M38.1561 36.9856H1.98327C1.58354 36.9856 1.20018 37.1444 0.917523 37.427C0.634868 37.7097 0.476074 38.0931 0.476074 38.4928C0.476074 38.8925 0.634868 39.2759 0.917523 39.5585C1.20018 39.8412 1.58354 40 1.98327 40H38.1561C38.5558 40 38.9392 39.8412 39.2218 39.5585C39.5045 39.2759 39.6633 38.8925 39.6633 38.4928C39.6633 38.0931 39.5045 37.7097 39.2218 37.427C38.9392 37.1444 38.5558 36.9856 38.1561 36.9856Z" fill="#005CE8" /> <path d="M6.45222 33.8699H32.577C33.9095 33.8699 35.1874 33.3406 36.1295 32.3984C37.0717 31.4562 37.601 30.1783 37.601 28.8459V27.2675C37.6038 25.028 37.1648 22.8099 36.309 20.7403C35.4532 18.6707 34.1976 16.7902 32.6139 15.2066C32.2599 16.2674 32.0807 17.3786 32.0835 18.4969C32.0745 21.4643 30.8902 24.3073 28.7898 26.4034C26.6894 28.4996 23.844 29.6782 20.8766 29.6812C20.4441 29.6807 20.012 29.6558 19.5823 29.6066C17.887 29.409 16.2585 28.8297 14.8191 27.9123C13.3798 26.9949 12.1671 25.7632 11.2721 24.3098C11.1672 24.142 11.0964 23.9551 11.0637 23.7598C11.0309 23.5646 11.037 23.3648 11.0815 23.1719C11.1714 22.7823 11.4123 22.4444 11.7513 22.2325C12.0904 22.0206 12.4997 21.952 12.8892 22.0419C13.0821 22.0864 13.2644 22.1685 13.4256 22.2834C13.5868 22.3983 13.7237 22.5439 13.8287 22.7117L13.8293 22.7128C13.843 22.7348 13.862 22.7498 13.8759 22.7716C14.208 23.2972 14.5959 23.7854 15.033 24.2276C15.3008 24.4766 15.5851 24.707 15.8841 24.9174C16.0886 25.0751 16.2737 25.2592 16.491 25.3964C16.8304 25.5949 17.1838 25.7682 17.5485 25.915C17.7531 26.0063 17.9428 26.1263 18.1548 26.2006C18.5841 26.3386 19.0242 26.4407 19.4705 26.506C19.6254 26.5328 19.7694 26.5938 19.9268 26.6118C19.9346 26.6127 19.9423 26.6111 19.9502 26.6119C20.3657 26.6447 20.7831 26.646 21.1988 26.6157C22.5364 26.5731 23.8423 26.1983 24.9989 25.5252C25.0611 25.4888 25.13 25.4704 25.1915 25.4322C26.1955 24.8097 27.0529 23.9773 27.705 22.9922C27.7981 22.8522 27.8566 22.6981 27.9401 22.5537C28.1341 22.2398 28.3065 21.913 28.4561 21.5757C28.5295 21.3967 28.5638 21.2081 28.624 21.0252C28.7398 20.7101 28.8358 20.3881 28.9115 20.061C29.0103 19.5565 29.0617 19.0438 29.065 18.5298C29.0651 18.5159 29.069 18.5029 29.069 18.489C29.0701 18.1162 29.0866 17.7174 29.1224 17.3014C29.1255 17.2646 29.1324 17.2286 29.1358 17.1921C29.1705 16.8221 29.221 16.4395 29.2919 16.0473C29.3064 15.9669 29.3265 15.8881 29.3424 15.8081C29.4131 15.4554 29.5 15.0972 29.6068 14.7356C29.6335 14.6451 29.6613 14.555 29.6903 14.4653C29.8219 14.0507 29.9775 13.6442 30.1565 13.2478C30.6466 12.1517 31.3305 11.1531 32.1753 10.3L33.5628 8.91252C33.9625 8.48696 34.4592 8.16432 35.0104 7.97206C35.5617 7.77981 36.1513 7.72365 36.729 7.80837C37.0559 7.84558 37.387 7.81306 37.7005 7.71294C38.014 7.61283 38.3027 7.44739 38.5475 7.22756C38.7924 7.00772 38.9879 6.73847 39.1211 6.43757C39.2543 6.13666 39.3222 5.81094 39.3203 5.48187C39.3184 5.15281 39.2468 4.82788 39.1102 4.52851C38.9736 4.22914 38.775 3.96214 38.5277 3.74511C38.2803 3.52808 37.9898 3.36596 37.6752 3.26942C37.3606 3.17289 37.0291 3.14415 36.7026 3.18508C36.6245 3.19814 36.5444 3.19236 36.469 3.16822C36.3936 3.14408 36.325 3.10227 36.269 3.04629C36.213 2.99031 36.1712 2.92176 36.1471 2.84636C36.1229 2.77095 36.1171 2.69087 36.1301 2.61277C36.1757 2.26219 36.1401 1.90582 36.026 1.57119C35.912 1.23656 35.7226 0.932598 35.4725 0.682774C35.131 0.34134 34.692 0.114358 34.216 0.0331808C33.74 -0.0479961 33.2506 0.020639 32.8153 0.229605C32.38 0.438571 32.0203 0.777556 31.7859 1.19973C31.5516 1.62191 31.4541 2.10644 31.507 2.5864C31.5959 3.10285 31.5662 3.63277 31.4201 4.13605C31.274 4.63934 31.0154 5.10281 30.6638 5.49142L28.894 7.26122C27.8956 8.24985 26.7059 9.02439 25.3979 9.53746C24.0898 10.0505 22.6908 10.2914 21.2865 10.2452C21.0284 10.2336 20.7803 10.1861 20.5194 10.1861H18.5098C13.9795 10.1861 9.63476 11.9857 6.43134 15.1891C3.22792 18.3925 1.42824 22.7373 1.42822 27.2676V28.8459C1.42825 30.1783 1.95758 31.4562 2.89975 32.3984C3.84193 33.3405 5.11979 33.8699 6.45222 33.8699Z" fill="#005CE8" /> </svg>} />
        </div>
    )
}

export default YearStatistic
