<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const userInfo = ref(store.state.user);
    watch(
      () => {
        return store.state.user;
      },
      (newv, prev) => {
        userInfo.value = newv;
      }
    );
    return {
      userInfo
    };
  }
};
</script>