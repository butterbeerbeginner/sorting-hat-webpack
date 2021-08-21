/* eslint-disable import/no-named-as-default-member */
// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import initialScreen from './helpers/data/initialScreen';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domEvents from './helpers/data/domEvents';

const init = () => {
  initialScreen();
  domEvents();
};

init();
