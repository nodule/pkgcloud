module.exports = {
  name: "rebootServer",
  ns: "pkgcloud",
  title: "Reboot Server",
  description: "Reboots a server",
  phrases: {
    active: "Rebooting server {{input.type}}"
  },
  ports: {
    input: {
      client: {
        title: "Client",
        type: "object",
        required: true
      },
      server: {
        title: "Server",
        type: "object",
        required: true
      },
      type: {
        title: "Reboot Type",
        "enum": ["HARD",
          "SOFT"
        ]
      }
    },
    output: {
      result: {
        title: "Result",
        type: "object"
      }
    }
  },
  fn: function rebootServer(input, $, output, state, done, cb, on) {
    var r = function() {
      client.rebootServer($.server, {
        type: $.type
      }, function rebootServerCallback(result) {
        cb({
          result: result
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