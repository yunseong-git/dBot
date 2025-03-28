import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsArray()
  @IsOptional()
  basic?: string[];

  @IsArray()
  @IsOptional()
  extra?: string[];

  @IsString()
  @IsOptional()
  recipe?: string;

  @IsArray()
  @IsOptional()
  hot?: string[];
}