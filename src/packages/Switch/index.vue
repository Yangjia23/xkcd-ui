<template>
  <button @click="toggle" :class="{'checked': value}">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: "Switch",
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  box-sizing: border-box;
  display: inline-block;
  min-width: $h * 2;
  height: $h;
  line-height: $h;
  color: rgba(0, 0, 0, 0.85);
  background-color: rgba(0, 0, 0, 0.25);
  font-size: 14px;
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background: #fff;
    border-radius: 50%;
    transition: all 250ms;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.checked {
    background-color: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
}
</style>