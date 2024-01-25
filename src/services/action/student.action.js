import axios from "axios";
import { ADDABMINREJT, ADDADMINDATA, ADDADMINREQ, DATADELETE, DATAFAILURE, DATARECE, DATAREQ, DATAUPDATE, DATAUPDATEREJ, DATAUPDATEREQ} from "../const";

export const addAdminReq = () => {
  return {
    type: ADDADMINREQ,
  }
};

export const addAdminData = (data) => {
  console.log('Action Payload:', data);
  return {
    type: ADDADMINDATA,
    payload: data,
  };
};

export const addAdminRej = (error) => {
  return {
    type: ADDABMINREJT,
    payload: error,
  }
};



export const DataReq = () => {
  return {
    type: DATAREQ,
  }
};

export const DataRece = (data) => {
  return {
    type: DATARECE,
    payload: data,
  }
};

export const DataFailure = (error) => {
  return {
    type: DATAFAILURE,
    payload: error,
  }
};



export const DataUpdateREq = () => {
  return {
    type: DATAUPDATEREQ,
  }
};

export const DataUpdate = (data) => {
  return {
    type: DATAUPDATE,
    payload: data,
  }
};


export const DataUpdateRej = (error) => {
  return {
    type: DATAUPDATEREJ,
    payload: error,
  }
};

export const DataDelete = (data) => {
  return{
    type : DATADELETE,
    payload: data
  }
};


export const addadmin = (data) => {
  return (dispatch) => {
    dispatch(addAdminReq());

    axios.post('http://localhost:3000/posts', data)
      .then((res) => {
        dispatch(DataGet());
      })
      .catch((err) => {
        console.log('API Error (addadmin):', err);
        dispatch(addAdminRej(err));
      });
  };
};
export const DataGet = () => {
  return (dispatch) => {
    dispatch(DataReq());

    axios.get('http://localhost:3000/posts')
      .then((res) => {
        console.log('API Response (DataGet):', res.data);
        dispatch(DataRece(res.data));
      })
      .catch((err) => {
        console.log('API Error (fetchData):', err);
        dispatch(DataFailure(err));
      });
  };
};
export const UpdateData = (adminId, data) => {
  return (dispatch) => {
    dispatch(DataUpdateREq());

    axios.put(`http://localhost:3000/posts/${adminId}`, data)
      .then((res) => {
        console.log('UpdateData', res.data);
        dispatch(DataUpdate(res.data));
      })
      .catch((err) => {
        console.log('API Error (UpdateData):', err);
        dispatch(DataUpdateRej(err));
      });
  }
}
export const DeleteData = (adminId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/posts/${adminId}`)
      .then(() => {

        dispatch(DataDelete(adminId));
      })
      .catch((error) => {

        console.error('DeleteData :', error);
      });
  };
};