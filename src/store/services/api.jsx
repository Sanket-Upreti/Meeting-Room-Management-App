import {createApi, fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../configs/apiEndpoints'

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 0});

export const api = createApi({
    reducerPath: "roomApi",
    baseQuery: baseQueryWithRetry,
    tagTypes: ["roomManagementApp"],
    endpoints: ()=>({})
})

export const featureApi = api.enhanceEndpoints({})