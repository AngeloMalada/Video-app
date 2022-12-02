export default {
  name: "videoPost",
  title: "Video Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      type: "file",
      options: {
        hotspot: true,
      },
    },
    {
      name: "userId",
      title: "UserId",
      type: "string",
    },
    {
      name: "uploadedBy",
      title: "UploadedBy",
      type: "uploadedBy",
    },
    {
      name: "likes",
      title: "Likes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "user" }] }],
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
