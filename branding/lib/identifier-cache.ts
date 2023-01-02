let _identifiers = new Set();

export const identifierRegistry = {
  reset() {
    _identifiers = new Set();
  },
  register(identifier: String) {
    _identifiers.add(identifier);
  },
  exists(identifier: String) {
    const exists = _identifiers.has(identifier);

    if (exists) {
      console.log("Identifier exists.");
    }

    return exists;
  },

  length: () => _identifiers.size,
};
