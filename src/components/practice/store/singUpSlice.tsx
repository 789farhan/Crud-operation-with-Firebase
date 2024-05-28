import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SignupSlice = createAsyncThunk("signUP-User", async (formdata, error) => {

    try {
        console.log(formdata);
        const fetchdata = await fetch('https://we-ticket-backend.vercel.app/api/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        
        const response = await fetchdata.json()
        console.log(response);
        return response

    } catch (error) {
        console.log(error);

    }

})


const Slice = createSlice({
    name: 'user',

    initialState: {
        userdata: null,
        isloading: false,
        iserror: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(SignupSlice.fulfilled, (state: any, action:any) => {
            state.isloading = false;
            state.userdata = action.payload.result;

        })
        builders.addCase(SignupSlice.rejected, (state: any, action:any) => {
            state.isloading = false;
            state.iserror = true;
            state.error = action.error

        })
        builders.addCase(SignupSlice.pending, (state: any, action:any) => {
            state.isloading = true;
            state.iserror = false;

        })

    }

})

export default Slice.reducer;








































// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const SignupSlice = createAsyncThunk('Signup',

//     async (formdata, error) => {

//         try {

//             console.log(formdata);
            

//             const fetchdata = await fetch('https//we-ticket-backend.vercel.app/api/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formdata)
//             });

//             const response = await fetchdata.json();

//             console.log(response);
            

//             return response;

//         } catch (error) {

//             console.log(error);

//         }
//     })


//     const Slice=createSlice({
//         name:'user',
//         initialState:{
//             isloading:false,
//             iserror:false,
//             userdata:null,
//             error:null,
//         },
//         reducers:{},
//         extraReducers(builder) {
//             builder.addCase(SignupSlice.fulfilled,(state:any,action)=>{
//             state.isloading=false;
//             state.userdata=action.payload
//             })
//             builder.addCase(SignupSlice.pending,(state:any,action)=>{
//                 state.isloading=true;
//                 state.iserror=false;
//                 })
//                 builder.addCase(SignupSlice.rejected,(state:any,action)=>{
//                     state.isloading=false;
//                     state.iserror=true;
//                     state.error=action.error;

//                     })
//         },
//     })


//     export default Slice.reducer;