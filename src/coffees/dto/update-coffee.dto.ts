import { z } from 'zod';

const UpdateCoffeeDtoSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  brand: z.string().optional(),
  flavors: z.array(z.string().optional()),
});

export type UpdateCoffeeDto = z.infer<typeof UpdateCoffeeDtoSchema>;
