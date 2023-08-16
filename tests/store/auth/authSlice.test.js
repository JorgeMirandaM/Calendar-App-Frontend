import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../fixtures/authStates"
import { testUserCredentials } from "../../fixtures/testUser"


describe('Tests in AuthSlice', () => {

    test('Must return the initial state', () => {

        expect(authSlice.getInitialState()).toEqual(initialState)

    });

    test('Must carry out the login', () => {

        const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        })
    });

    test('Must carry out the logout', () => {

        const state = authSlice.reducer(authenticatedState, onLogout());
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    });

    test('Must carry out the logout', () => {
        const errorMessage='Invalid Credentials';
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage
        })
    });

    test('Must clear the error message', () => { 
        const errorMessage='Invalid Credentials';
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        const newState= authSlice.reducer(state, clearErrorMessage());

        expect(newState.errorMessage).toBe(undefined);
     });

     test('Must carry out onChecking', () => { 
        const state= authSlice.reducer(authenticatedState,onChecking());
        expect(state).toEqual({
            status:'checking',
            user:{},
            errorMessage:undefined
        })
      })
})