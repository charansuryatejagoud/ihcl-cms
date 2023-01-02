import { v4 as uuid, validate as uuidValidate } from "uuid";
import { identifierRegistry } from "./identifier-cache";

function isValidIdentifier(identifier?: string): boolean {
  if (!identifier) return false;
  if (!uuidValidate(identifier)) return false;

  return !identifierRegistry.exists(identifier);
}

const generateIdentifier = (identifier) => {
  if (!isValidIdentifier(identifier)) {
    console.log(
      `Identifier (${identifier}) is not valid. Generating a new one.`,
    );

    identifier = createIdentifier();
  }

  return identifier;
};

const setUniqueIdentifiers = (schemaObject) => {
  if (!schemaObject.metadata) {
    schemaObject.metadata = {};
  }

  schemaObject.metadata.identifier = generateIdentifier(
    schemaObject.metadata.identifier,
  );

  identifierRegistry.register(schemaObject.metadata.identifier);

  for (let key in schemaObject) {
    if (Array.isArray(schemaObject[key]) == false) {
      continue;
    }

    const items = schemaObject[key];

    schemaObject[key] = items.map((item) =>
      item._type === "block" || item._type === "reference"
        ? item
        : setUniqueIdentifiers(item),
    );
  }
  return schemaObject;
};

export const ensureMetadataIdentifiersAreUnique = (document: any) => {
  identifierRegistry.reset();

  const documentClone = JSON.parse(JSON.stringify(document));

  if (!documentClone.metadata) {
    documentClone.metadata = {};
  }

  documentClone.metadata.identifier = generateIdentifier(
    documentClone.metadata.identifier,
  );

  identifierRegistry.register(documentClone.metadata.identifier);

  const finalDocument = {
    ...documentClone,
    items: documentClone.items?.map((item) => setUniqueIdentifiers(item)),
    headers: documentClone.headers?.map((item) => setUniqueIdentifiers(item)),
    footers: documentClone.footers?.map((item) => setUniqueIdentifiers(item)),
  };

  identifierRegistry.reset();

  return finalDocument;
};

function createIdentifier() {
  let identifier = uuid();

  while (identifierRegistry.exists(identifier)) {
    identifier = uuid();
  }

  return identifier;
}
