import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
    title: String,
    isComplete: boolean
}

const taskSchema: Schema<ITask> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        isComplete: {
            type: Boolean,
            required: true
        }
    }
);

export default mongoose.model<ITask>("Task", taskSchema);
