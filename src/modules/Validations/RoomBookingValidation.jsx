import * as Yup from 'yup';

export const roomBookingValidation = Yup.object().shape({
    roomName: Yup.string().required("Please enter your room name"),
    totalMemmbers: Yup.number().required("Please enter total number of members"),
})