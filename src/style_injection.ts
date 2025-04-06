/******* injections with construct helpers */
export function outlineDisplayLevel(_displayLevel_) {
  // First, remove previous display level styles
  const previousStyles = document.querySelectorAll(
    "style[data-outline-display-level]"
  );
  previousStyles.forEach((style) => style.remove());

  let css = "";

  if (_displayLevel_ > 0) {
    let selectors = [];

    for (let i = _displayLevel_; i <= 20; i++) {
      let nestedSelector = "div.sy__outline .b3-list";
      for (let j = 0; j < i; j++) {
        nestedSelector += " > .b3-list-item + ul";
      }
      nestedSelector += " > .b3-list-item";
      selectors.push(nestedSelector);

      selectors.push(`${nestedSelector} + ul`);
    }

    css = `
      ${selectors.join(",\n")} {
        display: none;
      }
    `;

    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.setAttribute("data-outline-display-level", _displayLevel_);
    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  }
}

/******** simple css injections **********/

export function mouseOverReduceFontSize(_force_, _px_) {
  const css = _force_
    ? `
        div.sy__outline .b3-list-item__text {
            transition: font-size 0.2s ease;
        }
        div.sy__outline .b3-list-item:hover > .b3-list-item__text {
            font-size: ${_px_}px !important;
         }
         `
    : `
        div.sy__outline .b3-list-item__text {
            transition: font-size 0.2s ease;
        }
        div.sy__outline .b3-list-item:hover > .b3-list-item__text {
            font-size: ${_px_}px;
         }`;
  applyStyles(css);
}

export function mouseOverLineUnclamp(_force_) {
  const css = _force_
    ? `
        div.sy__outline .b3-list-item:hover > .b3-list-item__text {
            overflow: visible !important;
            -webkit-line-clamp: unset !important;
         }
         `
    : `
         div.sy__outline .b3-list-item:hover > .b3-list-item__text {
            overflow: visible;
            -webkit-line-clamp: unset;
         }`;

  applyStyles(css);
}

export function overloadLineHeight(_force_, _px_) {
  const css = _force_
    ? `
        div.sy__outline .b3-list-item__text {
            line-height: ${_px_}px !important;
         }
         `
    : `
         div.sy__outline .b3-list-item__text {
            line-height: ${_px_}px;
         }`;

  applyStyles(css);
}

export function overloadoutlineFontSize(_force_, _px_) {
  const css =
    _force_ === true
      ? `
        div.sy__outline > div {
            font-size: ${_px_}px !important;
        }
        `
      : `
        div.sy__outline > div {
            font-size: ${_px_}px;
        }
        `;
  applyStyles(css);
}

/********** has script and injections *********/
export function addFrontLine(
  _implementation_,
  _line_location_,
  _padding_,
  _border_
) {
  console.log(_implementation_);

  if (Number(_padding_) >= Number(_line_location_)) {
    _padding_ = _line_location_;
  }

  var css;

  switch (_implementation_) {
    case "1":
      css = ` .b3-list ul {
                position: relative;
                }

                /* main */
                div.sy__outline .b3-list ul::before {
                content: '';
                position: absolute;
                left: 20px;
                top: 0;
                height: 100%;
                border-left: ${_border_}px solid var(--b3-theme-background-light);
                z-index: 0;
                }

                div.sy__outline .b3-list ul ul::before {
                left: 34px;
                }

                div.sy__outline .b3-list ul ul ul::before {
                left: 52px;
                }

                div.sy__outline .b3-list ul ul ul ul::before {
                left: 70px;
                }

                div.sy__outline .b3-list ul ul ul ul ul::before {
                left: 88px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul::before {
                left: 106px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul::before {
                left: 124px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul::before {
                left: 142px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul::before {
                left: 160px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul::before {
                left: 178px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 196px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 214px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 232px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 250px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 268px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 286px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 304px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 322px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 340px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 358px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 376px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 394px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 412px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 430px;
                }

                div.sy__outline .b3-list ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul ul::before {
                left: 448px;
                }
                `;
      break;

    case "2":
      css = `
                div.sy__outline .layout-tab-container .b3-list-item > .b3-list-item__toggle {
                    position: relative; 
                    padding-left: 4px !important;
                }
                
                div.sy__outline .layout-tab-container ul ul::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${_line_location_}px;
                    border-left: ${_border_}px solid var(--b3-theme-background-light);
                }
                
                div.sy__outline .layout-tab-container ul ul {
                    position: relative;
                    padding-left: ${_padding_}px;
                }
                
                div.sy__outline .layout-tab-container ul ul::after {
                    content: "";
                    position: absolute;
                    left: ${_line_location_}px;
                    border-bottom: var(--custom-block-list-guides-line-width) solid var(--b3-theme-on-surface) !important;
                    width: 0px; //dunno what's this currently
                    height: 0;
                }
                
                div.sy__outline .layout-tab-container ul ul::before {
                    content: "";
                    position: absolute;
                    top: 0px; // make the line go down for x px.
                    left: ${_line_location_}px;
                    border-top: var(--custom-block-list-guides-line-width) solid var(--b3-theme-on-surface);
                }
                
                `;
      break;

    case "3":
      css = `

                div.sy__outline .layout-tab-container .b3-list-item > .b3-list-item__toggle {
                    padding-left: 4px !important;
                }
        
                div.sy__outline .layout-tab-container ul ul:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${_line_location_}px;
                    border-left: ${_border_}px solid var(--b3-theme-background-light);
                }
                
                div.sy__outline .layout-tab-container ul ul {
                    position: relative;
                    padding-left: ${_padding_}px;
                }
                
                `;
      break;

    case "4":
      css = `
                div.sy__outline .layout-tab-container .b3-list-item > .b3-list-item__toggle {
                    padding-left: 4px !important;
                }
        
                div.sy__outline .layout-tab-container ul ul:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: ${_line_location_}px;
                    border-left: ${_border_}px solid var(--b3-theme-background-light);
                }
                
                div.sy__outline .layout-tab-container ul ul {
                    position: relative;
                    padding-left: ${_padding_}px;
                }
        
                div.sy__outline .layout-tab-container ul ul:hover:before {
                    border-left-color: var(--b3-theme-on-primary);
                }
                `;
      break;
  }

  applyStyles(css);
}

