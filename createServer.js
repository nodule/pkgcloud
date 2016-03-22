module.exports = {
  name: "createServer",
  ns: "pkgcloud",
  title: "Create a Server",
  description: "Creates a server",
  phrases: {
    active: "Creating server"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      options: {
        title: "Options",
        type: "object",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      server: {
        title: "Server",
        type: "object"
      }
    }
  },
  fn: function createServer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.createServer(function createServerCallback(error, server) {
        cb({
          error: error,
          server: server
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}