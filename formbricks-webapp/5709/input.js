"use strict";
exports.id = 5709;
exports.ids = [5709];
exports.modules = {

/***/ 80558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ BackgroundStylingCard)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/badge/index.tsx
var badge = __webpack_require__(661989);
// EXTERNAL MODULE: ./modules/ui/components/form/index.tsx
var components_form = __webpack_require__(184142);
// EXTERNAL MODULE: ./modules/ui/components/slider/index.tsx
var slider = __webpack_require__(477787);
// EXTERNAL MODULE: ../../node_modules/@formkit/auto-animate/react/index.mjs + 1 modules
var react = __webpack_require__(611569);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-collapsible/dist/index.mjs
var dist = __webpack_require__(302792);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(129170);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ./modules/ui/components/tab-bar/index.tsx
var tab_bar = __webpack_require__(874653);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var ssr_react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/lodash/debounce.js
var debounce = __webpack_require__(359174);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/AnimatedSurveyBg.tsx



const AnimatedSurveyBg = ({ handleBgChange, background })=>{
    const [animation, setAnimation] = (0,ssr_react.useState)(background);
    const animationFiles = {
        "/animated-bgs/Thumbnails/1_Thumb.mp4": "/animated-bgs/4K/1_4k.mp4",
        "/animated-bgs/Thumbnails/2_Thumb.mp4": "/animated-bgs/4K/2_4k.mp4",
        "/animated-bgs/Thumbnails/3_Thumb.mp4": "/animated-bgs/4K/3_4k.mp4",
        "/animated-bgs/Thumbnails/4_Thumb.mp4": "/animated-bgs/4K/4_4k.mp4",
        "/animated-bgs/Thumbnails/5_Thumb.mp4": "/animated-bgs/4K/5_4k.mp4",
        "/animated-bgs/Thumbnails/6_Thumb.mp4": "/animated-bgs/4K/6_4k.mp4",
        "/animated-bgs/Thumbnails/7_Thumb.mp4": "/animated-bgs/4K/7_4k.mp4",
        "/animated-bgs/Thumbnails/8_Thumb.mp4": "/animated-bgs/4K/8_4k.mp4",
        "/animated-bgs/Thumbnails/9_Thumb.mp4": "/animated-bgs/4K/9_4k.mp4",
        "/animated-bgs/Thumbnails/10_Thumb.mp4": "/animated-bgs/4K/10_4k.mp4",
        "/animated-bgs/Thumbnails/11_Thumb.mp4": "/animated-bgs/4K/11_4k.mp4",
        "/animated-bgs/Thumbnails/12_Thumb.mp4": "/animated-bgs/4K/12_4k.mp4",
        "/animated-bgs/Thumbnails/13_Thumb.mp4": "/animated-bgs/4K/13_4k.mp4",
        "/animated-bgs/Thumbnails/14_Thumb.mp4": "/animated-bgs/4K/14_4k.mp4",
        "/animated-bgs/Thumbnails/15_Thumb.mp4": "/animated-bgs/4K/15_4k.mp4",
        "/animated-bgs/Thumbnails/16_Thumb.mp4": "/animated-bgs/4K/16_4k.mp4",
        "/animated-bgs/Thumbnails/17_Thumb.mp4": "/animated-bgs/4K/17_4k.mp4",
        "/animated-bgs/Thumbnails/18_Thumb.mp4": "/animated-bgs/4K/18_4k.mp4",
        "/animated-bgs/Thumbnails/19_Thumb.mp4": "/animated-bgs/4K/19_4k.mp4",
        "/animated-bgs/Thumbnails/20_Thumb.mp4": "/animated-bgs/4K/20_4k.mp4",
        "/animated-bgs/Thumbnails/21_Thumb.mp4": "/animated-bgs/4K/21_4k.mp4",
        "/animated-bgs/Thumbnails/22_Thumb.mp4": "/animated-bgs/4K/22_4k.mp4",
        "/animated-bgs/Thumbnails/23_Thumb.mp4": "/animated-bgs/4K/23_4k.mp4",
        "/animated-bgs/Thumbnails/24_Thumb.mp4": "/animated-bgs/4K/24_4k.mp4",
        "/animated-bgs/Thumbnails/25_Thumb.mp4": "/animated-bgs/4K/25_4k.mp4",
        "/animated-bgs/Thumbnails/26_Thumb.mp4": "/animated-bgs/4K/26_4k.mp4",
        "/animated-bgs/Thumbnails/27_Thumb.mp4": "/animated-bgs/4K/27_4k.mp4",
        "/animated-bgs/Thumbnails/28_Thumb.mp4": "/animated-bgs/4K/28_4k.mp4",
        "/animated-bgs/Thumbnails/29_Thumb.mp4": "/animated-bgs/4K/29_4k.mp4",
        "/animated-bgs/Thumbnails/30_Thumb.mp4": "/animated-bgs/4K/30_4k.mp4",
        "/animated-bgs/Thumbnails/31_Thumb.mp4": "/animated-bgs/4K/31_4k.mp4",
        "/animated-bgs/Thumbnails/32_Thumb.mp4": "/animated-bgs/4K/32_4k.mp4",
        "/animated-bgs/Thumbnails/33_Thumb.mp4": "/animated-bgs/4K/33_4k.mp4",
        "/animated-bgs/Thumbnails/34_Thumb.mp4": "/animated-bgs/4K/34_4k.mp4",
        "/animated-bgs/Thumbnails/35_Thumb.mp4": "/animated-bgs/4K/35_4k.mp4",
        "/animated-bgs/Thumbnails/36_Thumb.mp4": "/animated-bgs/4K/36_4k.mp4",
        "/animated-bgs/Thumbnails/37_Thumb.mp4": "/animated-bgs/4K/37_4k.mp4",
        "/animated-bgs/Thumbnails/38_Thumb.mp4": "/animated-bgs/4K/38_4k.mp4",
        "/animated-bgs/Thumbnails/39_Thumb.mp4": "/animated-bgs/4K/39_4k.mp4",
        "/animated-bgs/Thumbnails/40_Thumb.mp4": "/animated-bgs/4K/40_4k.mp4",
        "/animated-bgs/Thumbnails/41_Thumb.mp4": "/animated-bgs/4K/41_4k.mp4"
    };
    const togglePlayback = (index, type)=>{
        const video = document.getElementById(`video-${index}`);
        try {
            type === "play" ? video.play() : video.pause();
        } catch (error) {
            console.error(error);
        }
    };
    const debouncedManagePlayback = debounce_default()(togglePlayback, 150);
    const handleBg = (x)=>{
        setAnimation(x);
        handleBgChange(x, "animation");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "mt-4 grid grid-cols-6 gap-4",
            children: Object.keys(animationFiles).map((key, index)=>{
                const value = animationFiles[key];
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    onMouseEnter: ()=>debouncedManagePlayback(index, "play"),
                    onMouseLeave: ()=>debouncedManagePlayback(index, "pause"),
                    onClick: ()=>handleBg(value),
                    className: "relative cursor-pointer overflow-hidden rounded-lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("video", {
                            disablePictureInPicture: true,
                            id: `video-${index}`,
                            className: "h-46 w-96 origin-center scale-105 transform",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("source", {
                                src: `${key}`,
                                type: "video/mp4"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("input", {
                            className: "absolute right-2 top-2 h-4 w-4 rounded-sm bg-white",
                            type: "checkbox",
                            checked: animation === value,
                            onChange: ()=>handleBg(value)
                        })
                    ]
                }, index);
            })
        })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/color-picker/index.tsx + 1 modules
var color_picker = __webpack_require__(30574);
;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/ColorSurveyBg.tsx



const ColorSurveyBg = ({ handleBgChange, colors, background })=>{
    const [color, setColor] = (0,ssr_react.useState)(background || "#FFFFFF");
    const handleBg = (x)=>{
        setColor(x);
        handleBgChange(x, "color");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "w-full max-w-xs py-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                    color: color,
                    onChange: handleBg
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex flex-wrap gap-4",
                children: colors.map((x)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: `h-16 w-16 cursor-pointer rounded-lg border border-slate-300 ${color === x ? "border-4 border-slate-500" : ""}`,
                        style: {
                            backgroundColor: `${x}`
                        },
                        onClick: ()=>handleBg(x)
                    }, x);
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/file-input/index.tsx + 2 modules
var file_input = __webpack_require__(675135);
;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/ImageSurveyBg.tsx


const UploadImageSurveyBg = ({ environmentId, handleBgChange, background })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "mt-2 w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "flex w-full items-center justify-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(file_input/* FileInput */.z, {
                id: "survey-bg-file-input",
                allowedFileExtensions: [
                    "png",
                    "jpeg",
                    "jpg",
                    "webp"
                ],
                environmentId: environmentId,
                onFileUpload: (url)=>{
                    if (url.length > 0) {
                        handleBgChange(url[0], "upload");
                    } else {
                        handleBgChange("", "upload");
                    }
                },
                fileUrl: background,
                maxSizeInMB: 2
            })
        })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ./modules/ui/components/loading-spinner/index.tsx
var loading_spinner = __webpack_require__(829884);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(834096);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/image.js
var api_image = __webpack_require__(134088);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var react_hot_toast_dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(308441);
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7ff313fb591d98a3184941f4daef611f7b6a0455a2&name=getImagesFromUnsplashAction!

const getImagesFromUnsplashAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7ff313fb591d98a3184941f4daef611f7b6a0455a2", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "getImagesFromUnsplashAction")
;// ../../node_modules/next/dist/build/webpack/loaders/next-flight-server-reference-proxy-loader.js?id=7f44fbfbd695b4b87a8b177bf487a1314b7bebbead&name=triggerDownloadUnsplashImageAction!

const triggerDownloadUnsplashImageAction = /*#__PURE__*/(0,action_client_wrapper.createServerReference)("7f44fbfbd695b4b87a8b177bf487a1314b7bebbead", action_client_wrapper.callServer, undefined, action_client_wrapper.findSourceMapURL, "triggerDownloadUnsplashImageAction")
;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/UnsplashImages.tsx
/* __next_internal_client_entry_do_not_use__ ImageFromUnsplashSurveyBg auto */ 










const defaultImages = [
    {
        id: "dog-1",
        alt_description: "Dog",
        urls: {
            regularWithAttribution: "/image-backgrounds/dogs.webp"
        }
    },
    {
        id: "pencil",
        alt_description: "Pencil",
        urls: {
            regularWithAttribution: "/image-backgrounds/pencil.webp"
        }
    },
    {
        id: "plant",
        alt_description: "Plant",
        urls: {
            regularWithAttribution: "/image-backgrounds/plant.webp"
        }
    },
    {
        id: "dog-2",
        alt_description: "Another Dog",
        urls: {
            regularWithAttribution: "/image-backgrounds/dog-2.webp"
        }
    },
    {
        id: "kitten-2",
        alt_description: "Another Kitten",
        urls: {
            regularWithAttribution: "/image-backgrounds/kitten-2.webp"
        }
    },
    {
        id: "lollipop",
        alt_description: "Lollipop",
        urls: {
            regularWithAttribution: "/image-backgrounds/lolipop.webp"
        }
    },
    {
        id: "oranges",
        alt_description: "Oranges",
        urls: {
            regularWithAttribution: "/image-backgrounds/oranges.webp"
        }
    },
    {
        id: "flower",
        alt_description: "Flower",
        urls: {
            regularWithAttribution: "/image-backgrounds/flowers.webp"
        }
    },
    {
        id: "supermario",
        alt_description: "Super Mario",
        urls: {
            regularWithAttribution: "/image-backgrounds/supermario.webp"
        }
    },
    {
        id: "shapes",
        alt_description: "Shapes",
        urls: {
            regularWithAttribution: "/image-backgrounds/shapes.webp"
        }
    },
    {
        id: "waves",
        alt_description: "Waves",
        urls: {
            regularWithAttribution: "/image-backgrounds/waves.webp"
        }
    },
    {
        id: "kitten-1",
        alt_description: "Kitten",
        urls: {
            regularWithAttribution: "/image-backgrounds/kittens.webp"
        }
    },
    {
        id: "windows",
        alt_description: "Windows",
        urls: {
            regularWithAttribution: "/image-backgrounds/windows.webp"
        }
    }
];
const ImageFromUnsplashSurveyBg = ({ handleBgChange })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const inputFocus = (0,ssr_react.useRef)(null);
    const [isLoading, setIsLoading] = (0,ssr_react.useState)(false);
    const [query, setQuery] = (0,ssr_react.useState)("");
    const [images, setImages] = (0,ssr_react.useState)(defaultImages);
    const [page, setPage] = (0,ssr_react.useState)(1);
    (0,ssr_react.useEffect)(()=>{
        const fetchData = async (searchQuery, currentPage)=>{
            try {
                setIsLoading(true);
                const getImagesFromUnsplashResponse = await getImagesFromUnsplashAction({
                    searchQuery: searchQuery,
                    page: currentPage
                });
                if (!getImagesFromUnsplashResponse?.data) return;
                const imagesFromUnsplash = getImagesFromUnsplashResponse.data;
                for(let i = 0; i < imagesFromUnsplash.length; i++){
                    const authorName = new URL(imagesFromUnsplash[i].urls.regularWithAttribution).searchParams.get("authorName");
                    imagesFromUnsplash[i].authorName = authorName;
                }
                setImages((prevImages)=>[
                        ...prevImages,
                        ...imagesFromUnsplash
                    ]);
            } catch (error) {
                react_hot_toast_dist/* default */.Ay.error(error.message);
            } finally{
                setIsLoading(false);
            }
        };
        const debouncedFetchData = debounce_default()((q)=>fetchData(q, page), 500);
        if (query.trim() !== "") {
            debouncedFetchData(query);
        }
        return ()=>{
            debouncedFetchData.cancel();
        };
    }, [
        query,
        page,
        setImages
    ]);
    (0,ssr_react.useEffect)(()=>{
        inputFocus.current?.focus();
    }, []);
    const handleChange = (event)=>{
        setQuery(event.target.value);
        setPage(1);
        setImages([]);
    };
    const handleImageSelected = async (imageUrl, downloadImageUrl)=>{
        try {
            handleBgChange(imageUrl, "image");
            if (downloadImageUrl) {
                await triggerDownloadUnsplashImageAction({
                    downloadUrl: downloadImageUrl
                });
            }
        } catch (error) {
            react_hot_toast_dist/* default */.Ay.error(error.message);
        }
    };
    const handleLoadMore = ()=>{
        setPage((prevPage)=>prevPage + 1);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "relative mt-2 w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(search/* default */.A, {
                        className: "absolute left-2 top-1/2 h-6 w-4 -translate-y-1/2 text-slate-500"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                        value: query,
                        onChange: handleChange,
                        placeholder: t("environments.surveys.edit.try_lollipop_or_mountain"),
                        className: "pl-8",
                        ref: inputFocus,
                        "aria-label": t("environments.surveys.edit.search_for_images")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "relative mt-4 grid grid-cols-3 gap-1",
                children: [
                    images.length > 0 && images.map((image)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                    width: 300,
                                    height: 200,
                                    src: image.urls.regularWithAttribution,
                                    alt: image.alt_description,
                                    onClick: ()=>handleImageSelected(image.urls.regularWithAttribution, image.urls.download),
                                    className: "h-full cursor-pointer rounded-lg object-cover"
                                }),
                                image.authorName && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                    className: "absolute bottom-1 right-1 hidden rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white group-hover:block",
                                    children: image.authorName
                                })
                            ]
                        }, image.id)),
                    isLoading && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "col-span-3 flex items-center justify-center p-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
                    }),
                    images.length > 0 && !isLoading && query.trim() !== "" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        size: "sm",
                        variant: "secondary",
                        className: "col-span-3 mt-3 flex items-center justify-center",
                        type: "button",
                        onClick: handleLoadMore,
                        children: t("common.load_more")
                    }),
                    !isLoading && images.length === 0 && query.trim() !== "" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "col-span-3 flex items-center justify-center text-sm text-slate-500",
                        children: t("environments.surveys.edit.no_images_found_for", {
                            query: query
                        })
                    })
                ]
            })
        ]
    });
};

