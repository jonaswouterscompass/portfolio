import { ProgrammaOptions } from "./programmaOptions";

export interface Programma {
    image: string, 
    name: string, 
    size: string,
    isDesktop?: boolean,
    isSocials?: boolean,
    options: ProgrammaOptions;
}
