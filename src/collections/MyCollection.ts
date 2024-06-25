import { CollectionConfig } from "payload/types";

export const MyCollection: CollectionConfig = {
  slug: "my-collection",
  access: {
    read: ({ req }) => {
      console.log(req.locale);

      return true;
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
};
