import { load } from "@/utils";
import registerGlobals from "@/register-globals";
import addRoutesTracker from "@/add-routes-tracker";
import { getOptions } from "@/options";
import { getRouter } from "@/router";
import addConfiguration from "@/add-configuration";

export default () => {
  const {
    onReady,
    onError,
    globalObjectName,
    globalDataLayerName,
    config,
    customResourceURL,
    customPreconnectOrigin,
    deferScriptLoad,
    pageTrackerEnabled,
    disableScriptLoad,
  } = getOptions();

  const isPageTrackerEnabled = Boolean(pageTrackerEnabled && getRouter());

  registerGlobals();
  addConfiguration();

  if (disableScriptLoad) {
    return;
  }

  return load(`${customResourceURL}?id=${config.id}&l=${globalDataLayerName}`, {
    preconnectOrigin: customPreconnectOrigin,
    defer: deferScriptLoad,
  })
    .then(() => {
      if (onReady) {
	      console.log('onready start');
        onReady(window[globalObjectName]);
	      console.log('onready end');
      }
      if (isPageTrackerEnabled) {
	      console.log('addroutes start');
        addRoutesTracker();
	      console.log('addroutes end');
      }
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }

      return error;
    });
};
