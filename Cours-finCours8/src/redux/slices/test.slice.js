import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    
    vie : "raconte ses exploits du passee",
    nomEnfant : null, 
    dataBlog : []
    ,
  },
  reducers: {
    setdataBlog  : (state, { payload }) => {
     console.log("Payload: ", payload);


     
       state.dataBlog = payload;
     },

     setVie  : (state, { payload }) => {
      console.log("Payload: ", payload);
        state.vie = payload;
      },



    setNomEnfant  : (state, action) => {
     console.log("action: ", action);
       state.nomEnfant = action.payload;
     },

  },
});

// export quis servira pour mes fonctions
export const { setdataBlog, setNomEnfant, setVie } = testSlice.actions;

export const getVie = (state) => { 
 // console.log("state***", state)
   return state.test.vie
}
export const getDataBlog = (state) => { 
 // console.log("state***", state)
   return state.test.dataBlog
}
export const getNomEnfant = (state) => { 
 // console.log("state...", state)
   return state.test.nomEnfant
}

export default testSlice.reducer;
