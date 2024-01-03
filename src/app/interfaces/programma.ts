import { ProgrammaOptions } from "./programmaOptions";
import { ProgrammaNames } from "./programmaNames";

export interface Programma {
    image: string, 
    name: ProgrammaNames, 
    options: ProgrammaOptions;
}
