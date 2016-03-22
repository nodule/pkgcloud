module.exports = {
  name: "azure",
  ns: "pkgcloud",
  title: "Azure Credentials",
  description: "See: [using compute](https://github.com/nodejitsu/pkgcloud/blob/master/docs/providers/azure.md#using-compute)",
  phrases: {
    active: "Creating credentials for azure"
  },
  ports: {
    input: {},
    output: {}
  },
  fn: function azure(input, $, output, state, done, cb, on) {
    var r = function() {
      /* TODO: a bit ugly this, we don't really need a .js here
      output = input
      */
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}