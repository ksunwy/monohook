export const getTextFromPath = (pathname: string) => {
    switch (pathname) {
        case "/for-managers":
            return "Для руководителей";
        case "/hr-department":
            return "Отдел кадров";
        case "/shipments":
            return "Отгрузки клиентам";
        case "/slaughter-shop":
            return "Убойный цех";
        default:
            return "";
    }
};