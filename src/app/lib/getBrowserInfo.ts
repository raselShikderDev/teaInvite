export function getBrowserInfo() {
  const nav = navigator as Navigator & {
    userAgentData?: {
      brands: { brand: string; version: string }[];
      mobile: boolean;
      platform: string;
    };
    connection?: {
      effectiveType?: string;
      downlink?: number;
      downlinkMax?: number;
      rtt?: number;
      saveData?: boolean;
      type?: string;
    };
    deviceMemory?: number;
    pdfViewerEnabled?: boolean;
    devicePosture?: {
      type: string;
    };
  };

  return {
    timestamp: new Date().toISOString(),

    browser: {
      appCodeName: nav.appCodeName,
      appName: nav.appName,
      appVersion: nav.appVersion,
      userAgent: nav.userAgent,
      vendor: nav.vendor,
      vendorSub: nav.vendorSub,
      product: nav.product,
      productSub: nav.productSub,
      platform: nav.platform,

      userAgentData: nav.userAgentData
        ? {
            brands: nav.userAgentData.brands,
            mobile: nav.userAgentData.mobile,
            platform: nav.userAgentData.platform,
          }
        : null,
    },

    language: {
      language: nav.language,
      languages: nav.languages,
    },

    hardware: {
      hardwareConcurrency: nav.hardwareConcurrency,
      deviceMemory: nav.deviceMemory ?? null,
      maxTouchPoints: nav.maxTouchPoints,
    },

    privacy: {
      cookieEnabled: nav.cookieEnabled,
      doNotTrack: nav.doNotTrack,
      webdriver: nav.webdriver,
      online: nav.onLine,
    },

    network: nav.connection
      ? {
          effectiveType: nav.connection.effectiveType,
          downlink: nav.connection.downlink,
          downlinkMax: nav.connection.downlinkMax,
          rtt: nav.connection.rtt,
          saveData: nav.connection.saveData,
          type: nav.connection.type,
        }
      : null,

    screen: {
      width: screen.width,
      height: screen.height,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
      orientation: screen.orientation?.type,
      orientationAngle: screen.orientation?.angle,
      devicePixelRatio: window.devicePixelRatio,
    },

    viewport: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    },

    location: {
      href: location.href,
      origin: location.origin,
      protocol: location.protocol,
      hostname: location.hostname,
      host: location.host,
      port: location.port,
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    },

    document: {
      title: document.title,
      referrer: document.referrer,
      characterSet: document.characterSet,
      compatMode: document.compatMode,
      visibilityState: document.visibilityState,
      hidden: document.hidden,
      readyState: document.readyState,
    },

    history: {
      length: history.length,
    },

    time: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      locale: Intl.DateTimeFormat().resolvedOptions().locale,
      timezoneOffset: new Date().getTimezoneOffset(),
      localTime: new Date().toString(),
      utcTime: new Date().toUTCString(),
      isoTime: new Date().toISOString(),
    },

    storage: {
      localStorage: !!window.localStorage,
      sessionStorage: !!window.sessionStorage,
      indexedDB: !!window.indexedDB,
    },

    supportedApis: {
      pdfViewerEnabled: nav.pdfViewerEnabled ?? false,

      bluetooth: "bluetooth" in nav,
      clipboard: "clipboard" in nav,
      geolocation: "geolocation" in nav,
      gpu: "gpu" in nav,
      hid: "hid" in nav,
      usb: "usb" in nav,
      serial: "serial" in nav,
      keyboard: "keyboard" in nav,
      wakeLock: "wakeLock" in nav,
      xr: "xr" in nav,
      mediaDevices: "mediaDevices" in nav,
      serviceWorker: "serviceWorker" in nav,
      credentials: "credentials" in nav,
      storage: "storage" in nav,
      virtualKeyboard: "virtualKeyboard" in nav,
      presentation: "presentation" in nav,
      managed: "managed" in nav,
      devicePosture: "devicePosture" in nav,
    },

    devicePosture: nav.devicePosture?.type ?? null,

    userActivation: {
      hasBeenActive: nav.userActivation?.hasBeenActive,
      isActive: nav.userActivation?.isActive,
    },

    plugins: Array.from(nav.plugins).map((plugin) => ({
      name: plugin.name,
      filename: plugin.filename,
      description: plugin.description,
    })),

    mimeTypes: Array.from(nav.mimeTypes).map((mime) => ({
      type: mime.type,
      suffixes: mime.suffixes,
      description: mime.description,
    })),

    preferences: {
      darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      reducedTransparency: window.matchMedia(
        "(prefers-reduced-transparency: reduce)"
      ).matches,
      contrast: window.matchMedia("(prefers-contrast: more)").matches,
      hdr: window.matchMedia("(dynamic-range: high)").matches,
    },

    performance: {
      memory:
        "memory" in performance
          ? {
              jsHeapSizeLimit: (
                performance as Performance & {
                  memory: {
                    jsHeapSizeLimit: number;
                    totalJSHeapSize: number;
                    usedJSHeapSize: number;
                  };
                }
              ).memory.jsHeapSizeLimit,

              totalJSHeapSize: (
                performance as Performance & {
                  memory: {
                    jsHeapSizeLimit: number;
                    totalJSHeapSize: number;
                    usedJSHeapSize: number;
                  };
                }
              ).memory.totalJSHeapSize,

              usedJSHeapSize: (
                performance as Performance & {
                  memory: {
                    jsHeapSizeLimit: number;
                    totalJSHeapSize: number;
                    usedJSHeapSize: number;
                  };
                }
              ).memory.usedJSHeapSize,
            }
          : null,

      navigation: performance.getEntriesByType("navigation"),

      resources: performance
        .getEntriesByType("resource")
        .map((entry) => ({
          name: entry.name,
          type: entry.entryType,
          duration: entry.duration,
        })),
    },

    environment: {
      secureContext: window.isSecureContext,
      crossOriginIsolated: window.crossOriginIsolated,
    },
  };
}