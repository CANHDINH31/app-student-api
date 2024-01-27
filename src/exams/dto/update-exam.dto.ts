import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExamDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  duration: number;

  @IsString()
  @IsOptional()
  content: string;
}
