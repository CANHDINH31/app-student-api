import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExamDocument = HydratedDocument<Exam>;

@Schema({ timestamps: true })
export class Exam {
  @Prop()
  title: string;

  @Prop()
  description: string;

  // Đổi sang seconds để submit còn lưu tiến độ
  @Prop()
  duration: number;

  @Prop()
  content: string;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
