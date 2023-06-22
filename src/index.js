import { startUp } from './startup.js';

import { home } from './home.js';

import './reset.css';

import './style.css';

const content = document.querySelector("#content");

startUp(content);

const rest = document.querySelector(".rest");

home(rest);