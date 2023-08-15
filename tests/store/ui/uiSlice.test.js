import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice"


describe('Tests in uiSlice', () => { 

    test('Must return the default state', () => { 

        expect(uiSlice.getInitialState()).toEqual({isDateModalOpen:false})
     });

     test('Must change the isDateMOdalOpen correctly', () => { 

        let state=  uiSlice.getInitialState();
        state=uiSlice.reducer(state, onOpenDateModal());
        expect(state.isDateModalOpen).toBeTruthy();

        state=uiSlice.reducer(state, onCloseDateModal());
        expect(state.isDateModalOpen).toBeFalsy();
      })


 })