;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/SurveyBgSelectorTab.tsx
/* __next_internal_client_entry_do_not_use__ SurveyBgSelectorTab auto */ 








const SurveyBgSelectorTab = ({ handleBgChange, colors, bgType, bg, environmentId, isUnsplashConfigured })=>{
    const [activeTab, setActiveTab] = (0,ssr_react.useState)(bgType || "color");
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [parent] = (0,react/* useAutoAnimate */.Q)();
    const [colorBackground, setColorBackground] = (0,ssr_react.useState)(bg);
    const [animationBackground, setAnimationBackground] = (0,ssr_react.useState)(bg);
    const [uploadBackground, setUploadBackground] = (0,ssr_react.useState)(bg);
    const tabs = [
        {
            id: "color",
            label: t("environments.surveys.edit.color")
        },
        {
            id: "animation",
            label: t("environments.surveys.edit.animation")
        },
        {
            id: "upload",
            label: t("environments.surveys.edit.upload")
        },
        {
            id: "image",
            label: t("environments.surveys.edit.image")
        }
    ];
    (0,ssr_react.useEffect)(()=>{
        if (bgType === "color") {
            setColorBackground(bg);
            setAnimationBackground("");
            setUploadBackground("");
        }
        if (bgType === "animation") {
            setAnimationBackground(bg);
            setColorBackground("");
            setUploadBackground("");
        }
        if (isUnsplashConfigured && bgType === "image") {
            setColorBackground("");
            setAnimationBackground("");
            setUploadBackground("");
        }
        if (bgType === "upload") {
            setUploadBackground(bg);
            setColorBackground("");
            setAnimationBackground("");
        }
    }, [
        bg,
        bgType,
        isUnsplashConfigured
    ]);
    const renderContent = ()=>{
        switch(activeTab){
            case "color":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ColorSurveyBg, {
                    handleBgChange: handleBgChange,
                    colors: colors,
                    background: colorBackground
                });
            case "animation":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(AnimatedSurveyBg, {
                    handleBgChange: handleBgChange,
                    background: animationBackground
                });
            case "upload":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(UploadImageSurveyBg, {
                    environmentId: environmentId,
                    handleBgChange: handleBgChange,
                    background: uploadBackground
                });
            case "image":
                if (isUnsplashConfigured) {
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(ImageFromUnsplashSurveyBg, {
                        handleBgChange: handleBgChange
                    });
                }
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "mt-4 flex flex-col items-center justify-center rounded-lg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(tab_bar/* TabBar */.V, {
                tabs: tabs.filter((tab)=>tab.id !== "image" || isUnsplashConfigured),
                activeId: activeTab,
                setActiveId: setActiveTab,
                tabStyle: "button",
                className: "bg-slate-100"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "w-full rounded-b-lg border-x border-b border-slate-200 px-4 pb-4 pt-2",
                ref: parent,
                children: renderContent()
            })
        ]
    });
};

;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/BackgroundStylingCard.tsx
/* __next_internal_client_entry_do_not_use__ BackgroundStylingCard auto */ 









const BackgroundStylingCard = ({ open, setOpen, colors, isSettingsPage = false, disabled, environmentId, isUnsplashConfigured, form })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [parent] = (0,react/* useAutoAnimate */.Q)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Root */.bL, {
        open: open,
        onOpenChange: (openState)=>{
            if (disabled) return;
            setOpen(openState);
        },
        className: (0,cn.cn)(open ? "" : "hover:bg-slate-50", "w-full space-y-2 rounded-lg border border-slate-300 bg-white"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* CollapsibleTrigger */.R6, {
                asChild: true,
                disabled: disabled,
                className: (0,cn.cn)("w-full cursor-pointer rounded-lg hover:bg-slate-50", disabled && "cursor-not-allowed opacity-60 hover:bg-white"),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "inline-flex px-4 py-4",
                    children: [
                        !isSettingsPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center pl-2 pr-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(check/* default */.A, {
                                strokeWidth: 3,
                                className: "h-7 w-7 rounded-full border border-green-300 bg-green-100 p-1.5 text-green-600"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                            className: (0,cn.cn)("font-semibold text-slate-800", isSettingsPage ? "text-sm" : "text-base"),
                                            children: t("environments.surveys.edit.background_styling")
                                        }),
                                        isSettingsPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(badge/* Badge */.E, {
                                            type: "gray",
                                            size: "normal",
                                            text: t("common.link_surveys")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: (0,cn.cn)("mt-1 text-slate-500", isSettingsPage ? "text-xs" : "text-sm"),
                                    children: t("environments.surveys.edit.change_the_background_to_a_color_image_or_animation")
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* CollapsibleContent */.Ke, {
                className: "flex flex-col",
                ref: parent,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                        className: "pt-1 text-slate-600"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-6 p-6 pt-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "background",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.change_background")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.pick_a_background_from_our_library_or_upload_your_own")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SurveyBgSelectorTab, {
                                                    bg: field.value?.bg ?? "",
                                                    handleBgChange: (bg, bgType)=>{
                                                        field.onChange({
                                                            ...field.value,
                                                            bg,
                                                            bgType,
                                                            brightness: 100
                                                        });
                                                    },
                                                    colors: colors,
                                                    bgType: field.value?.bgType ?? "color",
                                                    environmentId: environmentId,
                                                    isUnsplashConfigured: isUnsplashConfigured
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex flex-col justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "flex flex-col gap-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                        className: "flex flex-col justify-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                            control: form.control,
                                            name: "background.brightness",
                                            render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                                    children: t("environments.surveys.edit.brightness")
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                                    children: t("environments.surveys.edit.darken_or_lighten_background_of_your_choice")
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                                className: "rounded-lg border bg-slate-50 p-6",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(slider/* Slider */.A, {
                                                                    value: [
                                                                        field.value ?? 100
                                                                    ],
                                                                    max: 200,
                                                                    onValueChange: (value)=>{
                                                                        field.onChange(value[0]);
                                                                    }
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 979493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ CardStylingSettings)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/badge/index.tsx
var badge = __webpack_require__(661989);
;// ./modules/ui/components/icons/casual-card-arrangement-icon.tsx

const CasualCardArrangementIcon = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "17",
        height: "17",
        fill: "none",
        viewBox: "0 0 17 17",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("g", {
                fill: "#1E293B",
                clipPath: "url(#clip0_604_1310)",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
                        width: "13.92",
                        height: "10.827",
                        x: "-0.258",
                        y: "8.297",
                        fillOpacity: "0.25",
                        rx: "1.031",
                        transform: "rotate(-38 -.258 8.297)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
                        width: "13.92",
                        height: "10.827",
                        x: "0.219",
                        y: "5.422",
                        fillOpacity: "0.5",
                        rx: "1.031",
                        transform: "rotate(-19 .219 5.422)"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
                        width: "13",
                        height: "11",
                        x: "2.168",
                        y: "2.809",
                        rx: "1.031"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("clipPath", {
                    id: "clip0_604_1310",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("path", {
                        fill: "#fff",
                        d: "M0 0H17V17H0z"
                    })
                })
            })
        ]
    });
};

;// ./modules/ui/components/icons/simple-card-arrangement-icon.tsx

const SimpleCardsArrangementIcon = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "13",
        fill: "none",
        viewBox: "0 0 14 13",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
            width: "14",
            height: "11",
            y: "1",
            fill: "#1E293B",
            rx: "1.031"
        })
    });
};

;// ./modules/ui/components/icons/straight-card-arrangement-icon.tsx

const StraightCardArrangementIcon = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "17",
        fill: "none",
        viewBox: "0 0 14 17",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
                width: "10",
                height: "9",
                x: "2",
                y: "1",
                fill: "#1E293B",
                fillOpacity: "0.25",
                rx: "1.031"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
                width: "12",
                height: "9",
                x: "1",
                y: "3",
                fill: "#1E293B",
                fillOpacity: "0.6",
                rx: "1.031"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("rect", {
                width: "14",
                height: "11",
                y: "5",
                fill: "#1E293B",
                rx: "1.031"
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/ui/components/styling-tabs/index.tsx
var styling_tabs = __webpack_require__(862371);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
;// ./modules/ui/components/card-arrangement-tabs/index.tsx
/* __next_internal_client_entry_do_not_use__ CardArrangementTabs auto */ 





const CardArrangementTabs = ({ activeCardArrangement, surveyType, setActiveCardArrangement, disabled = false })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const handleCardArrangementChange = (arrangement)=>{
        if (disabled) return;
        setActiveCardArrangement(arrangement, surveyType);
    };
    const getCardArrangementIcon = (cardArrangement)=>{
        switch(cardArrangement){
            case "casual":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CasualCardArrangementIcon, {});
            case "straight":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(StraightCardArrangementIcon, {});
            default:
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(SimpleCardsArrangementIcon, {});
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "w-full gap-2 rounded-md bg-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(styling_tabs/* StylingTabs */.n, {
            id: "card-arrangement",
            onChange: (value)=>{
                handleCardArrangementChange(value);
            },
            options: [
                {
                    value: "casual",
                    label: t("environments.surveys.edit.casual"),
                    icon: getCardArrangementIcon("casual")
                },
                {
                    value: "straight",
                    label: t("environments.surveys.edit.straight"),
                    icon: getCardArrangementIcon("straight")
                },
                {
                    value: "simple",
                    label: t("environments.surveys.edit.simple"),
                    icon: getCardArrangementIcon("simple")
                }
            ],
            defaultSelected: activeCardArrangement,
            className: "w-full",
            tabsContainerClassName: "p-1 gap-2"
        })
    });
};

// EXTERNAL MODULE: ./modules/ui/components/color-picker/index.tsx + 1 modules
var color_picker = __webpack_require__(30574);
// EXTERNAL MODULE: ./modules/ui/components/form/index.tsx
var components_form = __webpack_require__(184142);
// EXTERNAL MODULE: ./modules/ui/components/slider/index.tsx
var slider = __webpack_require__(477787);
// EXTERNAL MODULE: ./modules/ui/components/switch/index.tsx
var components_switch = __webpack_require__(493204);
// EXTERNAL MODULE: ../../node_modules/@formkit/auto-animate/react/index.mjs + 1 modules
var react = __webpack_require__(611569);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-collapsible/dist/index.mjs
var dist = __webpack_require__(302792);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(129170);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var ssr_react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ../../packages/lib/styling/constants.ts
var constants = __webpack_require__(361414);
;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/CardStylingSettings.tsx
/* __next_internal_client_entry_do_not_use__ CardStylingSettings auto */ 













