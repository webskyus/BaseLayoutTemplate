'use strict';

// Babel and polyfill
import 'regenerator-runtime/runtime';
import 'core-js/features/promise';
import 'whatwg-fetch';
import 'core-js/es/number/is-nan';


// Libraries
// import { Swiper } from 'swiper/swiper-bundle.min';
// import simplebar from 'simplebar';

// Plugins
import { draggles } from './plugins/draggles';

// API
import { apiCustomName } from './libraries/api.custom-name';


window.addEventListener('DOMContentLoaded', e => {
    /*

			Navigation panel

				0. drag links and images disabled
				0. API

*/

    // drag links and images disabled start
    draggles();
    // drag links and images disabled end


    // API START
    apiCustomName();
    // API END














    // MAIN JS END
});
