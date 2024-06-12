import { Test } from '@nestjs/testing';
import { TaskService } from './task.service';
import { PrismaModule } from '../../db/prisma.module';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { TaskRepository } from '../../db/repositories/task.repository';
import { FitnessService } from '../../integration/fitness/fitness.service';
import FitnessModule from '../../integration/fitness/fitness.module';
import { TestConstants } from '../../../test/lib/constants';
import { MockProvider } from '../../integration/fitness/providers/mock.provider';

describe('task service tests', () => {
  let taskService: TaskService;
  let taskRepository: DeepMockProxy<TaskRepository>;
  let fitnessService: DeepMockProxy<FitnessService>;

  beforeAll(async () => {
    const testModule = await Test.createTestingModule({
      imports: [PrismaModule, FitnessModule],
      providers: [TaskService],
    })
      .overrideProvider(TaskRepository)
      .useValue(mockDeep<TaskRepository>())
      .overrideProvider(FitnessService)
      .useValue(mockDeep<FitnessService>())
      .compile();

    taskService = testModule.get(TaskService);
    taskRepository = testModule.get(TaskRepository);
    fitnessService = testModule.get(FitnessService);
  });

  it('it should return all available tasks including user info', async () => {
    const logs = [
      TestConstants.database.taskLogs.task1,
      TestConstants.database.taskLogs.task2,
    ];

    taskRepository.getTaskLogsForUser.mockResolvedValue(logs);

    const tasks = await taskService.getTasks(
      TestConstants.database.users.exampleUser.id,
    );

    expect(tasks.length).toBeGreaterThan(0);

    const task1Info = tasks[0].getInfo();
    expect(task1Info.id).toBe('1');
    expect(task1Info.status).toBe('pending');

    const task2Info = tasks[1].getInfo();
    expect(task2Info.id).toBe('2');
    expect(task2Info.status).toBe('failed');

    const task3Info = tasks[2].getInfo();
    expect(task3Info.id).toBe('3');
    expect(task3Info.status).toBe('not started');
  });

  it('it should return all a specific including user info', async () => {
    taskRepository.getTaskLog.mockResolvedValue(
      TestConstants.database.taskLogs.task1,
    );

    const task = await taskService.getTask(
      TestConstants.database.users.exampleUser.id,
      TestConstants.database.taskLogs.task1.task,
    );

    expect(task).toBeDefined();

    const task1Info = task!.getInfo();
    expect(task1Info.id).toBe('1');
    expect(task1Info.status).toBe('pending');
  });

  it('should be able to start a task', async () => {
    taskRepository.getStartedTasksForUser.mockResolvedValue([]);

    fitnessService.getDatasourcesForUser.mockResolvedValue([
      new MockProvider(),
    ]);

    taskRepository.saveTaskLog.mockResolvedValue(
      TestConstants.database.taskLogs.task3,
    );

    const log = await taskService.startTask(
      TestConstants.database.users.exampleUser.id,
      TestConstants.database.taskLogs.task3.task,
    );

    expect(log).toBeDefined();
    expect(log.task).toBe('3');
    expect(log.status).toBe('in progress');
  });

  it('should be able to stop a running task', async () => {
    taskRepository.getTaskLog.mockResolvedValue(
      TestConstants.database.taskLogs.task3,
    );

    taskRepository.updateTaskLog.mockResolvedValue(
      TestConstants.database.taskLogs.task3,
    );

    const log = await taskService.stopTask(
      TestConstants.database.users.exampleUser.id,
      TestConstants.database.taskLogs.task3.task,
    );

    expect(log).toBeDefined();
    expect(log.task).toBe('3');
  });
});
