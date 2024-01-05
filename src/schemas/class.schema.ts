import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ClassDocument = HydratedDocument<Class>;

@Schema({ timestamps: true })
export class Class {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  student_id: string[];
}

export const ClassSchema = SchemaFactory.createForClass(Class);
