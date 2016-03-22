module.exports = {
  name: "rackspace",
  ns: "pkgcloud",
  title: "Rackspace Credentials",
  description: "Rackspace Credentials",
  phrases: {
    active: "Creating Rackspace Credentials"
  },
  ports: {
    input: {
      username: {
        "title ": "Username",
        type: "string",
        required: true
      },
      apiKey: {
        "title ": "API Key",
        type: "string",
        required: true
      }
    },
    output: {
      credentials: {
        type: "object"
      }
    }
  },
  fn: function rackspace(input, $, output, state, done, cb, on) {
    var r = function() {
      output.credentials = $.create({
        username: $.username,
        apiKey: $.apiKey
      })
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}