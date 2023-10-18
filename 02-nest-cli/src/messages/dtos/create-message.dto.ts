// eslint-disable-next-line prettier/prettier
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
