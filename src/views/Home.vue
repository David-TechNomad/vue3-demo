<template>
  <div class="home">
    <Header :has_back="false" />
    <Product :items="likes" @inquire="inquire" />
    <Product :items="recommends" @inquire="inquire" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { ref, onMounted } from "vue";
import Product from "../components/Product";
import { useRouter } from "vue-router";
import { post } from "../util/tool";

export default {
  components: {
    Header,
    Product
  },
  setup() {
    const { likes, recommends } = useData();
    const { inquire } = useDetailPage();
    return {
      likes,
      recommends,
      inquire
    };
  }
};

/**
 * 进入详情页面相关操作
 */
function useDetailPage() {
  const router = useRouter();
  function inquire(data) {
    const { id } = data;
    router.push(`/detail/${id}`);
  }
  return {
    inquire
  };
}

function useData() {
  let likes = ref({});
  let recommends = ref({});

  onMounted(() => {
    init();
  });

  function init() {
    return new Promise(resolve => {
      post({
        url: "/api/home"
      }).then(result => {
        likes.value = result.likes;
        recommends.value = result.recommends;
      });
    });
  }

  return {
    likes,
    recommends
  };
}
</script>
