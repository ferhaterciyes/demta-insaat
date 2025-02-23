import zod from 'zod';

export const LoginValidationSchema = zod.object({
    username: zod.string().min(3).max(16),
    password: zod.string().min(8).max(32),
});
