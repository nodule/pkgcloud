module.exports = {
  name: "mongolab",
  ns: "pkgcloud",
  title: "MongoLab Credentials",
  description: "To create a database with MongoLab you will need first create an account and then use the created account as `owner` of the database.",
  phrases: {
    active: "Creating MongoLab Credentials"
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
  fn: function mongolab(input, $, output, state, done, cb, on) {
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