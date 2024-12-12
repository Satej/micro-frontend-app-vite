import { mount as mountHeader } from '../apps/header/dist/header.js';
import { mount as mountTrending } from '../apps/trending/dist/trending.js';
//import { mount as mountHighlights } from '../apps/highlights/dist/highlights.js';

mountHeader(document.querySelector('#header'));
mountTrending(document.querySelector('#trending'));
//mountHighlights(document.querySelector('#highlights'));