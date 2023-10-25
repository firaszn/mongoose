import axios from "axios"
import { ADD_CONTACTS, EDIT_CONTACTS, FAIL_CONTACTS, GET_CONTACTS, GET_ONE_CONTACT, LOAD_CONTACTS, } from "../Actiontypes/contact"

export const getcontacts = () => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
      let result = await axios.get("/api/contact/get_contacts");
      dispatch({ type: GET_CONTACTS, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
  };
  
  export const addcontacts = (contact) => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
      let result = await axios.post("/api/contact/add_contact",contact);
      dispatch({ type: ADD_CONTACTS, payload: result.data });
      dispatch(getcontacts()); 
    } catch (error) {
      dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
  };
 export const deletecontacts = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
      await axios.delete(`/api/contact/deletecontact/${id}`);
      dispatch(getcontacts());
    } catch (error) {
      dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
  };
  
  export const getOnecontact = (id) => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
      let result = await axios.get(`/api/contact/getcontacts/${id}`);
      dispatch({ type: GET_ONE_CONTACT, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
  };
  

  export const updatecontact = (id, updatedContactData) => async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    try {
      
      let result = await axios.put(`/api/contact/updatecontact/${id}`, updatedContactData);
      dispatch({ type: EDIT_CONTACTS, payload: result.data });
      dispatch(getcontacts()); 
    } catch (error) {
      dispatch({ type: FAIL_CONTACTS, payload: error.response });
    }
  };
  