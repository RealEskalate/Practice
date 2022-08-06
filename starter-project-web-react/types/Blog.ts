export interface Blog {
        _id: string,
        authorUserId: {
          fullName: string,
          email: string,
          __v: number
        },
        title: string,
        content: string,
        imageUrls: [],
        rating: object,
        description: string,
        createdAt: string,
        updatedAt: string,
        __v: 0
      
}

export interface Comment {
        _id: string,
        user: {
          fullName: string,
          email: string,
          __v: number,
          profileId: {
            __v: number,
            bio: string,
            imageUrl: string
          }
        },
        text: string,
        created_at: string,
        updated_at: string,
        __v: number
      
}