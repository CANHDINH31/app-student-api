import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Result } from 'src/schemas/result.schema';
import { Model } from 'mongoose';

@Injectable()
export class ResultsService {
  constructor(@InjectModel(Result.name) private resultModal: Model<Result>) {}
  async create(createResultDto: CreateResultDto) {
    try {
      return createResultDto;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all results`;
  }

  findOne(id: number) {
    return `This action returns a #${id} result`;
  }

  update(id: number, updateResultDto: UpdateResultDto) {
    return `This action updates a #${id} result`;
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
