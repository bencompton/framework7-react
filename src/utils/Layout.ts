export enum LayoutEnum {
    Light,
    Dark,
    Default
}

export const getLayoutClass = (layout: LayoutEnum) => {
    if (layout) {
        return `layout-${layout.toString()}`;
    } else {
        return null;
    }
};