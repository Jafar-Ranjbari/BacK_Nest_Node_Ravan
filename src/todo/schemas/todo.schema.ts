import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true }) // Enable automatic createdAt and updatedAt
export class Todo {
  @Prop({ required: true })
  title?: string; // Remove ? since it's required

  @Prop({ required: false }) // Explicitly mark as not required
  description?: string;

  @Prop({ default: false })
  completed?: boolean; // No ? since it has a default value

  // Remove createdAt since we're using timestamps
}

export const TodoSchema = SchemaFactory.createForClass(Todo);