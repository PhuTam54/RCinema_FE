import config from '~/config';

// Layouts

// Pages
import Home from '~/pages/Home';
import MovieCheckout from '~/pages/MovieCheckout';
import MovieDetail1 from '~/pages/MovieDetail1';
import MovieDetail2 from '~/pages/MovieDetail2';
import MovieFood from '~/pages/MovieFood';
import MovieGird from '~/pages/MovieGird';
import MovieList from '~/pages/MovieList';
import MovieSeat from '~/pages/MovieSeat';
import MovieTicket from '~/pages/MovieTicket';





// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.moviegird, component: MovieGird },
    { path: config.routes.movielist, component: MovieList },
    { path: config.routes.moviedetail1, component: MovieDetail1 },
    { path: config.routes.moviedetail2, component: MovieDetail2 },
    { path: config.routes.movieticket, component: MovieTicket },
    { path: config.routes.movieseat, component: MovieSeat },
    { path: config.routes.moviecheckout, component: MovieCheckout },
    { path: config.routes.moviefood, component: MovieFood },

];

// Private routes
export const privateRoutes = [];
