module.exports = {
  name: "getLimits",
  ns: "pkgcloud",
  title: "API Limits",
  description: "Get API limits",
  phrases: {
    active: "Getting API limits"
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
      limits: {
        title: "Limits",
        type: "object"
      }
    }
  },
  fn: function getLimits(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getLimits(function getLimitsCallback(error, limits) {
        cb({
          error: error,
          limits: limits
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