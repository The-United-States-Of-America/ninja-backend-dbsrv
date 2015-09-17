/**
 * The Router is responsible for aggregating all the various routing endpoints within the application, and serving them.
 */
export default class Router {
  /**
   * @param {express()} app An express application, used to setup routing.
   */
  constructor(app) {
    this.app = app;

    // Define routes here
    this.routes = {
      sample_route: require('./routes/sample_route')
    };

    for (let route in this.routes) {
      this.app.use('/' + route, this.routes[route]);
    }
  }
}

//module.exports = Router;
