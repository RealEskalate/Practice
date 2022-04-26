import mongoose, { Schema, Document } from 'mongoose'

export interface IRating extends Document {
    userId: String,
    articleId: String,
    value: Number,
    date: Date,
}

const ratingSchema: Schema<IRating> = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        articleId: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        timestamps: {
            date: "date"
        }
    }
)

const Rating = mongoose.model<IRating>('Rating', ratingSchema)
export default Rating