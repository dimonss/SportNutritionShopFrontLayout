import buildType from "./constants/buildType";

const defaultConfig = {
    stateVersion: 0.1,
    BUILD_TYPE: buildType.PRODUCTION,
    isProduction: () => process.env.REACT_APP_BUILD_TYPE === buildType.PRODUCTION,
    API_URL: "",//todo insert api url
};

const buildTypeConfigs = {
    development: {
        BUILD_TYPE: buildType.DEVELOPMENT,
        API_URL: "",//todo insert api url
    },
    mock: {
        BUILD_TYPE: buildType.MOCK,
    },
};

const buildTypeEx = process.env["REACT_APP_BUILD_TYPE"];
const config = {...defaultConfig, ...buildTypeConfigs[buildTypeEx]};
export default config;
