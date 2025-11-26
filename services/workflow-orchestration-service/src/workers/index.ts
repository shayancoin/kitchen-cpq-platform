import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from '../activities';

async function runWorker() {
  const connection = await NativeConnection.connect({
    address: process.env.TEMPORAL_ADDRESS ?? 'localhost:7233',
  });

  const worker = await Worker.create({
    connection,
    namespace: process.env.TEMPORAL_NAMESPACE ?? 'default',
    taskQueue: 'kitchen-order-queue',
    workflowsPath: require.resolve('../workflows'),
    activities,
  });

  console.log('workflow-orchestration-service worker starting on kitchen-order-queue');
  await worker.run();
}

runWorker().catch((err) => {
  console.error(err);
  process.exit(1);
});

