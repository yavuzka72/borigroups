(function() {
var exports = {};
exports.id = 2929;
exports.ids = [2929];
exports.modules = {

/***/ 4371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ coming_soon; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-countdown"
var external_react_countdown_namespaceObject = require("react-countdown");;
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_namespaceObject);
;// CONCATENATED MODULE: ./components/features/count-down.jsx

var __jsx = (external_react_default()).createElement;
// countdown renderer for comming soon
const rendererOne = ({
  days,
  hours,
  minutes,
  seconds
}) => __jsx("span", {
  className: "count-row countdown-show4"
}, __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, days), __jsx("span", {
  className: "countdown-period"
}, "Days")), __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, hours > 9 ? hours : '0' + hours), __jsx("span", {
  className: "countdown-period"
}, "Hours")), __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, minutes > 9 ? minutes : '0' + minutes), __jsx("span", {
  className: "countdown-period"
}, "Minutes")), __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, seconds > 9 ? seconds : '0' + seconds), __jsx("span", {
  className: "countdown-period"
}, "Seconds"))); // countdown renderer type 2

const rendererTwo = ({
  days,
  hours,
  minutes,
  seconds
}) => __jsx("span", {
  className: "countdown-row countdown-amount"
}, days, " days, ", hours > 9 ? hours : '0' + hours, " : ", minutes > 9 ? minutes : '0' + minutes, " : ", seconds > 9 ? seconds : '0' + seconds); // countdown renderer type 3

const rendererThree = ({
  days,
  hours,
  minutes,
  seconds
}) => __jsx("span", {
  className: "countdown-row countdown-show3"
}, __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, hours > 9 ? hours : '0' + hours), __jsx("span", {
  className: "countdown-period"
}, "hours")), __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, minutes > 9 ? minutes : '0' + minutes), __jsx("span", {
  className: "countdown-period"
}, "mins")), __jsx("span", {
  className: "countdown-section"
}, __jsx("span", {
  className: "countdown-amount"
}, seconds > 9 ? seconds : '0' + seconds), __jsx("span", {
  className: "countdown-period"
}, "secs")));
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
;// CONCATENATED MODULE: ./pages/pages/coming-soon.jsx

var coming_soon_jsx = (external_react_default()).createElement;




function ComingSoon() {
  return coming_soon_jsx("div", {
    className: "soon"
  }, coming_soon_jsx("div", {
    className: "container"
  }, coming_soon_jsx("div", {
    className: "row"
  }, coming_soon_jsx("div", {
    className: "col-md-9 col-lg-8"
  }, coming_soon_jsx("div", {
    className: "soon-content text-center"
  }, coming_soon_jsx("div", {
    className: "soon-content-wrapper"
  }, coming_soon_jsx("img", {
    src: "images/logo-icon.png",
    alt: "Logo",
    className: "soon-logo mx-auto"
  }), coming_soon_jsx("h1", {
    className: "soon-title"
  }, "Coming Soon"), coming_soon_jsx("div", {
    className: "coming-countdown countdown-separator"
  }, coming_soon_jsx((external_react_countdown_default()), {
    date: `2022-02-01T01:02:03`,
    renderer: rendererOne
  })), coming_soon_jsx("hr", {
    className: "mt-2 mb-3 mt-md-3"
  }), coming_soon_jsx("p", {
    className: "mb-2"
  }, "We are currently working on an awesome new site. Stay tuned for more information. Subscribe to our newsletter to stay updated on our progress."), coming_soon_jsx("form", {
    action: "#"
  }, coming_soon_jsx("div", {
    className: "input-group mb-5"
  }, coming_soon_jsx("input", {
    type: "email",
    className: "form-control bg-transparent",
    placeholder: "Enter your Email Address",
    required: true
  }), coming_soon_jsx("div", {
    className: "input-group-append"
  }, coming_soon_jsx("button", {
    className: "btn btn-outline-primary-2",
    type: "submit"
  }, coming_soon_jsx("span", null, "SUBSCRIBE"), coming_soon_jsx("i", {
    className: "icon-long-arrow-right"
  }))))), coming_soon_jsx("div", {
    className: "social-icons justify-content-center mb-0"
  }, coming_soon_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Facebook"
  }, coming_soon_jsx("i", {
    className: "icon-facebook-f"
  })), coming_soon_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Twitter"
  }, coming_soon_jsx("i", {
    className: "icon-twitter"
  })), coming_soon_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Instagram"
  }, coming_soon_jsx("i", {
    className: "icon-instagram"
  })), coming_soon_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Youtube"
  }, coming_soon_jsx("i", {
    className: "icon-youtube"
  })), coming_soon_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Pinterest"
  }, coming_soon_jsx("i", {
    className: "icon-pinterest"
  })))))))), coming_soon_jsx("div", {
    className: "soon-bg bg-image",
    style: {
      backgroundImage: `url(images/backgrounds/soon-bg.jpg)`
    }
  }));
}

/* harmony default export */ var coming_soon = (ComingSoon);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011], function() { return __webpack_exec__(4371); });
module.exports = __webpack_exports__;

})();