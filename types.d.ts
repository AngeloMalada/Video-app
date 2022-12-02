export interface Video {
  description: string;
  title: string;
  _createdAt: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  thumbnail: {
    asset: {
      _id: string;
      url: string;
    };
  };

  _id: string;
  uploadedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    uploadedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    uploadedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

interface image {
  _type: image;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface User {
  _id: string;
  userName: string;
  image: string;

  _type: "string";
}
