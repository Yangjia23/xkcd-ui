import {defineComponent, openBlock, createBlock} from "vue";
var _sfc_main = defineComponent({
  name: "GtButton"
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("button", null, "\u6309\u94AE");
}
_sfc_main.render = _sfc_render;
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
