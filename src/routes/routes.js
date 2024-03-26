import config from '~/config';

// Layouts

// Pages
import Home from '~/pages/Home';
import Cinema from '~/pages/Cinema';
import Aboutus from '~/pages/Aboutus';
import ContactUs from '~/pages/ContactUs';
import Dinning from '~/pages/Dinning';
import Entertainment from '~/pages/Entertainment';
import Gallery from '~/pages/Gallery';
import History from '~/pages/History';
import Ourteam from '~/pages/Ourteam';
import Shopping from '~/pages/Shopping';
import Singleteam from '~/pages/Singleteam';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import ResetPass from '~/pages/ResetPass';





// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutus, component: Aboutus },
    { path: config.routes.cinema, component: Cinema},
    { path: config.routes.contactus, component: ContactUs},
    { path: config.routes.dinning, component: Dinning},
    { path: config.routes.entertainment, component: Entertainment},
    { path: config.routes.gallery, component: Gallery},
    { path: config.routes.history, component: History},
    { path: config.routes.ourteam, component: Ourteam},
    { path: config.routes.shopping, component: Shopping},
    { path: config.routes.singleteam, component: Singleteam},
    { path: config.routes.login, component: Login},
    { path: config.routes.signup, component: Signup},
    { path: config.routes.resetpass, component: ResetPass},

];

// Private routes
export const privateRoutes = [];
