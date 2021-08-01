import mongoose from "mongoose";

export interface NoteDocument extends mongoose.Document {
    title: string;
    detail: string;    
}

const NoteSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: true,
        minlength: 1,
        maxlength: 300,
    },
    detail : {
        type: 'String',
        maxlength: 3600,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Note = mongoose.model<NoteDocument>("Note", NoteSchema);

export default Note;