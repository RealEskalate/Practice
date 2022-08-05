export interface Blog {
        _id: "",
        authorUserId: {
          fullName: "",
          email: "",
          __v: 0
        },
        title: "",
        content: "",
        imageUrls: [],
        rating: {},
        description: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      
}

export interface Comment {
        _id: "62a09cf33aa47e9a199297b8",
        user: {
          fullName: "aben",
          email: "aben@gmail.com",
          __v: 0,
          profileId: {
            __v: 0,
            bio: "My profile Id",
            imageUrl: "http://res.cloudinary.com/hakimhub/image/upload/v1654695757/starter_project/co4vhtyxggimo9aalbf4.png"
          }
        },
        text: "comment 3",
        created_at: "2022-06-08T12:58:27.392Z",
        updated_at: "2022-06-08T12:58:27.392Z",
        __v: 0
      
}