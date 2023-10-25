import {
    GET_CONTACTS,
    LOAD_CONTACTS,
    GET_ONE_CONTACT,
    FAIL_CONTACTS,
    EDIT_CONTACTS,
    ADD_CONTACTS,
  } from "../Actiontypes/contact";
  
  const initialState = {
    load: false,
    errors: null,
    listContacts: [],
    contactToGet: [],
    newContact: {},
    updatedContact: {},
  };

const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_CONTACTS:
        return {...state,load:true}
    case GET_CONTACTS:
        return {...state,load:false,listContacts:payload.contactlist}
    case GET_ONE_CONTACT:
        return {...state,load:false,contactToGet:payload.contactToGet}
        case ADD_CONTACTS:
            return {...state,load:false,newContact:payload.newContact}
            case EDIT_CONTACTS:
                return {...state,load:false,updatedContact:payload.updatedContact} 
                case FAIL_CONTACTS:
                    return {...state,load:false,errors:payload} 
                    default:
                        return state;
                    }
                  };
                  
                  export default contactReducer;