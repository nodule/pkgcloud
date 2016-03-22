module.exports = {
  name: "amazon",
  ns: "pkgcloud",
  title: "Amazon Credentials",
  description: "Amazon Credentials",
  phrases: {
    active: "Sending credentials to Amazon"
  },
  ports: {
    input: {
      key: {
        title: "Key",
        type: "string",
        required: true
      },
      keyId: {
        title: "Key ID",
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
  fn: function amazon(input, $, output, state, done, cb, on) {
    var r = function() {
      output.credentials = $.create({
        key: $.key,
        keyId: $.keyId,
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