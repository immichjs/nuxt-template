import * as yup from "yup";

export const loginSchema = yup.object().shape({
	email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
	password: yup
		.string()
		.required("Senha é obrigatória")
		.min(8, "Senha deve ter pelo menos 8 caracteres")
		.max(20, "Senha de ter no máximo 20 caracteres")
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
			"Senha deve conter letras maiúsculas e minúsculas, números e caractere especial"
		),
});