const CardStylingSettings = ({ isSettingsPage = false, surveyType, disabled, open, project, setOpen, form })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const isAppSurvey = surveyType === "app";
    const surveyTypeDerived = isAppSurvey ? "App" : "Link";
    const isLogoVisible = !!project.logo?.url;
    const linkCardArrangement = form.watch("cardArrangement.linkSurveys") ?? "straight";
    const appCardArrangement = form.watch("cardArrangement.appSurveys") ?? "straight";
    const roundness = form.watch("roundness") ?? 8;
    const [parent] = (0,react/* useAutoAnimate */.Q)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Root */.bL, {
        open: open,
        onOpenChange: (openState)=>{
            if (disabled) return;
            setOpen(openState);
        },
        className: "w-full rounded-lg border border-slate-300 bg-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* CollapsibleTrigger */.R6, {
                asChild: true,
                disabled: disabled,
                className: (0,cn.cn)("w-full cursor-pointer rounded-lg hover:bg-slate-50", disabled && "cursor-not-allowed opacity-60 hover:bg-white"),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "inline-flex px-4 py-4",
                    children: [
                        !isSettingsPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center pl-2 pr-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(check/* default */.A, {
                                strokeWidth: 3,
                                className: "h-7 w-7 rounded-full border border-green-300 bg-green-100 p-1.5 text-green-600"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: (0,cn.cn)("font-semibold text-slate-800", isSettingsPage ? "text-sm" : "text-base"),
                                    children: t("environments.surveys.edit.card_styling")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: (0,cn.cn)("mt-1 text-slate-500", isSettingsPage ? "text-xs" : "text-sm"),
                                    children: t("environments.surveys.edit.style_the_survey_card")
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* CollapsibleContent */.Ke, {
                className: "flex flex-col",
                ref: parent,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                        className: "py-1 text-slate-600"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-6 p-6 pt-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex flex-col justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                    control: form.control,
                                    name: "roundness",
                                    render: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                            children: t("environments.surveys.edit.roundness")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                            children: t("environments.surveys.edit.change_the_border_radius_of_the_card_and_the_inputs")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                        className: "rounded-lg border bg-slate-50 p-6",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(slider/* Slider */.A, {
                                                            value: [
                                                                roundness
                                                            ],
                                                            max: 22,
                                                            onValueChange: (value)=>{
                                                                form.setValue("roundness", value[0]);
                                                            }
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "cardBackgroundColor.light",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.card_background_color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.change_the_background_color_of_the_card")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                    color: field.value || constants/* COLOR_DEFAULTS */.X.cardBackgroundColor,
                                                    onChange: (color)=>field.onChange(color),
                                                    containerClass: "max-w-xs"
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "cardBorderColor.light",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.card_border_color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.change_the_border_color_of_the_card")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                    color: field.value || constants/* COLOR_DEFAULTS */.X.cardBorderColor,
                                                    onChange: (color)=>field.onChange(color),
                                                    containerClass: "max-w-xs"
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "cardShadowColor.light",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.card_shadow_color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.change_the_shadow_color_of_the_card")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                    color: field.value || constants/* COLOR_DEFAULTS */.X.cardShadowColor,
                                                    onChange: (color)=>field.onChange(color),
                                                    containerClass: "max-w-xs"
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "cardArrangement",
                                render: ()=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.card_arrangement_for_survey_type_derived", {
                                                            surveyTypeDerived: surveyTypeDerived
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.how_funky_do_you_want_your_cards_in_survey_type_derived_surveys", {
                                                            surveyTypeDerived: surveyTypeDerived
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(CardArrangementTabs, {
                                                    surveyType: isAppSurvey ? "app" : "link",
                                                    activeCardArrangement: isAppSurvey ? appCardArrangement : linkCardArrangement,
                                                    setActiveCardArrangement: (value, type)=>{
                                                        type === "app" ? form.setValue("cardArrangement.appSurveys", value) : form.setValue("cardArrangement.linkSurveys", value);
                                                    }
                                                }, isAppSurvey ? "app" : "link")
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex items-center space-x-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                    control: form.control,
                                    name: "hideProgressBar",
                                    render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                            className: "flex w-full items-center gap-2 space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_switch/* Switch */.d, {
                                                        id: "hideProgressBar",
                                                        checked: !!field.value,
                                                        onCheckedChange: (checked)=>field.onChange(checked)
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                            children: t("environments.surveys.edit.hide_progress_bar")
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                            children: t("environments.surveys.edit.disable_the_visibility_of_survey_progress")
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                })
                            }),
                            isLogoVisible && (!surveyType || surveyType === "link") && !isSettingsPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex items-center space-x-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                    control: form.control,
                                    name: "isLogoHidden",
                                    render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                            className: "flex w-full items-center gap-2 space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_switch/* Switch */.d, {
                                                        id: "isLogoHidden",
                                                        checked: !!field.value,
                                                        onCheckedChange: (checked)=>field.onChange(checked)
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormLabel */.lR, {
                                                            children: [
                                                                t("environments.surveys.edit.hide_logo"),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(badge/* Badge */.E, {
                                                                    type: "gray",
                                                                    size: "normal",
                                                                    text: t("common.link_surveys")
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                            children: t("environments.surveys.edit.hide_the_logo_in_this_specific_survey")
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                })
                            }),
                            (!surveyType || isAppSurvey) && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "flex max-w-xs flex-col gap-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                    className: "flex items-center space-x-1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                        control: form.control,
                                        name: "highlightBorderColor",
                                        render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                                className: "flex w-full flex-col gap-2 space-y-0",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_switch/* Switch */.d, {
                                                                    id: "highlightBorderColor",
                                                                    checked: !!field.value,
                                                                    onCheckedChange: (checked)=>{
                                                                        if (!checked) {
                                                                            field.onChange(null);
                                                                            return;
                                                                        }
                                                                        field.onChange({
                                                                            light: constants/* COLOR_DEFAULTS */.X.highlightBorderColor
                                                                        });
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                                        children: t("environments.surveys.edit.add_highlight_border")
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                                        className: "text-xs font-normal text-slate-500",
                                                                        children: t("environments.surveys.edit.add_highlight_border_description")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    !!field.value && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                            color: field.value?.light ?? constants/* COLOR_DEFAULTS */.X.highlightBorderColor,
                                                            onChange: (color)=>field.onChange({
                                                                    ...field.value,
                                                                    light: color
                                                                }),
                                                            containerClass: "my-0"
                                                        })
                                                    })
                                                ]
                                            })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 200999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ FormStylingSettings)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/color-picker/index.tsx + 1 modules
var color_picker = __webpack_require__(30574);
// EXTERNAL MODULE: ./modules/ui/components/form/index.tsx
var components_form = __webpack_require__(184142);
// EXTERNAL MODULE: ../../node_modules/@formkit/auto-animate/react/index.mjs + 1 modules
var react = __webpack_require__(611569);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-collapsible/dist/index.mjs
var dist = __webpack_require__(302792);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(129170);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/sparkles.js
var sparkles = __webpack_require__(158539);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var ssr_react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ../../packages/lib/styling/constants.ts
var constants = __webpack_require__(361414);
;// ../../packages/lib/utils/colors.ts
const hexToRGBA = (hex, opacity)=>{
    // return undefined if hex is undefined, this is important for adding the default values to the CSS variables
    // TODO: find a better way to handle this
    if (!hex || hex === "") return undefined;
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_, r, g, b)=>r + r + g + g + b + b);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "";
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
const lightenDarkenColor = (hexColor, magnitude)=>{
    hexColor = hexColor.replace(`#`, ``);
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    if (hexColor.length === 3) {
        hexColor = hexColor.split("").map((char)=>char + char).join("");
    }
    if (hexColor.length === 6) {
        let decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r = Math.max(0, Math.min(255, r)); // Clamp value between 0 and 255
        let g = (decimalColor >> 8 & 0x00ff) + magnitude;
        g = Math.max(0, Math.min(255, g)); // Clamp value between 0 and 255
        let b = (decimalColor & 0x0000ff) + magnitude;
        b = Math.max(0, Math.min(255, b)); // Clamp value between 0 and 255
        // Convert back to hex and return
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    } else {
        // Return the original color if it's neither 3 nor 6 characters
        return hexColor;
    }
};
const mixColor = (hexColor, mixWithHex, weight)=>{
    // Convert both colors to RGBA format
    const color1 = hexToRGBA(hexColor, 1) || "";
    const color2 = hexToRGBA(mixWithHex, 1) || "";
    // Extract RGBA values
    const [r1, g1, b1] = color1.match(/\d+/g)?.map(Number) || [
        0,
        0,
        0
    ];
    const [r2, g2, b2] = color2.match(/\d+/g)?.map(Number) || [
        0,
        0,
        0
    ];
    // Mix the colors
    const r = Math.round(r1 * (1 - weight) + r2 * weight);
    const g = Math.round(g1 * (1 - weight) + g2 * weight);
    const b = Math.round(b1 * (1 - weight) + b2 * weight);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
const isLight = (color)=>{
    let r, g, b;
    if (color.length === 4) {
        r = parseInt(color[1] + color[1], 16);
        g = parseInt(color[2] + color[2], 16);
        b = parseInt(color[3] + color[3], 16);
    } else if (color.length === 7) {
        r = parseInt(color[1] + color[2], 16);
        g = parseInt(color[3] + color[4], 16);
        b = parseInt(color[5] + color[6], 16);
    }
    if (r === undefined || g === undefined || b === undefined) {
        throw new Error("Invalid color");
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > 128;
};

;// ./app/(app)/(survey-editor)/environments/[environmentId]/surveys/[surveyId]/edit/components/FormStylingSettings.tsx
/* __next_internal_client_entry_do_not_use__ FormStylingSettings auto */ 











const FormStylingSettings = ({ open, isSettingsPage = false, disabled = false, setOpen, form })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const brandColor = form.watch("brandColor.light") || constants/* COLOR_DEFAULTS */.X.brandColor;
    const background = form.watch("background");
    const highlightBorderColor = form.watch("highlightBorderColor");
    const setQuestionColor = (color)=>form.setValue("questionColor.light", color);
    const setInputColor = (color)=>form.setValue("inputColor.light", color);
    const setInputBorderColor = (color)=>form.setValue("inputBorderColor.light", color);
    const setCardBackgroundColor = (color)=>form.setValue("cardBackgroundColor.light", color);
    const setCardBorderColor = (color)=>form.setValue("cardBorderColor.light", color);
    const setCardShadowColor = (color)=>form.setValue("cardShadowColor.light", color);
    const setBackgroundColor = (color)=>{
        form.setValue("background", {
            bg: color,
            bgType: "color"
        });
    };
    const setHighlightBorderColor = (color)=>{
        form.setValue("highlightBorderColor", {
            light: mixColor(color, "#ffffff", 0.25)
        });
    };
    const suggestColors = ()=>{
        // mix the brand color with different weights of white and set the result as the other colors
        setQuestionColor(mixColor(brandColor, "#000000", 0.35));
        setInputColor(mixColor(brandColor, "#ffffff", 0.92));
        setInputBorderColor(mixColor(brandColor, "#ffffff", 0.6));
        setCardBackgroundColor(mixColor(brandColor, "#ffffff", 0.97));
        setCardBorderColor(mixColor(brandColor, "#ffffff", 0.8));
        setCardShadowColor(brandColor);
        if (!background || background?.bgType === "color") {
            setBackgroundColor(mixColor(brandColor, "#ffffff", 0.855));
        }
        if (highlightBorderColor) {
            setHighlightBorderColor(brandColor);
        }
    };
    const [parent] = (0,react/* useAutoAnimate */.Q)();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* Root */.bL, {
        open: open,
        onOpenChange: (openState)=>{
            if (disabled) return;
            setOpen(openState);
        },
        className: "w-full rounded-lg border border-slate-300 bg-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* CollapsibleTrigger */.R6, {
                asChild: true,
                disabled: disabled,
                className: (0,cn.cn)("w-full cursor-pointer rounded-lg hover:bg-slate-50", disabled && "cursor-not-allowed opacity-60 hover:bg-white"),
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "inline-flex px-4 py-4",
                    children: [
                        !isSettingsPage && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "flex items-center pl-2 pr-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(check/* default */.A, {
                                strokeWidth: 3,
                                className: "h-7 w-7 rounded-full border border-green-300 bg-green-100 p-1.5 text-green-600"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: (0,cn.cn)("font-semibold text-slate-800", isSettingsPage ? "text-sm" : "text-base"),
                                    children: t("environments.surveys.edit.form_styling")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                    className: (0,cn.cn)("mt-1 text-slate-500", isSettingsPage ? "text-xs" : "text-sm"),
                                    children: t("environments.surveys.edit.style_the_question_texts_descriptions_and_input_fields")
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dist/* CollapsibleContent */.Ke, {
                className: "flex flex-col",
                ref: parent,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                        className: "py-1 text-slate-600"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-6 p-6 pt-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                        control: form.control,
                                        name: "brandColor.light",
                                        render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                                children: t("environments.surveys.edit.brand_color")
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                                children: t("environments.surveys.edit.change_the_brand_color_of_the_survey")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                            color: field.value || constants/* COLOR_DEFAULTS */.X.brandColor,
                                                            onChange: (color)=>field.onChange(color),
                                                            containerClass: "max-w-xs"
                                                        })
                                                    })
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_button/* Button */.$, {
                                        type: "button",
                                        variant: "secondary",
                                        size: "sm",
                                        className: "w-fit",
                                        onClick: ()=>suggestColors(),
                                        children: [
                                            t("environments.surveys.edit.suggest_colors"),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(sparkles/* default */.A, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "questionColor.light",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.question_color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.change_the_question_color_of_the_survey")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                    color: field.value || constants/* COLOR_DEFAULTS */.X.questionColor,
                                                    onChange: (color)=>field.onChange(color),
                                                    containerClass: "max-w-xs"
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "inputColor.light",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.input_color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.change_the_background_color_of_the_input_fields")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                    color: field.value || constants/* COLOR_DEFAULTS */.X.inputColor,
                                                    onChange: (color)=>field.onChange(color),
                                                    containerClass: "max-w-xs"
                                                })
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormField */.zB, {
                                control: form.control,
                                name: "inputBorderColor.light",
                                render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(components_form/* FormItem */.eI, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormLabel */.lR, {
                                                        children: t("environments.surveys.edit.input_border_color")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormDescription */.Rr, {
                                                        children: t("environments.surveys.edit.change_the_border_color_of_the_input_fields")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_form/* FormControl */.MJ, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(color_picker/* ColorPicker */.s, {
                                                    color: field.value || constants/* COLOR_DEFAULTS */.X.inputBorderColor,
                                                    onChange: (color)=>field.onChange(color),
                                                    containerClass: "max-w-xs"
                                                })
                                            })
                                        ]
                                    })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 115713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ AdvancedOptionToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61330);
/* harmony import */ var _modules_ui_components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(493204);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);




