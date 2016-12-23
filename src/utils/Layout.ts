export enum LayoutEnum {
    Light,
    Dark,
    Default
}

export const getLayoutClass = (layout: LayoutEnum) => {
    return `layout-${layout.toString()}`;
};