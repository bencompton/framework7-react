export enum ColorsEnum {
    Blue,
    Red,
    White,
    Black,
    LightBlue,
    Yellow,
    Orange,
    Pink,
    Green,
    Gray,
    Multi
}

export const getColorCls = (color: ColorsEnum) => (ColorsEnum[color]) ? `color-${ColorsEnum[color].toLowerCase()}` : '';