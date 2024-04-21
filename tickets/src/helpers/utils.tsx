export const getStopsText = (stops: number): string => {
    switch (stops) {
        case 0:
            return "Без пересадок";
        case 1:
            return "1 пересадка";
        case 2:
            return "2 пересадки";
        case 3:
            return "3 пересадки";
        default:
            return stops.toString(); 
    }
};