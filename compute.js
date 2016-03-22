module.exports = {
  name: "compute",
  ns: "pkgcloud",
  title: "Compute",
  description: "The pkgcloud.compute service is designed to make it easy to provision and work with VMs.",
  phrases: {
    active: "Creating compute service"
  },
  ports: {
    input: {
      credentials: {
        title: "Credentials",
        type: "object",
        required: true
      }
    },
    output: {
      client: {
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      pkgcloud: require('pkgcloud')
    }
  },
  fn: function compute(input, $, output, state, done, cb, on, pkgcloud) {
    var r = function() {
      output = {
        client: $.create(pkgcloud.compute.createClient($.credentials))
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}