import {ADDADMINDATA, DATAREQ, DATARECE, DATAFAILURE, DATAUPDATEREQ, DATAUPDATE, DATAUPDATEREJ, DATADELETE } from "../const";

const initialState = {
  admins: [],
  admin :null,
  isloading: false,
  isEdit: false,
  error: null,
};

export const thunkReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATAREQ:
      return {
        ...state,
        isloading: true,
        error: null,
      };

    case DATARECE:
      return {
        ...state,
        admins: action.payload,
        isloading: false,
        error: null,
      };

    case DATAFAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };

    case ADDADMINDATA:
      return {
        ...state,
        admins: action.payload,
        isloading: false,
        error: null,
      };

      case DATADELETE:
        const updatedAdmins = state.admins.filter((admin)=>admin.id !== action.payload);
        return {
          ...state,
          admins: updatedAdmins,
        };

        case DATAUPDATEREQ:
          return {
            ...state,
            isloading: true,
            error: null,
          };
    
        case DATAUPDATEREJ:
          return {
            ...state,
            isloading: false,
            error: action.payload,
          };
    
        case DATAUPDATE:
          return {
            ...state,
            admins: action.payload,
            isloading: false,
            error: null,
          };

          // case SINGLESTU :
          //   const singledata = state.admins.filter((data)=>{
          //       return data.id == action.payload
          //  })

          //  return{
          //   ...state,
          //   student: singledata[0]
          //  }

          // case UPDATEDATA : 
          // const newdata = state.admins.map((data) =>{
          //     if(data.id == action.payload.id){
          //         return data = action.payload;
          //     }else{
          //         return data;
          //     }
          // })
          // return{
          //     ...state,
          //     students : newdata
          // }
    
    default:
      return state;
  }
};
