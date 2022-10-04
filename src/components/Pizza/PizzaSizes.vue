<template>
  <ul>
    <li
      :class="{
        active: activeSize === index && availabelSizes.includes(item),
        disable: !availabelSizes.includes(item),
      }"
      v-for="(item, index) in sizeItems"
      :key="item"
      @click="handleClick(index)"
    >
      {{ item }} см
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["availabelSizes"],
  setup(props) {
    const sizeItems = [26, 30, 40];
    const activeSize = ref(0);

    if (props.availabelSizes[0] !== sizeItems[0]) {
      activeSize.value = sizeItems.findIndex(
        (item) => item === props.availabelSizes[0]
      );
    }

    const handleClick = (index) => {
      activeSize.value = index;
    };

    return { sizeItems, activeSize, handleClick };
  },
};
</script>

<style>
</style>