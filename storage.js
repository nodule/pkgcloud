module.exports = {
  name: "storage",
  ns: "pkgcloud",
  title: "Storage",
  description: "The pkgcloud.storage service is designed to make it easy to upload and download files to various infrastructure providers",
  phrases: {
    active: "Creating storage service"
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
  fn: function storage(input, $, output, state, done, cb, on, pkgcloud) {
    var r = function() {
      output = {
        client: $.create(pkgcloud.storage.createClient($.credentials))
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