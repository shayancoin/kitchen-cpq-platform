(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoaderFlags.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Class used to represent data loading progression
 */ __turbopack_context__.s([
    "SceneLoaderFlags",
    ()=>SceneLoaderFlags
]);
class SceneLoaderFlags {
    /**
     * Gets or sets a boolean indicating if entire scene must be loaded even if scene contains incremental data
     */ static get ForceFullSceneLoadingForIncremental() {
        return SceneLoaderFlags._ForceFullSceneLoadingForIncremental;
    }
    static set ForceFullSceneLoadingForIncremental(value) {
        SceneLoaderFlags._ForceFullSceneLoadingForIncremental = value;
    }
    /**
     * Gets or sets a boolean indicating if loading screen must be displayed while loading a scene
     */ static get ShowLoadingScreen() {
        return SceneLoaderFlags._ShowLoadingScreen;
    }
    static set ShowLoadingScreen(value) {
        SceneLoaderFlags._ShowLoadingScreen = value;
    }
    /**
     * Defines the current logging level (while loading the scene)
     * @ignorenaming
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    static get loggingLevel() {
        return SceneLoaderFlags._LoggingLevel;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static set loggingLevel(value) {
        SceneLoaderFlags._LoggingLevel = value;
    }
    /**
     * Gets or set a boolean indicating if matrix weights must be cleaned upon loading
     */ static get CleanBoneMatrixWeights() {
        return SceneLoaderFlags._CleanBoneMatrixWeights;
    }
    static set CleanBoneMatrixWeights(value) {
        SceneLoaderFlags._CleanBoneMatrixWeights = value;
    }
}
// Flags
SceneLoaderFlags._ForceFullSceneLoadingForIncremental = false;
SceneLoaderFlags._ShowLoadingScreen = true;
SceneLoaderFlags._CleanBoneMatrixWeights = false;
SceneLoaderFlags._LoggingLevel = 0; //# sourceMappingURL=sceneLoaderFlags.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Stores the list of available parsers in the application.
 */ __turbopack_context__.s([
    "AddIndividualParser",
    ()=>AddIndividualParser,
    "AddParser",
    ()=>AddParser,
    "GetIndividualParser",
    ()=>GetIndividualParser,
    "GetParser",
    ()=>GetParser,
    "Parse",
    ()=>Parse
]);
const BabylonFileParsers = {};
/**
 * Stores the list of available individual parsers in the application.
 */ const IndividualBabylonFileParsers = {};
function AddParser(name, parser) {
    BabylonFileParsers[name] = parser;
}
function GetParser(name) {
    if (BabylonFileParsers[name]) {
        return BabylonFileParsers[name];
    }
    return null;
}
function AddIndividualParser(name, parser) {
    IndividualBabylonFileParsers[name] = parser;
}
function GetIndividualParser(name) {
    if (IndividualBabylonFileParsers[name]) {
        return IndividualBabylonFileParsers[name];
    }
    return null;
}
function Parse(jsonData, scene, container, rootUrl) {
    for(const parserName in BabylonFileParsers){
        if (Object.prototype.hasOwnProperty.call(BabylonFileParsers, parserName)) {
            BabylonFileParsers[parserName](jsonData, scene, container, rootUrl);
        }
    }
} //# sourceMappingURL=babylonFileParser.function.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "AppendSceneAsync",
    ()=>AppendSceneAsync,
    "GetRegisteredSceneLoaderPluginMetadata",
    ()=>GetRegisteredSceneLoaderPluginMetadata,
    "ImportAnimationsAsync",
    ()=>ImportAnimationsAsync,
    "ImportMeshAsync",
    ()=>ImportMeshAsync,
    "LoadAssetContainerAsync",
    ()=>LoadAssetContainerAsync,
    "LoadSceneAsync",
    ()=>LoadSceneAsync,
    "RegisterSceneLoaderPlugin",
    ()=>RegisterSceneLoaderPlugin,
    "SceneLoader",
    ()=>SceneLoader,
    "SceneLoaderAnimationGroupLoadingMode",
    ()=>SceneLoaderAnimationGroupLoadingMode,
    "appendSceneAsync",
    ()=>appendSceneAsync,
    "importAnimationsAsync",
    ()=>importAnimationsAsync,
    "loadAssetContainerAsync",
    ()=>loadAssetContainerAsync,
    "loadSceneAsync",
    ()=>loadSceneAsync,
    "registerSceneLoaderPlugin",
    ()=>registerSceneLoaderPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoaderFlags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/fileTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/webRequest.fetch.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var SceneLoaderAnimationGroupLoadingMode;
(function(SceneLoaderAnimationGroupLoadingMode) {
    /**
     * Reset all old animations to initial state then dispose them.
     */ SceneLoaderAnimationGroupLoadingMode[SceneLoaderAnimationGroupLoadingMode["Clean"] = 0] = "Clean";
    /**
     * Stop all old animations.
     */ SceneLoaderAnimationGroupLoadingMode[SceneLoaderAnimationGroupLoadingMode["Stop"] = 1] = "Stop";
    /**
     * Restart old animations from first frame.
     */ SceneLoaderAnimationGroupLoadingMode[SceneLoaderAnimationGroupLoadingMode["Sync"] = 2] = "Sync";
    /**
     * Old animations remains untouched.
     */ SceneLoaderAnimationGroupLoadingMode[SceneLoaderAnimationGroupLoadingMode["NoSync"] = 3] = "NoSync";
})(SceneLoaderAnimationGroupLoadingMode || (SceneLoaderAnimationGroupLoadingMode = {}));
function IsFactory(pluginOrFactory) {
    return !!pluginOrFactory.createPlugin;
}
function isFile(value) {
    return !!value.name;
}
const onPluginActivatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
const registeredPlugins = {};
let showingLoadingScreen = false;
function getDefaultPlugin() {
    return registeredPlugins[".babylon"];
}
function getPluginForMimeType(mimeType) {
    for(const registeredPluginKey in registeredPlugins){
        const registeredPlugin = registeredPlugins[registeredPluginKey];
        if (registeredPlugin.mimeType === mimeType) {
            return registeredPlugin;
        }
    }
    return undefined;
}
function getPluginForExtension(extension, returnDefault) {
    const registeredPlugin = registeredPlugins[extension];
    if (registeredPlugin) {
        return registeredPlugin;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Unable to find a plugin to load " + extension + " files. Trying to use .babylon default plugin. To load from a specific filetype (eg. gltf) see: https://doc.babylonjs.com/features/featuresDeepDive/importers/loadingFileTypes");
    return returnDefault ? getDefaultPlugin() : undefined;
}
function isPluginForExtensionAvailable(extension) {
    return !!registeredPlugins[extension];
}
function getPluginForDirectLoad(data) {
    for(const extension in registeredPlugins){
        const plugin = registeredPlugins[extension].plugin;
        if (plugin.canDirectLoad && plugin.canDirectLoad(data)) {
            return registeredPlugins[extension];
        }
    }
    return getDefaultPlugin();
}
function getFilenameExtension(sceneFilename) {
    const queryStringPosition = sceneFilename.indexOf("?");
    if (queryStringPosition !== -1) {
        sceneFilename = sceneFilename.substring(0, queryStringPosition);
    }
    const dotPosition = sceneFilename.lastIndexOf(".");
    return sceneFilename.substring(dotPosition, sceneFilename.length).toLowerCase();
}
function getDirectLoad(sceneFilename) {
    if (sceneFilename.substring(0, 5) === "data:") {
        return sceneFilename.substring(5);
    }
    return null;
}
function formatErrorMessage(fileInfo, message, exception) {
    const fromLoad = fileInfo.rawData ? "binary data" : fileInfo.url;
    let errorMessage = "Unable to load from " + fromLoad;
    if (message) {
        errorMessage += `: ${message}`;
    } else if (exception) {
        errorMessage += `: ${exception}`;
    }
    return errorMessage;
}
async function loadDataAsync(fileInfo, scene, onSuccess, onProgress, onError, onDispose, pluginExtension, name, pluginOptions) {
    const directLoad = getDirectLoad(fileInfo.url);
    if (fileInfo.rawData && !pluginExtension) {
        // eslint-disable-next-line no-throw-literal
        throw "When using ArrayBufferView to load data the file extension must be provided.";
    }
    const fileExtension = !directLoad && !pluginExtension ? getFilenameExtension(fileInfo.url) : "";
    let registeredPlugin = pluginExtension ? getPluginForExtension(pluginExtension, true) : directLoad ? getPluginForDirectLoad(fileInfo.url) : getPluginForExtension(fileExtension, false);
    if (!registeredPlugin && fileExtension) {
        if (fileInfo.url && !fileInfo.url.startsWith("blob:")) {
            // Fetching head content to get the mime type
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_FetchAsync"])(fileInfo.url, {
                method: "HEAD",
                responseHeaders: [
                    "Content-Type"
                ]
            });
            const mimeType = response.headerValues ? response.headerValues["Content-Type"] : "";
            if (mimeType) {
                // eslint-disable-next-line require-atomic-updates
                registeredPlugin = getPluginForMimeType(mimeType);
            }
        }
        if (!registeredPlugin) {
            registeredPlugin = getDefaultPlugin();
        }
    }
    if (!registeredPlugin) {
        throw new Error(`No plugin or fallback for ${pluginExtension ?? fileInfo.url}`);
    }
    if (pluginOptions?.[registeredPlugin.plugin.name]?.enabled === false) {
        throw new Error(`The '${registeredPlugin.plugin.name}' plugin is disabled via the loader options passed to the loading operation.`);
    }
    if (fileInfo.rawData && !registeredPlugin.isBinary) {
        // eslint-disable-next-line no-throw-literal
        throw "Loading from ArrayBufferView can not be used with plugins that don't support binary loading.";
    }
    const getPluginInstance = (callback)=>{
        // For plugin factories, the plugin is instantiated on each SceneLoader operation. This makes options handling
        // much simpler as we can just pass the options to the factory, rather than passing options through to every possible
        // plugin call. Given this, options are only supported for plugins that provide a factory function.
        if (IsFactory(registeredPlugin.plugin)) {
            const pluginFactory = registeredPlugin.plugin;
            const partialPlugin = pluginFactory.createPlugin(pluginOptions ?? {});
            if (partialPlugin instanceof Promise) {
                // eslint-disable-next-line github/no-then
                partialPlugin.then(callback).catch((error)=>{
                    onError("Error instantiating plugin.", error);
                });
                // When async factories are used, the plugin instance cannot be returned synchronously.
                // In this case, the legacy loader functions will return null.
                return null;
            } else {
                callback(partialPlugin);
                return partialPlugin;
            }
        } else {
            callback(registeredPlugin.plugin);
            return registeredPlugin.plugin;
        }
    };
    return getPluginInstance((plugin)=>{
        if (!plugin) {
            // eslint-disable-next-line no-throw-literal
            throw `The loader plugin corresponding to the '${pluginExtension}' file type has not been found. If using es6, please import the plugin you wish to use before.`;
        }
        onPluginActivatedObservable.notifyObservers(plugin);
        // Check if we have a direct load url. If the plugin is registered to handle
        // it or it's not a base64 data url, then pass it through the direct load path.
        if (directLoad && (plugin.canDirectLoad && plugin.canDirectLoad(fileInfo.url) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsBase64DataUrl"])(fileInfo.url))) {
            if (plugin.directLoad) {
                const result = plugin.directLoad(scene, directLoad);
                if (result instanceof Promise) {
                    result// eslint-disable-next-line github/no-then
                    .then((data)=>{
                        onSuccess(plugin, data);
                    })// eslint-disable-next-line github/no-then
                    .catch((error)=>{
                        onError("Error in directLoad of _loadData: " + error, error);
                    });
                } else {
                    onSuccess(plugin, result);
                }
            } else {
                onSuccess(plugin, directLoad);
            }
            return;
        }
        const useArrayBuffer = registeredPlugin.isBinary;
        const dataCallback = (data, responseURL)=>{
            if (scene.isDisposed) {
                onError("Scene has been disposed");
                return;
            }
            onSuccess(plugin, data, responseURL);
        };
        let request = null;
        let pluginDisposed = false;
        plugin.onDisposeObservable?.add(()=>{
            pluginDisposed = true;
            if (request) {
                request.abort();
                request = null;
            }
            onDispose();
        });
        const manifestChecked = ()=>{
            if (pluginDisposed) {
                return;
            }
            const errorCallback = (request, exception)=>{
                onError(request?.statusText, exception);
            };
            if (!plugin.loadFile && fileInfo.rawData) {
                // eslint-disable-next-line no-throw-literal
                throw "Plugin does not support loading ArrayBufferView.";
            }
            request = plugin.loadFile ? plugin.loadFile(scene, fileInfo.rawData || fileInfo.file || fileInfo.url, fileInfo.rootUrl, dataCallback, onProgress, useArrayBuffer, errorCallback, name) : scene._loadFile(fileInfo.file || fileInfo.url, dataCallback, onProgress, true, useArrayBuffer, errorCallback);
        };
        const engine = scene.getEngine();
        let canUseOfflineSupport = engine.enableOfflineSupport;
        if (canUseOfflineSupport) {
            // Also check for exceptions
            let exceptionFound = false;
            for (const regex of scene.disableOfflineSupportExceptionRules){
                if (regex.test(fileInfo.url)) {
                    exceptionFound = true;
                    break;
                }
            }
            canUseOfflineSupport = !exceptionFound;
        }
        if (canUseOfflineSupport && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].OfflineProviderFactory) {
            // Checking if a manifest file has been set for this scene and if offline mode has been requested
            scene.offlineProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].OfflineProviderFactory(fileInfo.url, manifestChecked, engine.disableManifestCheck);
        } else {
            manifestChecked();
        }
    });
}
function GetFileInfo(rootUrl, sceneSource) {
    let url;
    let name;
    let file = null;
    let rawData = null;
    if (!sceneSource) {
        url = rootUrl;
        name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].GetFilename(rootUrl);
        rootUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].GetFolderPath(rootUrl);
    } else if (isFile(sceneSource)) {
        url = `file:${sceneSource.name}`;
        name = sceneSource.name;
        file = sceneSource;
    } else if (ArrayBuffer.isView(sceneSource)) {
        url = "";
        name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomGUID"])();
        rawData = sceneSource;
    } else if (sceneSource.startsWith("data:")) {
        url = sceneSource;
        name = "";
    } else if (rootUrl) {
        const filename = sceneSource;
        if (filename.substring(0, 1) === "/") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error("Wrong sceneFilename parameter");
            return null;
        }
        url = rootUrl + filename;
        name = filename;
    } else {
        url = sceneSource;
        name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].GetFilename(sceneSource);
        rootUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].GetFolderPath(sceneSource);
    }
    return {
        url: url,
        rootUrl: rootUrl,
        name: name,
        file: file,
        rawData
    };
}
function RegisterSceneLoaderPlugin(plugin) {
    if (typeof plugin.extensions === "string") {
        const extension = plugin.extensions;
        registeredPlugins[extension.toLowerCase()] = {
            plugin: plugin,
            isBinary: false
        };
    } else {
        const extensions = plugin.extensions;
        const keys = Object.keys(extensions);
        for (const extension of keys){
            registeredPlugins[extension.toLowerCase()] = {
                plugin: plugin,
                isBinary: extensions[extension].isBinary,
                mimeType: extensions[extension].mimeType
            };
        }
    }
}
function registerSceneLoaderPlugin(plugin) {
    RegisterSceneLoaderPlugin(plugin);
}
function GetRegisteredSceneLoaderPluginMetadata() {
    return Array.from(Object.entries(registeredPlugins).reduce((pluginMap, [extension, extensionRegistration])=>{
        let pluginMetadata = pluginMap.get(extensionRegistration.plugin.name);
        if (!pluginMetadata) {
            pluginMap.set(extensionRegistration.plugin.name, pluginMetadata = []);
        }
        pluginMetadata.push({
            extension,
            isBinary: extensionRegistration.isBinary,
            mimeType: extensionRegistration.mimeType
        });
        return pluginMap;
    }, new Map())).map(([name, extensions])=>({
            name,
            extensions
        }));
}
async function ImportMeshAsync(source, scene, options) {
    const { meshNames, rootUrl = "", onProgress, pluginExtension, name, pluginOptions } = options ?? {};
    return await importMeshAsyncCoreAsync(meshNames, rootUrl, source, scene, onProgress, pluginExtension, name, pluginOptions);
}
async function importMeshAsync(meshNames, rootUrl, sceneFilename = "", scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, onSuccess = null, onProgress = null, onError = null, pluginExtension = null, name = "", pluginOptions = {}) {
    if (!scene) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("No scene available to import mesh to");
        return null;
    }
    const fileInfo = GetFileInfo(rootUrl, sceneFilename);
    if (!fileInfo) {
        return null;
    }
    const loadingToken = {};
    scene.addPendingData(loadingToken);
    const disposeHandler = ()=>{
        scene.removePendingData(loadingToken);
    };
    const errorHandler = (message, exception)=>{
        const errorMessage = formatErrorMessage(fileInfo, message, exception);
        if (onError) {
            onError(scene, errorMessage, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuntimeError"](errorMessage, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorCodes"].SceneLoaderError, exception));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(errorMessage);
        // should the exception be thrown?
        }
        disposeHandler();
    };
    const progressHandler = onProgress ? (event)=>{
        try {
            onProgress(event);
        } catch (e) {
            errorHandler("Error in onProgress callback: " + e, e);
        }
    } : undefined;
    const successHandler = (meshes, particleSystems, skeletons, animationGroups, transformNodes, geometries, lights, spriteManagers)=>{
        scene.importedMeshesFiles.push(fileInfo.url);
        if (onSuccess) {
            try {
                onSuccess(meshes, particleSystems, skeletons, animationGroups, transformNodes, geometries, lights, spriteManagers);
            } catch (e) {
                errorHandler("Error in onSuccess callback: " + e, e);
            }
        }
        scene.removePendingData(loadingToken);
    };
    return await loadDataAsync(fileInfo, scene, (plugin, data, responseURL)=>{
        if (plugin.rewriteRootURL) {
            fileInfo.rootUrl = plugin.rewriteRootURL(fileInfo.rootUrl, responseURL);
        }
        if (plugin.importMesh) {
            const syncedPlugin = plugin;
            const meshes = [];
            const particleSystems = [];
            const skeletons = [];
            if (!syncedPlugin.importMesh(meshNames, scene, data, fileInfo.rootUrl, meshes, particleSystems, skeletons, errorHandler)) {
                return;
            }
            scene.loadingPluginName = plugin.name;
            successHandler(meshes, particleSystems, skeletons, [], [], [], [], []);
        } else {
            const asyncedPlugin = plugin;
            asyncedPlugin.importMeshAsync(meshNames, scene, data, fileInfo.rootUrl, progressHandler, fileInfo.name)// eslint-disable-next-line github/no-then
            .then((result)=>{
                scene.loadingPluginName = plugin.name;
                successHandler(result.meshes, result.particleSystems, result.skeletons, result.animationGroups, result.transformNodes, result.geometries, result.lights, result.spriteManagers);
            })// eslint-disable-next-line github/no-then
            .catch((error)=>{
                errorHandler(error.message, error);
            });
        }
    }, progressHandler, errorHandler, disposeHandler, pluginExtension, name, pluginOptions);
}
async function importMeshAsyncCoreAsync(meshNames, rootUrl, sceneFilename, scene, onProgress, pluginExtension, name, pluginOptions) {
    return await new Promise((resolve, reject)=>{
        try {
            importMeshAsync(meshNames, rootUrl, sceneFilename, scene, (meshes, particleSystems, skeletons, animationGroups, transformNodes, geometries, lights, spriteManagers)=>{
                resolve({
                    meshes: meshes,
                    particleSystems: particleSystems,
                    skeletons: skeletons,
                    animationGroups: animationGroups,
                    transformNodes: transformNodes,
                    geometries: geometries,
                    lights: lights,
                    spriteManagers: spriteManagers
                });
            }, onProgress, (scene, message, exception)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(exception || new Error(message));
            }, pluginExtension, name, pluginOptions).catch(reject);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(error);
        }
    });
}
// This is the core implementation of load scene
async function loadSceneImplAsync(rootUrl, sceneFilename = "", engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine, onSuccess = null, onProgress = null, onError = null, pluginExtension = null, name = "", pluginOptions = {}) {
    if (!engine) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error("No engine available");
        return;
    }
    await appendSceneImplAsync(rootUrl, sceneFilename, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"](engine), onSuccess, onProgress, onError, pluginExtension, name, pluginOptions);
}
async function LoadSceneAsync(source, engine, options) {
    const { rootUrl = "", onProgress, pluginExtension, name, pluginOptions } = options ?? {};
    return await loadSceneSharedAsync(rootUrl, source, engine, onProgress, pluginExtension, name, pluginOptions);
}
async function loadSceneAsync(source, engine, options) {
    return await LoadSceneAsync(source, engine, options);
}
// This function is shared between the new module level loadSceneAsync and the legacy SceneLoader.LoadAsync
async function loadSceneSharedAsync(rootUrl, sceneFilename, engine, onProgress, pluginExtension, name, pluginOptions) {
    return await new Promise((resolve, reject)=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        loadSceneImplAsync(rootUrl, sceneFilename, engine, (scene)=>{
            resolve(scene);
        }, onProgress, (scene, message, exception)=>{
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(exception || new Error(message));
        }, pluginExtension, name, pluginOptions);
    });
}
// This is the core implementation of append scene
async function appendSceneImplAsync(rootUrl, sceneFilename = "", scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, onSuccess = null, onProgress = null, onError = null, pluginExtension = null, name = "", pluginOptions = {}) {
    if (!scene) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("No scene available to append to");
        return null;
    }
    const fileInfo = GetFileInfo(rootUrl, sceneFilename);
    if (!fileInfo) {
        return null;
    }
    const loadingToken = {};
    scene.addPendingData(loadingToken);
    const disposeHandler = ()=>{
        scene.removePendingData(loadingToken);
    };
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].ShowLoadingScreen && !showingLoadingScreen) {
        showingLoadingScreen = true;
        scene.getEngine().displayLoadingUI();
        scene.executeWhenReady(()=>{
            scene.getEngine().hideLoadingUI();
            showingLoadingScreen = false;
        });
    }
    const errorHandler = (message, exception)=>{
        const errorMessage = formatErrorMessage(fileInfo, message, exception);
        if (onError) {
            onError(scene, errorMessage, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuntimeError"](errorMessage, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorCodes"].SceneLoaderError, exception));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(errorMessage);
        // should the exception be thrown?
        }
        disposeHandler();
    };
    const progressHandler = onProgress ? (event)=>{
        try {
            onProgress(event);
        } catch (e) {
            errorHandler("Error in onProgress callback", e);
        }
    } : undefined;
    const successHandler = ()=>{
        if (onSuccess) {
            try {
                onSuccess(scene);
            } catch (e) {
                errorHandler("Error in onSuccess callback", e);
            }
        }
        scene.removePendingData(loadingToken);
    };
    return await loadDataAsync(fileInfo, scene, (plugin, data)=>{
        if (plugin.load) {
            const syncedPlugin = plugin;
            if (!syncedPlugin.load(scene, data, fileInfo.rootUrl, errorHandler)) {
                return;
            }
            scene.loadingPluginName = plugin.name;
            successHandler();
        } else {
            const asyncedPlugin = plugin;
            asyncedPlugin.loadAsync(scene, data, fileInfo.rootUrl, progressHandler, fileInfo.name)// eslint-disable-next-line github/no-then
            .then(()=>{
                scene.loadingPluginName = plugin.name;
                successHandler();
            })// eslint-disable-next-line github/no-then
            .catch((error)=>{
                errorHandler(error.message, error);
            });
        }
    }, progressHandler, errorHandler, disposeHandler, pluginExtension, name, pluginOptions);
}
async function AppendSceneAsync(source, scene, options) {
    const { rootUrl = "", onProgress, pluginExtension, name, pluginOptions } = options ?? {};
    await appendSceneSharedAsync(rootUrl, source, scene, onProgress, pluginExtension, name, pluginOptions);
}
async function appendSceneAsync(source, scene, options) {
    return await AppendSceneAsync(source, scene, options);
}
// This function is shared between the new module level appendSceneAsync and the legacy SceneLoader.AppendAsync
async function appendSceneSharedAsync(rootUrl, sceneFilename, scene, onProgress, pluginExtension, name, pluginOptions) {
    return await new Promise((resolve, reject)=>{
        try {
            appendSceneImplAsync(rootUrl, sceneFilename, scene, (scene)=>{
                resolve(scene);
            }, onProgress, (scene, message, exception)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(exception || new Error(message));
            }, pluginExtension, name, pluginOptions).catch(reject);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(error);
        }
    });
}
// This is the core implementation of load asset container
async function loadAssetContainerImplAsync(rootUrl, sceneFilename = "", scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, onSuccess = null, onProgress = null, onError = null, pluginExtension = null, name = "", pluginOptions = {}) {
    if (!scene) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("No scene available to load asset container to");
        return null;
    }
    const fileInfo = GetFileInfo(rootUrl, sceneFilename);
    if (!fileInfo) {
        return null;
    }
    const loadingToken = {};
    scene.addPendingData(loadingToken);
    const disposeHandler = ()=>{
        scene.removePendingData(loadingToken);
    };
    const errorHandler = (message, exception)=>{
        const errorMessage = formatErrorMessage(fileInfo, message, exception);
        if (onError) {
            onError(scene, errorMessage, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuntimeError"](errorMessage, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorCodes"].SceneLoaderError, exception));
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(errorMessage);
        // should the exception be thrown?
        }
        disposeHandler();
    };
    const progressHandler = onProgress ? (event)=>{
        try {
            onProgress(event);
        } catch (e) {
            errorHandler("Error in onProgress callback", e);
        }
    } : undefined;
    const successHandler = (assets)=>{
        if (onSuccess) {
            try {
                onSuccess(assets);
            } catch (e) {
                errorHandler("Error in onSuccess callback", e);
            }
        }
        scene.removePendingData(loadingToken);
    };
    return await loadDataAsync(fileInfo, scene, (plugin, data)=>{
        if (plugin.loadAssetContainer) {
            const syncedPlugin = plugin;
            const assetContainer = syncedPlugin.loadAssetContainer(scene, data, fileInfo.rootUrl, errorHandler);
            if (!assetContainer) {
                return;
            }
            assetContainer.populateRootNodes();
            scene.loadingPluginName = plugin.name;
            successHandler(assetContainer);
        } else if (plugin.loadAssetContainerAsync) {
            const asyncedPlugin = plugin;
            asyncedPlugin.loadAssetContainerAsync(scene, data, fileInfo.rootUrl, progressHandler, fileInfo.name)// eslint-disable-next-line github/no-then
            .then((assetContainer)=>{
                assetContainer.populateRootNodes();
                scene.loadingPluginName = plugin.name;
                successHandler(assetContainer);
            })// eslint-disable-next-line github/no-then
            .catch((error)=>{
                errorHandler(error.message, error);
            });
        } else {
            errorHandler("LoadAssetContainer is not supported by this plugin. Plugin did not provide a loadAssetContainer or loadAssetContainerAsync method.");
        }
    }, progressHandler, errorHandler, disposeHandler, pluginExtension, name, pluginOptions);
}
async function LoadAssetContainerAsync(source, scene, options) {
    const { rootUrl = "", onProgress, pluginExtension, name, pluginOptions } = options ?? {};
    return await loadAssetContainerSharedAsync(rootUrl, source, scene, onProgress, pluginExtension, name, pluginOptions);
}
async function loadAssetContainerAsync(source, scene, options) {
    return await LoadAssetContainerAsync(source, scene, options);
}
// This function is shared between the new module level loadAssetContainerAsync and the legacy SceneLoader.LoadAssetContainerAsync
async function loadAssetContainerSharedAsync(rootUrl, sceneFilename, scene, onProgress, pluginExtension, name, pluginOptions) {
    return await new Promise((resolve, reject)=>{
        try {
            loadAssetContainerImplAsync(rootUrl, sceneFilename, scene, (assets)=>{
                resolve(assets);
            }, onProgress, (scene, message, exception)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(exception || new Error(message));
            }, pluginExtension, name, pluginOptions).catch(reject);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(error);
        }
    });
}
// This is the core implementation of import animations
async function importAnimationsImplAsync(rootUrl, sceneFilename = "", scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, overwriteAnimations = true, animationGroupLoadingMode = 0 /* SceneLoaderAnimationGroupLoadingMode.Clean */ , targetConverter = null, onSuccess = null, onProgress = null, onError = null, pluginExtension = null, name = "", pluginOptions = {}) {
    if (!scene) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("No scene available to load animations to");
        return;
    }
    if (overwriteAnimations) {
        // Reset, stop and dispose all animations before loading new ones
        for (const animatable of scene.animatables){
            animatable.reset();
        }
        scene.stopAllAnimations();
        const animationGroups = scene.animationGroups.slice();
        for (const animationGroup of animationGroups){
            animationGroup.dispose();
        }
        const nodes = scene.getNodes();
        for (const node of nodes){
            if (node.animations) {
                node.animations = [];
            }
        }
    } else {
        switch(animationGroupLoadingMode){
            case 0 /* SceneLoaderAnimationGroupLoadingMode.Clean */ :
                const animationGroups = scene.animationGroups.slice();
                for (const animationGroup of animationGroups){
                    animationGroup.dispose();
                }
                break;
            case 1 /* SceneLoaderAnimationGroupLoadingMode.Stop */ :
                for (const animationGroup of scene.animationGroups){
                    animationGroup.stop();
                }
                break;
            case 2 /* SceneLoaderAnimationGroupLoadingMode.Sync */ :
                for (const animationGroup of scene.animationGroups){
                    animationGroup.reset();
                    animationGroup.restart();
                }
                break;
            case 3 /* SceneLoaderAnimationGroupLoadingMode.NoSync */ :
                break;
            default:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Unknown animation group loading mode value '" + animationGroupLoadingMode + "'");
                return;
        }
    }
    const startingIndexForNewAnimatables = scene.animatables.length;
    const onAssetContainerLoaded = (container)=>{
        container.mergeAnimationsTo(scene, scene.animatables.slice(startingIndexForNewAnimatables), targetConverter);
        container.dispose();
        scene.onAnimationFileImportedObservable.notifyObservers(scene);
        if (onSuccess) {
            onSuccess(scene);
        }
    };
    await loadAssetContainerImplAsync(rootUrl, sceneFilename, scene, onAssetContainerLoaded, onProgress, onError, pluginExtension, name, pluginOptions);
}
async function ImportAnimationsAsync(source, scene, options) {
    const { rootUrl = "", overwriteAnimations, animationGroupLoadingMode, targetConverter, onProgress, pluginExtension, name, pluginOptions } = options ?? {};
    await importAnimationsSharedAsync(rootUrl, source, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, onProgress, pluginExtension, name, pluginOptions);
}
async function importAnimationsAsync(source, scene, options) {
    return await ImportAnimationsAsync(source, scene, options);
}
// This function is shared between the new module level importAnimationsAsync and the legacy SceneLoader.ImportAnimationsAsync
async function importAnimationsSharedAsync(rootUrl, sceneFilename, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, onProgress, pluginExtension, name, pluginOptions) {
    return await new Promise((resolve, reject)=>{
        try {
            importAnimationsImplAsync(rootUrl, sceneFilename, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, (scene)=>{
                resolve(scene);
            }, onProgress, (scene, message, exception)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(exception || new Error(message));
            }, pluginExtension, name, pluginOptions).catch(reject);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(error);
        }
    });
}
class SceneLoader {
    /**
     * Gets or sets a boolean indicating if entire scene must be loaded even if scene contains incremental data
     */ static get ForceFullSceneLoadingForIncremental() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].ForceFullSceneLoadingForIncremental;
    }
    static set ForceFullSceneLoadingForIncremental(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].ForceFullSceneLoadingForIncremental = value;
    }
    /**
     * Gets or sets a boolean indicating if loading screen must be displayed while loading a scene
     */ static get ShowLoadingScreen() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].ShowLoadingScreen;
    }
    static set ShowLoadingScreen(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].ShowLoadingScreen = value;
    }
    /**
     * Defines the current logging level (while loading the scene)
     * @ignorenaming
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    static get loggingLevel() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static set loggingLevel(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel = value;
    }
    /**
     * Gets or set a boolean indicating if matrix weights must be cleaned upon loading
     */ static get CleanBoneMatrixWeights() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].CleanBoneMatrixWeights;
    }
    static set CleanBoneMatrixWeights(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].CleanBoneMatrixWeights = value;
    }
    /**
     * Gets the default plugin (used to load Babylon files)
     * @returns the .babylon plugin
     */ static GetDefaultPlugin() {
        return getDefaultPlugin();
    }
    // Public functions
    /**
     * Gets a plugin that can load the given extension
     * @param extension defines the extension to load
     * @returns a plugin or null if none works
     */ static GetPluginForExtension(extension) {
        return getPluginForExtension(extension, true)?.plugin;
    }
    /**
     * Gets a boolean indicating that the given extension can be loaded
     * @param extension defines the extension to load
     * @returns true if the extension is supported
     */ static IsPluginForExtensionAvailable(extension) {
        return isPluginForExtensionAvailable(extension);
    }
    /**
     * Adds a new plugin to the list of registered plugins
     * @param plugin defines the plugin to add
     */ static RegisterPlugin(plugin) {
        RegisterSceneLoaderPlugin(plugin);
    }
    /**
     * Import meshes into a scene
     * @param meshNames an array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene the instance of BABYLON.Scene to append to
     * @param onSuccess a callback with a list of imported meshes, particleSystems, skeletons, and animationGroups when import succeeds
     * @param onProgress a callback with a progress event for each file being loaded
     * @param onError a callback with the scene, a message, and possibly an exception when import fails
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the name of the file, if the data is binary
     * @param pluginOptions defines the options to use with the plugin
     * @deprecated Please use the module level {@link ImportMeshAsync} instead
     */ static ImportMesh(meshNames, rootUrl, sceneFilename, scene, onSuccess, onProgress, onError, pluginExtension, name, pluginOptions) {
        // eslint-disable-next-line github/no-then
        importMeshAsync(meshNames, rootUrl, sceneFilename, scene, onSuccess, onProgress, onError, pluginExtension, name, pluginOptions).catch((error)=>onError?.(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, error?.message, error));
    }
    /**
     * Import meshes into a scene
     * @param meshNames an array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene the instance of BABYLON.Scene to append to
     * @param onProgress a callback with a progress event for each file being loaded
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the name of the file
     * @returns The loaded list of imported meshes, particle systems, skeletons, and animation groups
     * @deprecated Please use the module level {@link ImportMeshAsync} instead
     */ static async ImportMeshAsync(meshNames, rootUrl, sceneFilename, scene, onProgress, pluginExtension, name) {
        return await importMeshAsyncCoreAsync(meshNames, rootUrl, sceneFilename, scene, onProgress, pluginExtension, name);
    }
    /**
     * Load a scene
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param engine is the instance of BABYLON.Engine to use to create the scene
     * @param onSuccess a callback with the scene when import succeeds
     * @param onProgress a callback with a progress event for each file being loaded
     * @param onError a callback with the scene, a message, and possibly an exception when import fails
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the filename, if the data is binary
     * @deprecated Please use the module level {@link LoadSceneAsync} instead
     */ static Load(rootUrl, sceneFilename, engine, onSuccess, onProgress, onError, pluginExtension, name) {
        // eslint-disable-next-line github/no-then
        loadSceneImplAsync(rootUrl, sceneFilename, engine, onSuccess, onProgress, onError, pluginExtension, name).catch((error)=>onError?.(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, error?.message, error));
    }
    /**
     * Load a scene
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param engine is the instance of BABYLON.Engine to use to create the scene
     * @param onProgress a callback with a progress event for each file being loaded
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the filename, if the data is binary
     * @returns The loaded scene
     * @deprecated Please use the module level {@link LoadSceneAsync} instead
     */ static async LoadAsync(rootUrl, sceneFilename, engine, onProgress, pluginExtension, name) {
        return await loadSceneSharedAsync(rootUrl, sceneFilename, engine, onProgress, pluginExtension, name);
    }
    /**
     * Append a scene
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene is the instance of BABYLON.Scene to append to
     * @param onSuccess a callback with the scene when import succeeds
     * @param onProgress a callback with a progress event for each file being loaded
     * @param onError a callback with the scene, a message, and possibly an exception when import fails
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the name of the file, if the data is binary
     * @deprecated Please use the module level {@link AppendSceneAsync} instead
     */ static Append(rootUrl, sceneFilename, scene, onSuccess, onProgress, onError, pluginExtension, name) {
        // eslint-disable-next-line github/no-then
        appendSceneImplAsync(rootUrl, sceneFilename, scene, onSuccess, onProgress, onError, pluginExtension, name).catch((error)=>onError?.(scene ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, error?.message, error));
    }
    /**
     * Append a scene
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene is the instance of BABYLON.Scene to append to
     * @param onProgress a callback with a progress event for each file being loaded
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the name of the file, if the data is binary
     * @returns The given scene
     * @deprecated Please use the module level {@link AppendSceneAsync} instead
     */ static async AppendAsync(rootUrl, sceneFilename, scene, onProgress, pluginExtension, name) {
        return await appendSceneSharedAsync(rootUrl, sceneFilename, scene, onProgress, pluginExtension, name);
    }
    /**
     * Load a scene into an asset container
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene is the instance of BABYLON.Scene to append to (default: last created scene)
     * @param onSuccess a callback with the scene when import succeeds
     * @param onProgress a callback with a progress event for each file being loaded
     * @param onError a callback with the scene, a message, and possibly an exception when import fails
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the filename, if the data is binary
     * @deprecated Please use the module level {@link LoadAssetContainerAsync} instead
     */ static LoadAssetContainer(rootUrl, sceneFilename, scene, onSuccess, onProgress, onError, pluginExtension, name) {
        // eslint-disable-next-line github/no-then
        loadAssetContainerImplAsync(rootUrl, sceneFilename, scene, onSuccess, onProgress, onError, pluginExtension, name).catch((error)=>onError?.(scene ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, error?.message, error));
    }
    /**
     * Load a scene into an asset container
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene (default: empty string)
     * @param scene is the instance of Scene to append to
     * @param onProgress a callback with a progress event for each file being loaded
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the filename, if the data is binary
     * @returns The loaded asset container
     * @deprecated Please use the module level {@link LoadAssetContainerAsync} instead
     */ static async LoadAssetContainerAsync(rootUrl, sceneFilename, scene, onProgress, pluginExtension, name) {
        return await loadAssetContainerSharedAsync(rootUrl, sceneFilename, scene, onProgress, pluginExtension, name);
    }
    /**
     * Import animations from a file into a scene
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene is the instance of BABYLON.Scene to append to (default: last created scene)
     * @param overwriteAnimations when true, animations are cleaned before importing new ones. Animations are appended otherwise
     * @param animationGroupLoadingMode defines how to handle old animations groups before importing new ones
     * @param targetConverter defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)
     * @param onSuccess a callback with the scene when import succeeds
     * @param onProgress a callback with a progress event for each file being loaded
     * @param onError a callback with the scene, a message, and possibly an exception when import fails
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the filename, if the data is binary
     * @deprecated Please use the module level {@link ImportAnimationsAsync} instead
     */ static ImportAnimations(rootUrl, sceneFilename, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, onSuccess, onProgress, onError, pluginExtension, name) {
        importAnimationsImplAsync(rootUrl, sceneFilename, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, onSuccess, onProgress, onError, pluginExtension, name).catch((error)=>onError?.(scene ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, error?.message, error));
    }
    /**
     * Import animations from a file into a scene
     * @param rootUrl a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)
     * @param sceneFilename a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)
     * @param scene is the instance of BABYLON.Scene to append to (default: last created scene)
     * @param overwriteAnimations when true, animations are cleaned before importing new ones. Animations are appended otherwise
     * @param animationGroupLoadingMode defines how to handle old animations groups before importing new ones
     * @param targetConverter defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)
     * @param onSuccess a callback with the scene when import succeeds
     * @param onProgress a callback with a progress event for each file being loaded
     * @param onError a callback with the scene, a message, and possibly an exception when import fails
     * @param pluginExtension the extension used to determine the plugin
     * @param name defines the filename, if the data is binary
     * @returns the updated scene with imported animations
     * @deprecated Please use the module level {@link ImportAnimationsAsync} instead
     */ static async ImportAnimationsAsync(rootUrl, sceneFilename, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess, onProgress, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onError, pluginExtension, name) {
        return await importAnimationsSharedAsync(rootUrl, sceneFilename, scene, overwriteAnimations, animationGroupLoadingMode, targetConverter, onProgress, pluginExtension, name);
    }
}
/**
 * No logging while loading
 */ SceneLoader.NO_LOGGING = 0;
