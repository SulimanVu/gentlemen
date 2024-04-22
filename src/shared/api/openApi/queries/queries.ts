// generated with @7nohe/openapi-react-query-codegen@1.1.0 
import * as Common from "./common";
import { useQuery, useSuspenseQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { DormitoryService, InstituteService, ReviewService, UniversityService, UniversityNewsService, UserService, DormitoryData, InstituteData, ReviewData, UniversityData, UniversityNewsData, UserData } from "../requests";
import { Dormitory, Institute, Review, University, UniversityNews, UserComment, User, ErrorResponse } from "../requests/models";
export const useDormitoryServiceGetDormitore = <TData = Common.DormitoryServiceGetDormitoreDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useDormitoryServiceGetDormitoreKey, ...(queryKey ?? [])], queryFn: () => DormitoryService.getDormitore() as TData, ...options });
export const useDormitoryServiceGetDormitoreById = <TData = Common.DormitoryServiceGetDormitoreByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useDormitoryServiceGetDormitoreByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => DormitoryService.getDormitoreById({ id }) as TData, ...options });
export const useInstituteServiceGetInstitute = <TData = Common.InstituteServiceGetInstituteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useInstituteServiceGetInstituteKey, ...(queryKey ?? [])], queryFn: () => InstituteService.getInstitute() as TData, ...options });
export const useReviewServiceGetReview = <TData = Common.ReviewServiceGetReviewDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useReviewServiceGetReviewKey, ...(queryKey ?? [])], queryFn: () => ReviewService.getReview() as TData, ...options });
export const useReviewServiceGetReviewById = <TData = Common.ReviewServiceGetReviewByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useReviewServiceGetReviewByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => ReviewService.getReviewById({ id }) as TData, ...options });
export const useUniversityServiceGetUniversityById = <TData = Common.UniversityServiceGetUniversityByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUniversityServiceGetUniversityByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => UniversityService.getUniversityById({ id }) as TData, ...options });
export const useUniversityServiceGetUniversity = <TData = Common.UniversityServiceGetUniversityDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUniversityServiceGetUniversityKey, ...(queryKey ?? [])], queryFn: () => UniversityService.getUniversity() as TData, ...options });
export const useUniversityNewsServiceGetNewsById = <TData = Common.UniversityNewsServiceGetNewsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUniversityNewsServiceGetNewsByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => UniversityNewsService.getNewsById({ id }) as TData, ...options });
export const useUniversityNewsServiceGetNews = <TData = Common.UniversityNewsServiceGetNewsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUniversityNewsServiceGetNewsKey, ...(queryKey ?? [])], queryFn: () => UniversityNewsService.getNews() as TData, ...options });
export const useUserServiceGetUserById = <TData = Common.UserServiceGetUserByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUserServiceGetUserByIdKey, ...(queryKey ?? [{ id }])], queryFn: () => UserService.getUserById({ id }) as TData, ...options });
export const useUserServiceGetUsers = <TData = Common.UserServiceGetUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUserServiceGetUsersKey, ...(queryKey ?? [])], queryFn: () => UserService.getUsers() as TData, ...options });
export const useDormitoryServicePostAddDorm = <TData = Common.DormitoryServicePostAddDormMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: Dormitory;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: Dormitory;
}, TContext>({ mutationFn: ({ requestBody }) => DormitoryService.postAddDorm({ requestBody }) as unknown as Promise<TData>, ...options });
export const useInstituteServicePostInstitute = <TData = Common.InstituteServicePostInstituteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    formData: { id?: string; title?: string; description?: string; image?: string[]; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    formData: { id?: string; title?: string; description?: string; image?: string[]; };
}, TContext>({ mutationFn: ({ formData }) => InstituteService.postInstitute({ formData }) as unknown as Promise<TData>, ...options });
export const useReviewServicePostReview = <TData = Common.ReviewServicePostReviewMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: Review;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: Review;
}, TContext>({ mutationFn: ({ requestBody }) => ReviewService.postReview({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityServicePostUniversityById = <TData = Common.UniversityServicePostUniversityByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    image: unknown;
    requestBody: University;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    image: unknown;
    requestBody: University;
}, TContext>({ mutationFn: ({ id, image, requestBody }) => UniversityService.postUniversityById({ id, image, requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityServicePostUniversityAddCommentById = <TData = Common.UniversityServicePostUniversityAddCommentByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    requestBody: { user?: string; comment?: string; time?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    requestBody: { user?: string; comment?: string; time?: string; };
}, TContext>({ mutationFn: ({ id, requestBody }) => UniversityService.postUniversityAddCommentById({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityServicePostUniversityAddUserById = <TData = Common.UniversityServicePostUniversityAddUserByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    requestBody: { user?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    requestBody: { user?: string; };
}, TContext>({ mutationFn: ({ id, requestBody }) => UniversityService.postUniversityAddUserById({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityServicePostUniversityDeleteUserById = <TData = Common.UniversityServicePostUniversityDeleteUserByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    requestBody: { user?: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    requestBody: { user?: string; };
}, TContext>({ mutationFn: ({ id, requestBody }) => UniversityService.postUniversityDeleteUserById({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityNewsServicePostNews = <TData = Common.UniversityNewsServicePostNewsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    formData: { title?: string; description?: string; image?: string[]; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    formData: { title?: string; description?: string; image?: string[]; };
}, TContext>({ mutationFn: ({ formData }) => UniversityNewsService.postNews({ formData }) as unknown as Promise<TData>, ...options });
export const useUserServicePostUser = <TData = Common.UserServicePostUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: { name: string; login: string; password: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: { name: string; login: string; password: string; };
}, TContext>({ mutationFn: ({ requestBody }) => UserService.postUser({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUserServicePostLogin = <TData = Common.UserServicePostLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody: { login: string; password: string; };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody: { login: string; password: string; };
}, TContext>({ mutationFn: ({ requestBody }) => UserService.postLogin({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityServicePatchUniversityById = <TData = Common.UniversityServicePatchUniversityByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    image?: unknown;
    requestBody: University;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    image?: unknown;
    requestBody: University;
}, TContext>({ mutationFn: ({ id, image, requestBody }) => UniversityService.patchUniversityById({ id, image, requestBody }) as unknown as Promise<TData>, ...options });
export const useUniversityNewsServicePatchNewsById = <TData = Common.UniversityNewsServicePatchNewsByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    formData: { title?: string; description?: string; image?: string[]; };
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    formData: { title?: string; description?: string; image?: string[]; };
    id: string;
}, TContext>({ mutationFn: ({ formData, id }) => UniversityNewsService.patchNewsById({ formData, id }) as unknown as Promise<TData>, ...options });
export const useReviewServiceDeleteReviewById = <TData = Common.ReviewServiceDeleteReviewByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => ReviewService.deleteReviewById({ id }) as unknown as Promise<TData>, ...options });
export const useUniversityServiceDeleteUniversityById = <TData = Common.UniversityServiceDeleteUniversityByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => UniversityService.deleteUniversityById({ id }) as unknown as Promise<TData>, ...options });
export const useUniversityNewsServiceDeleteNewsById = <TData = Common.UniversityNewsServiceDeleteNewsByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => UniversityNewsService.deleteNewsById({ id }) as unknown as Promise<TData>, ...options });
