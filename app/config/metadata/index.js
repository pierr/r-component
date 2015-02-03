module.exports = {
  alerte: {
      id: {
        domain: "DO_IDENTITY",
      },
      ttl: {
        domain: "DO_DURATION",
        required: false
      },
      message: {
        domain: "DO_STRING",
        required: true
      },
      code: {
        domain: "DO_STRING",
        required: true
      }
  }
};
