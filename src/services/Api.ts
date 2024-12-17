import { SplitApiSettings } from "./SplitApiSetting";
import { API_END_POINTS } from "./ApiEndpoints";

export const api = SplitApiSettings.injectEndpoints({
    reducerPath: "api",
    refetchOnMountOrArgChange: true,

    endpoints: (builder) => ({
        /////////////////////////////<===MUTATIONS===>//////////////////////////////
        // registerUser: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.registerUser,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // intakeDetails: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.intakeDetails,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // registerSocialUser: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.registerSocialUser,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // loginUser: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.loginUser,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // loginSocialUser: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.loginSocialUser,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // otpLogin: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.otpLogin,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // logout: builder.mutation({
        //     query: () => ({
        //         url: API_END_POINTS.logout,
        //         method: "POST",
        //     }),
        // }),

        // deleteAcount: builder.mutation({
        //     query: () => ({
        //         url: API_END_POINTS.deleteAcount,
        //         method: "DELETE",
        //     }),
        // }),

        // forgotPassword: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.forgotPassword,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // updateProfile: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.updateProfile,
        //         method: "PUT",
        //         body: data,
        //     }),
        // }),

        // createCheckoutSession: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.createCheckoutSession,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // createOrderWithKit: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.createOrderWithKit,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // checkUserEmailPhone: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.checkUserEmailPhone,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        // resetPassword: builder.mutation({
        //     query: ({ data }) => ({
        //         url: API_END_POINTS.resetPassword,
        //         method: "POST",
        //         body: data,
        //     }),
        // }),

        /////////////////////////////<===QUERIES===>////////////////////////////////

        // getProfile: builder.query({
        //     query: () => {
        //         return {
        //             url: API_END_POINTS.getProfile,
        //             method: "GET",
        //         };
        //     },
        // }),

        // getStates: builder.query({
        //     query: () => {
        //         return {
        //             url: API_END_POINTS.getStates,
        //             method: "GET",
        //         };
        //     },
        // }),

        // getCities: builder.query({
        //     query: ({ params }) => {
        //         return {
        //             url: `${API_END_POINTS.getCities}/${params?.id}`,
        //             method: "GET",
        //         };
        //     },
        // }),

        // getPlan: builder.query({
        //     query: () => {
        //         return {
        //             url: API_END_POINTS.getPlan,
        //             method: "GET",
        //         };
        //     },
        // }),

        // getFaqs: builder.query({
        //     query: () => {
        //         return {
        //             url: API_END_POINTS.getFaqs,
        //             method: "GET",
        //         };
        //     },
        // }),

        // getOrderStatus: builder.query({
        //     query: () => {
        //         return {
        //             url: API_END_POINTS.getOrderStatus,
        //             method: "GET",
        //         };
        //     },
        // }),
        getData: builder.query({
            query: () => {
                return {
                    url: API_END_POINTS.getData,
                    method: "GET",
                };
            },
        }),

    }),

    overrideExisting: true,
});

export const {
    /////////////////////////////<===MUTATIONS===>//////////////////////////////
    // useRegisterUserMutation,
    // useIntakeDetailsMutation,
    // useRegisterSocialUserMutation,
    // useLoginUserMutation,
    // useLoginSocialUserMutation,
    // useOtpLoginMutation,
    // useLogoutMutation,
    // useDeleteAcountMutation,
    // useForgotPasswordMutation,
    // useResetPasswordMutation,
    // useUpdateProfileMutation,
    // useCreateCheckoutSessionMutation,
    // useCreateOrderWithKitMutation,
    // useCheckUserEmailPhoneMutation,
    /////////////////////////////<===QUERIES===>////////////////////////////////
    // useGetProfileQuery,
    // useGetStatesQuery,
    // useGetCitiesQuery,
    // useGetPlanQuery,
    // useGetFaqsQuery,
    // useGetOrderStatusQuery,
    useGetDataQuery,
} = api;
