declare type OnLoadedCallback = () => void;
export declare function addScript(src: string, onLoaded: OnLoadedCallback, onAlreadyLoaded?: OnLoadedCallback | null): void;
declare const _default: {
    addScript: typeof addScript;
};
export default _default;
