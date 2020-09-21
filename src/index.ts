//// <reference path="../node_modules/firebase/index.d.ts"/>

import './app.scss';
import App from './app';
import { config } from '../firebase.config';
import * as firebase from 'firebase';

document.body.appendChild(App());

firebase.initializeApp(config);