const AdvancedOptionToggle = ({ isChecked, onToggle, htmlId, title, description, children, childBorder, customContainerClass, disabled = false })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("px-4 py-2", customContainerClass),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_switch__WEBPACK_IMPORTED_MODULE_2__/* .Switch */ .d, {
                        id: htmlId,
                        checked: isChecked,
                        onCheckedChange: onToggle,
                        disabled: disabled
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_label__WEBPACK_IMPORTED_MODULE_1__/* .Label */ .J, {
                        htmlFor: htmlId,
                        className: "cursor-pointer rounded-l-lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                    className: "text-sm font-semibold text-slate-700",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-xs font-normal text-slate-500",
                                    children: description
                                })
                            ]
                        })
                    })
                ]
            }),
            children && isChecked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: `mt-4 flex w-full items-center space-x-1 rounded-lg ${childBorder ? "border" : ""} bg-slate-50`,
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 870255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ AlertDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248852);
/* harmony import */ var _modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(383207);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* __next_internal_client_entry_do_not_use__ AlertDialog auto */ 



const AlertDialog = ({ open, setOpen, headerText, mainText, declineBtnLabel, onDecline, confirmBtnLabel, declineBtnVariant = "ghost", onConfirm })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_modal__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .a, {
        open: open,
        setOpen: setOpen,
        title: headerText,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "mb-6 text-slate-900",
                children: mainText ?? t("common.are_you_sure_this_action_cannot_be_undone")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-x-2 text-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        variant: declineBtnVariant,
                        onClick: onDecline,
                        children: declineBtnLabel || "Discard"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
                        onClick: ()=>{
                            if (onConfirm) {
                                onConfirm();
                            } else {
                                setOpen(false);
                            }
                        },
                        children: confirmBtnLabel
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 886762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fc: () => (/* binding */ Alert),
/* harmony export */   TN: () => (/* binding */ AlertDescription),
/* harmony export */   XL: () => (/* binding */ AlertTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607918);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);




const alertVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .F)("relative w-full rounded-xl border p-3 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-3 [&>svg]:top-3 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-9", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
            info: "text-slate-800 bg-brand/5",
            warning: "text-yellow-700 bg-yellow-50",
            error: "border-error/50 dark:border-error [&>svg]:text-error text-error"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        role: "alert",
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 cursor-default font-medium leading-none", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("cursor-default text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";



/***/ }),

/***/ 653239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ClientLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(620394);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ ClientLogo auto */ 





const ClientLogo = ({ environmentId, project, previewSurvey = false })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)(previewSurvey ? "" : "left-3 top-3 md:left-7 md:top-7", "group absolute z-0 rounded-lg"),
        style: {
            backgroundColor: project.logo?.bgColor
        },
        children: [
            previewSurvey && environmentId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/environments/${environmentId}/project/look`,
                className: "group/link absolute h-full w-full hover:cursor-pointer",
                target: "_blank",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowUpRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                    size: 24,
                    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white/80 p-0.5 text-slate-700 opacity-0 transition-all duration-200 ease-in-out group-hover/link:opacity-100"
                })
            }),
            project.logo?.url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: project.logo?.url,
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)(previewSurvey ? "max-h-12" : "max-h-16 md:max-h-20", "w-auto max-w-40 rounded-lg object-contain p-1 md:max-w-56"),
                width: 256,
                height: 64,
                alt: "Company Logo"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/environments/${environmentId}/project/look`,
                onClick: (e)=>{
                    if (!environmentId) {
                        e.preventDefault();
                    }
                },
                className: "whitespace-nowrap rounded-md border border-dashed border-slate-400 bg-slate-200 px-6 py-3 text-xs text-slate-900 opacity-50 backdrop-blur-sm hover:cursor-pointer hover:border-slate-600",
                target: "_blank",
                children: t("common.add_logo")
            })
        ]
    });
};


/***/ }),

/***/ 30574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ ColorPicker)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-colorful/dist/index.mjs
var dist = __webpack_require__(516846);
// EXTERNAL MODULE: ../../packages/lib/utils/hooks/useClickOutside.ts
var useClickOutside = __webpack_require__(593827);
;// ./modules/ui/components/color-picker/components/popover-picker.tsx




const PopoverPicker = ({ color, onChange, disabled = false })=>{
    const popover = (0,react.useRef)(null);
    const [isOpen, toggle] = (0,react.useState)(false);
    const close = (0,react.useCallback)(()=>toggle(false), []);
    (0,useClickOutside/* useClickOutside */.L)(popover, close);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "picker relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                id: "color-picker",
                className: "h-6 w-10 cursor-pointer rounded border border-slate-200",
                style: {
                    backgroundColor: color,
                    opacity: disabled ? 0.5 : 1
                },
                onClick: ()=>{
                    if (!disabled) {
                        toggle(!isOpen);
                    }
                }
            }),
            isOpen && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "absolute right-0 z-20 mt-2 origin-top-right",
                ref: popover,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                    className: "rounded bg-white p-2 shadow-lg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* HexColorPicker */.jI, {
                        color: color,
                        onChange: onChange
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
;// ./modules/ui/components/color-picker/index.tsx
/* __next_internal_client_entry_do_not_use__ ColorPicker auto */ 



const ColorPicker = ({ color, onChange, containerClass, disabled = false })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: (0,cn.cn)("my-2", containerClass),
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "flex w-full items-center justify-between space-x-1 rounded-md border border-slate-300 bg-white px-2 text-sm text-slate-400",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "flex w-full items-center",
                    children: [
                        "#",
                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(dist/* HexColorInput */.HC, {
                            className: "ml-2 mr-2 h-10 w-32 flex-1 border-0 bg-transparent text-slate-500 outline-none focus:border-none",
                            color: color,
                            onChange: onChange,
                            id: "color",
                            "aria-label": "Primary color",
                            disabled: disabled
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsx)(PopoverPicker, {
                    color: color,
                    onChange: onChange,
                    disabled: disabled
                })
            ]
        })
    });
};


/***/ }),

/***/ 769816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ Uploader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ArrowUpFromLineIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(552285);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);



const Uploader = ({ id, name, ref, handleDragOver, uploaderClassName, handleDrop, allowedFileExtensions, multiple, handleUpload, uploadMore = false, disabled = false })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        htmlFor: `${id}-${name}`,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-700", uploaderClassName, disabled ? "cursor-not-allowed opacity-50" : "hover:bg-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"),
        onDragOver: (e)=>!disabled && handleDragOver(e),
        onDrop: (e)=>!disabled && handleDrop(e),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center justify-center pb-6 pt-5",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_ArrowUpFromLineIcon_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    className: "h-6 text-slate-500"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("mt-2 text-center text-sm text-slate-500", uploadMore && "text-xs"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "font-semibold",
                        children: "Click or drag to upload files."
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                    type: "file",
                    id: `${id}-${name}`,
                    name: `${id}-${name}`,
                    accept: allowedFileExtensions.map((ext)=>`.${ext}`).join(","),
                    className: "hidden",
                    multiple: multiple,
                    disabled: disabled,
                    ref: ref,
                    onChange: async (e)=>{
                        let selectedFiles = Array.from(e.target?.files || []);
                        handleUpload(selectedFiles);
                    }
                })
            ]
        })
    });
};


/***/ }),

/***/ 675135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ FileInput)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(642725);
// EXTERNAL MODULE: ./modules/ui/components/loading-spinner/index.tsx
var loading_spinner = __webpack_require__(829884);
// EXTERNAL MODULE: ./modules/ui/components/options-switch/index.tsx
var options_switch = __webpack_require__(465775);
// EXTERNAL MODULE: ../../node_modules/@tolgee/react/dist/tolgee-react.esm.js
var tolgee_react_esm = __webpack_require__(397674);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(673766);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/file.js
var icons_file = __webpack_require__(787970);
// EXTERNAL MODULE: ../../node_modules/next/dist/api/image.js
var api_image = __webpack_require__(134088);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(891616);
// EXTERNAL MODULE: ../../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(986090);
// EXTERNAL MODULE: ../../packages/lib/cn.ts
var cn = __webpack_require__(983773);
// EXTERNAL MODULE: ./modules/ui/components/file-input/components/uploader.tsx
var uploader = __webpack_require__(769816);
// EXTERNAL MODULE: ./modules/ui/components/advanced-option-toggle/index.tsx
var advanced_option_toggle = __webpack_require__(115713);
// EXTERNAL MODULE: ./modules/ui/components/button/index.tsx
var components_button = __webpack_require__(248852);
// EXTERNAL MODULE: ./modules/ui/components/input/index.tsx
var input = __webpack_require__(438624);
// EXTERNAL MODULE: ../../node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(467935);
;// ../../packages/lib/utils/videoUpload.ts
const checkForYoutubeUrl = (url)=>{
    try {
        const youtubeUrl = new URL(url);
        if (youtubeUrl.protocol !== "https:") return false;
        const youtubeDomains = [
            "www.youtube.com",
            "www.youtu.be",
            "www.youtube-nocookie.com",
            "youtube.com",
            "youtu.be",
            "youtube-nocookie.com"
        ];
        const hostname = youtubeUrl.hostname;
        return youtubeDomains.includes(hostname);
    } catch (err) {
        // invalid URL
        return false;
    }
};
const checkForVimeoUrl = (url)=>{
    try {
        const vimeoUrl = new URL(url);
        if (vimeoUrl.protocol !== "https:") return false;
        const vimeoDomains = [
            "www.vimeo.com",
            "vimeo.com"
        ];
        const hostname = vimeoUrl.hostname;
        return vimeoDomains.includes(hostname);
    } catch (err) {
        // invalid URL
        return false;
    }
};
const checkForLoomUrl = (url)=>{
    try {
        const loomUrl = new URL(url);
        if (loomUrl.protocol !== "https:") return false;
        const loomDomains = [
            "www.loom.com",
            "loom.com"
        ];
        const hostname = loomUrl.hostname;
        return loomDomains.includes(hostname);
    } catch (err) {
        // invalid URL
        return false;
    }
};
const extractYoutubeId = (url)=>{
    let id = "";
    // Regular expressions for various YouTube URL formats
    const regExpList = [
        /youtu\.be\/([a-zA-Z0-9_-]+)/,
        /youtube\.com.*v=([a-zA-Z0-9_-]+)/,
        /youtube\.com.*embed\/([a-zA-Z0-9_-]+)/,
        /youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]+)/
    ];
    regExpList.some((regExp)=>{
        const match = url.match(regExp);
        if (match && match[1]) {
            id = match[1];
            return true;
        }
        return false;
    });
    return id || null;
};
const extractVimeoId = (url)=>{
    const regExp = /vimeo\.com\/(\d+)/;
    const match = url.match(regExp);
    if (match && match[1]) {
        return match[1];
    }
    return null;
};
const extractLoomId = (url)=>{
    const regExp = /loom\.com\/share\/([a-zA-Z0-9]+)/;
    const match = url.match(regExp);
    if (match && match[1]) {
        return match[1];
    }
    return null;
};
// Always convert a given URL into its embed form if supported.
const convertToEmbedUrl = (url)=>{
    // YouTube
    if (checkForYoutubeUrl(url)) {
        const videoId = extractYoutubeId(url);
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
    // Vimeo
    if (checkForVimeoUrl(url)) {
        const videoId = extractVimeoId(url);
        if (videoId) {
            return `https://player.vimeo.com/video/${videoId}`;
        }
    }
    // Loom
    if (checkForLoomUrl(url)) {
        const videoId = extractLoomId(url);
        if (videoId) {
            return `https://www.loom.com/embed/${videoId}`;
        }
    }
    // If no supported platform found, return undefined
    return undefined;
};

// EXTERNAL MODULE: ./modules/ui/components/label/index.tsx
var label = __webpack_require__(61330);
// EXTERNAL MODULE: ./modules/ui/components/file-input/lib/utils.ts
var utils = __webpack_require__(220610);
;// ./modules/ui/components/file-input/components/video-settings.tsx
/* __next_internal_client_entry_do_not_use__ VideoSettings auto */ 










const VideoSettings = ({ uploadedVideoUrl, setUploadedVideoUrl, onFileUpload, videoUrl, setVideoUrlTemp })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const [isYoutubeLink, setIsYoutubeLink] = (0,react.useState)(checkForYoutubeUrl(uploadedVideoUrl));
    const [isYoutubePrivacyModeEnabled, setIsYoutubePrivacyModeEnabled] = (0,react.useState)((0,utils/* checkForYoutubePrivacyMode */.Gh)(uploadedVideoUrl));
    const [showPlatformWarning, setShowPlatformWarning] = (0,react.useState)(false);
    const toggleYoutubePrivacyMode = ()=>{
        setIsYoutubePrivacyModeEnabled(!isYoutubePrivacyModeEnabled);
        const videoId = extractYoutubeId(uploadedVideoUrl);
        if (!videoId) {
            dist/* toast */.oR.error(t("environments.surveys.edit.invalid_youtube_url"));
            return;
        }
        const newUrl = isYoutubePrivacyModeEnabled ? `https://www.youtube.com/embed/${videoId}` : `https://www.youtube-nocookie.com/embed/${videoId}`;
        setUploadedVideoUrl(newUrl);
        if (videoUrl) {
            onFileUpload([
                newUrl
            ], "video");
        }
    };
    const handleAddVideo = (e)=>{
        e.preventDefault();
        const embedUrl = convertToEmbedUrl(uploadedVideoUrl.trim());
        if (embedUrl) {
            setUploadedVideoUrl(embedUrl);
            onFileUpload([
                embedUrl
            ], "video");
        } else {
            dist/* toast */.oR.error(t("environments.surveys.edit.url_not_supported"));
        }
    };
    const handleRemoveVideo = (e)=>{
        e.preventDefault();
        setVideoUrlTemp("");
        setUploadedVideoUrl("");
        onFileUpload([], "video");
    };
    const handleVideoUrlChange = (e)=>{
        const videoUrl = e.target.value;
        setUploadedVideoUrl(videoUrl);
        // Check if the URL is from one of the supported platforms
        const isSupportedPlatform = [
            "youtube.com",
            "youtu.be",
            "youtube-nocookie.com",
            "vimeo.com",
            "loom.com"
        ].some((domain)=>videoUrl.includes(domain));
        setIsYoutubeLink(checkForYoutubeUrl(videoUrl));
        setShowPlatformWarning(!isSupportedPlatform);
        setIsYoutubePrivacyModeEnabled((0,utils/* checkForYoutubePrivacyMode */.Gh)(videoUrl));
    };
    const isAddButtonDisabled = ()=>{
        return uploadedVideoUrl.trim() === "";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "flex flex-col space-y-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(label/* Label */.J, {
                children: "Video URL (YouTube, Vimeo, or Loom):"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex h-10 items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(input/* Input */.p, {
                        className: "w-full",
                        placeholder: "https://www.youtube.com/watch?v=VIDEO_ID",
                        value: uploadedVideoUrl,
                        onChange: handleVideoUrlChange
                    }),
                    uploadedVideoUrl && videoUrl === uploadedVideoUrl ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        variant: "secondary",
                        onClick: handleRemoveVideo,
                        children: t("common.remove")
                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(components_button/* Button */.$, {
                        onClick: handleAddVideo,
                        disabled: isAddButtonDisabled(),
                        children: t("common.add")
                    })
                ]
            }),
            showPlatformWarning && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center space-x-2 rounded-md border bg-slate-100 p-2 text-xs text-slate-600",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(triangle_alert/* default */.A, {
                        className: "h-6 w-6"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        children: t("environments.surveys.edit.invalid_video_url_warning")
                    })
                ]
            }),
            isYoutubeLink && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(advanced_option_toggle/* AdvancedOptionToggle */.S, {
                htmlId: "youtubePrivacyMode",
                isChecked: isYoutubePrivacyModeEnabled,
                onToggle: toggleYoutubePrivacyMode,
                title: "YouTube Privacy Mode",
                description: "Keeps user tracking to a minimum",
                childBorder: true
            })
        ]
    });
};

