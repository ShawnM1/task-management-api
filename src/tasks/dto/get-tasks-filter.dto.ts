import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../task.model";
import { isStringObject } from "util/types";


export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status: TaskStatus
    
    @IsOptional()
    @IsString()
    search: string
}