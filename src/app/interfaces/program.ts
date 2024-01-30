import { Position } from "./position";

export interface Program {
    iconClass: string[], 
    type: "internet" | "explorer" | "mail" | "text",
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
    place: "desktop" | "socials" | "about-me" 
}

