/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = state => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll("[data-modal]"),
          lastForm = document.querySelector("[data-calc]"),
          scroll = calcScroll();
    let checkInputsResult = true;

    const closeWindows = () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
    };

    const checkInputs = trigger => {
      const stateKeys = Object.keys(state);

      switch (trigger) {
        case "button popup_calc_button":
          stateKeys.length >= 4 ? checkInputsResult = true : checkInputsResult = false;
          break;

        case "button popup_calc_profile_button":
          stateKeys.length === 5 ? checkInputsResult = true : checkInputsResult = false;
          break;

        default:
          checkInputsResult = true;
      }
    };

    lastForm.addEventListener('submit', e => {
      setTimeout(() => {
        closeWindows();
        document.body.classList.remove('modal-open');

        for (let key in state) {
          if (key === 'type' || key === 'form') {
            continue;
          }

          delete state[key];
        }
      }, 2000);
    });
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        checkInputs(item.className);

        if (checkInputsResult) {
          closeWindows();
          modal.style.display = "block";
          document.body.classList.add('modal-open');
          document.body.style.marginRight = `${scroll}px`;
        } else {
          alert("Выберите все пункты!");
        }
        /* document.body.style.overflow = "hidden"; */

      });
    });
    close.addEventListener('click', () => {
      closeWindows();
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
      /*       document.body.style.overflow = ""; */
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        closeWindows();
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
        document.body.style.marginRight = `0px`;
        /*       document.body.style.overflow = ""; */
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.classList.add('modal-open');
      /*       document.body.style.overflow = ""; */
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal();
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map