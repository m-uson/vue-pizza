<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div v-if="pizzas.length" class="content__items">
        <Pizza v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories/Categories";
import Sort from "@/components/Sort/Sort.vue";
import Pizza from "@/components/Pizza/Pizza.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import {useStore} from 'vuex'
export default {
  name: "Home",
  components: { Categories, Sort, Pizza },
  setup() {
    const store = useStore()
    const pizzas = computed(() => store.state.pizzas);

    console.log(store.state)

    onMounted(() => {
      store.dispatch('getPizzas')
    })

    return {
      pizzas,
    };
  },
};
</script>
