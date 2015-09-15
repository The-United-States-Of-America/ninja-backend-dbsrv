class Router {
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

module.exports = Router;
