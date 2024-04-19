<template>
  <div>
      <div @click="btnClick" class="btn">
          这是测试
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },

  methods: {
    async btnClick() {
      const res = await axios.get("/user/list");
      console.log(res.data.data);
    },
  },
};
</script>

<style>
</style>