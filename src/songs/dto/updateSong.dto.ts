import {
  IsArray,
  IsDateString,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateSongDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  artists?: string[];

  @IsDateString()
  @IsOptional()
  releasedDate?: string;

  @IsNumber()
  @IsOptional()
  duration?: number;
}
