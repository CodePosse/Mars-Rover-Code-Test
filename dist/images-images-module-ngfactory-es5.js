function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["images-images-module-ngfactory"], {
  /***/
  "./node_modules/ngx-pagination/dist/ngx-pagination.js":
  /*!************************************************************!*\
    !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
    \************************************************************/

  /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

  /***/
  function node_modulesNgxPaginationDistNgxPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DEFAULT_STYLES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DEFAULT_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
      return NgxPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
      return PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
      return PaginationControlsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PaginationService =
    /** @class */
    function () {
      function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
      }

      PaginationService.prototype.defaultId = function () {
        return this.DEFAULT_ID;
      };
      /**
       * Register a PaginationInstance with this service. Returns a
       * boolean value signifying whether the instance is new or
       * updated (true = new or updated, false = unchanged).
       */


      PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
          instance.id = this.DEFAULT_ID;
        }

        if (!this.instances[instance.id]) {
          this.instances[instance.id] = instance;
          return true;
        } else {
          return this.updateInstance(instance);
        }
      };
      /**
       * Check each property of the instance and update any that have changed. Return
       * true if any changes were made, else return false.
       */


      PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;

        for (var prop in this.instances[instance.id]) {
          if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
          }
        }

        return changed;
      };
      /**
       * Returns the current page number.
       */


      PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
          return this.instances[id].currentPage;
        }
      };
      /**
       * Sets the current page number.
       */


      PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
          var instance = this.instances[id];
          var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (page <= maxPage && 1 <= page) {
            this.instances[id].currentPage = page;
            this.change.emit(id);
          }
        }
      };
      /**
       * Sets the value of instance.totalItems
       */


      PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
          this.instances[id].totalItems = totalItems;
          this.change.emit(id);
        }
      };
      /**
       * Sets the value of instance.itemsPerPage.
       */


      PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
          this.instances[id].itemsPerPage = itemsPerPage;
          this.change.emit(id);
        }
      };
      /**
       * Returns a clone of the pagination instance object matching the id. If no
       * id specified, returns the instance corresponding to the default id.
       */


      PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) {
          id = this.DEFAULT_ID;
        }

        if (this.instances[id]) {
          return this.clone(this.instances[id]);
        }

        return {};
      };
      /**
       * Perform a shallow clone of an object.
       */


      PaginationService.prototype.clone = function (obj) {
        var target = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }

        return target;
      };

      return PaginationService;
    }();

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

    var PaginatePipe =
    /** @class */
    function () {
      function PaginatePipe(service) {
        this.service = service; // store the values from the last time the pipe was invoked

        this.state = {};
      }

      PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
          var _id = args.id || this.service.defaultId();

          if (this.state[_id]) {
            return this.state[_id].slice;
          } else {
            return collection;
          }
        }

        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);

        if (!serverSideMode && collection instanceof Array) {
          perPage = +perPage || LARGE_NUMBER;
          start = (instance.currentPage - 1) * perPage;
          end = start + perPage;
          var isIdentical = this.stateIsIdentical(id, collection, start, end);

          if (isIdentical) {
            return this.state[id].slice;
          } else {
            var slice = collection.slice(start, end);
            this.saveState(id, collection, slice, start, end);
            this.service.change.emit(id);
            return slice;
          }
        } else {
          if (emitChange) {
            this.service.change.emit(id);
          } // save the state for server-side collection to avoid null
          // flash as new data loads.


          this.saveState(id, collection, collection, start, end);
          return collection;
        }
      };
      /**
       * Create an PaginationInstance object, using defaults for any optional properties not supplied.
       */


      PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
          id: config.id != null ? config.id : this.service.defaultId(),
          itemsPerPage: +config.itemsPerPage || 0,
          currentPage: +config.currentPage || 1,
          totalItems: +config.totalItems || collection.length
        };
      };
      /**
       * Ensure the argument passed to the filter contains the required properties.
       */


      PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) {
          return !(prop in config);
        });

        if (0 < missing.length) {
          throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
      };
      /**
       * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
       * array for a given id. This means that the next time the pipe is run on this collection & id, we just
       * need to check that the collection, start and end points are all identical, and if so, return the
       * last sliced array.
       */


      PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
          collection: collection,
          size: collection.length,
          slice: slice,
          start: start,
          end: end
        };
      };
      /**
       * For a given id, returns true if the collection, size, start and end values are identical.
       */


      PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];

        if (!state) {
          return false;
        }

        var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

        if (!isMetaDataIdentical) {
          return false;
        }

        return state.slice.every(function (element, index) {
          return element === collection[start + index];
        });
      };

      PaginatePipe = __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'paginate',
        pure: false
      }), __metadata("design:paramtypes", [PaginationService])], PaginatePipe);
      return PaginatePipe;
    }();
    /**
     * The default template and styles for the pagination links are borrowed directly
     * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
     */


    var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
    var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function coerceToBoolean(input) {
      return !!input && input !== 'false';
    }
    /**
     * The default pagination controls component. Actually just a default implementation of a custom template.
     */


    var PaginationControlsComponent =
    /** @class */
    function () {
      function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
      }

      Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function get() {
          return this._responsive;
        },
        set: function set(value) {
          this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsComponent = __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'pagination-controls',
        template: DEFAULT_TEMPLATE,
        styles: [DEFAULT_STYLES],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      })], PaginationControlsComponent);
      return PaginationControlsComponent;
    }();

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
     * This directive is what powers all pagination controls components, including the default one.
     * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
     * with the pagination controls.
     */


    var PaginationControlsDirective =
    /** @class */
    function () {
      function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;

        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change.subscribe(function (id) {
          if (_this.id === id) {
            _this.updatePageLinks();

            _this.changeDetectorRef.markForCheck();

            _this.changeDetectorRef.detectChanges();
          }
        });
      }

      PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
          this.id = this.service.defaultId();
        }

        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
      };
      /**
       * Go to the previous page
       */


      PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
      };
      /**
       * Go to the next page
       */


      PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
      };
      /**
       * Returns true if current page is first page
       */


      PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
      };
      /**
       * Returns true if current page is last page
       */


      PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
      };
      /**
       * Set the current page number.
       */


      PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
      };
      /**
       * Get the current page number.
       */


      PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
      };
      /**
       * Returns the last page number
       */


      PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);

        if (inst.totalItems < 1) {
          // when there are 0 or fewer (an error case) items, there are no "pages" as such,
          // but it makes sense to consider a single, empty page as the last page.
          return 1;
        }

        return Math.ceil(inst.totalItems / inst.itemsPerPage);
      };

      PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
      };

      PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
          console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
      };
      /**
       * Updates the page links and checks that the current page is valid. Should run whenever the
       * PaginationService.change stream emits a value matching the current ID, or when any of the
       * input values changes.
       */


      PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;

        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);

        if (correctedCurrentPage !== inst.currentPage) {
          setTimeout(function () {
            _this.pageBoundsCorrection.emit(correctedCurrentPage);

            _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
          });
        } else {
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
      };
      /**
       * Checks that the instance.currentPage property is within bounds for the current page range.
       * If not, return a correct value for currentPage, or the current value if OK.
       */


      PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

        if (totalPages < instance.currentPage && 0 < totalPages) {
          return totalPages;
        } else if (instance.currentPage < 1) {
          return 1;
        }

        return instance.currentPage;
      };
      /**
       * Returns an array of Page objects to use in the pagination controls.
       */


      PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;

        while (i <= totalPages && i <= paginationRange) {
          var label = void 0;
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
          var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
          } else {
            label = pageNumber;
          }

          pages.push({
            label: label,
            value: pageNumber
          });
          i++;
        }

        return pages;
      };
      /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */


      PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);

        if (i === paginationRange) {
          return totalPages;
        } else if (i === 1) {
          return i;
        } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
          } else {
            return i;
          }
        } else {
          return i;
        }
      };

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsDirective = __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: 'pagination-template,[pagination-template]',
        exportAs: 'paginationApi'
      }), __metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);
      return PaginationControlsDirective;
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxPaginationModule =
    /** @class */
    function () {
      function NgxPaginationModule() {}

      NgxPaginationModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
        providers: [PaginationService],
        exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
      })], NgxPaginationModule);
      return NgxPaginationModule;
    }();
    /**
     * Generated bundle index. Do not edit.
     */

    /***/

  },

  /***/
  "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: NgxPaginationModuleNgFactory, RenderType_PaginationControlsComponent, View_PaginationControlsComponent_0, View_PaginationControlsComponent_Host_0, PaginationControlsComponentNgFactory */

  /***/
  function node_modulesNgxPaginationDistNgxPaginationNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModuleNgFactory", function () {
      return NgxPaginationModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PaginationControlsComponent", function () {
      return RenderType_PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PaginationControlsComponent_0", function () {
      return View_PaginationControlsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PaginationControlsComponent_Host_0", function () {
      return View_PaginationControlsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponentNgFactory", function () {
      return PaginationControlsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var NgxPaginationModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"], [])]);
    });

    var styles_PaginationControlsComponent = ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "];

    var RenderType_PaginationControlsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_PaginationControlsComponent,
      data: {}
    });

    function View_PaginationControlsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "keyup.enter"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("keyup.enter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).previous() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).previous() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.previousLabel + " " + _co.screenReaderPageLabel;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.previousLabel;

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = _co.screenReaderPageLabel;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_PaginationControlsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.previousLabel;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.screenReaderPageLabel;

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_PaginationControlsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [["class", "pagination-previous"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_1 = 1 < _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent();

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isFirstPage();

        _ck(_v, 4, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isFirstPage();

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_PaginationControlsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "a", [["tabindex", "0"]], null, [[null, "keyup.enter"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("keyup.enter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).setCurrent(_v.parent.context.$implicit.value) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).setCurrent(_v.parent.context.$implicit.value) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.screenReaderPageLabel;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.label === "..." ? _v.parent.context.$implicit.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.label, ""));

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_PaginationControlsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 2)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.screenReaderCurrentLabel;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.label === "..." ? _v.parent.context.$implicit.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.label, ""));

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_PaginationControlsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [], [[2, "current", null], [2, "ellipsis", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent() !== _v.context.$implicit.value;

        _ck(_v, 2, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent() === _v.context.$implicit.value;

        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).getCurrent() === _v.context.$implicit.value;

        var currVal_1 = _v.context.$implicit.label === "...";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_PaginationControlsComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "a", [["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "keyup.enter"], [null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("keyup.enter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).next() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent.parent, 2).next() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.nextLabel + " " + _co.screenReaderPageLabel;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.nextLabel;

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = _co.screenReaderPageLabel;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_PaginationControlsComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.nextLabel;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.screenReaderPageLabel;

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_PaginationControlsComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "li", [["class", "pagination-next"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_1 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isLastPage();

        _ck(_v, 2, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isLastPage();

        _ck(_v, 4, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 2).isLastPage();

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_PaginationControlsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "ul", [["class", "ngx-pagination"], ["role", "navigation"]], [[1, "aria-label", 0], [2, "responsive", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "li", [["class", "small-screen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, [" ", " / ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.directionLinks;

        _ck(_v, 2, 0, currVal_2);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 2).pages;

        _ck(_v, 6, 0, currVal_5);

        var currVal_6 = _co.directionLinks;

        _ck(_v, 8, 0, currVal_6);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.screenReaderPaginationLabel;
        var currVal_1 = _co.responsive;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 2).getCurrent();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 2).getLastPage();

        _ck(_v, 4, 0, currVal_3, currVal_4);
      });
    }

    function View_PaginationControlsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "pagination-template", [], null, [[null, "pageChange"], [null, "pageBoundsCorrection"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("pageChange" === en) {
          var pd_0 = _co.pageChange.emit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("pageBoundsCorrection" === en) {
          var pd_1 = _co.pageBoundsCorrection.emit($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 737280, [["p", 4]], 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsDirective"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], {
        id: [0, "id"],
        maxSize: [1, "maxSize"]
      }, {
        pageChange: "pageChange",
        pageBoundsCorrection: "pageBoundsCorrection"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_PaginationControlsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.id;
        var currVal_1 = _co.maxSize;

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_2 = !(_co.autoHide && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).pages.length <= 1);

        _ck(_v, 4, 0, currVal_2);
      }, null);
    }

    function View_PaginationControlsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "pagination-controls", [], null, null, null, View_PaginationControlsComponent_0, RenderType_PaginationControlsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsComponent"], [], null, null)], null, null);
    }

    var PaginationControlsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("pagination-controls", ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationControlsComponent"], View_PaginationControlsComponent_Host_0, {
      id: "id",
      maxSize: "maxSize",
      directionLinks: "directionLinks",
      autoHide: "autoHide",
      responsive: "responsive",
      previousLabel: "previousLabel",
      nextLabel: "nextLabel",
      screenReaderPaginationLabel: "screenReaderPaginationLabel",
      screenReaderPageLabel: "screenReaderPageLabel",
      screenReaderCurrentLabel: "screenReaderCurrentLabel"
    }, {
      pageChange: "pageChange",
      pageBoundsCorrection: "pageBoundsCorrection"
    }, []);
    /***/

  },

  /***/
  "./src/app/images/image-gallery/image-gallery.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ./src/app/images/image-gallery/image-gallery.component.ngfactory.js ***!
    \***************************************************************************/

  /*! exports provided: RenderType_ImageGalleryComponent, View_ImageGalleryComponent_0, View_ImageGalleryComponent_Host_0, ImageGalleryComponentNgFactory */

  /***/
  function srcAppImagesImageGalleryImageGalleryComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ImageGalleryComponent", function () {
      return RenderType_ImageGalleryComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ImageGalleryComponent_0", function () {
      return View_ImageGalleryComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ImageGalleryComponent_Host_0", function () {
      return View_ImageGalleryComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryComponentNgFactory", function () {
      return ImageGalleryComponentNgFactory;
    });
    /* harmony import */


    var _image_gallery_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./image-gallery.component.scss.shim.ngstyle */
    "./src/app/images/image-gallery/image-gallery.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rover/rover.component.ngfactory */
    "./src/app/images/rover/rover.component.ngfactory.js");
    /* harmony import */


    var _rover_rover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../rover/rover.component */
    "./src/app/images/rover/rover.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _image_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-gallery.component */
    "./src/app/images/image-gallery/image-gallery.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ImageGalleryComponent = [_image_gallery_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ImageGalleryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ImageGalleryComponent,
      data: {}
    });

    function View_ImageGalleryComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "panel p-5 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "nmr-rover", [["CurrentRover", "curiosity"]], null, null, null, _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RoverComponent_0"], _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RoverComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _rover_rover_component__WEBPACK_IMPORTED_MODULE_3__["RoverComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]], {
        CurrentRover: [0, "CurrentRover"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "panel p-5 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "nmr-rover", [["CurrentRover", "opportunity"]], null, null, null, _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RoverComponent_0"], _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RoverComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _rover_rover_component__WEBPACK_IMPORTED_MODULE_3__["RoverComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]], {
        CurrentRover: [0, "CurrentRover"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "panel p-5 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "nmr-rover", [["CurrentRover", "spirit"]], null, null, null, _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_RoverComponent_0"], _rover_rover_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_RoverComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _rover_rover_component__WEBPACK_IMPORTED_MODULE_3__["RoverComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]], {
        CurrentRover: [0, "CurrentRover"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "curiosity";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = "opportunity";

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = "spirit";

        _ck(_v, 8, 0, currVal_2);
      }, null);
    }

    function View_ImageGalleryComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "nmr-image-gallery", [], null, null, null, View_ImageGalleryComponent_0, RenderType_ImageGalleryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _image_gallery_component__WEBPACK_IMPORTED_MODULE_5__["ImageGalleryComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ImageGalleryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("nmr-image-gallery", _image_gallery_component__WEBPACK_IMPORTED_MODULE_5__["ImageGalleryComponent"], View_ImageGalleryComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/images/image-gallery/image-gallery.component.scss.shim.ngstyle.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/images/image-gallery/image-gallery.component.scss.shim.ngstyle.js ***!
    \***********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppImagesImageGalleryImageGalleryComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/images/image-gallery/image-gallery.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/images/image-gallery/image-gallery.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ImageGalleryComponent */

  /***/
  function srcAppImagesImageGalleryImageGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function () {
      return ImageGalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImageGalleryComponent =
    /*#__PURE__*/
    function () {
      function ImageGalleryComponent() {
        _classCallCheck(this, ImageGalleryComponent);
      }

      _createClass(ImageGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageGalleryComponent;
    }();
    /***/

  },

  /***/
  "./src/app/images/images-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/images/images-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ImagesRoutingModule */

  /***/
  function srcAppImagesImagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesRoutingModule", function () {
      return ImagesRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./image-gallery/image-gallery.component */
    "./src/app/images/image-gallery/image-gallery.component.ts");

    var routes = [{
      path: '',
      component: _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_1__["ImageGalleryComponent"]
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var ImagesRoutingModule = function ImagesRoutingModule() {
      _classCallCheck(this, ImagesRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/images/images.module.ngfactory.js":
  /*!***************************************************!*\
    !*** ./src/app/images/images.module.ngfactory.js ***!
    \***************************************************/

  /*! exports provided: ImagesModuleNgFactory */

  /***/
  function srcAppImagesImagesModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesModuleNgFactory", function () {
      return ImagesModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _images_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./images.module */
    "./src/app/images/images.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _image_gallery_image_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-gallery/image-gallery.component.ngfactory */
    "./src/app/images/image-gallery/image-gallery.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../node_modules/ng-metro4/ng-metro4.ngfactory */
    "./node_modules/ng-metro4/ng-metro4.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_metro4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-metro4 */
    "./node_modules/ng-metro4/fesm2015/ng-metro4.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _images_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./images-routing.module */
    "./src/app/images/images-routing.module.ts");
    /* harmony import */


    var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./image-gallery/image-gallery.component */
    "./src/app/images/image-gallery/image-gallery.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var ImagesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_images_module__WEBPACK_IMPORTED_MODULE_1__["ImagesModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _image_gallery_image_gallery_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TagInputComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SelectComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["InputComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MaterialInputComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TextareaComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RadioComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RadioGroupComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SwitchComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FileInputComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["KeypadComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SliderComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RatingComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CalendarPickerComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CalendarComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["TimePickerComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FormControlWrapperComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FormWrapperComponentNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵkNgFactory"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵlNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["DialogService"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["DialogService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NotifyService"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NotifyService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["ToastService"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["ToastService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _images_routing_module__WEBPACK_IMPORTED_MODULE_10__["ImagesRoutingModule"], _images_routing_module__WEBPACK_IMPORTED_MODULE_10__["ImagesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4BaseModule"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4BaseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4FormsModule"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4ControlsModule"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4ControlsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4InformationModule"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4InformationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4Module"], ng_metro4__WEBPACK_IMPORTED_MODULE_7__["NgMetro4Module"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _images_module__WEBPACK_IMPORTED_MODULE_1__["ImagesModule"], _images_module__WEBPACK_IMPORTED_MODULE_1__["ImagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () {
        return [[{
          path: "",
          component: _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_11__["ImageGalleryComponent"]
        }, {
          path: "**",
          redirectTo: "",
          pathMatch: "full"
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/images/images.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/images/images.module.ts ***!
    \*****************************************/

  /*! exports provided: ImagesModule */

  /***/
  function srcAppImagesImagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesModule", function () {
      return ImagesModule;
    });

    var ImagesModule = function ImagesModule() {
      _classCallCheck(this, ImagesModule);
    };
    /***/

  },

  /***/
  "./src/app/images/rover/rover.component.ngfactory.js":
  /*!***********************************************************!*\
    !*** ./src/app/images/rover/rover.component.ngfactory.js ***!
    \***********************************************************/

  /*! exports provided: RenderType_RoverComponent, View_RoverComponent_0, View_RoverComponent_Host_0, RoverComponentNgFactory */

  /***/
  function srcAppImagesRoverRoverComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_RoverComponent", function () {
      return RenderType_RoverComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RoverComponent_0", function () {
      return View_RoverComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RoverComponent_Host_0", function () {
      return View_RoverComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoverComponentNgFactory", function () {
      return RoverComponentNgFactory;
    });
    /* harmony import */


    var _rover_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rover.component.scss.shim.ngstyle */
    "./src/app/images/rover/rover.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */
    "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/ng-metro4/ng-metro4.ngfactory */
    "./node_modules/ng-metro4/ng-metro4.ngfactory.js");
    /* harmony import */


    var ng_metro4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-metro4 */
    "./node_modules/ng-metro4/fesm2015/ng-metro4.js");
    /* harmony import */


    var _rover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./rover.component */
    "./src/app/images/rover/rover.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_RoverComponent = [_rover_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_RoverComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_RoverComponent,
      data: {}
    });

    function View_RoverComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [["role", "status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [["style", "color: #0366d6;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ":"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\xA0", " "]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.CurrentRover));

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.Cameras[_co.SelectedCamera];

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_RoverComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["role", "status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loading..."]))], null, null);
    }

    function View_RoverComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["data-role", "activity"], ["data-style", "dark"], ["data-type", "ring"], ["style", "margin: 70px auto;"]], null, null, null, null, null))], null, null);
    }

    function View_RoverComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "image-container ml-auto mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", ""], ["src", "/assets/images/nodata-found.png"]], null, null, null, null, null))], null, null);
    }

    function View_RoverComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.img_src;
        var currVal_1 = _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.camera == null ? null : _v.parent.context.$implicit.camera.full_name;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_RoverComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col-lg-2 col-md-3 col-sm-4 col-fs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "img-container thumbnail"], ["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          _co.SelectedPhoto = _v.context.$implicit;
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 39).open() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "span", [["class", "title"], ["role", "presentation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.img_src;

        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _v.context.$implicit.earth_date, "mediumDate"));

        _ck(_v, 5, 0, currVal_1);
      });
    }

    function View_RoverComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "col pagination"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "float-left pagination-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "pagination-controls", [], null, [[null, "pageChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("pageChange" === en) {
          var pd_0 = (_co.CurrentPage = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, [["pagination", 4]], 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], [], {
        autoHide: [0, "autoHide"]
      }, {
        pageChange: "pageChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "float-right pagination-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" Showing ", " to ", " of ", " entries "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_RoverComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](13, {
        itemsPerPage: 0,
        currentPage: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = true;

        _ck(_v, 5, 0, currVal_0);

        var currVal_4 = !_co.Photos.length;

        _ck(_v, 10, 0, currVal_4);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform(_co.Photos, _ck(_v, 13, 0, _co.PageSize, _co.CurrentPage)));

        _ck(_v, 12, 0, currVal_5);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.CurrentPage;

        var currVal_2 = _co.GetTotalPages();

        var currVal_3 = _co.Total;

        _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_RoverComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "img-fluid"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.SelectedPhoto.img_src;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_RoverComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 30, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "d-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 24, "form", [["class", "float-right filters"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("submit" === en) {
          var pd_2 = _co.GetImages(_co.SelectedCamera, _co.Sol, _co.CurrentRover) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 7, "m4-select", [["class", "mr-4 camera-input rounded"], ["m4-hint", "Rover Cameras"], ["name", "SelectedCamera"], ["prepend", "Camera:"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.SelectedCamera = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_1 = _co.OnCameraChange() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_SelectComponent_0"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_SelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["ControlBase"], null, [ng_metro4__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4898816, null, 0, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        options: [0, "options"],
        prepend: [1, "prepend"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [ng_metro4__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        isDisabled: [1, "isDisabled"],
        model: [2, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 606208, null, 0, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["HintDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        hintText: [0, "hintText"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 9, "m4-input", [["class", "mr-4 rounded"], ["m4-hint", "sol (ranges from 0 to max found in endpoint)"], ["minlength", "0"], ["name", "Sol"], ["prepend", "Sol:"], ["style", "min-width: 200px"], ["type", "number"]], [[1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.Sol = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_InputComponent_0"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_InputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["ControlBase"], null, [ng_metro4__WEBPACK_IMPORTED_MODULE_7__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], [], {
        minlength: [0, "minlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4898816, null, 0, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["InputComponent"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        type: [0, "type"],
        prepend: [1, "prepend"],
        clearButton: [2, "clearButton"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [ng_metro4__WEBPACK_IMPORTED_MODULE_7__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        isDisabled: [1, "isDisabled"],
        model: [2, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 606208, null, 0, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["HintDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        hintText: [0, "hintText"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "button", [["class", "button primary rounded"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 13, "m4-dialog", [["width", "90%"]], null, null, null, _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_DialogComponent_0"], _node_modules_ng_metro4_ng_metro4_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_DialogComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 4898816, [["dialog", 4]], 0, ng_metro4__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        width: [0, "width"],
        overlay: [1, "overlay"],
        overlayClickClose: [2, "overlayClickClose"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 5, "div", [["dialog-title", ""], ["role", "dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](44, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](45, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 1, 2, "div", [["class", "image-container"], ["dialog-content", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RoverComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 2, 2, "div", [["dialog-actions", ""], ["style", "position: relative;top: -20px;left: 5px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "a", [["style", "color: #fff;"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View full image"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.Loading;

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = _co.Loading;

        _ck(_v, 7, 0, currVal_1);

        var currVal_16 = _co.Cameras;
        var currVal_17 = "Camera:";

        _ck(_v, 15, 0, currVal_16, currVal_17);

        var currVal_18 = "SelectedCamera";
        var currVal_19 = _co.Loading;
        var currVal_20 = _co.SelectedCamera;

        _ck(_v, 17, 0, currVal_18, currVal_19, currVal_20);

        var currVal_21 = "Rover Cameras";

        _ck(_v, 20, 0, currVal_21);

        var currVal_30 = "0";

        _ck(_v, 23, 0, currVal_30);

        var currVal_31 = "number";
        var currVal_32 = "Sol:";
        var currVal_33 = false;

        _ck(_v, 25, 0, currVal_31, currVal_32, currVal_33);

        var currVal_34 = "Sol";
        var currVal_35 = _co.Loading;
        var currVal_36 = _co.Sol;

        _ck(_v, 27, 0, currVal_34, currVal_35, currVal_36);

        var currVal_37 = "sol (ranges from 0 to max found in endpoint)";

        _ck(_v, 30, 0, currVal_37);

        var currVal_39 = _co.Loading;

        _ck(_v, 35, 0, currVal_39);

        var currVal_40 = !_co.Loading;

        _ck(_v, 37, 0, currVal_40);

        var currVal_41 = "90%";
        var currVal_42 = true;
        var currVal_43 = true;

        _ck(_v, 39, 0, currVal_41, currVal_42, currVal_43);

        var currVal_46 = _co.SelectedPhoto.img_src;

        _ck(_v, 48, 0, currVal_46);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending;

        _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;

        _ck(_v, 13, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).minlength : null;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending;

        _ck(_v, 21, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

        var currVal_38 = _co.Loading;

        _ck(_v, 31, 0, currVal_38);

        var currVal_44 = _co.SelectedPhoto == null ? null : _co.SelectedPhoto.camera == null ? null : _co.SelectedPhoto.camera.full_name;

        _ck(_v, 42, 0, currVal_44);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 44, 0, _ck(_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.SelectedPhoto == null ? null : _co.SelectedPhoto.earth_date, "mediumDate"));

        _ck(_v, 44, 0, currVal_45);

        var currVal_47 = _co.SelectedPhoto == null ? null : _co.SelectedPhoto.img_src;

        _ck(_v, 50, 0, currVal_47);
      });
    }

    function View_RoverComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "nmr-rover", [], null, null, null, View_RoverComponent_0, RenderType_RoverComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _rover_component__WEBPACK_IMPORTED_MODULE_8__["RoverComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var RoverComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("nmr-rover", _rover_component__WEBPACK_IMPORTED_MODULE_8__["RoverComponent"], View_RoverComponent_Host_0, {
      CurrentRover: "CurrentRover"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/images/rover/rover.component.scss.shim.ngstyle.js":
  /*!*******************************************************************!*\
    !*** ./src/app/images/rover/rover.component.scss.shim.ngstyle.js ***!
    \*******************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppImagesRoverRoverComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".filters[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n@media (max-width: 1180px) {\n  .filters[_ngcontent-%COMP%] {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    float: none !important;\n    margin-top: 36px;\n  }\n}\n@media (max-width: 568px) {\n  .filters[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .filters[_ngcontent-%COMP%]   m4-input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   m4-select[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100% !important;\n    margin-right: 0 !important;\n    margin: 0 0 14px !important;\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: flex;\n}\n@media (max-width: 568px) {\n  .pagination[_ngcontent-%COMP%]   .pagination-block[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n    width: 100%;\n    float: none !important;\n  }\n}\ncode[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n.hint-block[_ngcontent-%COMP%] {\n  border: 1px dashed #bdbdbd;\n  padding: 10px 0;\n  border-radius: 10px;\n  background: #fbfbfb;\n}\n.camera-input[_ngcontent-%COMP%] {\n  width: 430px;\n}\n@media (max-width: 1366px) {\n  .camera-input[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2VzL3JvdmVyL0U6XFxfZ2l0aHViXFxNYXJzLVJvdmVyLUNvZGUtVGVzdC9zcmNcXGFwcFxcaW1hZ2VzXFxyb3Zlclxccm92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ltYWdlcy9yb3Zlci9yb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDQ0Y7QURBRTtFQUxGO0lBTUksMkJBQUE7SUFBQSxvQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUNHRjtBQUNGO0FERkU7RUFWRjtJQVdJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0tGO0VESkU7SUFDRSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0VDTUo7QUFDRjtBREZBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNLRjtBREZJO0VBREY7SUFFSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7RUNLSjtBQUNGO0FEREE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0FDSUY7QUREQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtBQ0lGO0FESEU7RUFGRjtJQUdJLFlBQUE7RUNNRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2VzL3JvdmVyL3JvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExODBweCkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMzZweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG00LWlucHV0LCBtNC1zZWxlY3QsIGJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwIDAgMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5wYWdpbmF0aW9uLWJsb2NrIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uaGludC1ibG9jayB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNiZGJkYmQ7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5cclxuLmNhbWVyYS1pbnB1dCB7XHJcbiAgd2lkdGg6IDQzMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICB9XHJcbn1cclxuIiwiLmZpbHRlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExODBweCkge1xuICAuZmlsdGVycyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgLmZpbHRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZmlsdGVycyBtNC1pbnB1dCwgLmZpbHRlcnMgbTQtc2VsZWN0LCAuZmlsdGVycyBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDAgMTRweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIC5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5jb2RlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5oaW50LWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNiZGJkYmQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbn1cblxuLmNhbWVyYS1pbnB1dCB7XG4gIHdpZHRoOiA0MzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmNhbWVyYS1pbnB1dCB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICB9XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/images/rover/rover.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/images/rover/rover.component.ts ***!
    \*************************************************/

  /*! exports provided: RoverComponent */

  /***/
  function srcAppImagesRoverRoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoverComponent", function () {
      return RoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RoverComponent =
    /*#__PURE__*/
    function () {
      function RoverComponent(api) {
        var _this2 = this;

        _classCallCheck(this, RoverComponent);

        this.api = api;
        this.RoverCameras = [{
          abbreviation: 'FHAZ',
          camera: 'Front Hazard Avoidance Camera',
          curiosity: true,
          opportunity: true,
          spirit: true
        }, {
          abbreviation: 'RHAZ',
          camera: 'Rear Hazard Avoidance Camera',
          curiosity: true,
          opportunity: true,
          spirit: true
        }, {
          abbreviation: 'MAST',
          camera: 'Mast Camera',
          curiosity: true,
          opportunity: false,
          spirit: false
        }, {
          abbreviation: 'CHEMCAM',
          camera: 'Chemistry and Camera Complex',
          curiosity: true,
          opportunity: false,
          spirit: false
        }, {
          abbreviation: 'MAHLI',
          camera: 'Mars Hand Lens Imager',
          curiosity: true,
          opportunity: false,
          spirit: false
        }, {
          abbreviation: 'MARDI',
          camera: 'Mars Descent Imager',
          curiosity: true,
          opportunity: false,
          spirit: false
        }, {
          abbreviation: 'NAVCAM',
          camera: 'Navigation Camera',
          curiosity: true,
          opportunity: true,
          spirit: true
        }, {
          abbreviation: 'PANCAM',
          camera: 'Panoramic Camera',
          curiosity: false,
          opportunity: true,
          spirit: true
        }, {
          abbreviation: 'MINITES',
          camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
          curiosity: false,
          opportunity: true,
          spirit: true
        }];
        this.CurrentRover = 'curiosity';
        this.RoverCamera = {};
        this.Cameras = {};
        this.SelectedCamera = 'NAVCAM';
        this.Sol = 1000;
        this.Photos = [];
        this.SelectedPhoto = {};
        this.Loading = false; // Pagination

        this.Total = 0;
        this.CurrentPage = 1;
        this.PageSize = 6;
        this.RoverCameras.map(function (c) {
          _this2.Cameras[c.abbreviation] = c.camera;
        });
      }

      _createClass(RoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetImages(this.SelectedCamera, this.Sol, this.CurrentRover);
        }
      }, {
        key: "FindRoverCamera",
        value: function FindRoverCamera() {
          var _this3 = this;

          return this.RoverCameras.find(function (c) {
            return c.abbreviation === _this3.SelectedCamera;
          });
        }
      }, {
        key: "UpdateParams",
        value: function UpdateParams() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.RoverCamera = this.FindRoverCamera();

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "GetImages",
        value: function GetImages(camera, sol, rover) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var res, photos;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.Loading) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.prev = 2;
                    this.Loading = true;
                    _context2.next = 6;
                    return this.api.GetImages(camera, sol, rover);

                  case 6:
                    res = _context2.sent;
                    photos = res.photos || []; // this.Photos = photos; pagination related

                    this.Photos = photos.slice(Math.max(photos.length - 4, 1));
                    this.Total = this.Photos.length;
                    this.Loading = false;
                    this.UpdateParams();
                    _context2.next = 18;
                    break;

                  case 14:
                    _context2.prev = 14;
                    _context2.t0 = _context2["catch"](2);
                    console.error(_context2.t0);
                    this.Loading = false;

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[2, 14]]);
          }));
        }
      }, {
        key: "OnCameraChange",
        value: function OnCameraChange() {
          this.GetImages(this.SelectedCamera, this.Sol, this.CurrentRover);
          console.log('You changed the camera to: ' + this.SelectedCamera, this.Sol, this.CurrentRover);
        }
      }, {
        key: "GetTotalPages",
        value: function GetTotalPages() {
          return Math.floor(this.Total / this.PageSize) + 1;
        }
      }]);

      return RoverComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=images-images-module-ngfactory-es5.js.map