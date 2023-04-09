import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    //     if(Object.keys(filterDto).length) {
    //         return this.tasksService.getTasksWithFilters(filterDto)
    //     } 
    //     return this.tasksService.getAllTasks();
    // }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    // @Delete(':id')
    // deleteTaskById(@Param('id') id: string): void {
    //     const task = this.getTaskById(id);
    //     return this.tasksService.deleteTaskById(id);
    // }

    // @Patch(':id/status')
    // updateTaskStatusById(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto): Task {
    //     const { status } = updateTaskStatusDto
    //     const task = this.getTaskById(id)
    //     task.status = status
    //     return task
    // }
}