/**
 * Minimal logging while loading
 */ SceneLoader.MINIMAL_LOGGING = 1;
/**
 * Summary logging while loading
 */ SceneLoader.SUMMARY_LOGGING = 2;
/**
 * Detailed logging while loading
 */ SceneLoader.DETAILED_LOGGING = 3;
// Members
/**
 * Event raised when a plugin is used to load a scene
 */ SceneLoader.OnPluginActivatedObservable = onPluginActivatedObservable; //# sourceMappingURL=sceneLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/loadingScreen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultLoadingScreen",
    ()=>DefaultLoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
;
class DefaultLoadingScreen {
    /**
     * Creates a new default loading screen
     * @param _renderingCanvas defines the canvas used to render the scene
     * @param _loadingText defines the default text to display
     * @param _loadingDivBackgroundColor defines the default background color
     */ constructor(_renderingCanvas, _loadingText = "", _loadingDivBackgroundColor = "black"){
        this._renderingCanvas = _renderingCanvas;
        this._loadingText = _loadingText;
        this._loadingDivBackgroundColor = _loadingDivBackgroundColor;
        /**
         * Maps a loading `HTMLDivElement` to a tuple containing the associated `HTMLCanvasElement`
         * and its `DOMRect` (or `null` if not yet available).
         */ this._loadingDivToRenderingCanvasMap = new Map();
        // Resize
        this._resizeLoadingUI = ()=>{
            if (!this._isLoading) {
                return;
            }
            this._loadingDivToRenderingCanvasMap.forEach(([canvas, previousCanvasRect], loadingDiv)=>{
                const currentCanvasRect = canvas.getBoundingClientRect();
                if (this._isCanvasLayoutChanged(previousCanvasRect, currentCanvasRect)) {
                    const canvasPositioning = window.getComputedStyle(canvas).position;
                    loadingDiv.style.position = canvasPositioning === "fixed" ? "fixed" : "absolute";
                    loadingDiv.style.left = currentCanvasRect.left + window.scrollX + "px";
                    loadingDiv.style.top = currentCanvasRect.top + window.scrollY + "px";
                    loadingDiv.style.width = currentCanvasRect.width + "px";
                    loadingDiv.style.height = currentCanvasRect.height + "px";
                    this._loadingDivToRenderingCanvasMap.set(loadingDiv, [
                        canvas,
                        currentCanvasRect
                    ]);
                }
            });
        };
    }
    /**
     * Function called to display the loading screen
     */ displayLoadingUI() {
        if (this._isLoading) {
            // Do not add a loading screen if it is already loading
            return;
        }
        this._isLoading = true;
        // get current engine by rendering canvas
        this._engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].Instances.find((engine)=>engine.getRenderingCanvas() === this._renderingCanvas);
        const loadingDiv = document.createElement("div");
        loadingDiv.id = "babylonjsLoadingDiv";
        loadingDiv.style.opacity = "0";
        loadingDiv.style.transition = "opacity 1.5s ease";
        loadingDiv.style.pointerEvents = "none";
        loadingDiv.style.display = "grid";
        loadingDiv.style.gridTemplateRows = "100%";
        loadingDiv.style.gridTemplateColumns = "100%";
        loadingDiv.style.justifyItems = "center";
        loadingDiv.style.alignItems = "center";
        // Loading text
        this._loadingTextDiv = document.createElement("div");
        this._loadingTextDiv.style.position = "absolute";
        this._loadingTextDiv.style.left = "0";
        this._loadingTextDiv.style.top = "50%";
        this._loadingTextDiv.style.marginTop = "80px";
        this._loadingTextDiv.style.width = "100%";
        this._loadingTextDiv.style.height = "20px";
        this._loadingTextDiv.style.fontFamily = "Arial";
        this._loadingTextDiv.style.fontSize = "14px";
        this._loadingTextDiv.style.color = "white";
        this._loadingTextDiv.style.textAlign = "center";
        this._loadingTextDiv.style.zIndex = "1";
        this._loadingTextDiv.innerHTML = "Loading";
        loadingDiv.appendChild(this._loadingTextDiv);
        //set the predefined text
        this._loadingTextDiv.innerHTML = this._loadingText;
        // Generating keyframes
        this._style = document.createElement("style");
        const keyFrames = `@-webkit-keyframes spin1 {\
                            0% { -webkit-transform: rotate(0deg);}
                            100% { -webkit-transform: rotate(360deg);}
                        }\
                        @keyframes spin1 {\
                            0% { transform: rotate(0deg);}
                            100% { transform: rotate(360deg);}
                        }`;
        this._style.innerHTML = keyFrames;
        document.getElementsByTagName("head")[0].appendChild(this._style);
        const svgSupport = !!window.SVGSVGElement;
        // Loading img
        const imgBack = new Image();
        if (!DefaultLoadingScreen.DefaultLogoUrl) {
            imgBack.src = !svgSupport ? "https://cdn.babylonjs.com/Assets/babylonLogo.png" : `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAuMTcgMjA4LjA0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6I2UwNjg0Yjt9LmNscy0ze2ZpbGw6I2JiNDY0Yjt9LmNscy00e2ZpbGw6I2UwZGVkODt9LmNscy01e2ZpbGw6I2Q1ZDJjYTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkJhYnlsb25Mb2dvPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iUGFnZV9FbGVtZW50cyIgZGF0YS1uYW1lPSJQYWdlIEVsZW1lbnRzIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05MC4wOSwwLDAsNTJWMTU2bDkwLjA5LDUyLDkwLjA4LTUyVjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxODAuMTcgNTIuMDEgMTUxLjk3IDM1LjczIDEyNC44NSA1MS4zOSAxNTMuMDUgNjcuNjcgMTgwLjE3IDUyLjAxIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI3LjEyIDY3LjY3IDExNy4yMSAxNS42NiA5MC4wOCAwIDAgNTIuMDEgMjcuMTIgNjcuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjEuODkgMTIwLjMgOTAuMDggMTM2LjU4IDExOC4yOCAxMjAuMyA5MC4wOCAxMDQuMDIgNjEuODkgMTIwLjMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTUzLjA1IDY3LjY3IDE1My4wNSAxNDAuMzcgOTAuMDggMTc2LjcyIDI3LjEyIDE0MC4zNyAyNy4xMiA2Ny42NyAwIDUyLjAxIDAgMTU2LjAzIDkwLjA4IDIwOC4wNCAxODAuMTcgMTU2LjAzIDE4MC4xNyA1Mi4wMSAxNTMuMDUgNjcuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iOTAuMDggNzEuNDYgNjEuODkgODcuNzQgNjEuODkgMTIwLjMgOTAuMDggMTA0LjAyIDExOC4yOCAxMjAuMyAxMTguMjggODcuNzQgOTAuMDggNzEuNDYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iMTUzLjA1IDY3LjY3IDExOC4yOCA4Ny43NCAxMTguMjggMTIwLjMgOTAuMDggMTM2LjU4IDkwLjA4IDE3Ni43MiAxNTMuMDUgMTQwLjM3IDE1My4wNSA2Ny42NyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNSIgcG9pbnRzPSIyNy4xMiA2Ny42NyA2MS44OSA4Ny43NCA2MS44OSAxMjAuMyA5MC4wOCAxMzYuNTggOTAuMDggMTc2LjcyIDI3LjEyIDE0MC4zNyAyNy4xMiA2Ny42NyIvPjwvZz48L2c+PC9zdmc+`;
        } else {
            imgBack.src = DefaultLoadingScreen.DefaultLogoUrl;
        }
        imgBack.style.width = "150px";
        imgBack.style.gridColumn = "1";
        imgBack.style.gridRow = "1";
        imgBack.style.top = "50%";
        imgBack.style.left = "50%";
        imgBack.style.transform = "translate(-50%, -50%)";
        imgBack.style.position = "absolute";
        const imageSpinnerContainer = document.createElement("div");
        imageSpinnerContainer.style.width = "300px";
        imageSpinnerContainer.style.gridColumn = "1";
        imageSpinnerContainer.style.gridRow = "1";
        imageSpinnerContainer.style.top = "50%";
        imageSpinnerContainer.style.left = "50%";
        imageSpinnerContainer.style.transform = "translate(-50%, -50%)";
        imageSpinnerContainer.style.position = "absolute";
        // Loading spinner
        const imgSpinner = new Image();
        if (!DefaultLoadingScreen.DefaultSpinnerUrl) {
            imgSpinner.src = !svgSupport ? "https://cdn.babylonjs.com/Assets/loadingIcon.png" : `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTIgMzkyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2UwNjg0Yjt9LmNscy0ye2ZpbGw6bm9uZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlNwaW5uZXJJY29uPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iU3Bpbm5lciI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDAuMjEsMTI2LjQzYzMuNy03LjMxLDcuNjctMTQuNDQsMTItMjEuMzJsMy4zNi01LjEsMy41Mi01YzEuMjMtMS42MywyLjQxLTMuMjksMy42NS00LjkxczIuNTMtMy4yMSwzLjgyLTQuNzlBMTg1LjIsMTg1LjIsMCwwLDEsODMuNCw2Ny40M2EyMDgsMjA4LDAsMCwxLDE5LTE1LjY2YzMuMzUtMi40MSw2Ljc0LTQuNzgsMTAuMjUtN3M3LjExLTQuMjgsMTAuNzUtNi4zMmM3LjI5LTQsMTQuNzMtOCwyMi41My0xMS40OSwzLjktMS43Miw3Ljg4LTMuMywxMi00LjY0YTEwNC4yMiwxMDQuMjIsMCwwLDEsMTIuNDQtMy4yMyw2Mi40NCw2Mi40NCwwLDAsMSwxMi43OC0xLjM5QTI1LjkyLDI1LjkyLDAsMCwxLDE5NiwyMS40NGE2LjU1LDYuNTUsMCwwLDEsMi4wNSw5LDYuNjYsNi42NiwwLDAsMS0xLjY0LDEuNzhsLS40MS4yOWEyMi4wNywyMi4wNywwLDAsMS01Ljc4LDMsMzAuNDIsMzAuNDIsMCwwLDEtNS42NywxLjYyLDM3LjgyLDM3LjgyLDAsMCwxLTUuNjkuNzFjLTEsMC0xLjkuMTgtMi44NS4yNmwtMi44NS4yNHEtNS43Mi41MS0xMS40OCwxLjFjLTMuODQuNC03LjcxLjgyLTExLjU4LDEuNGExMTIuMzQsMTEyLjM0LDAsMCwwLTIyLjk0LDUuNjFjLTMuNzIsMS4zNS03LjM0LDMtMTAuOTQsNC42NHMtNy4xNCwzLjUxLTEwLjYsNS41MUExNTEuNiwxNTEuNiwwLDAsMCw2OC41Niw4N0M2Ny4yMyw4OC40OCw2Niw5MCw2NC42NCw5MS41NnMtMi41MSwzLjE1LTMuNzUsNC43M2wtMy41NCw0LjljLTEuMTMsMS42Ni0yLjIzLDMuMzUtMy4zMyw1YTEyNywxMjcsMCwwLDAtMTAuOTMsMjEuNDksMS41OCwxLjU4LDAsMSwxLTMtMS4xNVM0MC4xOSwxMjYuNDcsNDAuMjEsMTI2LjQzWiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgd2lkdGg9IjM5MiIgaGVpZ2h0PSIzOTIiLz48L2c+PC9nPjwvc3ZnPg==`;
        } else {
            imgSpinner.src = DefaultLoadingScreen.DefaultSpinnerUrl;
        }
        imgSpinner.style.animation = "spin1 0.75s infinite linear";
        imgSpinner.style.transformOrigin = "50% 50%";
        if (!svgSupport) {
            const logoSize = {
                w: 16,
                h: 18.5
            };
            const loadingSize = {
                w: 30,
                h: 30
            };
            // set styling correctly
            imgBack.style.width = `${logoSize.w}vh`;
            imgBack.style.height = `${logoSize.h}vh`;
            imgBack.style.left = `calc(50% - ${logoSize.w / 2}vh)`;
            imgBack.style.top = `calc(50% - ${logoSize.h / 2}vh)`;
            imgSpinner.style.width = `${loadingSize.w}vh`;
            imgSpinner.style.height = `${loadingSize.h}vh`;
            imgSpinner.style.left = `calc(50% - ${loadingSize.w / 2}vh)`;
            imgSpinner.style.top = `calc(50% - ${loadingSize.h / 2}vh)`;
        }
        imageSpinnerContainer.appendChild(imgSpinner);
        loadingDiv.appendChild(imgBack);
        loadingDiv.appendChild(imageSpinnerContainer);
        loadingDiv.style.backgroundColor = this._loadingDivBackgroundColor;
        loadingDiv.style.opacity = "1";
        const canvases = [];
        const views = this._engine.views;
        if (views?.length) {
            for (const view of views){
                if (view.enabled) {
                    canvases.push(view.target);
                }
            }
        } else {
            canvases.push(this._renderingCanvas);
        }
        for(let i = 0; i < canvases.length; i++){
            const canvas = canvases[i];
            const clonedLoadingDiv = loadingDiv.cloneNode(true);
            clonedLoadingDiv.id += `-${i}`;
            this._loadingDivToRenderingCanvasMap.set(clonedLoadingDiv, [
                canvas,
                null
            ]);
        }
        this._resizeLoadingUI();
        this._resizeObserver = this._engine.onResizeObservable.add(()=>{
            this._resizeLoadingUI();
        });
        this._loadingDivToRenderingCanvasMap.forEach((_, loadingDiv)=>{
            document.body.appendChild(loadingDiv);
        });
    }
    /**
     * Function called to hide the loading screen
     */ hideLoadingUI() {
        if (!this._isLoading) {
            return;
        }
        let completedTransitions = 0;
        const onTransitionEnd = (event)=>{
            const loadingDiv = event.target;
            // ensure that ending transition event is generated by one of the current loadingDivs
            const isTransitionEndOnLoadingDiv = this._loadingDivToRenderingCanvasMap.has(loadingDiv);
            if (isTransitionEndOnLoadingDiv) {
                completedTransitions++;
                loadingDiv.remove();
                const allTransitionsCompleted = completedTransitions === this._loadingDivToRenderingCanvasMap.size;
                if (allTransitionsCompleted) {
                    if (this._loadingTextDiv) {
                        this._loadingTextDiv.remove();
                        this._loadingTextDiv = null;
                    }
                    if (this._style) {
                        this._style.remove();
                        this._style = null;
                    }
                    window.removeEventListener("transitionend", onTransitionEnd);
                    this._engine.onResizeObservable.remove(this._resizeObserver);
                    this._loadingDivToRenderingCanvasMap.clear();
                    this._engine = null;
                    this._isLoading = false;
                }
            }
        };
        this._loadingDivToRenderingCanvasMap.forEach((_, loadingDiv)=>{
            loadingDiv.style.opacity = "0";
        });
        window.addEventListener("transitionend", onTransitionEnd);
    }
    /**
     * Gets or sets the text to display while loading
     */ set loadingUIText(text) {
        this._loadingText = text;
        if (this._loadingTextDiv) {
            this._loadingDivToRenderingCanvasMap.forEach((_, loadingDiv)=>{
                // set loadingTextDiv of current loadingDiv
                loadingDiv.children[0].innerHTML = this._loadingText;
            });
        }
    }
    get loadingUIText() {
        return this._loadingText;
    }
    /**
     * Gets or sets the color to use for the background
     */ get loadingUIBackgroundColor() {
        return this._loadingDivBackgroundColor;
    }
    set loadingUIBackgroundColor(color) {
        this._loadingDivBackgroundColor = color;
        if (!this._isLoading) {
            return;
        }
        this._loadingDivToRenderingCanvasMap.forEach((_, loadingDiv)=>{
            loadingDiv.style.backgroundColor = this._loadingDivBackgroundColor;
        });
    }
    /**
     * Checks if the layout of the canvas has changed by comparing the current layout
     * rectangle with the previous one.
     *
     * This function compares of the two `DOMRect` objects to determine if any of the layout dimensions have changed.
     * If the layout has changed or if there is no previous layout (i.e., `previousCanvasRect` is `null`),
     * it returns `true`. Otherwise, it returns `false`.
     *
     * @param previousCanvasRect defines the previously recorded `DOMRect` of the canvas, or `null` if no previous state exists.
     * @param currentCanvasRect defines the current `DOMRect` of the canvas to compare against the previous layout.
     * @returns `true` if the layout has changed, otherwise `false`.
     */ _isCanvasLayoutChanged(previousCanvasRect, currentCanvasRect) {
        return !previousCanvasRect || previousCanvasRect.left !== currentCanvasRect.left || previousCanvasRect.top !== currentCanvasRect.top || previousCanvasRect.right !== currentCanvasRect.right || previousCanvasRect.bottom !== currentCanvasRect.bottom || previousCanvasRect.width !== currentCanvasRect.width || previousCanvasRect.height !== currentCanvasRect.height || previousCanvasRect.x !== currentCanvasRect.x || previousCanvasRect.y !== currentCanvasRect.y;
    }
}
/** Gets or sets the logo url to use for the default loading screen */ DefaultLoadingScreen.DefaultLogoUrl = "";
/** Gets or sets the spinner url to use for the default loading screen */ DefaultLoadingScreen.DefaultSpinnerUrl = "";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].DefaultLoadingScreenFactory = (canvas)=>{
    return new DefaultLoadingScreen(canvas);
}; //# sourceMappingURL=loadingScreen.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BabylonFileLoaderConfiguration",
    ()=>BabylonFileLoaderConfiguration,
    "LoadAssetContainerFromSerializedScene",
    ()=>LoadAssetContainerFromSerializedScene,
    "_BabylonLoaderRegistered",
    ()=>_BabylonLoaderRegistered
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/geometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$multiMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/multiMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$hdrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/hdrCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoaderFlags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$assetContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/assetContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Actions/actionManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/skeleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Morph$2f$morphTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Morph/morphTargetManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$cannonJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/cannonJSPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$oimoJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/oimoJSPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$ammoJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/Plugins/ammoJSPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Probes$2f$reflectionProbe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Probes/reflectionProbe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/postProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var _BabylonLoaderRegistered = true;
class BabylonFileLoaderConfiguration {
}
/**
 * The loader does not allow injecting custom physics engine into the plugins.
 * Unfortunately in ES6, we need to manually inject them into the plugin.
 * So you could set this variable to your engine import to make it work.
 */ BabylonFileLoaderConfiguration.LoaderInjectedPhysicsEngine = undefined;
