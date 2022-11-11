import { ref } from "vue";
export default async <T> (url:RequestInfo,options?:RequestInit) => {
    const response = ref<T>();
    const request= async ()=>{
		const result = await fetch(url,options).then((r) => r.json());
		response.value = result;
	}
    return {response,request};
};
