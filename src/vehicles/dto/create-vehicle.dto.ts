import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator'

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  @Length(7, 7)
  plate: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  @Max(new Date().getFullYear())
  @Min(1900)
  year: number

  @IsNotEmpty()
  @IsString()
  userId: string
}
