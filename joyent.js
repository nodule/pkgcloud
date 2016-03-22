module.exports = {
  name: "joyent",
  ns: "pkgcloud",
  title: "Joyent Credentials",
  description: "Joyent requires a username / password or key / keyId combo. The key / keyId should be registered in Joyent servers",
  phrases: {
    active: "Creating Joyent Credentials"
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
  fn: function joyent(input, $, output, state, done, cb, on) {
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