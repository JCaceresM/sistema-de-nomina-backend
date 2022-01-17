import { ApiProperty } from "@nestjs/swagger";

export class CreateParameterDto {
    @ApiProperty()
    id: number;
   
  
    @ApiProperty()
    private status: string;
    
    @ApiProperty()
    private company_id: string;
  
    @ApiProperty()
    private name: string;

    @ApiProperty()
    private description: string;

    @ApiProperty()
    private parameter_type: string;
  

    @ApiProperty()
    private updated_at: Date;
  
    @ApiProperty()
    private created_at: Date;
  
    @ApiProperty()
    private user_update: string;
  
    @ApiProperty()
    private user_insert: string;
}
