import { api } from "./api";

export const roomManagementApi = api.injectEndpoints({
    endpoints: (build) =>({
        getUsers: build.query({
            query: ()=>{
                return `/users`
            },
            provideTags: ['roomManagementApp']
        }),
        registerUsers: build.mutation({
            query: ({data})=>{
                return {
                    url: `/users`,
                    method: "POST",
                    body: data
                }
            },
            provideTags: ['roomManagementApp']
        }),
    })
});

export const {
    useGetUsersQuery,
    useRegisterUsersMutation
} = roomManagementApi