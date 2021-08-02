import mongoose, { Schema, Document } from 'mongoose';

interface INoteDocument extends Document {
    title: string;
    detail: string;
    createdAt: Date;
    updatedAt: Date;        
}

const NoteSchema: Schema<INoteDocument>  = new mongoose.Schema({
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


export default mongoose.model<INoteDocument>("Note", NoteSchema);
