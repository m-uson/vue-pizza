<template>
  <ul>
    <li
      :class="{
        active: activeSize === index && availabelTypes.includes(index),
        disable: !availabelTypes.includes(index),
      }"
      v-for="(item, index) in typeItems"
      :key="item"
      @click="handleClick(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["availabelTypes"],
  setup(props) {
    const typeItems = ["тонкое", "традиционное"];
    const activeSize = ref(props.availabelTypes[0]);

    const handleClick = (index) => {
      activeSize.value = index;
    };

    return { typeItems, activeSize, handleClick };
  },
};
</script>

<style>
</style>