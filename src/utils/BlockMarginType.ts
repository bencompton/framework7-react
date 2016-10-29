export enum BlockMarginTypeEnum {
    None,
    Inset,
    TabletInset
}

export const getMarginTypeClass = (blockMarginType: BlockMarginTypeEnum) => {
    switch (blockMarginType) {
        case BlockMarginTypeEnum.Inset:
            return ' inset';
        case BlockMarginTypeEnum.None:
            return '';
        default:
            return ' tablet-inset';
    }
};