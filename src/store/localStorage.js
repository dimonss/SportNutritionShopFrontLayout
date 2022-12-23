import config from "../config";

export const loadState = () => {
    try {
        const serializedStore = localStorage.getItem("store_sport_nutrition");
        if (serializedStore === null) {
            return undefined;
        }
        const state = JSON.parse(serializedStore);

        if (
            state?.app?.stateVersion === undefined ||
            config.stateVersion !== state?.app?.stateVersion
        )
            return undefined;
        return state;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (store) => {
    try {
        const serializedStore = JSON.stringify({
            ...store,
            loading: undefined,
            errors: undefined,
        });

        localStorage.setItem("store_sport_nutrition", serializedStore);
    } catch (err) {
        new Error(err);
    }
};
