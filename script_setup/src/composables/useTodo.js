import { ref, reactive, watch } from "vue";
import useRequest from "../composables/useRequest";
const todos = reactive({ news: null });
const orderBy = ref("desc");
export default () => {
  const request = useRequest();
  const load = async () => {
    todos.news = await request.get();
    sort();
  };
  const del = async (id) => {
    await request.delete(id);
    load();
  };
  const add = async (data) => {
    await request.post("", data);
    load();
  };
  const sort = () => {
    todos.news = Array.prototype.sort.call(todos.news, (a, b) => {
      return orderBy.value == "asc" ? a.id - b.id : b.id - a.id;
    });
  };
  watch(orderBy, (value) =>sort())
  return { todos, orderBy, load, del, add };
};
