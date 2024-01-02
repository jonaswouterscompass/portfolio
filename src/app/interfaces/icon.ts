import { Variables } from "./variables";

export interface Icon {
    image: string,
    display: string, 
    variable: Variables, 
    isFocussed: boolean,
    isShortcut?: boolean,
}
