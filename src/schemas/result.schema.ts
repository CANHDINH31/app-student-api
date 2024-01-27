import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ResultDocument = HydratedDocument<Result>;

@Schema({ timestamps: true })
export class Result {
  @Prop()
  answer: string[];

  @Prop()
  numberCorrect: number;

  @Prop()
  totalQuestion: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  student: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Exam' })
  exam: string;

  // 1:complete 2: not complete
  @Prop()
  status: number;

  @Prop()
  duration: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