;// ./modules/ui/components/file-input/index.tsx
/* __next_internal_client_entry_do_not_use__ FileInput auto */ 











const allowedFileTypesForPreview = [
    "png",
    "jpeg",
    "jpg",
    "webp"
];
const isImage = (name)=>{
    return allowedFileTypesForPreview.includes(name.split(".").pop());
};
const FileInput = ({ id, allowedFileExtensions, environmentId, onFileUpload, fileUrl, videoUrl, multiple = false, imageFit = "cover", maxSizeInMB, isVideoAllowed = false, disabled = false })=>{
    const { t } = (0,tolgee_react_esm/* useTranslate */.WD)();
    const options = [
        {
            value: "image",
            label: t("common.image")
        },
        {
            value: "video",
            label: t("common.video")
        }
    ];
    const [selectedFiles, setSelectedFiles] = (0,react.useState)([]);
    const [uploadedVideoUrl, setUploadedVideoUrl] = (0,react.useState)(videoUrl ?? "");
    const [activeTab, setActiveTab] = (0,react.useState)(videoUrl ? "video" : "image");
    const [imageUrlTemp, setImageUrlTemp] = (0,react.useState)(fileUrl ?? "");
    const [videoUrlTemp, setVideoUrlTemp] = (0,react.useState)(videoUrl ?? "");
    const handleUpload = async (files)=>{
        if (!multiple && files.length > 1) {
            files = [
                files[0]
            ];
            dist/* default */.Ay.error(t("common.only_one_file_allowed"));
        }
        const allowedFiles = (0,utils/* getAllowedFiles */.Wg)(files, allowedFileExtensions, maxSizeInMB);
        if (allowedFiles.length === 0) {
            return;
        }
        setSelectedFiles(allowedFiles.map((file)=>({
                url: URL.createObjectURL(file),
                name: file.name,
                uploaded: false
            })));
        const uploadedFiles = await Promise.allSettled(allowedFiles.map((file)=>(0,utils/* uploadFile */.QM)(file, allowedFileExtensions, environmentId)));
        if (uploadedFiles.length < allowedFiles.length || uploadedFiles.some((file)=>file.status === "rejected")) {
            if (uploadedFiles.length === 0) {
                dist/* default */.Ay.error(t("common.no_files_uploaded"));
            } else {
                dist/* default */.Ay.error(t("common.some_files_failed_to_upload"));
            }
        }
        const uploadedUrls = [];
        uploadedFiles.forEach((file)=>{
            if (file.status === "fulfilled") {
                uploadedUrls.push(encodeURI(file.value.url));
            }
        });
        if (uploadedUrls.length === 0) {
            setSelectedFiles([]);
            return;
        }
        onFileUpload(uploadedUrls, activeTab === "video" ? "video" : "image");
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "copy";
    };
    const handleDrop = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files);
        handleUpload(files);
    };
    const handleRemove = async (idx)=>{
        const newFileUrl = selectedFiles.filter((_, i)=>i !== idx).map((file)=>file.url);
        onFileUpload(newFileUrl, activeTab === "video" ? "video" : "image");
        setImageUrlTemp("");
    };
    const handleUploadMoreDrop = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const files = Array.from(e.dataTransfer.files);
        handleUploadMore(files);
    };
    const handleUploadMore = async (files)=>{
        const allowedFiles = (0,utils/* getAllowedFiles */.Wg)(files, allowedFileExtensions, maxSizeInMB);
        if (allowedFiles.length === 0) {
            return;
        }
        setSelectedFiles((prevFiles)=>[
                ...prevFiles,
                ...allowedFiles.map((file)=>({
                        url: URL.createObjectURL(file),
                        name: file.name,
                        uploaded: false
                    }))
            ]);
        const uploadedFiles = await Promise.allSettled(allowedFiles.map((file)=>(0,utils/* uploadFile */.QM)(file, allowedFileExtensions, environmentId)));
        if (uploadedFiles.length < allowedFiles.length || uploadedFiles.some((file)=>file.status === "rejected")) {
            if (uploadedFiles.length === 0) {
                dist/* default */.Ay.error(t("common.no_files_uploaded"));
            } else {
                dist/* default */.Ay.error(t("common.some_files_failed_to_upload"));
            }
        }
        const uploadedUrls = [];
        uploadedFiles.forEach((file)=>{
            if (file.status === "fulfilled") {
                uploadedUrls.push(encodeURI(file.value.url));
            }
        });
        const prevUrls = Array.isArray(fileUrl) ? fileUrl : fileUrl ? [
            fileUrl
        ] : [];
        onFileUpload([
            ...prevUrls,
            ...uploadedUrls
        ], activeTab === "video" ? "video" : "image");
    };
    (0,react.useEffect)(()=>{
        const getSelectedFiles = ()=>{
            if (fileUrl && typeof fileUrl === "string") {
                return [
                    {
                        url: fileUrl,
                        name: fileUrl.split("/").pop() || "",
                        uploaded: true
                    }
                ];
            } else if (fileUrl && Array.isArray(fileUrl)) {
                return fileUrl.map((url)=>({
                        url,
                        name: url.split("/").pop() || "",
                        uploaded: true
                    }));
            } else {
                return [];
            }
        };
        setSelectedFiles(getSelectedFiles());
    }, [
        fileUrl
    ]);
    // useEffect to handle the state when switching between 'image' and 'video' tabs.
    (0,react.useEffect)(()=>{
        if (activeTab === "image" && typeof imageUrlTemp === "string") {
            // Temporarily store the current video URL before switching tabs.
            setVideoUrlTemp(videoUrl ?? "");
            // Re-upload the image using the temporary image URL.
            onFileUpload([
                imageUrlTemp
            ], "image");
        } else if (activeTab === "video") {
            // Temporarily store the current image URL before switching tabs.
            setImageUrlTemp(fileUrl ?? "");
            // Re-upload the video using the temporary video URL.
            onFileUpload([
                videoUrlTemp
            ], "video");
        }
    }, [
        activeTab
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "w-full cursor-default",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            children: [
                isVideoAllowed && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(options_switch/* OptionsSwitch */.V, {
                    options: options,
                    currentOption: activeTab,
                    handleOptionChange: setActiveTab
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    children: [
                        activeTab === "video" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: (0,cn.cn)(isVideoAllowed && "rounded-b-lg border-x border-b border-slate-200 p-4"),
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(VideoSettings, {
                                uploadedVideoUrl: uploadedVideoUrl,
                                setUploadedVideoUrl: setUploadedVideoUrl,
                                onFileUpload: onFileUpload,
                                videoUrl: videoUrl ?? "",
                                setVideoUrlTemp: setVideoUrlTemp
                            })
                        }),
                        activeTab === "image" && /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: (0,cn.cn)(isVideoAllowed && "rounded-b-lg border-x border-b border-slate-200 p-4"),
                            children: selectedFiles.length > 0 ? multiple ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    selectedFiles.map((file, idx)=>/*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            children: isImage(file.name) ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "relative h-24 w-40 overflow-hidden rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                                        src: file.url,
                                                        alt: file.name,
                                                        fill: true,
                                                        sizes: "100%",
                                                        style: {
                                                            objectFit: "cover"
                                                        },
                                                        quality: 100,
                                                        className: !file.uploaded ? "opacity-50" : ""
                                                    }),
                                                    file.uploaded ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                        className: "absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-1 hover:bg-slate-200 hover:bg-white/90",
                                                        onClick: ()=>handleRemove(idx),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                                            className: "h-5 text-slate-700 hover:text-slate-900"
                                                        })
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "relative flex h-24 w-40 flex-col items-center justify-center rounded-lg border border-slate-300 px-2 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(icons_file/* default */.A, {
                                                        className: "h-6 text-slate-500"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                                        className: "mt-2 w-full truncate text-center text-sm text-slate-500",
                                                        title: file.name,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                            className: "font-semibold",
                                                            children: file.name
                                                        })
                                                    }),
                                                    file.uploaded ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                                        className: "absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-1 hover:bg-slate-200 hover:bg-white/90",
                                                        onClick: ()=>handleRemove(idx),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                                            className: "h-5 text-slate-700 hover:text-slate-900"
                                                        })
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
                                                ]
                                            })
                                        }, `${id}-${idx}`)),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(uploader/* Uploader */.d, {
                                        id: id,
                                        name: "uploadMore",
                                        handleDragOver: handleDragOver,
                                        uploaderClassName: "h-24 w-40",
                                        handleDrop: handleUploadMoreDrop,
                                        allowedFileExtensions: allowedFileExtensions,
                                        multiple: multiple,
                                        handleUpload: handleUploadMore,
                                        uploadMore: true,
                                        disabled: disabled
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                className: "h-52",
                                children: isImage(selectedFiles[0].name) ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "relative mx-auto h-full w-full overflow-hidden rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(api_image["default"], {
                                            src: selectedFiles[0].url,
                                            alt: selectedFiles[0].name,
                                            fill: true,
                                            sizes: "100%",
                                            style: {
                                                objectFit: imageFit
                                            },
                                            quality: 100,
                                            className: !selectedFiles[0].uploaded ? "opacity-50" : ""
                                        }),
                                        selectedFiles[0].uploaded ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-1 hover:bg-slate-200 hover:bg-white/90",
                                            onClick: ()=>handleRemove(0),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                                className: "h-5 text-slate-700 hover:text-slate-900"
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "relative flex h-full w-full flex-col items-center justify-center border border-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)(icons_file/* default */.A, {
                                            className: "h-6 text-slate-500"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                                            className: "mt-2 text-sm text-slate-500",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                                className: "font-semibold",
                                                children: selectedFiles[0].name
                                            })
                                        }),
                                        selectedFiles[0].uploaded ? /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                            className: "absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-1 hover:bg-slate-200 hover:bg-white/90",
                                            onClick: ()=>handleRemove(0),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)(x/* default */.A, {
                                                className: "h-5 text-slate-700 hover:text-slate-900"
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(loading_spinner.LoadingSpinner, {})
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime.jsx)(uploader/* Uploader */.d, {
                                id: id,
                                name: "selected-file",
                                handleDragOver: handleDragOver,
                                handleDrop: handleDrop,
                                uploaderClassName: "h-52 w-full",
                                allowedFileExtensions: allowedFileExtensions,
                                multiple: multiple,
                                handleUpload: handleUpload,
                                disabled: disabled
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 220610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gh: () => (/* binding */ checkForYoutubePrivacyMode),
/* harmony export */   QM: () => (/* binding */ uploadFile),
/* harmony export */   Wg: () => (/* binding */ getAllowedFiles)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(986090);
/* __next_internal_client_entry_do_not_use__ uploadFile,getAllowedFiles,checkForYoutubePrivacyMode auto */ 
const uploadFile = async (file, allowedFileExtensions, environmentId)=>{
    try {
        if (!(file instanceof Blob) || !(file instanceof File)) {
            throw new Error(`Invalid file type. Expected Blob or File, but received ${typeof file}`);
        }
        const fileBuffer = await file.arrayBuffer();
        // check the file size
        const bufferBytes = fileBuffer.byteLength;
        const bufferKB = bufferBytes / 1024;
        if (bufferKB > 10240) {
            const err = new Error("File size is greater than 10MB");
            err.name = "FileTooLargeError";
            throw err;
        }
        const payload = {
            fileName: file.name,
            fileType: file.type,
            allowedFileExtensions: allowedFileExtensions,
            environmentId: environmentId
        };
        const response = await fetch("/api/v1/management/storage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error(`Upload failed with status: ${response.status}`);
        }
        const json = await response.json();
        const { data } = json;
        const { signedUrl, fileUrl, signingData, presignedFields, updatedFileName } = data;
        let requestHeaders = {};
        if (signingData) {
            const { signature, timestamp, uuid } = signingData;
            requestHeaders = {
                "X-File-Type": file.type,
                "X-File-Name": encodeURIComponent(updatedFileName),
                "X-Environment-ID": environmentId ?? "",
                "X-Signature": signature,
                "X-Timestamp": String(timestamp),
                "X-UUID": uuid
            };
        }
        const formData = new FormData();
        if (presignedFields) {
            Object.keys(presignedFields).forEach((key)=>{
                formData.append(key, presignedFields[key]);
            });
        }
        // Add the actual file to be uploaded
        formData.append("file", file);
        const uploadResponse = await fetch(signedUrl, {
            method: "POST",
            ...signingData ? {
                headers: requestHeaders
            } : {},
            body: formData
        });
        if (!uploadResponse.ok) {
            throw new Error(`Upload failed with status: ${uploadResponse.status}`);
        }
        return {
            uploaded: true,
            url: fileUrl
        };
    } catch (error) {
        throw error;
    }
};
const getAllowedFiles = (files, allowedFileExtensions, maxSizeInMB)=>{
    const sizeExceedFiles = [];
    const unsupportedExtensionFiles = [];
    const allowedFiles = files.filter((file)=>{
        if (!file || !file.type) {
            return false;
        }
        const extension = file.name.split(".").pop();
        const fileSizeInMB = file.size / 1000000; // Kb -> Mb
        if (!allowedFileExtensions.includes(extension)) {
            unsupportedExtensionFiles.push(file.name);
            return false; // Exclude file if extension not allowed
        } else if (maxSizeInMB && fileSizeInMB > maxSizeInMB) {
            sizeExceedFiles.push(file.name);
            return false; // Exclude files larger than the maximum size
        }
        return true;
    });
    // Constructing toast messages based on the issues found
    let toastMessage = "";
    if (sizeExceedFiles.length > 0) {
        toastMessage += `Files exceeding size limit (${maxSizeInMB} MB): ${sizeExceedFiles.join(", ")}. `;
    }
    if (unsupportedExtensionFiles.length > 0) {
        toastMessage += `Unsupported file types: ${unsupportedExtensionFiles.join(", ")}.`;
    }
    if (toastMessage) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_0__/* .toast */ .oR.error(toastMessage);
    }
    return allowedFiles;
};
const checkForYoutubePrivacyMode = (url)=>{
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.host === "www.youtube-nocookie.com";
    } catch (e) {
        return false;
    }
};


/***/ }),

