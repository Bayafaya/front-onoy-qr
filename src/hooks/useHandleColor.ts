import { useTheme } from "@emotion/react";

interface IHandleColor {
    active?: boolean;
    color?: string;
}

const useHandleColor = ({ active, color }: IHandleColor):string => {
    const theme = useTheme();
    if (active) {
        return theme.palette.primary.main;
    } else if (color) {
        return color;
    } else {
        return theme.palette.primary.contrastText;
    }
}

export default useHandleColor;