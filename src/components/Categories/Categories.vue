<template>
  <div class="categories">
    <ul>
      <li
        @click="handleGetAllPizzas"
        :class="{ active: activeCategoryItem === null }"
      >
        Все
      </li>
      <li
        :class="{ active: activeCategoryItem === index }"
        v-for="(item, index) in categoryItems"
        :key="item"
        @click="handleClick(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const categoryItems = [
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    const activeCategoryItem = computed(() => store.state.categories.value);

    const handleClick = (index) => {
      store.dispatch("getFilteredPizzas", index);
    };

    const handleGetAllPizzas = () => {
      store.dispatch("getFilteredPizzas", null);
    };

    return {
      categoryItems,
      activeCategoryItem,
      handleClick,
      handleGetAllPizzas,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

.categories {
  ul {
    display: flex;

    li {
      background-color: #f9f9f9;
      padding: 13px 30px;
      border-radius: 30px;
      margin-right: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s ease-in-out;
      @include noselect();

      &:hover {
        background-color: darken(#f9f9f9, 2%);
      }

      &:active {
        background-color: darken(#f9f9f9, 5%);
      }

      &.active {
        background-color: #282828;
        color: #fff;
      }
    }
  }
}
</style>