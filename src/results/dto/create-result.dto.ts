import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateResultDto {
  @IsString()
  @IsNotEmpty()
  student: string;

  @IsString()
  @IsNotEmpty()
  exam: string;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsNumber()
  @IsNotEmpty()
  status: number;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  answer: string[];
}