/***/ 184142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MJ: () => (/* binding */ FormControl),
/* harmony export */   Op: () => (/* reexport safe */ react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Op),
/* harmony export */   Rr: () => (/* binding */ FormDescription),
/* harmony export */   eI: () => (/* binding */ FormItem),
/* harmony export */   jQ: () => (/* binding */ FormError),
/* harmony export */   lR: () => (/* binding */ FormLabel),
/* harmony export */   zB: () => (/* binding */ FormField)
/* harmony export */ });
/* unused harmony export useFormField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189300);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(200667);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(983773);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61330);
/* __next_internal_client_entry_do_not_use__ useFormField,FormProvider,FormItem,FormLabel,FormControl,FormDescription,FormError,FormField auto */ 





const FormFieldContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .Controller */ .xI, {
            ...props
        })
    });
};
const useFormField = ()=>{
    const fieldContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(FormFieldContext);
    const itemContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(FormItemContext);
    const { getFieldState, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormContext */ .xW)();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
const FormItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const id = react__WEBPACK_IMPORTED_MODULE_1__.useId();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ref: ref,
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("space-y-2", className),
            ...props
        })
    });
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_label__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .J, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)(error ? "text-red-500" : "text-slate-800", className),
        htmlFor: formItemId,
        ...props
    });
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ ...props }, ref)=>{
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_5__/* .Slot */ .DX, {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    });
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    const { formItemId } = useFormField();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ref: ref,
        id: formItemId,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("text-xs text-slate-500", className),
        ...props
    });
});
FormDescription.displayName = "FormDescription";
const FormError = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>{
    const { error, formMessageId } = useFormField();
    const errorMessage = error?.message || error?.root?.message;
    const body = error ? String(errorMessage) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        ref: ref,
        id: formMessageId,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_4__.cn)("text-error text-sm", className),
        ...props,
        children: body
    });
});
FormError.displayName = "FormError";



/***/ }),

/***/ 829884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ LoadingSpinner auto */ 

const LoadingSpinner = ({ className = "h-6 w-6" })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex h-full w-full items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("m-2 animate-spin text-slate-700", className),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
            ]
        })
    });
};


/***/ }),

/***/ 956721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ MediaBackground)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(397674);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36888);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ MediaBackground auto */ 




const MediaBackground = ({ children, project, survey, isEditorView = false, isMobilePreview = false, ContentRef, onBackgroundLoaded })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .WD)();
    const animatedBackgroundRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [backgroundLoaded, setBackgroundLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [authorDetailsForUnsplash, setAuthorDetailsForUnsplash] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        authorName: "",
        authorURL: ""
    });
    // get the background from either the survey or the project styling
    const background = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        // allow style overwrite is disabled from the project
        if (!project.styling.allowStyleOverwrite) {
            return project.styling.background;
        }
        // allow style overwrite is enabled from the project
        if (project.styling.allowStyleOverwrite) {
            // survey style overwrite is disabled
            if (!survey.styling?.overwriteThemeStyling) {
                return project.styling.background;
            }
            // survey style overwrite is enabled
            return survey.styling.background;
        }
        return project.styling.background;
    }, [
        project.styling.allowStyleOverwrite,
        project.styling.background,
        survey.styling
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (background?.bgType === "animation" && animatedBackgroundRef.current) {
            const video = animatedBackgroundRef.current;
            const onCanPlayThrough = ()=>setBackgroundLoaded(true);
            video.addEventListener("canplaythrough", onCanPlayThrough);
            video.src = background?.bg || "";
            // Cleanup
            return ()=>video.removeEventListener("canplaythrough", onCanPlayThrough);
        } else if ((background?.bgType === "image" || background?.bgType === "upload") && background?.bg) {
            if (background?.bgType === "image") {
                // To not set for Default Images as they have relative URL & are not from Unsplash
                if (!background?.bg.startsWith("/")) {
                    setAuthorDetailsForUnsplash({
                        authorName: new URL(background?.bg).searchParams.get("authorName") || "",
                        authorURL: new URL(background?.bg).searchParams.get("authorLink") || ""
                    });
                } else {
                    setAuthorDetailsForUnsplash({
                        authorName: "",
                        authorURL: ""
                    });
                }
            }
        } else {
            // For colors or any other types, set to loaded immediately
            setBackgroundLoaded(true);
        }
    }, [
        background?.bg,
        background?.bgType
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (backgroundLoaded && onBackgroundLoaded) {
            onBackgroundLoaded(true);
        }
    }, [
        backgroundLoaded,
        onBackgroundLoaded
    ]);
    const baseClasses = "absolute inset-0 h-full w-full transition-opacity duration-500";
    const loadedClass = backgroundLoaded ? "opacity-100" : "opacity-0";
    const getFilterStyle = ()=>{
        return `brightness(${background?.brightness ?? 100}%)`;
    };
    const renderBackground = ()=>{
        const filterStyle = getFilterStyle();
        switch(background?.bgType){
            case "color":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: `${baseClasses} ${loadedClass}`,
                    style: {
                        backgroundColor: background?.bg || "#ffffff",
                        filter: `${filterStyle}`
                    }
                });
            case "animation":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
                    ref: animatedBackgroundRef,
                    muted: true,
                    loop: true,
                    autoPlay: true,
                    playsInline: true,
                    className: `${baseClasses} ${loadedClass} object-cover`,
                    style: {
                        filter: `${filterStyle}`
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
                        src: background?.bg || "",
                        type: "video/mp4"
                    })
                });
            case "image":
                if (!background?.bg) {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: t("common.no_background_image_found")
                    });
                }
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${baseClasses} ${loadedClass} bg-cover bg-center`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                src: background?.bg,
                                alt: "Background image",
                                layout: "fill",
                                objectFit: "cover",
                                style: {
                                    filter: `${filterStyle}`
                                },
                                onLoadingComplete: ()=>setBackgroundLoaded(true)
                            }),
                            authorDetailsForUnsplash.authorName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "absolute bottom-4 right-6 z-10 ml-auto hidden w-max text-xs text-slate-400 md:block",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        children: t("common.photo_by")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: authorDetailsForUnsplash.authorURL + "?utm_source=formbricks&utm_medium=referral",
                                        target: "_blank",
                                        className: "hover:underline",
                                        children: authorDetailsForUnsplash.authorName
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            " ",
                                            t("common.on"),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "https://unsplash.com/?utm_source=formbricks&utm_medium=referral",
                                        target: "_blank",
                                        className: "hover:underline",
                                        children: "Unsplash"
                                    })
                                ]
                            })
                        ]
                    })
                });
            case "upload":
                if (!background?.bg) {
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: t("common.no_background_image_found")
                    });
                }
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: `${baseClasses} ${loadedClass} bg-cover bg-center`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: background?.bg,
                        alt: "Background image",
                        layout: "fill",
                        objectFit: "cover",
                        style: {
                            filter: `${filterStyle}`
                        },
                        onLoadingComplete: ()=>setBackgroundLoaded(true)
                    })
                });
            default:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: `${baseClasses} ${loadedClass}`
                });
        }
    };
    const renderContent = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "no-scrollbar absolute flex h-full w-full items-center justify-center overflow-hidden",
            children: children
        });
    if (isMobilePreview) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: ContentRef,
            className: `relative h-[90%] max-h-[40rem] w-[22rem] overflow-hidden rounded-[3rem] border-[6px] border-slate-400 ${getFilterStyle()}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "absolute left-1/2 right-1/2 top-2 z-20 h-4 w-1/3 -translate-x-1/2 transform rounded-full bg-slate-400"
                }),
                survey.type === "link" && renderBackground(),
                renderContent()
            ]
        });
    } else if (isEditorView) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ref: ContentRef,
            className: "overflow-hiddem flex flex-grow flex-col rounded-b-lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex w-full flex-grow flex-col items-center justify-center p-4 py-6",
                children: [
                    renderBackground(),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex h-full w-full items-center justify-center",
                        children: children
                    })
                ]
            })
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex min-h-dvh flex-col items-center justify-center",
            children: [
                renderBackground(),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "relative w-full",
                    children: children
                })
            ]
        });
    }
};


/***/ }),

