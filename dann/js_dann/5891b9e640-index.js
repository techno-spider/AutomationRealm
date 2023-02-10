(function () {
  var CKInit = (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (t, e, r) {
      "use strict";
      function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? n(Object(r), !0).forEach(function (e) {
                i(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function u(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return c(t);
          })(t) ||
          (function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return c(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return c(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function a(t, e) {
        (function (t) {
          if (!window.__sv_forms) return null;
          for (var e = 0; e < window.__sv_forms.length; e++)
            if (window.__sv_forms[e].element == t) return window.__sv_forms[e];
          return null;
        })(t) ||
          (window.__sv_forms = [].concat(u(window.__sv_forms), [
            o({ element: t }, e),
          ]));
      }
      function f(t, e) {
        window.__sv_forms || (window.__sv_forms = []);
        var r = {};
        try {
          r = JSON.parse(t.dataset.options || null);
        } catch (t) {
          console.error("CK: Error parsing options");
        }
        a(
          t,
          o(
            o(
              {
                id: t.dataset.svForm,
                uid: t.dataset.uid,
                format: t.dataset.format,
              },
              e
            ),
            r
          )
        );
      }
      function s(t) {
        var e,
          r,
          n = (function (t) {
            var e = document.createElement("div");
            return (e.innerHTML = t), e.children[0];
          })(t.html),
          o = l(n);
        !(function (t, e) {
          t.forEach(function (t) {
            f(l(t), e);
          });
        })(
          (function (t, e) {
            return (function (t, e) {
              for (var r = [], n = 0; n < t.length; n++) {
                var o = t[n],
                  i = e.cloneNode(!0);
                r.push(i), o.parentElement.replaceChild(i, o);
              }
              return r;
            })(
              document.querySelectorAll("script[data-uid='".concat(t, "']")),
              e
            );
          })(n.dataset.uid, n),
          t
        ),
          (e = o.dataset.version),
          (r = document.createElement("script")).setAttribute(
            "src",
            (function (t) {
              return ""
                .concat("https://f.convertkit.com/ckjs", "/ck.")
                .concat(t || 1, ".js");
            })(e)
          ),
          r.setAttribute("async", !0),
          r.setAttribute("crossorigin", "anonymous"),
          document.body.appendChild(r);
      }
      function l(t) {
        return "FORM" == t.tagName ? t : t.getElementsByTagName("form")[0];
      }
      r.r(e),
        r.d(e, "default", function () {
          return s;
        });
    },
  ]);
  var data = {
    version: "5",
    settings: {
      after_subscribe: {
        action: "message",
        success_message:
          "STOKED! Now check your email to confirm your subscription.",
        redirect_url: "",
      },
      modal: {
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
      recaptcha: { enabled: false },
      return_visitor: { action: "hide", custom_content: "" },
      slide_in: {
        display_in: "bottom_right",
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: "10",
      },
      sticky_bar: {
        display_in: "top",
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
      powered_by: {
        show: true,
        url: "https://convertkit.com?utm_source=dynamic\u0026utm_medium=referral\u0026utm_campaign=poweredby\u0026utm_content=form",
      },
      analytics: {
        google: null,
        facebook: null,
        segment: null,
        pinterest: null,
      },
    },
    format: "slide in",
    template: "charlotte",
    html: '\u003cform action="https://app.convertkit.com/forms/1479780/subscriptions" style="background-color:#fff;border-radius:6px" class="seva-form formkit-form" method="post" data-sv-form="1479780" data-uid="5891b9e640" data-format="slide in" data-version="5" min-width="400 500 600 700 800"\u003e\u003cdiv data-style="full"\u003e\u003cdiv data-element="column" style="background-image:url(\u0026#x27;https://embed.filekitcdn.com/e/2kKhcTytbAV1LcHp4zV92m/oGY4gCspGDnJ8qyJ9PdX1e\u0026#x27;)" class="formkit-background"\u003e\u003c/div\u003e\u003cdiv data-element="column" class="formkit-column"\u003e\u003cdiv class="formkit-header" style="color:#535353;font-size:19px;font-weight:700" data-element="header"\u003e\u003ch1\u003eJoin the newsletter for mentorship, freelance advice, thoughts, asset releases, and more.\u003c/h1\u003e\u003c/div\u003e\u003cul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"\u003e\u003c/ul\u003e\u003cdiv data-element="fields" class="seva-fields formkit-fields"\u003e\u003cdiv class="formkit-field"\u003e\u003cinput type="text" class="formkit-input" aria-label="Your first name" style="color:#8b8b8b;border-color:#dde0e4;font-weight:400" name="fields[first_name]" placeholder="Your first name"/\u003e\u003c/div\u003e\u003cdiv class="formkit-field"\u003e\u003cinput type="text" class="formkit-input" name="email_address" style="color:#8b8b8b;border-color:#dde0e4;font-weight:400" placeholder="Your email address" required=""/\u003e\u003c/div\u003e\u003cbutton data-element="submit" class="formkit-submit formkit-submit" style="color:#ffffff;background-color:#000000;border-radius:3px;font-weight:700"\u003e\u003cdiv class="formkit-spinner"\u003e\u003cdiv\u003e\u003c/div\u003e\u003cdiv\u003e\u003c/div\u003e\u003cdiv\u003e\u003c/div\u003e\u003c/div\u003e\u003cspan\u003eJoin Now\u003c/span\u003e\u003c/button\u003e\u003c/div\u003e\u003cdiv class="formkit-disclaimer" style="color:#8b8b8b;font-size:13px" data-element="disclaimer"\u003e\u003cp\u003eI respect your privacy. Unsubscribe at anytime (saves me $ and you time).\u003c/p\u003e\u003c/div\u003e\u003ca href="https://convertkit.com?utm_source=dynamic\u0026amp;utm_medium=referral\u0026amp;utm_campaign=poweredby\u0026amp;utm_content=form" class="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer"\u003ePowered By ConvertKit\u003c/a\u003e\u003c/div\u003e\u003c/div\u003e\u003cstyle\u003e.formkit-form[data-uid="5891b9e640"] *{box-sizing:border-box;}.formkit-form[data-uid="5891b9e640"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="5891b9e640"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="5891b9e640"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="5891b9e640"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="5891b9e640"] h1,.formkit-form[data-uid="5891b9e640"] h2,.formkit-form[data-uid="5891b9e640"] h3,.formkit-form[data-uid="5891b9e640"] h4,.formkit-form[data-uid="5891b9e640"] h5,.formkit-form[data-uid="5891b9e640"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="5891b9e640"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="5891b9e640"] ol:not([template-default]),.formkit-form[data-uid="5891b9e640"] ul:not([template-default]),.formkit-form[data-uid="5891b9e640"] blockquote:not([template-default]){text-align:left;}.formkit-form[data-uid="5891b9e640"] p:not([template-default]),.formkit-form[data-uid="5891b9e640"] hr:not([template-default]),.formkit-form[data-uid="5891b9e640"] blockquote:not([template-default]),.formkit-form[data-uid="5891b9e640"] ol:not([template-default]),.formkit-form[data-uid="5891b9e640"] ul:not([template-default]){color:inherit;font-style:initial;}.formkit-form[data-uid="5891b9e640"][data-format="modal"]{display:none;}.formkit-form[data-uid="5891b9e640"][data-format="slide in"]{display:none;}.formkit-form[data-uid="5891b9e640"][data-format="sticky bar"]{display:none;}.formkit-sticky-bar .formkit-form[data-uid="5891b9e640"][data-format="sticky bar"]{display:block;}.formkit-form[data-uid="5891b9e640"] .formkit-input,.formkit-form[data-uid="5891b9e640"] .formkit-select,.formkit-form[data-uid="5891b9e640"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="5891b9e640"] .formkit-button,.formkit-form[data-uid="5891b9e640"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="5891b9e640"] .formkit-button:hover,.formkit-form[data-uid="5891b9e640"] .formkit-submit:hover,.formkit-form[data-uid="5891b9e640"] .formkit-button:focus,.formkit-form[data-uid="5891b9e640"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="5891b9e640"] .formkit-button:hover \u003e span,.formkit-form[data-uid="5891b9e640"] .formkit-submit:hover \u003e span,.formkit-form[data-uid="5891b9e640"] .formkit-button:focus \u003e span,.formkit-form[data-uid="5891b9e640"] .formkit-submit:focus \u003e span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="5891b9e640"] .formkit-button \u003e span,.formkit-form[data-uid="5891b9e640"] .formkit-submit \u003e span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="5891b9e640"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="5891b9e640"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="5891b9e640"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="5891b9e640"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="5891b9e640"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="5891b9e640"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="5891b9e640"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="5891b9e640"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="5891b9e640"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="5891b9e640"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"]{text-align:left;margin:0;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="5891b9e640"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="5891b9e640"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="5891b9e640"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="5891b9e640"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="5891b9e640"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="5891b9e640"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="5891b9e640"] .formkit-spinner \u003e div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-5891b9e640- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-5891b9e640- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="5891b9e640"] .formkit-spinner \u003e div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="5891b9e640"] .formkit-spinner \u003e div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="5891b9e640"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="5891b9e640"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="5891b9e640"] .formkit-powered-by[data-active="false"]{opacity:0.35;}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-5891b9e640-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-5891b9e640-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.formkit-form[data-uid="5891b9e640"] blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #e1e1e1;} .formkit-form[data-uid="5891b9e640"]{box-shadow:0 0px 2px rgba(0,0,0,0.15);max-width:700px;overflow:hidden;}.formkit-form[data-uid="5891b9e640"] [data-style="full"]{width:100%;display:block;}.formkit-form[data-uid="5891b9e640"] .formkit-background{background-position:center center;background-size:cover;min-height:200px;}.formkit-form[data-uid="5891b9e640"] .formkit-column{padding:20px;position:relative;}.formkit-form[data-uid="5891b9e640"] .formkit-header{margin-top:0;margin-bottom:20px;}.formkit-form[data-uid="5891b9e640"] .formkit-field{margin:0 0 10px 0;}.formkit-form[data-uid="5891b9e640"] .formkit-input{width:100%;border-left:none;border-right:none;border-top:none;padding-left:0;padding-right:0;}.formkit-form[data-uid="5891b9e640"] .formkit-fields .formkit-submit{margin-top:15px;width:100%;}.formkit-form[data-uid="5891b9e640"] .formkit-disclaimer{margin:0 0 15px 0;}.formkit-form[data-uid="5891b9e640"] .formkit-disclaimer \u003e p{margin:0;}.formkit-form[data-uid="5891b9e640"] .formkit-powered-by{color:#7d7d7d;display:block;font-size:11px;margin-bottom:0;margin-top:20px;text-align:center;}.formkit-form[data-uid="5891b9e640"][min-width~="600"] [data-style="full"],.formkit-form[data-uid="5891b9e640"][min-width~="700"] [data-style="full"],.formkit-form[data-uid="5891b9e640"][min-width~="800"] [data-style="full"]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}.formkit-form[data-uid="5891b9e640"][min-width~="600"] .formkit-column,.formkit-form[data-uid="5891b9e640"][min-width~="700"] .formkit-column,.formkit-form[data-uid="5891b9e640"][min-width~="800"] .formkit-column{padding:40px;} \u003c/style\u003e\u003c/form\u003e',
  };
  new CKInit.default(data);
})();
