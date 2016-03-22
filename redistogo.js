module.exports = {
  name: "redistogo",
  ns: "pkgcloud",
  title: "RedisToGo Credentials",
  description: "RedisToGo Credentials",
  phrases: {
    active: "Creating RedisToGo credentials"
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
  fn: function redistogo(input, $, output, state, done, cb, on) {
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