import { Injectable } from '@nestjs/common';
import type { ProjectId } from '@kitchen-cpq/shared-types';

@Injectable()
export class ReportingService {
  getOrderTimeline(projectId: ProjectId) {
    const now = Date.now();
    return {
      projectId,
      timeline: [
        { label: 'Quote confirmed', at: new Date(now - 1000 * 60).toISOString() },
        { label: 'CAD/CAM started', at: new Date(now - 1000 * 30).toISOString() },
        { label: 'Manufacturing scheduled', at: new Date(now - 1000 * 10).toISOString() }
      ]
    };
  }

  getManufacturingJobs() {
    const now = Date.now();
    return {
      jobs: [
        {
          id: 'job-stub',
          status: 'scheduled',
          updatedAt: new Date(now - 1000 * 5).toISOString()
        }
      ]
    };
  }
}