/***/ 465775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ OptionsSwitch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const OptionsSwitch = ({ options: questionTypes, currentOption, handleOptionChange })=>{
    const [highlightStyle, setHighlightStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (containerRef.current) {
            const activeElement = containerRef.current.querySelector(`[data-value="${currentOption}"]`);
            if (activeElement) {
                const { offsetLeft, offsetWidth } = activeElement;
                setHighlightStyle({
                    left: `${offsetLeft}px`,
                    width: `${offsetWidth}px`
                });
            }
        }
    }, [
        currentOption
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: containerRef,
        className: "relative flex w-full items-center justify-between rounded-md border bg-white p-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "absolute bottom-1 top-1 rounded-md bg-slate-100 transition-all duration-300 ease-in-out",
                style: highlightStyle
            }),
            questionTypes.map((type)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    "data-value": type.value,
                    onClick: ()=>!type.disabled && handleOptionChange(type.value),
                    className: `relative z-10 flex-grow rounded-md p-2 text-center transition-colors duration-200 ${type.disabled ? "cursor-not-allowed opacity-50" : currentOption === type.value ? "" : "cursor-pointer hover:bg-slate-50"}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-sm text-slate-900",
                                children: type.label
                            }),
                            type.icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "h-4 w-4 text-slate-600 hover:text-slate-800",
                                children: type.icon
                            })
                        ]
                    })
                }, type.value))
        ]
    });
};


/***/ }),

/***/ 320213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983773);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(598584);
/* __next_internal_client_entry_do_not_use__ Modal auto */ 



const Modal = ({ children, isOpen, placement, previewMode, clickOutsideClose, darkOverlay, borderRadius, background })=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [overlayVisible, setOverlayVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placement === "center");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOverlayVisible(placement === "center");
    }, [
        placement
    ]);
    const calculateScaling = ()=>{
        if (windowWidth === null) return {};
        let scaleValue = "1";
        if (previewMode !== "mobile") {
            if (windowWidth > 1600) {
                scaleValue = "1";
            } else if (windowWidth > 1200) {
                scaleValue = ".9";
            } else if (windowWidth > 900) {
                scaleValue = ".8";
            } else {
                scaleValue = "0.7";
            }
        }
        let placementClass = "";
        if (placement === "bottomLeft") {
            placementClass = "bottom left";
        } else if (placement === "bottomRight") {
            placementClass = "bottom right";
        } else if (placement === "topLeft") {
            placementClass = "top left";
        } else if (placement === "topRight") {
            placementClass = "top right";
        }
        return {
            transform: `scale(${scaleValue})`,
            transformOrigin: placementClass
        };
    };
    const scalingClasses = calculateScaling();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!clickOutsideClose || placement !== "center") return;
        const handleClickOutside = (e)=>{
            const previewBase = document.getElementById("preview-survey-base");
            if (clickOutsideClose && modalRef.current && previewBase && previewBase.contains(e.target) && !modalRef.current.contains(e.target)) {
                setShow(false);
                setTimeout(()=>{
                    setShow(true);
                }, 1000);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        clickOutsideClose,
        placement
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShow(isOpen);
    }, [
        isOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (modalRef.current) {
            modalRef.current.scrollTop = 0;
        }
    }, [
        children
    ]);
    const slidingAnimationClass = previewMode === "desktop" ? show ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0" : previewMode === "mobile" ? show ? "bottom-0" : "-bottom-full" : "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        id: "preview-survey-base",
        "aria-live": "assertive",
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("relative h-full w-full overflow-hidden rounded-b-md", overlayVisible ? darkOverlay ? "bg-slate-700/80" : "bg-white/50" : "", "transition-all duration-500 ease-in-out"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ref: modalRef,
            style: {
                ...scalingClasses,
                ...borderRadius && {
                    borderRadius: `${borderRadius}px`
                },
                ...background && {
                    background
                }
            },
            className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("no-scrollbar pointer-events-auto absolute max-h-[90%] w-full max-w-sm transition-all duration-500 ease-in-out", previewMode === "desktop" ? (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__/* .getPlacementStyle */ .n)(placement) : "max-w-full", slidingAnimationClass),
            children: children
        })
    });
};


/***/ }),

/***/ 598584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ getPlacementStyle)
/* harmony export */ });
const getPlacementStyle = (placement)=>{
    switch(placement){
        case "bottomRight":
            return "bottom-3 sm:right-3";
        case "topRight":
            return "sm:top-6 sm:right-6";
        case "topLeft":
            return "sm:top-6 sm:left-6";
        case "bottomLeft":
            return "bottom-3 sm:left-3";
        case "center":
            return "top-1/2 left-1/2 transform !-translate-x-1/2 -translate-y-1/2";
        default:
            return "bottom-3 sm:right-3";
    }
};


/***/ }),

/***/ 540995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ RadioGroupItem),
/* harmony export */   z: () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(406181);
/* harmony import */ var _barrel_optimize_names_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(648968);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ RadioGroup,RadioGroupItem auto */ 




const RadioGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("grid gap-x-3", className),
        ...props,
        ref: ref
    });
});
RadioGroup.displayName = _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL.displayName;
const RadioGroupItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("h-4 w-4 rounded-full border border-slate-300 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Indicator */ .C1, {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                className: "h-2.5 w-2.5 fill-slate-800"
            })
        })
    });
});
RadioGroupItem.displayName = _radix_ui_react_radio_group__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .q7.displayName;



/***/ }),

/***/ 443636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ResetProgressButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248852);
/* harmony import */ var _tolgee_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(397674);
/* harmony import */ var _barrel_optimize_names_Repeat2_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(218904);
/* __next_internal_client_entry_do_not_use__ ResetProgressButton auto */ 



const ResetProgressButton = ({ onClick })=>{
    const { t } = (0,_tolgee_react__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .WD)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_ui_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
        type: "button",
        variant: "ghost",
        className: "mr-2 h-fit bg-white px-2 py-0 font-sans text-sm text-slate-500",
        onClick: onClick,
        children: [
            t("common.restart"),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Repeat2_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                className: "ml-2 h-4 w-4"
            })
        ]
    });
};


/***/ }),

/***/ 477787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90141);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);
/* __next_internal_client_entry_do_not_use__ Slider auto */ 



const Slider = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL, {
        ref: ref,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex w-full touch-none select-none items-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__/* .Track */ .CC, {
                className: "relative h-1 w-full grow overflow-hidden rounded-full bg-slate-300",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .Q6, {
                    className: "absolute h-full bg-slate-300"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__/* .Thumb */ .zi, {
                className: "border-primary ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            })
        ]
    }));
Slider.displayName = _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .bL.displayName;


/***/ }),

/***/ 862371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ StylingTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ui_components_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61330);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983773);




const StylingTabs = ({ id, options, defaultSelected, onChange, className, tabsContainerClassName, label, subLabel })=>{
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultSelected);
    const handleChange = (event)=>{
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        role: "radiogroup",
        "aria-labelledby": `${id}-toggle-label`,
        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col gap-2", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_modules_ui_components_label__WEBPACK_IMPORTED_MODULE_1__/* .Label */ .J, {
                        className: "font-semibold",
                        children: label
                    }),
                    subLabel && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        className: "text-sm font-normal text-slate-500",
                        children: subLabel
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex overflow-hidden rounded-md border border-slate-300 p-2", tabsContainerClassName),
                children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: option.value.toString(),
                        className: (0,_formbricks_lib_cn__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-1 cursor-pointer items-center justify-center gap-4 rounded-md py-2 text-center text-sm", selectedOption === option.value ? "bg-slate-100" : "bg-white", "focus:ring-brand-dark focus:outline-none focus:ring-2 focus:ring-opacity-50"),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                type: "radio",
                                name: id,
                                id: option.value.toString(),
                                value: option.value.toString(),
                                checked: selectedOption === option.value,
                                onChange: handleChange,
                                className: "sr-only"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-slate-900",
                                children: option.label
                            }),
                            option.icon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                children: option.icon
                            })
                        ]
                    }, option.value))
            })
        ]
    });
};


/***/ }),

/***/ 965694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ SurveyInline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(642725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const createContainerId = ()=>`formbricks-survey-container`;
const SurveyInline = (props)=>{
    const containerId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>createContainerId(), []);
    const renderInline = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>window.formbricksSurveys.renderSurveyInline({
            ...props,
            containerId
        }), [
        containerId,
        props
    ]);
    const [isScriptLoaded, setIsScriptLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const loadSurveyScript = async ()=>{
        try {
            const response = await fetch("/js/surveys.umd.cjs");
            if (!response.ok) {
                throw new Error("Failed to load the surveys package");
            }
            const scriptContent = await response.text();
            const scriptElement = document.createElement("script");
            scriptElement.textContent = scriptContent;
            document.head.appendChild(scriptElement);
            setIsScriptLoaded(true);
        } catch (error) {
            throw error;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const loadScript = async ()=>{
            if (!window.formbricksSurveys) {
                try {
                    await loadSurveyScript();
                } catch (error) {
                    console.error("Failed to load the surveys package: ", error);
                }
            } else {
                renderInline();
            }
        };
        loadScript();
    }, [
        containerId,
        props,
        renderInline
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isScriptLoaded) {
            renderInline();
        }
    }, [
        isScriptLoaded,
        renderInline
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        id: containerId,
        className: "h-full w-full"
    });
};


/***/ }),

/***/ 361414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ defaultStyling),
/* harmony export */   X: () => (/* binding */ COLOR_DEFAULTS)
/* harmony export */ });
// https://github.com/airbnb/javascript/#naming--uppercase
const COLOR_DEFAULTS = {
    brandColor: "#64748b",
    questionColor: "#2b2524",
    inputColor: "#ffffff",
    inputBorderColor: "#cbd5e1",
    cardBackgroundColor: "#ffffff",
    cardBorderColor: "#f8fafc",
    cardShadowColor: "#000000",
    highlightBorderColor: "#64748b"
};
const defaultStyling = {
    allowStyleOverwrite: true,
    brandColor: {
        light: COLOR_DEFAULTS.brandColor
    },
    questionColor: {
        light: COLOR_DEFAULTS.questionColor
    },
    inputColor: {
        light: COLOR_DEFAULTS.inputColor
    },
    inputBorderColor: {
        light: COLOR_DEFAULTS.inputBorderColor
    },
    cardBackgroundColor: {
        light: COLOR_DEFAULTS.cardBackgroundColor
    },
    cardBorderColor: {
        light: COLOR_DEFAULTS.cardBorderColor
    },
    cardShadowColor: {
        light: COLOR_DEFAULTS.cardShadowColor
    },
    isLogoHidden: false,
    highlightBorderColor: undefined,
    isDarkModeEnabled: false,
    background: {
        bg: "#fff",
        bgType: "color"
    },
    roundness: 8,
    cardArrangement: {
        linkSurveys: "straight",
        appSurveys: "straight"
    }
};


/***/ }),

/***/ 333681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I0: () => (/* binding */ triggerDownloadUnsplashImageAction),
/* harmony export */   T_: () => (/* binding */ createActionClassAction),
/* harmony export */   jC: () => (/* binding */ getImagesFromUnsplashAction),
/* harmony export */   pH: () => (/* binding */ refetchProjectAction),
/* harmony export */   q4: () => (/* binding */ updateSurveyAction)
/* harmony export */ });
/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286055);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770767);
/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(308046);
/* harmony import */ var _lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729455);
/* harmony import */ var _lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(440388);
/* harmony import */ var _modules_ee_multi_language_surveys_lib_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(280612);
/* harmony import */ var _modules_survey_follow_ups_lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(431751);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(283131);
/* harmony import */ var _formbricks_lib_actionClass_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(972585);
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(711344);
/* harmony import */ var _formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(167440);
/* harmony import */ var _formbricks_lib_project_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28492);
/* harmony import */ var _formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(939483);
/* harmony import */ var _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(535526);
/* harmony import */ var _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(552224);
/* harmony import */ var _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207798);
/* harmony import */ var _formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(797175);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(429931);
/* __next_internal_action_entry_do_not_use__ {"7f44fbfbd695b4b87a8b177bf487a1314b7bebbead":"triggerDownloadUnsplashImageAction","7f6f190ac6fd08333ac9d50baa5d128e0933520390":"updateSurveyAction","7f95a9cd2fc43decbbdb316b4c466f98fbb1fc7292":"createActionClassAction","7fa07c3e18cb2b5dc0bccf1727afd30ba94425974b":"refetchProjectAction","7ff313fb591d98a3184941f4daef611f7b6a0455a2":"getImagesFromUnsplashAction"} */ 
















/**
 * Checks if survey follow-ups are enabled for the given organization.
 *
 * @param { string } organizationId  The ID of the organization to check.
 * @returns { Promise<void> }  A promise that resolves if the permission is granted.
 * @throws { ResourceNotFoundError }  If the organization is not found.
 * @throws { OperationNotAllowedError }  If survey follow-ups are not enabled for the organization.
 */ const checkSurveyFollowUpsPermission = async (organizationId)=>{
    const organization = await (0,_formbricks_lib_organization_service__WEBPACK_IMPORTED_MODULE_6__/* .getOrganization */ .SA)(organizationId);
    if (!organization) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .ResourceNotFoundError */ .CE("Organization", organizationId);
    }
    const isSurveyFollowUpsEnabled = await (0,_modules_survey_follow_ups_lib_utils__WEBPACK_IMPORTED_MODULE_8__/* .getSurveyFollowUpsPermission */ .T)(organization);
    if (!isSurveyFollowUpsEnabled) {
        throw new _formbricks_types_errors__WEBPACK_IMPORTED_MODULE_7__/* .OperationNotAllowedError */ .J4("Survey follow ups are not enabled for this organization");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateSurveyAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(_formbricks_types_surveys_types__WEBPACK_IMPORTED_MODULE_9__/* .ZSurvey */ .pf).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromSurveyId */ .a1)(parsedInput.id);
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromSurveyId */ .Y)(parsedInput.id),
                minPermission: "readWrite"
            }
        ]
    });
    if (parsedInput.followUps?.length) {
        await checkSurveyFollowUpsPermission(organizationId);
    }
    if (parsedInput.languages?.length) {
        await (0,_modules_ee_multi_language_surveys_lib_actions__WEBPACK_IMPORTED_MODULE_5__/* .checkMultiLanguagePermission */ .F8)(organizationId);
    }
    return await (0,_formbricks_lib_survey_service__WEBPACK_IMPORTED_MODULE_10__/* .updateSurvey */ .cU)(parsedInput);
});
const ZRefetchProjectAction = zod__WEBPACK_IMPORTED_MODULE_11__.z.object({
    projectId: _formbricks_types_common__WEBPACK_IMPORTED_MODULE_12__/* .ZId */ .i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ refetchProjectAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZRefetchProjectAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromProjectId */ .x7)(parsedInput.projectId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: parsedInput.projectId
            }
        ]
    });
    return await (0,_formbricks_lib_project_service__WEBPACK_IMPORTED_MODULE_13__/* .getProject */ .U1)(parsedInput.projectId);
});
const ZGetImagesFromUnsplashAction = zod__WEBPACK_IMPORTED_MODULE_11__.z.object({
    searchQuery: zod__WEBPACK_IMPORTED_MODULE_11__.z.string(),
    page: zod__WEBPACK_IMPORTED_MODULE_11__.z.number().optional()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getImagesFromUnsplashAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.schema(ZGetImagesFromUnsplashAction).action(async ({ parsedInput })=>{
    if (!_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .UNSPLASH_ACCESS_KEY */ .OC) {
        throw new Error("Unsplash access key is not set");
    }
    const baseUrl = "https://api.unsplash.com/search/photos";
    const params = new URLSearchParams({
        query: parsedInput.searchQuery,
        client_id: _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .UNSPLASH_ACCESS_KEY */ .OC,
        orientation: "landscape",
        per_page: "9",
        page: (parsedInput.page || 1).toString()
    });
    const response = await fetch(`${baseUrl}?${params}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch images from Unsplash");
    }
    const { results } = await response.json();
    return results.map((result)=>{
        const authorName = encodeURIComponent(result.user.first_name + " " + result.user.last_name);
        const authorLink = encodeURIComponent(result.user.links.html);
        return {
            id: result.id,
            alt_description: result.alt_description,
            urls: {
                regularWithAttribution: `${result.urls.regular}&dpr=2&authorLink=${authorLink}&authorName=${authorName}&utm_source=formbricks&utm_medium=referral`,
                download: result.links.download_location
            }
        };
    });
});
const isValidUnsplashUrl = (url)=>{
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === "https:" && _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .UNSPLASH_ALLOWED_DOMAINS */ .eu.includes(parsedUrl.hostname);
    } catch  {
        return false;
    }
};
const ZTriggerDownloadUnsplashImageAction = zod__WEBPACK_IMPORTED_MODULE_11__.z.object({
    downloadUrl: zod__WEBPACK_IMPORTED_MODULE_11__.z.string().url()
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ triggerDownloadUnsplashImageAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .actionClient */ ._.schema(ZTriggerDownloadUnsplashImageAction).action(async ({ parsedInput })=>{
    if (!isValidUnsplashUrl(parsedInput.downloadUrl)) {
        throw new Error("Invalid Unsplash URL");
    }
    const response = await fetch(`${parsedInput.downloadUrl}/?client_id=${_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_14__/* .UNSPLASH_ACCESS_KEY */ .OC}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to download image from Unsplash");
    }
    return;
});
const ZCreateActionClassAction = zod__WEBPACK_IMPORTED_MODULE_11__.z.object({
    action: _formbricks_types_action_classes__WEBPACK_IMPORTED_MODULE_15__/* .ZActionClassInput */ .Lu
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createActionClassAction = _lib_utils_action_client__WEBPACK_IMPORTED_MODULE_2__/* .authenticatedActionClient */ .D.schema(ZCreateActionClassAction).action(async ({ ctx, parsedInput })=>{
    await (0,_lib_utils_action_client_middleware__WEBPACK_IMPORTED_MODULE_3__/* .checkAuthorizationUpdated */ .r)({
        userId: ctx.user.id,
        organizationId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getOrganizationIdFromEnvironmentId */ .X_)(parsedInput.action.environmentId),
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                minPermission: "readWrite",
                projectId: await (0,_lib_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getProjectIdFromEnvironmentId */ .DU)(parsedInput.action.environmentId)
            }
        ]
    });
    return await (0,_formbricks_lib_actionClass_service__WEBPACK_IMPORTED_MODULE_16__/* .createActionClass */ .hE)(parsedInput.action.environmentId, parsedInput.action);
});

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_17__/* .ensureServerEntryExports */ .D)([
    updateSurveyAction,
    refetchProjectAction,
    getImagesFromUnsplashAction,
    triggerDownloadUnsplashImageAction,
    createActionClassAction
]);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(updateSurveyAction, "7f6f190ac6fd08333ac9d50baa5d128e0933520390", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(refetchProjectAction, "7fa07c3e18cb2b5dc0bccf1727afd30ba94425974b", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(getImagesFromUnsplashAction, "7ff313fb591d98a3184941f4daef611f7b6a0455a2", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(triggerDownloadUnsplashImageAction, "7f44fbfbd695b4b87a8b177bf487a1314b7bebbead", null);
(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__/* .registerServerReference */ .A)(createActionClassAction, "7f95a9cd2fc43decbbdb316b4c466f98fbb1fc7292", null);


/***/ }),

/***/ 280612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F8: () => (/* binding */ checkMultiLanguagePermission),
  NA: () => (/* binding */ createLanguageAction),
  GX: () => (/* binding */ deleteLanguageAction),
  r2: () => (/* binding */ getSurveysUsingGivenLanguageAction),
  yE: () => (/* binding */ updateLanguageAction)
});

// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js
var server_reference = __webpack_require__(286055);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/app-render/encryption.js
var encryption = __webpack_require__(770767);
// EXTERNAL MODULE: ./lib/utils/action-client.ts
var action_client = __webpack_require__(308046);
// EXTERNAL MODULE: ./lib/utils/action-client-middleware.ts
var action_client_middleware = __webpack_require__(729455);
// EXTERNAL MODULE: ./lib/utils/helper.ts
var helper = __webpack_require__(440388);
// EXTERNAL MODULE: ./modules/ee/license-check/lib/utils.ts + 1 modules
var utils = __webpack_require__(725322);
// EXTERNAL MODULE: ../../node_modules/zod/lib/index.mjs
var lib = __webpack_require__(283131);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(896330);
// EXTERNAL MODULE: ../../node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(645625);
// EXTERNAL MODULE: ../../packages/database/src/index.ts + 1 modules
var src = __webpack_require__(482859);
// EXTERNAL MODULE: ../../packages/types/common.ts
var common = __webpack_require__(552224);
// EXTERNAL MODULE: ../../packages/types/errors.ts
var errors = __webpack_require__(207798);
// EXTERNAL MODULE: ../../packages/types/project.ts
var types_project = __webpack_require__(773518);
// EXTERNAL MODULE: ../../packages/lib/project/cache.ts
var cache = __webpack_require__(595111);
// EXTERNAL MODULE: ../../packages/lib/project/service.ts
var service = __webpack_require__(28492);
// EXTERNAL MODULE: ../../packages/lib/survey/cache.ts
var survey_cache = __webpack_require__(710528);
// EXTERNAL MODULE: ../../packages/lib/utils/validate.ts
var validate = __webpack_require__(472749);
;// ../../packages/lib/language/service.ts










const languageSelect = {
    id: true,
    code: true,
    alias: true,
    projectId: true,
    createdAt: true,
    updatedAt: true
};
const getLanguage = async (languageId)=>{
    try {
        validateInputs([
            languageId,
            ZId
        ]);
        const language = await prisma.language.findFirst({
            where: {
                id: languageId
            },
            select: {
                ...languageSelect,
                projectId: true
            }
        });
        if (!language) {
            throw new ResourceNotFoundError("Language", languageId);
        }
        return language;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new DatabaseError(error.message);
        }
        throw error;
    }
};
const createLanguage = async (projectId, languageInput)=>{
    try {
        (0,validate/* validateInputs */.C)([
            projectId,
            common/* ZId */.i4
        ], [
            languageInput,
            types_project/* ZLanguageInput */.DP
        ]);
        const project = await (0,service/* getProject */.U1)(projectId);
        if (!project) throw new errors/* ResourceNotFoundError */.CE("Project not found", projectId);
        if (!languageInput.code) {
            throw new errors/* ValidationError */.yI("Language code is required");
        }
        const language = await src/* prisma */.z.language.create({
            data: {
                ...languageInput,
                project: {
                    connect: {
                        id: projectId
                    }
                }
            },
            select: languageSelect
        });
        project.environments.forEach((environment)=>{
            cache/* projectCache */.E.revalidate({
                environmentId: environment.id
            });
        });
        return language;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const getSurveysUsingGivenLanguage = (0,react.cache)(async (languageId)=>{
    try {
        // Check if the language is used in any survey
        const surveys = await src/* prisma */.z.surveyLanguage.findMany({
            where: {
                languageId: languageId
            },
            select: {
                survey: {
                    select: {
                        name: true
                    }
                }
            }
        });
        // Extracting survey names
        const surveyNames = surveys.map((s)=>s.survey.name);
        return surveyNames;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
});
const deleteLanguage = async (languageId, projectId)=>{
    try {
        (0,validate/* validateInputs */.C)([
            languageId,
            common/* ZId */.i4
        ], [
            projectId,
            common/* ZId */.i4
        ]);
        const project = await (0,service/* getProject */.U1)(projectId);
        if (!project) throw new errors/* ResourceNotFoundError */.CE("Project not found", projectId);
        const prismaLanguage = await src/* prisma */.z.language.delete({
            where: {
                id: languageId
            },
            select: {
                ...languageSelect,
                surveyLanguages: {
                    select: {
                        surveyId: true
                    }
                }
            }
        });
        project.environments.forEach((environment)=>{
            cache/* projectCache */.E.revalidate({
                id: prismaLanguage.projectId,
                environmentId: environment.id
            });
        });
        // delete unused surveyLanguages
        const language = {
            ...prismaLanguage,
            surveyLanguages: undefined
        };
        return language;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};
const updateLanguage = async (projectId, languageId, languageInput)=>{
    try {
        (0,validate/* validateInputs */.C)([
            languageId,
            common/* ZId */.i4
        ], [
            languageInput,
            types_project/* ZLanguageUpdate */.Io
        ], [
            projectId,
            common/* ZId */.i4
        ]);
        const project = await (0,service/* getProject */.U1)(projectId);
        if (!project) throw new errors/* ResourceNotFoundError */.CE("Project not found", projectId);
        const prismaLanguage = await src/* prisma */.z.language.update({
            where: {
                id: languageId
            },
            data: {
                ...languageInput,
                updatedAt: new Date()
            },
            select: {
                ...languageSelect,
                surveyLanguages: {
                    select: {
                        surveyId: true
                    }
                }
            }
        });
        project.environments.forEach((environment)=>{
            cache/* projectCache */.E.revalidate({
                id: prismaLanguage.projectId,
                environmentId: environment.id
            });
            survey_cache/* surveyCache */.$.revalidate({
                environmentId: environment.id
            });
        });
        // revalidate cache of all connected surveys
        prismaLanguage.surveyLanguages.forEach((surveyLanguage)=>{
            survey_cache/* surveyCache */.$.revalidate({
                id: surveyLanguage.surveyId
            });
        });
        // delete unused surveyLanguages
        const language = {
            ...prismaLanguage,
            surveyLanguages: undefined
        };
        return language;
    } catch (error) {
        if (error instanceof client_.Prisma.PrismaClientKnownRequestError) {
            console.error(error);
            throw new errors/* DatabaseError */.a$(error.message);
        }
        throw error;
    }
};

// EXTERNAL MODULE: ../../packages/lib/organization/service.ts
var organization_service = __webpack_require__(167440);
// EXTERNAL MODULE: ../../node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(429931);
;// ./modules/ee/multi-language-surveys/lib/actions.ts
/* __next_internal_action_entry_do_not_use__ {"7f3ebbecf8a294a6cc7639d9e61cc0217a977ee8d8":"createLanguageAction","7f547ea6b15b116a71ee21ed4d4b573d0f6326a3fe":"getSurveysUsingGivenLanguageAction","7f57d1747f6e09fffee26feb95a4076239973f57e4":"deleteLanguageAction","7f92f93083583537bb80ae660771e6bbc02cb356c0":"checkMultiLanguagePermission","7fde8a1c3557824f9bc1d8436ea91b5ae9fbfb0e4a":"updateLanguageAction"} */ 











const ZCreateLanguageAction = lib.z.object({
    projectId: common/* ZId */.i4,
    languageInput: types_project/* ZLanguageInput */.DP
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkMultiLanguagePermission = async (organizationId)=>{
    const organization = await (0,organization_service/* getOrganization */.SA)(organizationId);
    if (!organization) {
        throw new errors/* ResourceNotFoundError */.CE("Organization", organizationId);
    }
    const isMultiLanguageAllowed = await (0,utils/* getMultiLanguagePermission */.x)(organization);
    if (!isMultiLanguageAllowed) {
        throw new errors/* OperationNotAllowedError */.J4("Multi language is not allowed for this organization");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZCreateLanguageAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromProjectId */.x7)(parsedInput.projectId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                schema: types_project/* ZLanguageInput */.DP,
                data: parsedInput.languageInput,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: parsedInput.projectId,
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await createLanguage(parsedInput.projectId, parsedInput.languageInput);
});
const ZDeleteLanguageAction = lib.z.object({
    languageId: common/* ZId */.i4,
    projectId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZDeleteLanguageAction).action(async ({ ctx, parsedInput })=>{
    const languageProjectId = await (0,helper/* getProjectIdFromLanguageId */.GT)(parsedInput.languageId);
    if (languageProjectId !== parsedInput.projectId) {
        throw new Error("Invalid language id");
    }
    const organizationId = await (0,helper/* getOrganizationIdFromProjectId */.x7)(parsedInput.projectId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: parsedInput.projectId,
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await deleteLanguage(parsedInput.languageId, parsedInput.projectId);
});
const ZGetSurveysUsingGivenLanguageAction = lib.z.object({
    languageId: common/* ZId */.i4
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSurveysUsingGivenLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZGetSurveysUsingGivenLanguageAction).action(async ({ ctx, parsedInput })=>{
    const organizationId = await (0,helper/* getOrganizationIdFromLanguageId */.O$)(parsedInput.languageId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: await (0,helper/* getProjectIdFromLanguageId */.GT)(parsedInput.languageId),
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await getSurveysUsingGivenLanguage(parsedInput.languageId);
});
const ZUpdateLanguageAction = lib.z.object({
    projectId: common/* ZId */.i4,
    languageId: common/* ZId */.i4,
    languageInput: types_project/* ZLanguageInput */.DP
});
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateLanguageAction = action_client/* authenticatedActionClient */.D.schema(ZUpdateLanguageAction).action(async ({ ctx, parsedInput })=>{
    const languageProductId = await (0,helper/* getProjectIdFromLanguageId */.GT)(parsedInput.languageId);
    if (languageProductId !== parsedInput.projectId) {
        throw new Error("Invalid language id");
    }
    const organizationId = await (0,helper/* getOrganizationIdFromProjectId */.x7)(parsedInput.projectId);
    await (0,action_client_middleware/* checkAuthorizationUpdated */.r)({
        userId: ctx.user.id,
        organizationId,
        access: [
            {
                type: "organization",
                schema: types_project/* ZLanguageInput */.DP,
                data: parsedInput.languageInput,
                roles: [
                    "owner",
                    "manager"
                ]
            },
            {
                type: "projectTeam",
                projectId: parsedInput.projectId,
                minPermission: "manage"
            }
        ]
    });
    await checkMultiLanguagePermission(organizationId);
    return await updateLanguage(parsedInput.projectId, parsedInput.languageId, parsedInput.languageInput);
});

(0,action_validate/* ensureServerEntryExports */.D)([
    checkMultiLanguagePermission,
    createLanguageAction,
    deleteLanguageAction,
    getSurveysUsingGivenLanguageAction,
    updateLanguageAction
]);
(0,server_reference/* registerServerReference */.A)(checkMultiLanguagePermission, "7f92f93083583537bb80ae660771e6bbc02cb356c0", null);
(0,server_reference/* registerServerReference */.A)(createLanguageAction, "7f3ebbecf8a294a6cc7639d9e61cc0217a977ee8d8", null);
(0,server_reference/* registerServerReference */.A)(deleteLanguageAction, "7f57d1747f6e09fffee26feb95a4076239973f57e4", null);
(0,server_reference/* registerServerReference */.A)(getSurveysUsingGivenLanguageAction, "7f547ea6b15b116a71ee21ed4d4b573d0f6326a3fe", null);
(0,server_reference/* registerServerReference */.A)(updateLanguageAction, "7fde8a1c3557824f9bc1d8436ea91b5ae9fbfb0e4a", null);


/***/ }),

/***/ 431751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getSurveyFollowUpsPermission)
/* harmony export */ });
/* harmony import */ var _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(711344);

const getSurveyFollowUpsPermission = async (organization)=>{
    if (_formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .IS_FORMBRICKS_CLOUD */ .Si) return organization.billing.plan !== _formbricks_lib_constants__WEBPACK_IMPORTED_MODULE_0__/* .PROJECT_FEATURE_KEYS */ .mu.FREE;
    return true;
};


/***/ })

};
;