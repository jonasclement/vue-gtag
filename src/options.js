import { mergeDeep } from "@/utils";

export const getDefaultParams = () => ({
  bootstrap: true,
  onReady: null,
  onError: null,
  onBeforeTrack: null,
  onAfterTrack: null,
  pageTrackerTemplate: null,
  customResourceURL: "https://www.googletagmanager.com/gtag/js",
  customPreconnectOrigin: "https://www.googletagmanager.com",
  deferScriptLoad: false,
  pageTrackerExcludedRoutes: [],
  pageTrackerEnabled: true,
  enabled: true,
  disableScriptLoad: false,
  pageTrackerScreenviewEnabled: false,
  appName: null,
  pageTrackerUseFullPath: false,
  pageTrackerPrependBase: true,
  pageTrackerSkipSamePath: true,
  globalDataLayerName: "dataLayer",
  globalObjectName: "gtag",
  defaultGroupName: "default",
  includes: null,
  config: {
    id: null,
    params: {
      custom_client_id: "",
      send_page_view: false,
    },
  },
});

let params = {};

export const setOptions = (options = {}) => {
  const defaultParams = getDefaultParams();
  params = mergeDeep(defaultParams, options);
};

export const getOptions = () => {
  return params;
};
