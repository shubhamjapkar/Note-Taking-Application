import { createContext, useContext } from 'react';

export const GlobalContext = createContext<any>({
    props: {
        list: [],
        addListItoms: [],
        deleteList:[],
        text: "",
        NoteListData: [],
        ref:null,
    }
})
export const useGlobalContext = () => useContext(GlobalContext)