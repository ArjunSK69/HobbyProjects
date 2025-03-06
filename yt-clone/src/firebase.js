import {initializeApp} from 'firebase/app'

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnzvvrlTZkxceUK7jyQdaA4ehz1EVPD4Y",
    authDomain: "yt-clone-react-project.firebaseapp.com",
    projectId: "yt-clone-react-project",
    storageBucket: "yt-clone-react-project.firebasestorage.app",
    messagingSenderId: "424627869718",
    appId: "1:424627869718:web:62ce53140195eb0c2d3d37"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth