import { z } from 'zod';

export const CreateCoffeeDtoSchema = z.object({
  name: z.string(),
  brand: z.string(),
  flavors: z.array(z.string()),
});

export type CreateCoffeeDto = z.infer<typeof CreateCoffeeDtoSchema>;
