import useApi from "@/composables/useApi";
const host = "http://127.0.0.1:3003";
export const all = async () => {
    const { response, request } = await useApi<Artical[]>(`${host}/articals`);
    request();
    return { response };
};
export const find = async (id: number) => {
    const { response, request } = await useApi<Artical[]>(
        `${host}/articals/${id}`
    );
    request();
    return { response };
};