let TempIndexContainer = {};
let TempMaterialIndexContainer = {};
let TempMorphTargetManagerIndexContainer = {};
const ParseMaterialByPredicate = (predicate, parsedData, scene, rootUrl)=>{
    if (!parsedData.materials) {
        return null;
    }
    for(let index = 0, cache = parsedData.materials.length; index < cache; index++){
        const parsedMaterial = parsedData.materials[index];
        if (predicate(parsedMaterial)) {
            return {
                parsedMaterial,
                material: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].Parse(parsedMaterial, scene, rootUrl)
            };
        }
    }
    return null;
};
const IsDescendantOf = (mesh, names, hierarchyIds)=>{
    for(const i in names){
        if (mesh.name === names[i]) {
            hierarchyIds.push(mesh.id);
            return true;
        }
    }
    if (mesh.parentId !== undefined && hierarchyIds.indexOf(mesh.parentId) !== -1) {
        hierarchyIds.push(mesh.id);
        return true;
    }
    return false;
};
// eslint-disable-next-line @typescript-eslint/naming-convention
const logOperation = (operation, producer)=>{
    return operation + " of " + (producer ? producer.file + " from " + producer.name + " version: " + producer.version + ", exporter version: " + producer.exporter_version : "unknown");
};
const LoadDetailLevels = (scene, mesh)=>{
    const mastermesh = mesh;
    // Every value specified in the ids array of the lod data points to another mesh which should be used as the lower LOD level.
    // The distances (or coverages) array values specified are used along with the lod mesh ids as a hint to determine the switching threshold for the various LODs.
    if (mesh._waitingData.lods) {
        if (mesh._waitingData.lods.ids && mesh._waitingData.lods.ids.length > 0) {
            const lodmeshes = mesh._waitingData.lods.ids;
            const wasenabled = mastermesh.isEnabled(false);
            if (mesh._waitingData.lods.distances) {
                const distances = mesh._waitingData.lods.distances;
                if (distances.length >= lodmeshes.length) {
                    const culling = distances.length > lodmeshes.length ? distances[distances.length - 1] : 0;
                    mastermesh.setEnabled(false);
                    for(let index = 0; index < lodmeshes.length; index++){
                        const lodid = lodmeshes[index];
                        const lodmesh = scene.getMeshById(lodid);
                        if (lodmesh != null) {
                            mastermesh.addLODLevel(distances[index], lodmesh);
                        }
                    }
                    if (culling > 0) {
                        mastermesh.addLODLevel(culling, null);
                    }
                    if (wasenabled === true) {
                        mastermesh.setEnabled(true);
                    }
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn("Invalid level of detail distances for " + mesh.name);
                }
            }
        }
        mesh._waitingData.lods = null;
    }
};
const FindParent = (parentId, parentInstanceIndex, scene)=>{
    if (typeof parentId !== "number") {
        const parentEntry = scene.getLastEntryById(parentId);
        if (parentEntry && parentInstanceIndex !== undefined && parentInstanceIndex !== null) {
            const instance = parentEntry.instances[parseInt(parentInstanceIndex)];
            return instance;
        }
        return parentEntry;
    }
    const parent = TempIndexContainer[parentId];
    if (parent && parentInstanceIndex !== undefined && parentInstanceIndex !== null) {
        const instance = parent.instances[parseInt(parentInstanceIndex)];
        return instance;
    }
    return parent;
};
const FindMaterial = (materialId, scene)=>{
    if (typeof materialId !== "number") {
        return scene.getLastMaterialById(materialId, true);
    }
    return TempMaterialIndexContainer[materialId];
};
function LoadAssetContainerFromSerializedScene(scene, serializedScene, rootUrl) {
    return LoadAssetContainer(scene, serializedScene, rootUrl);
}
const LoadAssetContainer = (scene, data, rootUrl, onError, addToScene = false)=>{
    const container = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$assetContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssetContainer"](scene);
    // Entire method running in try block, so ALWAYS logs as far as it got, only actually writes details
    // when SceneLoader.debugLogging = true (default), or exception encountered.
    // Everything stored in var log instead of writing separate lines to support only writing in exception,
    // and avoid problems with multiple concurrent .babylon loads.
    let log = "importScene has failed JSON parse";
    try {
        // eslint-disable-next-line no-var
        var parsedData = typeof data === "object" ? data : JSON.parse(data);
        log = "";
        const fullDetails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel === 3;
        let index;
        let cache;
        // Environment texture
        if (parsedData.environmentTexture !== undefined && parsedData.environmentTexture !== null) {
            // PBR needed for both HDR texture (gamma space) & a sky box
            const isPBR = parsedData.isPBR !== undefined ? parsedData.isPBR : true;
            if (parsedData.environmentTextureType && parsedData.environmentTextureType === "BABYLON.HDRCubeTexture") {
                const hdrSize = parsedData.environmentTextureSize ? parsedData.environmentTextureSize : 128;
                const hdrTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$hdrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDRCubeTexture"]((parsedData.environmentTexture.match(/https?:\/\//g) ? "" : rootUrl) + parsedData.environmentTexture, scene, hdrSize, true, !isPBR, undefined, parsedData.environmentTexturePrefilterOnLoad);
                if (parsedData.environmentTextureRotationY) {
                    hdrTexture.rotationY = parsedData.environmentTextureRotationY;
                }
                scene.environmentTexture = hdrTexture;
            } else {
                if (typeof parsedData.environmentTexture === "object") {
                    const environmentTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"].Parse(parsedData.environmentTexture, scene, rootUrl);
                    scene.environmentTexture = environmentTexture;
                } else if (parsedData.environmentTexture.endsWith(".env")) {
                    const compressedTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"]((parsedData.environmentTexture.match(/https?:\/\//g) ? "" : rootUrl) + parsedData.environmentTexture, scene, parsedData.environmentTextureForcedExtension);
                    if (parsedData.environmentTextureRotationY) {
                        compressedTexture.rotationY = parsedData.environmentTextureRotationY;
                    }
                    scene.environmentTexture = compressedTexture;
                } else {
                    const cubeTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"].CreateFromPrefilteredData((parsedData.environmentTexture.match(/https?:\/\//g) ? "" : rootUrl) + parsedData.environmentTexture, scene, parsedData.environmentTextureForcedExtension);
                    if (parsedData.environmentTextureRotationY) {
                        cubeTexture.rotationY = parsedData.environmentTextureRotationY;
                    }
                    scene.environmentTexture = cubeTexture;
                }
            }
            if (parsedData.createDefaultSkybox === true) {
                const skyboxScale = scene.activeCamera !== undefined && scene.activeCamera !== null ? (scene.activeCamera.maxZ - scene.activeCamera.minZ) / 2 : 1000;
                const skyboxBlurLevel = parsedData.skyboxBlurLevel || 0;
                scene.createDefaultSkybox(scene.environmentTexture, isPBR, skyboxScale, skyboxBlurLevel);
            }
            container.environmentTexture = scene.environmentTexture;
        }
        // Environment Intensity
        if (parsedData.environmentIntensity !== undefined && parsedData.environmentIntensity !== null) {
            scene.environmentIntensity = parsedData.environmentIntensity;
        }
        // IBL Intensity
        if (parsedData.iblIntensity !== undefined && parsedData.iblIntensity !== null) {
            scene.iblIntensity = parsedData.iblIntensity;
        }
        // Lights
        if (parsedData.lights !== undefined && parsedData.lights !== null) {
            for(index = 0, cache = parsedData.lights.length; index < cache; index++){
                const parsedLight = parsedData.lights[index];
                const light = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Light"].Parse(parsedLight, scene);
                if (light) {
                    TempIndexContainer[parsedLight.uniqueId] = light;
                    container.lights.push(light);
                    light._parentContainer = container;
                    log += index === 0 ? "\n\tLights:" : "";
                    log += "\n\t\t" + light.toString(fullDetails);
                }
            }
        }
        // Reflection probes
        if (parsedData.reflectionProbes !== undefined && parsedData.reflectionProbes !== null) {
            for(index = 0, cache = parsedData.reflectionProbes.length; index < cache; index++){
                const parsedReflectionProbe = parsedData.reflectionProbes[index];
                const reflectionProbe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Probes$2f$reflectionProbe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionProbe"].Parse(parsedReflectionProbe, scene, rootUrl);
                if (reflectionProbe) {
                    container.reflectionProbes.push(reflectionProbe);
                    reflectionProbe._parentContainer = container;
                    log += index === 0 ? "\n\tReflection Probes:" : "";
                    log += "\n\t\t" + reflectionProbe.toString(fullDetails);
                }
            }
        }
        // Animations
        if (parsedData.animations !== undefined && parsedData.animations !== null) {
            for(index = 0, cache = parsedData.animations.length; index < cache; index++){
                const parsedAnimation = parsedData.animations[index];
                const internalClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetClass"])("BABYLON.Animation");
                if (internalClass) {
                    const animation = internalClass.Parse(parsedAnimation);
                    scene.animations.push(animation);
                    container.animations.push(animation);
                    log += index === 0 ? "\n\tAnimations:" : "";
                    log += "\n\t\t" + animation.toString(fullDetails);
                }
            }
        }
        // Materials
        if (parsedData.materials !== undefined && parsedData.materials !== null) {
            for(index = 0, cache = parsedData.materials.length; index < cache; index++){
                const parsedMaterial = parsedData.materials[index];
                const mat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].Parse(parsedMaterial, scene, rootUrl);
                if (mat) {
                    TempMaterialIndexContainer[parsedMaterial.uniqueId || parsedMaterial.id] = mat;
                    container.materials.push(mat);
                    mat._parentContainer = container;
                    log += index === 0 ? "\n\tMaterials:" : "";
                    log += "\n\t\t" + mat.toString(fullDetails);
                    // Textures
                    const textures = mat.getActiveTextures();
                    for (const t of textures){
                        if (container.textures.indexOf(t) == -1) {
                            container.textures.push(t);
                            t._parentContainer = container;
                        }
                    }
                }
            }
        }
        if (parsedData.multiMaterials !== undefined && parsedData.multiMaterials !== null) {
            for(index = 0, cache = parsedData.multiMaterials.length; index < cache; index++){
                const parsedMultiMaterial = parsedData.multiMaterials[index];
                const mmat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$multiMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiMaterial"].ParseMultiMaterial(parsedMultiMaterial, scene);
                TempMaterialIndexContainer[parsedMultiMaterial.uniqueId || parsedMultiMaterial.id] = mmat;
                container.multiMaterials.push(mmat);
                mmat._parentContainer = container;
                log += index === 0 ? "\n\tMultiMaterials:" : "";
                log += "\n\t\t" + mmat.toString(fullDetails);
                // Textures
                const textures = mmat.getActiveTextures();
                for (const t of textures){
                    if (container.textures.indexOf(t) == -1) {
                        container.textures.push(t);
                        t._parentContainer = container;
                    }
                }
            }
        }
        // Morph targets
        if (parsedData.morphTargetManagers !== undefined && parsedData.morphTargetManagers !== null) {
            for (const parsedManager of parsedData.morphTargetManagers){
                const manager = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Morph$2f$morphTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphTargetManager"].Parse(parsedManager, scene);
                TempMorphTargetManagerIndexContainer[parsedManager.id] = manager;
                container.morphTargetManagers.push(manager);
                manager._parentContainer = container;
            }
        }
        // Skeletons
        if (parsedData.skeletons !== undefined && parsedData.skeletons !== null) {
            for(index = 0, cache = parsedData.skeletons.length; index < cache; index++){
                const parsedSkeleton = parsedData.skeletons[index];
                const skeleton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"].Parse(parsedSkeleton, scene);
                container.skeletons.push(skeleton);
                skeleton._parentContainer = container;
                log += index === 0 ? "\n\tSkeletons:" : "";
                log += "\n\t\t" + skeleton.toString(fullDetails);
            }
        }
        // Geometries
        const geometries = parsedData.geometries;
        if (geometries !== undefined && geometries !== null) {
            const addedGeometry = new Array();
            // VertexData
            const vertexData = geometries.vertexData;
            if (vertexData !== undefined && vertexData !== null) {
                for(index = 0, cache = vertexData.length; index < cache; index++){
                    const parsedVertexData = vertexData[index];
                    addedGeometry.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geometry"].Parse(parsedVertexData, scene, rootUrl));
                }
            }
            for (const g of addedGeometry){
                if (g) {
                    container.geometries.push(g);
                    g._parentContainer = container;
                }
            }
        }
        // Transform nodes
        if (parsedData.transformNodes !== undefined && parsedData.transformNodes !== null) {
            for(index = 0, cache = parsedData.transformNodes.length; index < cache; index++){
                const parsedTransformNode = parsedData.transformNodes[index];
                const node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"].Parse(parsedTransformNode, scene, rootUrl);
                TempIndexContainer[parsedTransformNode.uniqueId] = node;
                container.transformNodes.push(node);
                node._parentContainer = container;
            }
        }
        // Meshes
        if (parsedData.meshes !== undefined && parsedData.meshes !== null) {
            for(index = 0, cache = parsedData.meshes.length; index < cache; index++){
                const parsedMesh = parsedData.meshes[index];
                const mesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].Parse(parsedMesh, scene, rootUrl);
                TempIndexContainer[parsedMesh.uniqueId] = mesh;
                container.meshes.push(mesh);
                mesh._parentContainer = container;
                if (mesh.hasInstances) {
                    for (const instance of mesh.instances){
                        container.meshes.push(instance);
                        instance._parentContainer = container;
                    }
                }
                log += index === 0 ? "\n\tMeshes:" : "";
                log += "\n\t\t" + mesh.toString(fullDetails);
            }
        }
        // Cameras
        if (parsedData.cameras !== undefined && parsedData.cameras !== null) {
            for(index = 0, cache = parsedData.cameras.length; index < cache; index++){
                const parsedCamera = parsedData.cameras[index];
                const camera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].Parse(parsedCamera, scene);
                TempIndexContainer[parsedCamera.uniqueId] = camera;
                container.cameras.push(camera);
                camera._parentContainer = container;
                log += index === 0 ? "\n\tCameras:" : "";
                log += "\n\t\t" + camera.toString(fullDetails);
            }
        }
        // Postprocesses
        if (parsedData.postProcesses !== undefined && parsedData.postProcesses !== null) {
            for(index = 0, cache = parsedData.postProcesses.length; index < cache; index++){
                const parsedPostProcess = parsedData.postProcesses[index];
                const postProcess = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostProcess"].Parse(parsedPostProcess, scene, rootUrl);
                if (postProcess) {
                    container.postProcesses.push(postProcess);
                    postProcess._parentContainer = container;
                    log += index === 0 ? "\nPostprocesses:" : "";
                    log += "\n\t\t" + postProcess.toString();
                }
            }
        }
        // Animation Groups
        if (parsedData.animationGroups !== undefined && parsedData.animationGroups !== null && parsedData.animationGroups.length) {
            // Build the nodeMap only for scenes with animationGroups
            const nodeMap = new Map();
            // Nodes in scene does not change when parsing animationGroups, so it's safe to build a map.
            // This follows the order of scene.getNodeById: mesh, transformNode, light, camera, bone
            for(let index = 0; index < scene.meshes.length; index++){
                // This follows the behavior of scene.getXXXById, which picks the first match
                if (!nodeMap.has(scene.meshes[index].id)) {
                    nodeMap.set(scene.meshes[index].id, scene.meshes[index]);
                }
            }
            for(let index = 0; index < scene.transformNodes.length; index++){
                if (!nodeMap.has(scene.transformNodes[index].id)) {
                    nodeMap.set(scene.transformNodes[index].id, scene.transformNodes[index]);
                }
            }
            for(let index = 0; index < scene.lights.length; index++){
                if (!nodeMap.has(scene.lights[index].id)) {
                    nodeMap.set(scene.lights[index].id, scene.lights[index]);
                }
            }
            for(let index = 0; index < scene.cameras.length; index++){
                if (!nodeMap.has(scene.cameras[index].id)) {
                    nodeMap.set(scene.cameras[index].id, scene.cameras[index]);
                }
            }
            for(let skeletonIndex = 0; skeletonIndex < scene.skeletons.length; skeletonIndex++){
                const skeleton = scene.skeletons[skeletonIndex];
                for(let boneIndex = 0; boneIndex < skeleton.bones.length; boneIndex++){
                    if (!nodeMap.has(skeleton.bones[boneIndex].id)) {
                        nodeMap.set(skeleton.bones[boneIndex].id, skeleton.bones[boneIndex]);
                    }
                }
            }
            for(index = 0, cache = parsedData.animationGroups.length; index < cache; index++){
                const parsedAnimationGroup = parsedData.animationGroups[index];
                const animationGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationGroup"].Parse(parsedAnimationGroup, scene, nodeMap);
                container.animationGroups.push(animationGroup);
                animationGroup._parentContainer = container;
                log += index === 0 ? "\n\tAnimationGroups:" : "";
                log += "\n\t\t" + animationGroup.toString(fullDetails);
            }
        }
        // Sprites
        if (parsedData.spriteManagers) {
            for(let index = 0, cache = parsedData.spriteManagers.length; index < cache; index++){
                const parsedSpriteManager = parsedData.spriteManagers[index];
                const spriteManager = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteManager"].Parse(parsedSpriteManager, scene, rootUrl);
                log += "\n\t\tSpriteManager " + spriteManager.name;
            }
        }
        // Browsing all the graph to connect the dots
        for(index = 0, cache = scene.cameras.length; index < cache; index++){
            const camera = scene.cameras[index];
            if (camera._waitingParentId !== null) {
                camera.parent = FindParent(camera._waitingParentId, camera._waitingParentInstanceIndex, scene);
                camera._waitingParentId = null;
                camera._waitingParentInstanceIndex = null;
            }
        }
        for(index = 0, cache = scene.lights.length; index < cache; index++){
            const light = scene.lights[index];
            if (light && light._waitingParentId !== null) {
                light.parent = FindParent(light._waitingParentId, light._waitingParentInstanceIndex, scene);
                light._waitingParentId = null;
                light._waitingParentInstanceIndex = null;
            }
        }
        // Connect parents & children and parse actions and lods
        for(index = 0, cache = scene.transformNodes.length; index < cache; index++){
            const transformNode = scene.transformNodes[index];
            if (transformNode._waitingParentId !== null) {
                transformNode.parent = FindParent(transformNode._waitingParentId, transformNode._waitingParentInstanceIndex, scene);
                transformNode._waitingParentId = null;
                transformNode._waitingParentInstanceIndex = null;
            }
        }
        for(index = 0, cache = scene.meshes.length; index < cache; index++){
            const mesh = scene.meshes[index];
            if (mesh._waitingParentId !== null) {
                mesh.parent = FindParent(mesh._waitingParentId, mesh._waitingParentInstanceIndex, scene);
                mesh._waitingParentId = null;
                mesh._waitingParentInstanceIndex = null;
            }
            if (mesh._waitingData.lods) {
                LoadDetailLevels(scene, mesh);
            }
        }
        // link multimats with materials
        for (const multimat of scene.multiMaterials){
            for (const subMaterial of multimat._waitingSubMaterialsUniqueIds){
                multimat.subMaterials.push(FindMaterial(subMaterial, scene));
            }
            multimat._waitingSubMaterialsUniqueIds = [];
        }
        // link meshes with materials
        for (const mesh of scene.meshes){
            if (mesh._waitingMaterialId !== null) {
                mesh.material = FindMaterial(mesh._waitingMaterialId, scene);
                mesh._waitingMaterialId = null;
            }
        }
        // link meshes with morph target managers
        for (const mesh of scene.meshes){
            if (mesh._waitingMorphTargetManagerId !== null) {
                mesh.morphTargetManager = TempMorphTargetManagerIndexContainer[mesh._waitingMorphTargetManagerId];
                mesh._waitingMorphTargetManagerId = null;
            }
        }
        // link skeleton transform nodes
        for(index = 0, cache = scene.skeletons.length; index < cache; index++){
            const skeleton = scene.skeletons[index];
            if (skeleton._hasWaitingData) {
                if (skeleton.bones != null) {
                    for (const bone of skeleton.bones){
                        if (bone._waitingTransformNodeId) {
                            const linkTransformNode = scene.getLastEntryById(bone._waitingTransformNodeId);
                            if (linkTransformNode) {
                                bone.linkTransformNode(linkTransformNode);
                            }
                            bone._waitingTransformNodeId = null;
                        }
                    }
                }
                skeleton._hasWaitingData = null;
            }
        }
        // freeze world matrix application
        for(index = 0, cache = scene.meshes.length; index < cache; index++){
            const currentMesh = scene.meshes[index];
            if (currentMesh._waitingData.freezeWorldMatrix) {
                currentMesh.freezeWorldMatrix();
                currentMesh._waitingData.freezeWorldMatrix = null;
            } else {
                currentMesh.computeWorldMatrix(true);
            }
        }
        // Lights exclusions / inclusions
        for(index = 0, cache = scene.lights.length; index < cache; index++){
            const light = scene.lights[index];
            // Excluded check
            if (light._excludedMeshesIds.length > 0) {
                for(let excludedIndex = 0; excludedIndex < light._excludedMeshesIds.length; excludedIndex++){
                    const excludedMesh = scene.getMeshById(light._excludedMeshesIds[excludedIndex]);
                    if (excludedMesh) {
                        light.excludedMeshes.push(excludedMesh);
                    }
                }
                light._excludedMeshesIds = [];
            }
            // Included check
            if (light._includedOnlyMeshesIds.length > 0) {
                for(let includedOnlyIndex = 0; includedOnlyIndex < light._includedOnlyMeshesIds.length; includedOnlyIndex++){
                    const includedOnlyMesh = scene.getMeshById(light._includedOnlyMeshesIds[includedOnlyIndex]);
                    if (includedOnlyMesh) {
                        light.includedOnlyMeshes.push(includedOnlyMesh);
                    }
                }
                light._includedOnlyMeshesIds = [];
            }
        }
        for (const g of scene.geometries){
            g._loadedUniqueId = "";
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parse"])(parsedData, scene, container, rootUrl);
        // Actions (scene) Done last as it can access other objects.
        for(index = 0, cache = scene.meshes.length; index < cache; index++){
            const mesh = scene.meshes[index];
            if (mesh._waitingData.actions) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionManager"].Parse(mesh._waitingData.actions, mesh, scene);
                mesh._waitingData.actions = null;
            }
        }
        if (parsedData.actions !== undefined && parsedData.actions !== null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionManager"].Parse(parsedData.actions, null, scene);
        }
    } catch (err) {
        const msg = logOperation("loadAssets", parsedData ? parsedData.producer : "Unknown") + log;
        if (onError) {
            onError(msg, err);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(msg);
            throw err;
        }
    } finally{
        TempIndexContainer = {};
        TempMaterialIndexContainer = {};
        TempMorphTargetManagerIndexContainer = {};
        if (!addToScene) {
            container.removeAllFromScene();
        }
        if (log !== null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel !== 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(logOperation("loadAssets", parsedData ? parsedData.producer : "Unknown") + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel !== 1 ? log : ""));
        }
    }
    return container;
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterSceneLoaderPlugin"])({
    name: "babylon.js",
    extensions: ".babylon",
    canDirectLoad: (data)=>{
        if (data.indexOf("babylon") !== -1) {
            // We consider that the producer string is filled
            return true;
        }
        return false;
    },
    importMesh: (meshesNames, scene, data, rootUrl, meshes, particleSystems, skeletons, onError)=>{
        // Entire method running in try block, so ALWAYS logs as far as it got, only actually writes details
        // when SceneLoader.debugLogging = true (default), or exception encountered.
        // Everything stored in var log instead of writing separate lines to support only writing in exception,
        // and avoid problems with multiple concurrent .babylon loads.
        let log = "importMesh has failed JSON parse";
        try {
            // eslint-disable-next-line no-var
            var parsedData = JSON.parse(data);
            log = "";
            const fullDetails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel === 3;
            if (!meshesNames) {
                meshesNames = null;
            } else if (!Array.isArray(meshesNames)) {
                meshesNames = [
                    meshesNames
                ];
            }
            const hierarchyIds = [];
            const parsedIdToNodeMap = new Map();
            // Transform nodes (the overall idea is to load all of them as this is super fast and then get rid of the ones we don't need)
            const loadedTransformNodes = [];
            if (parsedData.transformNodes !== undefined && parsedData.transformNodes !== null) {
                for(let index = 0, cache = parsedData.transformNodes.length; index < cache; index++){
                    const parsedJSONTransformNode = parsedData.transformNodes[index];
                    const parsedTransformNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"].Parse(parsedJSONTransformNode, scene, rootUrl);
                    loadedTransformNodes.push(parsedTransformNode);
                    parsedIdToNodeMap.set(parsedTransformNode._waitingParsedUniqueId, parsedTransformNode);
                    parsedTransformNode._waitingParsedUniqueId = null;
                }
            }
            if (parsedData.meshes !== undefined && parsedData.meshes !== null) {
                const loadedSkeletonsIds = [];
                const loadedMaterialsIds = [];
                const loadedMaterialsUniqueIds = [];
                const loadedMorphTargetManagerIds = [];
                for(let index = 0, cache = parsedData.meshes.length; index < cache; index++){
                    const parsedMesh = parsedData.meshes[index];
                    if (meshesNames === null || IsDescendantOf(parsedMesh, meshesNames, hierarchyIds)) {
                        if (meshesNames !== null) {
                            // Remove found mesh name from list.
                            delete meshesNames[meshesNames.indexOf(parsedMesh.name)];
                        }
                        //Geometry?
                        if (parsedMesh.geometryId !== undefined && parsedMesh.geometryId !== null) {
                            //does the file contain geometries?
                            if (parsedData.geometries !== undefined && parsedData.geometries !== null) {
                                //find the correct geometry and add it to the scene
                                let found = false;
                                const geoms = [
                                    "boxes",
                                    "spheres",
                                    "cylinders",
                                    "toruses",
                                    "grounds",
                                    "planes",
                                    "torusKnots",
                                    "vertexData"
                                ];
                                for (const geometryType of geoms){
                                    if (!parsedData.geometries[geometryType] || !Array.isArray(parsedData.geometries[geometryType])) {
                                        continue;
                                    }
                                    const geom = parsedData.geometries[geometryType];
                                    for (const parsedGeometryData of geom){
                                        if (parsedGeometryData.id === parsedMesh.geometryId) {
                                            switch(geometryType){
                                                case "vertexData":
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Geometry"].Parse(parsedGeometryData, scene, rootUrl);
                                                    break;
                                            }
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (found) {
                                        break;
                                    }
                                }
                                if (found === false) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Geometry not found for mesh " + parsedMesh.id);
                                }
                            }
                        }
                        // Material ?
                        if (parsedMesh.materialUniqueId || parsedMesh.materialId) {
                            // if we have a unique ID, look up and store in loadedMaterialsUniqueIds, else use loadedMaterialsIds
                            const materialArray = parsedMesh.materialUniqueId ? loadedMaterialsUniqueIds : loadedMaterialsIds;
                            let materialFound = materialArray.indexOf(parsedMesh.materialUniqueId || parsedMesh.materialId) !== -1;
                            if (materialFound === false && parsedData.multiMaterials !== undefined && parsedData.multiMaterials !== null) {
                                // Loads a submaterial of a multimaterial
                                const loadSubMaterial = (subMatId, predicate)=>{
                                    materialArray.push(subMatId);
                                    const mat = ParseMaterialByPredicate(predicate, parsedData, scene, rootUrl);
                                    if (mat && mat.material) {
                                        TempMaterialIndexContainer[mat.parsedMaterial.uniqueId || mat.parsedMaterial.id] = mat.material;
                                        log += "\n\tMaterial " + mat.material.toString(fullDetails);
                                    }
                                };
                                for(let multimatIndex = 0, multimatCache = parsedData.multiMaterials.length; multimatIndex < multimatCache; multimatIndex++){
                                    const parsedMultiMaterial = parsedData.multiMaterials[multimatIndex];
                                    if (parsedMesh.materialUniqueId && parsedMultiMaterial.uniqueId === parsedMesh.materialUniqueId || parsedMultiMaterial.id === parsedMesh.materialId) {
                                        if (parsedMultiMaterial.materialsUniqueIds) {
                                            // if the materials inside the multimat are stored by unique id
                                            for (const subMatId of parsedMultiMaterial.materialsUniqueIds){
                                                loadSubMaterial(subMatId, (parsedMaterial)=>parsedMaterial.uniqueId === subMatId);
                                            }
                                        } else {
                                            // if the mats are stored by id instead
                                            for (const subMatId of parsedMultiMaterial.materials){
                                                loadSubMaterial(subMatId, (parsedMaterial)=>parsedMaterial.id === subMatId);
                                            }
                                        }
                                        materialArray.push(parsedMultiMaterial.uniqueId || parsedMultiMaterial.id);
                                        const mmat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$multiMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiMaterial"].ParseMultiMaterial(parsedMultiMaterial, scene);
                                        TempMaterialIndexContainer[parsedMultiMaterial.uniqueId || parsedMultiMaterial.id] = mmat;
                                        if (mmat) {
                                            materialFound = true;
                                            log += "\n\tMulti-Material " + mmat.toString(fullDetails);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (materialFound === false) {
                                materialArray.push(parsedMesh.materialUniqueId || parsedMesh.materialId);
                                const mat = ParseMaterialByPredicate((parsedMaterial)=>parsedMesh.materialUniqueId && parsedMaterial.uniqueId === parsedMesh.materialUniqueId || parsedMaterial.id === parsedMesh.materialId, parsedData, scene, rootUrl);
                                if (!mat || !mat.material) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Material not found for mesh " + parsedMesh.id);
                                } else {
                                    TempMaterialIndexContainer[mat.parsedMaterial.uniqueId || mat.parsedMaterial.id] = mat.material;
                                    log += "\n\tMaterial " + mat.material.toString(fullDetails);
                                }
                            }
                        }
                        // Skeleton ?
                        if (parsedMesh.skeletonId !== null && parsedMesh.skeletonId !== undefined && parsedData.skeletonId !== -1 && parsedData.skeletons !== undefined && parsedData.skeletons !== null) {
                            const skeletonAlreadyLoaded = loadedSkeletonsIds.indexOf(parsedMesh.skeletonId) > -1;
                            if (!skeletonAlreadyLoaded) {
                                for(let skeletonIndex = 0, skeletonCache = parsedData.skeletons.length; skeletonIndex < skeletonCache; skeletonIndex++){
                                    const parsedSkeleton = parsedData.skeletons[skeletonIndex];
                                    if (parsedSkeleton.id === parsedMesh.skeletonId) {
                                        const skeleton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"].Parse(parsedSkeleton, scene);
                                        skeletons.push(skeleton);
                                        loadedSkeletonsIds.push(parsedSkeleton.id);
                                        log += "\n\tSkeleton " + skeleton.toString(fullDetails);
                                    }
                                }
                            }
                        }
                        // Morph targets ?
                        if (parsedMesh.morphTargetManagerId > -1 && parsedData.morphTargetManagers !== undefined && parsedData.morphTargetManagers !== null) {
                            const morphTargetManagerAlreadyLoaded = loadedMorphTargetManagerIds.indexOf(parsedMesh.morphTargetManagerId) > -1;
                            if (!morphTargetManagerAlreadyLoaded) {
                                for(let morphTargetManagerIndex = 0; morphTargetManagerIndex < parsedData.morphTargetManagers.length; morphTargetManagerIndex++){
                                    const parsedManager = parsedData.morphTargetManagers[morphTargetManagerIndex];
                                    if (parsedManager.id === parsedMesh.morphTargetManagerId) {
                                        const morphTargetManager = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Morph$2f$morphTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphTargetManager"].Parse(parsedManager, scene);
                                        TempMorphTargetManagerIndexContainer[parsedManager.id] = morphTargetManager;
                                        loadedMorphTargetManagerIds.push(parsedManager.id);
                                        log += "\nMorph target manager" + morphTargetManager.toString();
                                    }
                                }
                            }
                        }
                        const mesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].Parse(parsedMesh, scene, rootUrl);
                        meshes.push(mesh);
                        parsedIdToNodeMap.set(mesh._waitingParsedUniqueId, mesh);
                        mesh._waitingParsedUniqueId = null;
                        log += "\n\tMesh " + mesh.toString(fullDetails);
                    }
                }
                // link multimats with materials
                for (const multimat of scene.multiMaterials){
                    for (const subMaterial of multimat._waitingSubMaterialsUniqueIds){
                        multimat.subMaterials.push(FindMaterial(subMaterial, scene));
                    }
                    multimat._waitingSubMaterialsUniqueIds = [];
                }
                // link meshes with materials
                for (const mesh of scene.meshes){
                    if (mesh._waitingMaterialId !== null) {
                        mesh.material = FindMaterial(mesh._waitingMaterialId, scene);
                        mesh._waitingMaterialId = null;
                    }
                }
                // link meshes with morph target managers
                for (const mesh of scene.meshes){
                    if (mesh._waitingMorphTargetManagerId !== null) {
                        mesh.morphTargetManager = TempMorphTargetManagerIndexContainer[mesh._waitingMorphTargetManagerId];
                        mesh._waitingMorphTargetManagerId = null;
                    }
                }
                // Connecting parents and lods
                for(let index = 0, cache = scene.transformNodes.length; index < cache; index++){
                    const transformNode = scene.transformNodes[index];
                    if (transformNode._waitingParentId !== null) {
                        let parent = parsedIdToNodeMap.get(parseInt(transformNode._waitingParentId)) || null;
                        if (parent === null) {
                            parent = scene.getLastEntryById(transformNode._waitingParentId);
                        }
                        let parentNode = parent;
                        if (transformNode._waitingParentInstanceIndex) {
                            parentNode = parent.instances[parseInt(transformNode._waitingParentInstanceIndex)];
                            transformNode._waitingParentInstanceIndex = null;
                        }
                        transformNode.parent = parentNode;
                        transformNode._waitingParentId = null;
                    }
                }
                let currentMesh;
                for(let index = 0, cache = scene.meshes.length; index < cache; index++){
                    currentMesh = scene.meshes[index];
                    if (currentMesh._waitingParentId) {
                        let parent = parsedIdToNodeMap.get(parseInt(currentMesh._waitingParentId)) || null;
                        if (parent === null) {
                            parent = scene.getLastEntryById(currentMesh._waitingParentId);
                        }
                        let parentNode = parent;
                        if (currentMesh._waitingParentInstanceIndex) {
                            parentNode = parent.instances[parseInt(currentMesh._waitingParentInstanceIndex)];
                            currentMesh._waitingParentInstanceIndex = null;
                        }
                        currentMesh.parent = parentNode;
                        currentMesh._waitingParentId = null;
                    }
                    if (currentMesh._waitingData.lods) {
                        LoadDetailLevels(scene, currentMesh);
                    }
                }
                // Remove unused transform nodes
                for (const transformNode of loadedTransformNodes){
                    const childMeshes = transformNode.getChildMeshes(false);
                    if (!childMeshes.length) {
                        transformNode.dispose();
                    }
                }
                // link skeleton transform nodes
                for(let index = 0, cache = scene.skeletons.length; index < cache; index++){
                    const skeleton = scene.skeletons[index];
                    if (skeleton._hasWaitingData) {
                        if (skeleton.bones != null) {
                            for (const bone of skeleton.bones){
                                if (bone._waitingTransformNodeId) {
                                    const linkTransformNode = scene.getLastEntryById(bone._waitingTransformNodeId);
                                    if (linkTransformNode) {
                                        bone.linkTransformNode(linkTransformNode);
                                    }
                                    bone._waitingTransformNodeId = null;
                                }
                            }
                        }
                        skeleton._hasWaitingData = null;
                    }
                }
                // freeze and compute world matrix application
                for(let index = 0, cache = scene.meshes.length; index < cache; index++){
                    currentMesh = scene.meshes[index];
                    if (currentMesh._waitingData.freezeWorldMatrix) {
                        currentMesh.freezeWorldMatrix();
                        currentMesh._waitingData.freezeWorldMatrix = null;
                    } else {
                        currentMesh.computeWorldMatrix(true);
                    }
                }
            }
            // Particles
            if (parsedData.particleSystems !== undefined && parsedData.particleSystems !== null) {
                const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetIndividualParser"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_PARTICLESYSTEM);
                if (parser) {
                    for(let index = 0, cache = parsedData.particleSystems.length; index < cache; index++){
                        const parsedParticleSystem = parsedData.particleSystems[index];
                        if (hierarchyIds.indexOf(parsedParticleSystem.emitterId) !== -1) {
                            particleSystems.push(parser(parsedParticleSystem, scene, rootUrl));
                        }
                    }
                }
            }
            for (const g of scene.geometries){
                g._loadedUniqueId = "";
            }
            return true;
        } catch (err) {
            const msg = logOperation("importMesh", parsedData ? parsedData.producer : "Unknown") + log;
            if (onError) {
                onError(msg, err);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(msg);
                throw err;
            }
        } finally{
            if (log !== null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel !== 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(logOperation("importMesh", parsedData ? parsedData.producer : "Unknown") + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel !== 1 ? log : ""));
            }
            TempMaterialIndexContainer = {};
            TempMorphTargetManagerIndexContainer = {};
        }
        return false;
    },
    load: (scene, data, rootUrl, onError)=>{
        // Entire method running in try block, so ALWAYS logs as far as it got, only actually writes details
        // when SceneLoader.debugLogging = true (default), or exception encountered.
        // Everything stored in var log instead of writing separate lines to support only writing in exception,
        // and avoid problems with multiple concurrent .babylon loads.
        let log = "importScene has failed JSON parse";
        try {
            // eslint-disable-next-line no-var
            var parsedData = JSON.parse(data);
            log = "";
            // Scene
            if (parsedData.useDelayedTextureLoading !== undefined && parsedData.useDelayedTextureLoading !== null) {
                scene.useDelayedTextureLoading = parsedData.useDelayedTextureLoading && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].ForceFullSceneLoadingForIncremental;
            }
            if (parsedData.autoClear !== undefined && parsedData.autoClear !== null) {
                scene.autoClear = parsedData.autoClear;
            }
            if (parsedData.clearColor !== undefined && parsedData.clearColor !== null) {
                scene.clearColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].FromArray(parsedData.clearColor);
            }
            if (parsedData.ambientColor !== undefined && parsedData.ambientColor !== null) {
                scene.ambientColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromArray(parsedData.ambientColor);
            }
            if (parsedData.gravity !== undefined && parsedData.gravity !== null) {
                scene.gravity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedData.gravity);
            }
            if (parsedData.useRightHandedSystem !== undefined) {
                scene.useRightHandedSystem = !!parsedData.useRightHandedSystem;
            }
            // Fog
            if (parsedData.fogMode !== undefined && parsedData.fogMode !== null) {
                scene.fogMode = parsedData.fogMode;
            }
            if (parsedData.fogColor !== undefined && parsedData.fogColor !== null) {
                scene.fogColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromArray(parsedData.fogColor);
            }
            if (parsedData.fogStart !== undefined && parsedData.fogStart !== null) {
                scene.fogStart = parsedData.fogStart;
            }
            if (parsedData.fogEnd !== undefined && parsedData.fogEnd !== null) {
                scene.fogEnd = parsedData.fogEnd;
            }
            if (parsedData.fogDensity !== undefined && parsedData.fogDensity !== null) {
                scene.fogDensity = parsedData.fogDensity;
            }
            log += "\tFog mode for scene:  ";
            switch(scene.fogMode){
                case 0:
                    log += "none\n";
                    break;
                // getters not compiling, so using hardcoded
                case 1:
                    log += "exp\n";
                    break;
                case 2:
                    log += "exp2\n";
                    break;
                case 3:
                    log += "linear\n";
                    break;
            }
            //Physics
            if (parsedData.physicsEnabled) {
                let physicsPlugin;
                if (parsedData.physicsEngine === "cannon" || parsedData.physicsEngine === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$cannonJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CannonJSPlugin"].name) {
                    physicsPlugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$cannonJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CannonJSPlugin"](undefined, undefined, BabylonFileLoaderConfiguration.LoaderInjectedPhysicsEngine);
                } else if (parsedData.physicsEngine === "oimo" || parsedData.physicsEngine === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$oimoJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OimoJSPlugin"].name) {
                    physicsPlugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$oimoJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OimoJSPlugin"](undefined, BabylonFileLoaderConfiguration.LoaderInjectedPhysicsEngine);
                } else if (parsedData.physicsEngine === "ammo" || parsedData.physicsEngine === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$ammoJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmmoJSPlugin"].name) {
                    physicsPlugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$Plugins$2f$ammoJSPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmmoJSPlugin"](undefined, BabylonFileLoaderConfiguration.LoaderInjectedPhysicsEngine, undefined);
                }
                log = "\tPhysics engine " + (parsedData.physicsEngine ? parsedData.physicsEngine : "oimo") + " enabled\n";
                //else - default engine, which is currently oimo
                const physicsGravity = parsedData.gravity ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedData.gravity) : parsedData.physicsGravity ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedData.physicsGravity) : null;
                scene.enablePhysics(physicsGravity, physicsPlugin);
            }
            // Metadata
            if (parsedData.metadata !== undefined && parsedData.metadata !== null) {
                scene.metadata = parsedData.metadata;
            }
            //collisions, if defined. otherwise, default is true
            if (parsedData.collisionsEnabled !== undefined && parsedData.collisionsEnabled !== null) {
                scene.collisionsEnabled = parsedData.collisionsEnabled;
            }
            const container = LoadAssetContainer(scene, data, rootUrl, onError, true);
            if (!container) {
                return false;
            }
            if (parsedData.autoAnimate) {
                scene.beginAnimation(scene, parsedData.autoAnimateFrom, parsedData.autoAnimateTo, parsedData.autoAnimateLoop, parsedData.autoAnimateSpeed || 1.0);
            }
            if (parsedData.activeCameraID !== undefined && parsedData.activeCameraID !== null) {
                scene.setActiveCameraById(parsedData.activeCameraID);
            }
            // Finish
            return true;
        } catch (err) {
            const msg = logOperation("importScene", parsedData ? parsedData.producer : "Unknown") + log;
            if (onError) {
                onError(msg, err);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(msg);
                throw err;
            }
        } finally{
            if (log !== null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel !== 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(logOperation("importScene", parsedData ? parsedData.producer : "Unknown") + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"].loggingLevel !== 1 ? log : ""));
            }
        }
        return false;
    },
    loadAssetContainer: (scene, data, rootUrl, onError)=>{
        const container = LoadAssetContainer(scene, data, rootUrl, onError);
        return container;
    }
}); //# sourceMappingURL=babylonFileLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$loadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/loadingScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoaderFlags.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddIndividualParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddIndividualParser"],
    "AddParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddParser"],
    "BabylonFileLoaderConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BabylonFileLoaderConfiguration"],
    "GetIndividualParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetIndividualParser"],
    "GetParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetParser"],
    "LoadAssetContainerFromSerializedScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAssetContainerFromSerializedScene"],
    "Parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parse"],
    "_BabylonLoaderRegistered",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_BabylonLoaderRegistered"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddIndividualParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddIndividualParser"],
    "AddParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddParser"],
    "AppendSceneAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppendSceneAsync"],
    "BabylonFileLoaderConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BabylonFileLoaderConfiguration"],
    "DefaultLoadingScreen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$loadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultLoadingScreen"],
    "GetIndividualParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetIndividualParser"],
    "GetParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetParser"],
    "GetRegisteredSceneLoaderPluginMetadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetRegisteredSceneLoaderPluginMetadata"],
    "ImportAnimationsAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImportAnimationsAsync"],
    "ImportMeshAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImportMeshAsync"],
    "LoadAssetContainerAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAssetContainerAsync"],
    "LoadAssetContainerFromSerializedScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadAssetContainerFromSerializedScene"],
    "LoadSceneAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadSceneAsync"],
    "Parse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Parse"],
    "RegisterSceneLoaderPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterSceneLoaderPlugin"],
    "SceneLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoader"],
    "SceneLoaderAnimationGroupLoadingMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderAnimationGroupLoadingMode"],
    "SceneLoaderFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneLoaderFlags"],
    "_BabylonLoaderRegistered",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_BabylonLoaderRegistered"],
    "appendSceneAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendSceneAsync"],
    "importAnimationsAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importAnimationsAsync"],
    "loadAssetContainerAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAssetContainerAsync"],
    "loadSceneAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSceneAsync"],
    "registerSceneLoaderPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSceneLoaderPlugin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$loadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/loadingScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoaderFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoaderFlags.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Loading_0b1b701a._.js.map