export function mouseOverZeroPadding(_force_, _px_, _style_) {
  console.log("aaaaa");
  switch (_style_) {
    case "1":
      const css_padding_toggle = _force_
      ? `
            div.sy__outline .layout-tab-container .b3-list-item__toggle {
              transition: padding-left 0.2s ease;
            }
            div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
              padding-left: ${_px_}px !important;
            }
            `
      : `
            div.sy__outline .layout-tab-container .b3-list-item__toggle {
              transition: padding-left 0.2s ease;
            }
            div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
              padding-left: ${_px_}px;
            }`;
      applyStyles(css_padding_toggle);
      console.log(css_padding_toggle);
      break;

    case "2":
      const css_padding_icon = _force_
        ? `
                  div.sy__outline .layout-tab-container .b3-list-item__icon {
                      transition: padding-left 0.2s ease;
                  }
                  div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__icon {
                      padding-left: ${_px_}px !important;
                  }
                  `
        : `
                  div.sy__outline .layout-tab-container .b3-list-item__icon {
                      transition: padding-left 0.2s ease;
                  }
                  div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__icon {
                      padding-left: ${_px_}px;
                  }`;
      applyStyles(css_padding_icon);

      ///worker moving padding from toggle into icon
      function moving_padding_from_toggle_into_icon() {
        var toggles = document.getElementsByClassName(
          "div.sy__outline .b3-list-item__toggle"
        );
        for (var i = 0; i < toggles.length; i++) {
          var paddingLeft = window
            .getComputedStyle(toggles[i], null)
            .getPropertyValue("padding-left");
          var icon = toggles[i].parentNode.getElementsByClassName(
            "div.sy__outline .b3-list-item__icon"
          )[0];
          if (icon && paddingLeft !== _px_ + "px") {
            icon.style.paddingLeft = paddingLeft;
            toggles[i].style.paddingLeft = _px_ + "px"; // 将 padding-left 设为 0
          }
        }
      }

      moving_padding_from_toggle_into_icon();

      var observer = new MutationObserver(function (mutations) {
        moving_padding_from_toggle_into_icon();
      });

      var config = { childList: true, subtree: true };

      observer.observe(document, config);

      break;

    case "3":
      ///worker moving left padding of toggle into right

      function moving_left_padding_into_right() {
        var toggles = document.getElementsByClassName(
          "div.sy__outline .b3-list-item__toggle"
        );
        for (var i = 0; i < toggles.length; i++) {
          var paddingLeft = window
            .getComputedStyle(toggles[i], null)
            .getPropertyValue("padding-left");
          if (paddingLeft !== _px_ + "px") {
            toggles[i].style.paddingRight = paddingLeft;
            toggles[i].style.paddingLeft = _px_ + "px";
          }
        }
      }

      moving_left_padding_into_right();

      var observer = new MutationObserver(function (mutations) {
        moving_left_padding_into_right();
      });

      var config = { childList: true, subtree: true };

      observer.observe(document, config);

      const css_padding_icon_LR = _force_
        ? `
                  div.sy__outline .layout-tab-container .b3-list-item__toggle {
                      transition: padding-right 0.2s ease;
                  }
                  div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
                      padding-right: ${_px_}px !important;
                  }
                  `
        : `
                  div.sy__outline .layout-tab-container .b3-list-item__toggle {
                      transition: padding-right 0.2s ease;
                  }
                  div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__toggle {
                      padding-right: ${_px_}px;
                  }`;
      applyStyles(css_padding_icon_LR);

      break;

    case "4":
      const css_padding_text = _force_
        ? `
                  div.sy__outline .layout-tab-container .b3-list-item__text {
                      transition: padding-left 0.2s ease;
                  }
                  div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
                      padding-left: ${_px_}px !important;
                  }
                  `
        : `
                  div.sy__outline .layout-tab-container .b3-list-item__text {
                      transition: padding-left 0.2s ease;
                  }
                  div.sy__outline .layout-tab-container .b3-list-item:hover > .b3-list-item__text {
                      padding-left: ${_px_}px;
                  }`;
      applyStyles(css_padding_text);
      console.log(css_padding_text);

      /// worker padding text

      function moving_padding_from_toggle_into_text() {
        var toggles = document.getElementsByClassName(
          "div.sy__outline .b3-list-item__toggle"
        );
        for (var i = 0; i < toggles.length; i++) {
          var paddingLeft = window
            .getComputedStyle(toggles[i], null)
            .getPropertyValue("padding-left");
          var text = toggles[i].parentNode.getElementsByClassName(
            "div.sy__outline .b3-list-item__text"
          )[0];
          if (text && paddingLeft !== _px_ + "px") {
            text.style.paddingLeft = paddingLeft;
            toggles[i].style.paddingLeft = _px_ + "px"; // 将 padding-left 设为 0
          }
        }
      }

      moving_padding_from_toggle_into_text();

      var observer = new MutationObserver(function (mutations) {
        moving_padding_from_toggle_into_text();
      });

      var config = { childList: true, subtree: true };

      observer.observe(document, config);
  }
}

/******** helpers ***********/
export function applyStyles(css) {
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  head.appendChild(style);
  style.appendChild(document.createTextNode(css));
}
