import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase';
import { LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

export const login = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        });

        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
        const res = await signInWithPopup(auth, provider);

        const credential = GoogleAuthProvider.credentialFromResult(res);
        const accessToken = credential.accessToken;

        const profile = {
            name: res.user.displayName || 'Anonymous',
            photoURL: res.user.photoURL || 'default-profile-pic-url',
        };

        sessionStorage.setItem("ytc-access-token", accessToken);
        sessionStorage.setItem("ytc-user", JSON.stringify(profile));

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
        });
        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        });
    } catch (err) {
        console.error(err.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: err.message,
        });
    }
};

export const log_out = () => async dispatch => {
    await auth.signOut();
    dispatch({
        type: LOG_OUT,
    });

    sessionStorage.removeItem('ytc-access-token');
    sessionStorage.removeItem('ytc-user');
};





