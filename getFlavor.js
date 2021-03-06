module.exports = {
  name: "getFlavor",
  ns: "pkgcloud",
  title: "Get Flavor",
  description: "Get Flavor",
  phrases: {
    active: "Getting flavor {{input.flavor}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      flavor: {
        title: "Flavor",
        type: "string",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      flavor: {
        title: "Flavor",
        type: "object"
      }
    }
  },
  fn: function getFlavor(input, $, output, state, done, cb, on) {
    var r = function() {
      client.getFlavor($.flavor, function getFlavorCallback(error, flavor) {
        cb({
          error: error,
          flavor: flavor
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