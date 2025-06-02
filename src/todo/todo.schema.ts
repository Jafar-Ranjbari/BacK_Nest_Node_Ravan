import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  title: string | undefined;

  @Prop()
  description: string | undefined;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);