import { z } from 'zod';

export const CopilotMessageSchema = z.object({
  id: z.string(),
  role: z.string(),
  content: z.string(),
  createdAt: z.string()
});

export const ParamDeltaSchema = z.object({
  path: z.string(),
  value: z.union([z.number(), z.string(), z.boolean()])
});

export const AgentToolCallSchema = z.object({
  id: z.string(),
  toolName: z.enum([
    'paramEngine.applyDelta',
    'optimizer.solveLayout',
    'cadService.generateCadMacro',
    'pricingService.simulateChange'
  ]),
  arguments: z.unknown(),
  status: z.enum(['pending', 'running', 'succeeded', 'failed']),
  result: z.unknown().optional(),
  error: z.string().optional()
});

export const CopilotChatRequestSchema = z.object({
  projectId: z.string(),
  message: z.string(),
  role: z.string(),
  history: z.array(CopilotMessageSchema).optional(),
  goals: z.unknown().optional(),
  parametricState: z.unknown().optional()
});

export const CopilotPlanResponseSchema = z.object({
  reply: z.string(),
  proposedDeltas: z.array(ParamDeltaSchema).optional(),
  toolCalls: z.array(AgentToolCallSchema).default([]),
  validatedState: z.unknown().optional(),
  constraintSummary: z.unknown().optional(),
  warnings: z.array(z.string()).optional()
});

export type CopilotChatRequestInput = z.infer<typeof CopilotChatRequestSchema>;
export type CopilotPlanResponseOutput = z.infer<typeof CopilotPlanResponseSchema>;
