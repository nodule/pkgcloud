module.exports = {
  name: "mongohq",
  ns: "pkgcloud",
  title: "MongoHQ Credentials",
  description: "MongoHQ Credentials",
  phrases: {
    active: "Creating MongoHQ Credentials"
  },
  ports: {
    input: {
      username: {
        title: "Username",
        type: "string",
        required: true
      },
      password: {
        title: "Password",
        type: "password",
        required: true
      }
    },
    output: {
      credentials: {
        type: "object"
      }
    }
  },
  fn: function mongohq(input, $, output, state, done, cb, on) {
    var r = function() {
      output.credentials = $.create({
        username: $.username,
        password: $.password
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