module.exports = {
  name: "database",
  ns: "pkgcloud",
  title: "Database",
  description: "The pkgcloud.database service is designed to consistently work with a variety of Database-as-a-Service (DBaaS) providers.",
  phrases: {
    active: "Creating database service"
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
  fn: function database(input, $, output, state, done, cb, on, pkgcloud) {
    var r = function() {
      output = {
        client: $.create(pkgcloud.database.createClient($.credentials))
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