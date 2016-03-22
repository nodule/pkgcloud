module.exports = {
  name: "dns",
  ns: "pkgcloud",
  title: "Dns",
  description: "The pkgcloud.dns service is designed to make it easy to manage DNS zones and records on various infrastructure providers.",
  phrases: {
    active: "Creating DNS service"
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
  fn: function dns(input, $, output, state, done, cb, on, pkgcloud) {
    var r = function() {
      output = {
        client: $.create(pkgcloud.dns.createClient($.credentials))
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