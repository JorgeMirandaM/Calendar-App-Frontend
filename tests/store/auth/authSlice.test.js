import { authSlice } from "../../../src/store/auth/authSlice"
import { initialState } from "../../fixtures/authStates"


describe('Tests in AuthSlice', () => { 

    test('Must return the initial state', () => { 

        expect(authSlice.getInitialState()).toEqual(initialState)

     })
 })