import { Position } from "./position";

export interface Program {
    iconClass: string[], 
    name: string, 
    size: string,
    position?: Position,
    options: ProgramOptions;
}

interface ProgramOptions {
    zIndex?: number, 
    isFocussed: boolean,
    isFullscreen: boolean,
    isOpen: boolean,
    isMinimized: boolean,
    isTop: boolean,
    isShortcut?: boolean,
    link?: string,
    type: "desktop" | "socials" | "about-me" 
}

