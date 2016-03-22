module.exports = {
  name: "getServers",
  ns: "pkgcloud",
  title: "Get Servers",
  description: "Get servers for this compute",
  phrases: {
    active: "Getting servers for this compute"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      servers: {
        title: "An array of servers",
        type: "array"
      }
    }
  },
  fn: function getServers(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getServers(function getServersCallback(error, servers) {
        cb({
          error: error,
          servers: servers
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