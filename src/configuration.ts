import { App, Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';

@Configuration({
  importConfigs: [join(__dirname, './config')],
  imports: [
    swagger
  ]
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
