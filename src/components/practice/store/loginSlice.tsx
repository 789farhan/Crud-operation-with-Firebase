import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const LoginUser = createAsyncThunk('userLogin',

    async (formdata, error) => {

        try {
            console.log("Form Data  :" ,formdata);
            
            const data = await fetch('https://we-ticket-backend.vercel.app/api/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            })

            const response = await data.json();

            return response;
            
            console.log("response of API",response);

        } catch (error) {
            return error
        }

    }
)

const LoginSlice = createSlice({
    name: 'user',

    initialState: {
        userdata: null,
        isloading: false,
        iserror: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(LoginUser.fulfilled, (state: any, action) => {
            state.isloading = false;
            state.userdata = action.payload.result;

        })
        builders.addCase(LoginUser.rejected, (state: any, action) => {
            state.isloading = false;
            state.iserror = true;
            state.error = action.error

        })
        builders.addCase(LoginUser.pending, (state: any, action) => {
            state.isloading = true;
            state.iserror = false;

        })

    }

})


export default LoginSlice.reducer;