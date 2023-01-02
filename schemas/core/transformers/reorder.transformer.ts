const reorderSegment = {
  type: "object",
  fields: [
    {
      name: "name",
      title: "Segment Name",
      description: "Name of segment used for Personalisation",
      type: "string",
    },
    {
      name: "featureFlag",
      title: "Feature Flag Name",
      description: "Name of controlling flag in Launch Darkly",
      type: "string",
    },
  ],
};

const validateDuplicateSegments = (segments, context) => {
  const values = segments.map((x) => x.name);
  let segmentNameMap = {};
  values.forEach(
    (value) =>
      (segmentNameMap[value] = segmentNameMap[value]
        ? segmentNameMap[value] + 1
        : 1),
  );
  let duplicates = [];
  for (const name in segmentNameMap) {
    if (segmentNameMap[name] > 1) duplicates.push(name);
  }
  return !duplicates.length
    ? true
    : `Segment${duplicates.length > 1 ? "s" : ""} ${duplicates.join(
        ",",
      )} have duplicates, Segment names should be unique`;
};

export default {
  type: "object",
  name: "page.transformer.reorder",
  title: "Reorder Transformer",
  fields: [
    {
      name: "segments",
      title: "Segments",
      type: "array",
      validation: (Rule) => Rule.custom(validateDuplicateSegments),
      of: [reorderSegment],
    },
  ],
  preview: {
    select: {
      segments: "segments",
    },
    prepare({ segments }) {
      return {
        title: "Reorder Transformer",
        subtitle: `${segments?.length || 0} Segments`,
      };
    },
  },
};
