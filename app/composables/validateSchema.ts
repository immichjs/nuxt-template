import { ValidationError } from "yup";

export const useValidateSchema = () => {
	const validateSchema = (schema: any, dto: Record<string, any>) => {
		try {
			schema.validateSync(dto, { abortEarly: true });
			return { valid: true, error: "" };
		} catch (error) {
			if (error instanceof ValidationError) {
				return { valid: false, error: error.message };
			}
			throw error;
		}
	};

	return {
		validateSchema,
	};
};
