export const tweetSchema = {
  name: "weitts",
  type: "document",
  title: "Weitts",
  fields: [
    {
      name: "weitt",
      type: "string",
      title: "Weitt",
    },
    {
      name: "timestamp",
      type: "datetime",
      title: "Timestamp",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
