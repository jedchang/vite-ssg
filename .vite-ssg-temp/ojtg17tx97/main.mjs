import { ViteSSG } from "vite-ssg";
import { unref, withCtx, createTextVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { RouterLink, RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
const main = "";
const _imports_0 = "/test/vite-ssg/assets/logo-277e0e97.svg";
const App_vue_vue_type_style_index_0_scoped_b1f27106_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header data-v-b1f27106><img alt="Vue logo" class="logo"${ssrRenderAttr("src", _imports_0)} width="125" height="125" data-v-b1f27106><div class="wrapper" data-v-b1f27106><nav data-v-b1f27106>`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></header>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b1f27106"]]);
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "INDEX 頁面",
      meta: [
        {
          name: "description",
          content: "這是 index 頁面"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "index" }, _attrs))}><h1>這是 index 頁面</h1></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_1__ = () => import("./assets/about-4184d855.js");
const routes = [{ "name": "index", "path": "/", "component": _sfc_main, "props": true }, { "name": "about", "path": "/about", "component": __pages_import_1__, "props": true }];
const createApp = ViteSSG(App, {
  base: "/test/vite-ssg/",
  routes
});
export {
  _export_sfc as _,
  createApp
};
