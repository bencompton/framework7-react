export declare type Dom7ReturnObject = {
    length: number;
    insertBefore: (element: HTMLElement) => void;
    addClass: (classes: string) => void;
}

export declare function Dom7(selector: string): Dom7ReturnObject;
export declare function Dom7(selector: string, context: string): Dom7ReturnObject;

