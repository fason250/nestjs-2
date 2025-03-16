import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateSongDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  artists: string[];

  @IsNotEmpty()
  @IsDateString()
  releasedDate: string;

  @IsNotEmpty()
  @IsNumber()
  duration: number;
}
