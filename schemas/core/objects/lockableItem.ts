import { BsFillShieldLockFill as Icon } from "react-icons/bs";

const getItemTitle = (items) => {
  if (!items || items.length === 0) return "";
  if (items.length > 0) {
    return (items && items[0]?.title) || "";
  }
};

export default function lockableItem({ items }: { items }) {
  return {
    name: "lockableItem",
    title: "Lockable Item",
    type: "object",
    icon: Icon,
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        title: "Is Locked",
        name: "isLocked",
        type: "boolean",
      },
      {
        name: "items",
        title: "Items",
        description: "Only one item to be selected.",
        type: "array",
        of: items,
        validation: (Rule) => Rule.required().length(1),
      },
      {
        name: "metadata",
        type: "metadata",
        title: "Metadata",
      },
    ],
    initialValue: {
      isLocked: false,
    },
    preview: {
      select: {
        title: "title",
        isLocked: "isLocked",
        items: "items",
      },
      prepare({ title, isLocked, items }) {
        const subtitle: string = getItemTitle(items);
        const displayTitle: string = isLocked
          ? `Locked ${title}`
          : `Unlocked ${title}`;

        return {
          title: displayTitle,
          subtitle,
        };
      },
    },
  };
}
