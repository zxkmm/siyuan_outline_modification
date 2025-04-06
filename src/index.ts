import { Plugin } from "siyuan";
import "@/index.scss";

/*
zxkmm naming style:
_inFuncMember_
_funcArgument_
funcName
privateClassMember_
_publicClassMember
*/

import { SettingUtils } from "./libs/setting-utils";

import {
  addFrontLine,
  mouseOverZeroPadding,
  overloadoutlineFontSize,
  overloadLineHeight,
  mouseOverLineUnclamp,
  mouseOverReduceFontSize,
  outlineDisplayLevel,
} from "./style_injection";

import {
  currentDeviceInList,
  removeCurrentDeviceFromList,
  appendCurrentDeviceIntoList,
} from "./device_specific_helpers";

const STORAGE_NAME = "menu-config";

export default class SiyuanOutlineCompress extends Plugin {
  private settingUtils: SettingUtils;

  async onload() {
    this.data[STORAGE_NAME] = { readonlyText: "Readonly" };

    this.settingUtils = new SettingUtils(this, STORAGE_NAME);

    this.settingUtils.load();

    this.settingUtils.addItem({
      key: "begging",
      value: "",
      type: "hint",
      title: this.i18n.beggingTitle,
      description: this.i18n.beggingDesc,
    });

    this.settingUtils.addItem({
      key: "mainSwitch",
      value: false,
      type: "checkbox",
      title: this.i18n.mainSwitch,
      description: "",
    });

    this.settingUtils.addItem({
      //special options
      key: "specialOptionsHint",
      value: "",
      type: "hint",
      title: this.i18n.specialOptionsHintHintTitle,
      description: this.i18n.specialOptionsHintHintDesc,
    });

    this.settingUtils.addItem({
      key: "enableOutlineDisplayLevelTune",
      value: false,
      type: "checkbox",
      title: "🗜️ " + this.i18n.enableOutlineDisplayLevelTune,
      description: this.i18n.enableOutlineDisplayLevelTuneDesc,
    });

    this.settingUtils.addItem({
      key: "enableOutlineDisplayLevelTuneLevel",
      value: 4,
      type: "slider",
      title: "🌊 " + this.i18n.enableOutlineDisplayLevelTuneLevel,
      description: this.i18n.enableOutlineDisplayLevelTuneLevelDesc,
      slider: {
        min: 0,
        max: 10,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      //dynamic options
      key: "highPerformanceZoneHint",
      value: "",
      type: "hint",
      title: this.i18n.experimentFeatureHintTitle,
      description: this.i18n.experimentFeatureHintDesc,
    });

    this.settingUtils.addItem({
      key: "mouseHoverZeroPadding",
      value: false,
      type: "checkbox",
      title: "🌊 " + this.i18n.mouseHoverZeroPadding,
      description: this.i18n.mouseHoverZeroPaddingDesc,
    });

    this.settingUtils.addItem({
      key: "mouseHoverZeroPaddingForce",
      value: true,
      type: "checkbox",
      title: "🌊 " + this.i18n.mouseHoverZeroPaddingForce,
      description: this.i18n.mouseHoverZeroPaddingForceDesc,
    });

    this.settingUtils.addItem({
      key: "mouseHoverZeroPaddingStyle",
      value: 1,
      type: "select",
      title: "🌊 " + this.i18n.mouseHoverZeroPaddingStyle,
      description: this.i18n.mouseHoverZeroPaddingStyledesc,
      options: {
        1: this.i18n.mouseHoverZeroPaddingStylePaddingToggle,
        2: this.i18n.mouseHoverZeroPaddingStylePaddingIcon,
        3: this.i18n.mouseHoverZeroPaddingStylePaddingIconButMoveLR,
        4: this.i18n.mouseHoverZeroPaddingStylePaddingText,
      },
    });

    this.settingUtils.addItem({
      key: "mouseHoverZeroPaddingPx",
      value: 4,
      type: "slider",
      title: "🌊 " + this.i18n.mouseHoverZeroPaddingPx,
      description: this.i18n.mouseHoverZeroPaddingPxDesc,
      slider: {
        min: 0,
        max: 10,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      key: "mouseOverLineUnclamp",
      value: false,
      type: "checkbox",
      title: "🟰 " + this.i18n.mouseOverLineUnclampTitle,
      description: this.i18n.mouseOverLineUnclampDesc,
    });

    this.settingUtils.addItem({
      key: "mouseOverLineUnclampForce",
      value: false,
      type: "checkbox",
      title: "🟰 " + this.i18n.mouseOverLineUnclampForceTitle,
      description: this.i18n.mouseOverLineUnclampForceDesc,
    });

    this.settingUtils.addItem({
      key: "mouseOverReduceFontSize",
      value: false,
      type: "checkbox",
      title: "🔡 " + this.i18n.mouseOverReduceFontSizeTitle,
      description: this.i18n.mouseOverReduceFontSizeDesc,
    });

    this.settingUtils.addItem({
      key: "mouseOverReduceFontSizeForce",
      value: false,
      type: "checkbox",
      title: "🔡 " + this.i18n.mouseOverReduceFontSizeForceTitle,
      description: this.i18n.mouseOverReduceFontSizeForceDesc,
    });

    this.settingUtils.addItem({
      key: "mouseHoverReduceFontSizePx",
      value: 4,
      type: "slider",
      title: "🔡 " + this.i18n.mouseHoverReduceFontSizePx,
      description: this.i18n.mouseHoverReduceFontSizePxDesc,
      slider: {
        min: 1,
        max: 50,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      //static options
      key: "hintDangerousZone",
      value: "",
      type: "hint",
      title: this.i18n.hintDangerousZoneTitle,
      description: this.i18n.hintDangerousZoneDesc,
    });

    this.settingUtils.addItem({
      key: "enableAdjustStaticoutlinePadding",
      value: false,
      type: "checkbox",
      title: "🗜️ " + this.i18n.enableAdjustStaticoutlinePadding,
      description: this.i18n.enableAdjustStaticoutlinePaddingDesc,
    });

    this.settingUtils.addItem({
      key: "Slider",
      value: 50,
      type: "slider",
      title: "🗜️ " + this.i18n.compressPercent,
      description: this.i18n.compressPercentDesc,
      slider: {
        min: 0,
        max: 100,
        step: 5,
      },
    });

    this.settingUtils.addItem({
      key: "enableoutlineFrontLine",
      value: false,
      type: "checkbox",
      title: "⛕ " + this.i18n.enableoutlineFrontLine,
      description: this.i18n.enableoutlineFrontLineDesc,
    });

    this.settingUtils.addItem({
      key: "outlineFrontLinePosition",
      value: 20,
      type: "slider",
      title: "⛕ " + this.i18n.outlineFrontLinePosition,
      description: this.i18n.outlineFrontLinePositionDesc,
      slider: {
        min: 0,
        max: 60,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      key: "outlineFrontLinePadding",
      value: 20,
      type: "slider",
      title: "⛕ " + this.i18n.outlineFrontLinePadding,
      description: this.i18n.outlineFrontLinePaddingDesc,
      slider: {
        min: 6,
        max: 60,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      key: "outlineFrontLineBorder",
      value: 2,
      type: "slider",
      title: "⛕ " + this.i18n.outlineFrontLineBorder,
      description: this.i18n.outlineFrontLineBorderDesc,
      slider: {
        min: 1,
        max: 20,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      key: "outlineFrontLineImplememtation",
      value: 1,
      type: "select",
      title: this.i18n.outlineFrontLineImplememtation,
      description: this.i18n.outlineFrontLineImplememtationDesc,
      options: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    });

    this.settingUtils.addItem({
      key: "overloadFontSizeSwitch",
      value: false,
      type: "checkbox",
      title: "🇦 " + this.i18n.overloadFontSizeSwitch,
      description: this.i18n.overloadFontSizeSwitchDesc,
    }),
      this.settingUtils.addItem({
        key: "overloadFontSizeForceSwitch",
        value: false,
        type: "checkbox",
        title: "🇦 " + this.i18n.overloadFontSizeForceSwitch,
        description: this.i18n.overloadFontSizeForceSwitchDesc,
      }),
      this.settingUtils.addItem({
        key: "overloadFontSizePx",
        value: 14,
        type: "slider",
        title: "🇦 " + this.i18n.overloadFontSizePx,
        description: this.i18n.overloadFontSizePxDesc,
        slider: {
          min: 5,
          max: 60,
          step: 1,
        },
      });

    this.settingUtils.addItem({
      key: "overloadLineHeight",
      value: false,
      type: "checkbox",
      title: "🛅 " + this.i18n.overloadLineHeight,
      description: this.i18n.overloadLineHeightDesc,
    });

    this.settingUtils.addItem({
      key: "overloadLineHeightForce",
      value: false,
      type: "checkbox",
      title: "🛅 " + this.i18n.overloadLineHeightForce,
      description: this.i18n.overloadLineHeightForceDesc,
    });

    this.settingUtils.addItem({
      key: "overloadLineHeightPx",
      value: 28,
      type: "slider",
      title: "🛅 " + this.i18n.overloadLineHeightPx,
      description: this.i18n.overloadLineHeightPxDesc,
      slider: {
        min: 1,
        max: 100,
        step: 1,
      },
    });

    this.settingUtils.addItem({
      key: "hintDeviceSpecificSettings",
      value: "",
      type: "hint",
      title: this.i18n.hintDeviceSpecificSettingsTitle,
      description: this.i18n.hintDeviceSpecificSettingsDesc,
    });

    this.settingUtils.addItem({
      key: "onlyEnableListedDevices",
      value: false,
      type: "checkbox",
      title: this.i18n.onlyEnableListedDevices,
      description: this.i18n.onlyEnableListedDevicesDesc,
    });

    this.settingUtils.addItem({
      key: "enableDeviceList",
      value: "",
      type: "textarea",
      title: this.i18n.enableDeviceList,
      description: this.i18n.enableDeviceListDesc,
    });

    this.settingUtils.addItem({
      key: "addCurrentDeviceIntoList",
      value: "",
      type: "button",
      title: this.i18n.addCurrentDeviceIntoList,
      description: this.i18n.addCurrentDeviceIntoListDesc,
      button: {
        label: this.i18n.addCurrentDeviceIntoListLabel,
        callback: () => {
          appendCurrentDeviceIntoList(this.settingUtils);
        },
      },
    });

    this.settingUtils.addItem({
      key: "removeCurrentDeviceFromList",
      value: "",
      type: "button",
      title: this.i18n.removeCurrentDeviceFromList,
      description: this.i18n.removeCurrentDeviceFromListDesc,
      button: {
        label: this.i18n.removeCurrentDeviceFromListLabel,
        callback: () => {
          removeCurrentDeviceFromList(this.settingUtils);
        },
      },
    });

    this.settingUtils.addItem({
      key: "hint",
      value: "",
      type: "hint",
      title: this.i18n.hintTitle,
      description: this.i18n.hintDesc,
    });
  }

  onLayoutReady() {
    this.loadData(STORAGE_NAME);
    this.settingUtils.load();

    const layoutReadyAsyncHandler = async () => {
      //async!!!!!!!
      try {
        const _mouseoverZeroPadding_ = this.settingUtils.get(
          "mouseHoverZeroPadding"
        );
        const _enableOutlineDisplayLevelTune_ = this.settingUtils.get(
          "enableOutlineDisplayLevelTune"
        );

        var _enableOutlineDisplayLevelTuneLevel_ = this.settingUtils.get(
          "enableOutlineDisplayLevelTuneLevel"
        );

        const _mainSwitchStat_ = this.settingUtils.get("mainSwitch");
        const _enableAdjustStaticoutlinePadding_ = this.settingUtils.get(
          "enableAdjustStaticoutlinePadding"
        );
        const _compressionPercentage_ = this.settingUtils.get("Slider");
        const _overloadFontSizeSwitch_ = this.settingUtils.get(
          "overloadFontSizeSwitch"
        );
        const _overloadFontSizeForceSwitch_ = this.settingUtils.get(
          "overloadFontSizeForceSwitch"
        );
        const _overloadFontSizePx_ =
          this.settingUtils.get("overloadFontSizePx");
        const _mouseHoverZeroPaddingForce_ = this.settingUtils.get(
          "mouseHoverZeroPaddingForce"
        );
        const _mouseHoverZeroPaddingStyle_ = this.settingUtils.get(
          "mouseHoverZeroPaddingStyle"
        );
        const _mouseHoverZeroPaddingPx_ = this.settingUtils.get(
          "mouseHoverZeroPaddingPx"
        );
        const _mouseOverLineUnclamp_ = this.settingUtils.get(
          "mouseOverLineUnclamp"
        );
        const _mouseOverLineUnclampForce_ = this.settingUtils.get(
          "mouseOverLineUnclampForce"
        );
        const _mouseOverReduceFontSize_ = this.settingUtils.get(
          "mouseOverReduceFontSize"
        );
        const _mouseOverReduceFontSizeForce_ = this.settingUtils.get(
          "mouseOverLineUnclampForce"
        );
        const _mouseHoverReduceFontSizePx_ = this.settingUtils.get(
          "mouseHoverReduceFontSizePx"
        );
        const _onlyEnableListedDevices_ = this.settingUtils.get(
          "onlyEnableListedDevices"
        );
        const _currentDeviceInList_ = await currentDeviceInList(
          this.settingUtils
        );

        const _overloadLineHeight_ =
          this.settingUtils.get("overloadLineHeight");
        const _overloadLineHeightForce_ = this.settingUtils.get(
          "overloadLineHeightForce"
        );
        const _overloadLineHeightPx_ = this.settingUtils.get(
          "overloadLineHeightPx"
        );
        const _enableoutlineFrontLine_ = this.settingUtils.get(
          "enableoutlineFrontLine"
        );
        const _outlineFrontLinePosition_ = this.settingUtils.get(
          "outlineFrontLinePosition"
        );
        const _outlineFrontLinePadding_ = this.settingUtils.get(
          "outlineFrontLinePadding"
        );
        const _outlineFrontLineBorder_ = this.settingUtils.get(
          "outlineFrontLineBorder"
        );
        const _outlineFrontLineImplememtation_ = this.settingUtils.get(
          "outlineFrontLineImplememtation"
        );

        // console.log({
        //     mouseoverZeroPadding: _mouseoverZeroPadding_,
        //     mainSwitchStat: _mainSwitchStat_,
        //     compressionPercentage: _compressionPercentage_,
        //     overloadFontSizeSwitch: _overloadFontSizeSwitch_,
        //     mouseHoverZeroPaddingForce: _mouseHoverZeroPaddingForce_,
        //     mouseHoverZeroPaddingPx: _mouseHoverZeroPaddingPx_,
        //     mouseOverLineUnclamp: _mouseOverLineUnclamp_,
        //     mouseOverLineUnclampForce: _mouseOverLineUnclampForce_,
        //     mouseOverReduceFontSize: _mouseOverReduceFontSize_,
        //     mouseOverReduceFontSizeForce: _mouseOverReduceFontSizeForce_,
        //     mouseHoverReduceFontSizePx: _mouseHoverReduceFontSizePx_,
        //     onlyEnableListedDevices: _onlyEnableListedDevices_,
        //     currentDeviceInList: _currentDeviceInList_,
        //     overloadLineHeight: _overloadLineHeight_,
        //     overloadLineHeightForce: _overloadLineHeightForce_,
        //     overloadLineHeightPx: _overloadLineHeightPx_,
        //     enableoutlineFrontLine: _enableoutlineFrontLine_,
        //     outlineFrontLinePosition: _outlineFrontLinePosition_,
        //     outlineFrontLinePadding: _outlineFrontLinePadding_,
        //     outlineFrontLineBorder: _outlineFrontLineBorder_,
        //     notebookOutlineTightMode: _notebookOutlineTightMode_,
        // });

        /*条件列表：
                当前设备真， 仅允许开关开，后半段为假 ：真||假： 执行
                当前设备真， 仅允许开关关，后半段为真 ：真||真： 执行
                当前设备假， 仅允许开关开，后半段为假 ：假||假： 不执行
                当前设备假， 仅允许开关关，后半段为真 ：假||真： 执行
                */

        if (
          (_currentDeviceInList_ || !_onlyEnableListedDevices_) &&
          _mainSwitchStat_
        ) {
          //main swtich and per deivce condition selecter

          if (_overloadLineHeight_) {
            //overload line height sel
            overloadLineHeight(
              _overloadLineHeightForce_,
              _overloadLineHeightPx_
            );
          }

          if (_mouseoverZeroPadding_) {
            console.log("mouseoverZeroPadding");
            //TODO: 希望能更优雅一些。。。

            mouseOverZeroPadding(
              _mouseHoverZeroPaddingForce_,
              _mouseHoverZeroPaddingPx_,
              _mouseHoverZeroPaddingStyle_
            );
          }

          if (_enableOutlineDisplayLevelTune_) {
            //outline display level tune sel
            outlineDisplayLevel(_enableOutlineDisplayLevelTuneLevel_);

            // slide ctl
            const addOutlineLevelSlider = () => {
              console.log("called adder");
              // outline
              const outlineContainer = document.querySelector(
                ".file-tree.sy__outline"
              );
              console.log(outlineContainer);
              if (!outlineContainer) return;


              // prevent multiple slider
              if (
                outlineContainer.querySelector(
                  "#outline-level-slider-container"
                )
              )
                return;

                console.log("added");

          

              // container
              const sliderContainer = document.createElement("div");
              sliderContainer.id = "outline-level-slider-container";
              sliderContainer.style.cssText =
                "padding: 8px 16px; border-top: 1px solid var(--b3-border-color); text-align: center;";

              // title
              const sliderTitle = document.createElement("div");
              sliderTitle.textContent = this.i18n.strOutlineExpandLevel;
              sliderTitle.style.cssText =
                "margin-bottom: 4px; font-size: 12px; opacity: 0.8;";
              sliderContainer.appendChild(sliderTitle);

              // div
              const sliderControl = document.createElement("div");
              sliderControl.style.cssText =
                "display: flex; align-items: center; justify-content: space-between;";

              // add btns
              for (let i = 0; i <= 7; i++) {
                // console.log(i, _enableOutlineDisplayLevelTuneLevel_);
                // console.log(i.toString(), _enableOutlineDisplayLevelTuneLevel_.toString());
                // console.log(i.toString() === _enableOutlineDisplayLevelTuneLevel_.toString());
                const levelButton = document.createElement("div");
                levelButton.textContent = i === 0 ? '∞' : i.toString();
                levelButton.dataset.level = i.toString();
                levelButton.style.cssText = `
                width: 24px; height: 24px; border-radius: 50%; 
                display: flex; align-items: center; justify-content: center;
                cursor: pointer; font-size: 12px; 
                background-color: ${
                  i.toString() === _enableOutlineDisplayLevelTuneLevel_.toString()
                    ? "var(--b3-theme-primary)"
                    : "var(--b3-theme-surface)"
                };
                color: ${
                  i.toString() === _enableOutlineDisplayLevelTuneLevel_.toString()
                    ? "#fff"
                    : "var(--b3-theme-on-surface)"
                };
                transition: all 0.2s ease;
              `;
                levelButton.addEventListener("click", (e) => {
                  // btn css
                  sliderControl.querySelectorAll("div").forEach((btn) => {
                    btn.style.backgroundColor = "var(--b3-theme-surface)";
                    btn.style.color = "var(--b3-theme-on-surface)";
                  });

                  // highlight aft click
                  levelButton.style.backgroundColor = "var(--b3-theme-primary)";
                  levelButton.style.color = "#fff";

                  // aapply
                  const level = parseInt(levelButton.dataset.level || "0");
                  outlineDisplayLevel(level);

                  // TODO: seperate from setting
                  _enableOutlineDisplayLevelTuneLevel_ = level;

                  // click expand
                  setTimeout(() => {
                    const expandButton = document.querySelector(
                      'button[data-type="expand"]'
                    );
                    if (expandButton) {
                      (expandButton as HTMLElement).click();
                    }
                  }, 100);

                  e.stopPropagation();
                });

                sliderControl.appendChild(levelButton);
              }

              sliderContainer.appendChild(sliderControl);
              outlineContainer.appendChild(sliderContainer);
            };

            // init once
            addOutlineLevelSlider();

            // TODO: meed refactor
            const outlineObserver = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (
                  mutation.type === "attributes" &&
                  mutation.attributeName === "class"
                ) {
                  const target = mutation.target as HTMLElement;
                  if (
                    target.classList.contains("layout__tab--active") &&
                    target.classList.contains("sy__outline")
                  ) {
                    addOutlineLevelSlider();
                  }
                } else if (mutation.type === "childList") {
                  const outlineContainer = document.querySelector(
                    ".fn__flex-1.fn__flex-column.file-tree.sy__outline.layout__tab--active"
                  );
                  if (
                    outlineContainer &&
                    !outlineContainer.querySelector(
                      "#outline-level-slider-container"
                    )
                  ) {
                    addOutlineLevelSlider();
                  }
                }
              });
            });

            // TODO: need refactor
            const layoutPanel = document.querySelector(".layout__center");
            if (layoutPanel) {
              outlineObserver.observe(layoutPanel, {
                attributes: true,
                childList: true,
                subtree: true,
              });
            }
          }

          if (_mouseOverLineUnclamp_) {
            mouseOverLineUnclamp(_mouseOverLineUnclampForce_);
          }

          if (_mouseOverReduceFontSize_) {
            //mouse hover reduce font size sel

            mouseOverReduceFontSize(
              _mouseOverReduceFontSizeForce_,
              _mouseHoverReduceFontSizePx_
            );
          }

          //static options

          if (_overloadFontSizeSwitch_) {
            //overload font size sel
            overloadoutlineFontSize(
              _overloadFontSizeForceSwitch_,
              _overloadFontSizePx_
            );
          }

          if (
            _enableoutlineFrontLine_ &&
            !_mouseoverZeroPadding_ &&
            !_enableAdjustStaticoutlinePadding_
          ) {
            addFrontLine(
              _outlineFrontLineImplememtation_,
              _outlineFrontLinePosition_,
              _outlineFrontLinePadding_,
              _outlineFrontLineBorder_
            );
          }

          if (!_mouseoverZeroPadding_ && _enableAdjustStaticoutlinePadding_) {
            //主开关打开 && 鼠标悬停零缩进关闭 && 分别缩进开关启用

            const outlineObserver = new MutationObserver((mutations) => {
              handleDomChanges();
            });

            const config = { attributes: true, childList: true, subtree: true };

            // outlineBbserver.observe(document, config);

            document.querySelectorAll(".fn__flex-column").forEach((element) => {
              outlineObserver.observe(element, config);
            });
            //

            function handleDomChanges() {
              const _elements_ = document.querySelectorAll(".b3-list-item");

              _elements_.forEach((element) => {
                const _toggleElement_ = element.querySelector(
                  ".b3-list-item__toggle"
                );
                if (_toggleElement_) {
                  // Check if the element exists
                  const _isCompressed_ =
                    _toggleElement_.getAttribute("data-compressed");

                  if (!_isCompressed_) {
                    const _originalPadding_ = parseFloat(
                      window.getComputedStyle(_toggleElement_).paddingLeft
                    );
                    const _compressedPadding_ =
                      _originalPadding_ * (1 - _compressionPercentage_ / 100);

                    if (
                      element.getAttribute("data-type") != "navigation-root"
                    ) {
                      //prevent compress notebook
                      _toggleElement_.style.paddingLeft = `${_compressedPadding_}px`;
                      _toggleElement_.setAttribute("data-compressed", "true"); //mark as compressed prevent nested compression
                    }
                  }
                }
              });
            }
          }
        }
      } catch (error) {
        console.error(
          "siyuan_outline_modification: failed inject interface",
          error
        );
      }
    };

    layoutReadyAsyncHandler();
  }

  async onunload() {
    // await this.settingUtils.save();
    // window.location.reload();
  }
}
