import { Dispatch, SetStateAction } from "react";
export interface LocalStorageOptions {
    /**
     * <span style="color: #32adff;">If true, initial value will be replaced by the localStorage content, even if it is
     * null.</span>
     */
    replaceIfNull?: boolean;
    /**
     * <span style="color: #32adff;">If true, the localStorage content is ignored at initialization.</span>
     *
     * The value will still be synced to localStorage when changed.
     */
    ignorePreviouslySavedValue?: boolean;
}
/**
 * <span style="color: #32adff;">Sync a state with local storage.</span>
 */
export declare const useLocalStorageState: <T>(localStorageKey: string, initialValue: T | (() => T), options?: LocalStorageOptions) => [T, Dispatch<SetStateAction<T>>, boolean];
//# sourceMappingURL=local-storage.d.ts.map