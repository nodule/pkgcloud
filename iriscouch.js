module.exports = {
  name: "iriscouch",
  ns: "pkgcloud",
  title: "IrisCouch Credentials",
  description: "In order to use IrisCOuch you will need to have created a valid account. ",
  phrases: {
    active: "Creating IrisCouch Credentials"
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
  fn: function iriscouch(input, $, output, state, done, cb, on) {
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