import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { N as CircleCheck, P as CircleAlert, c as Sparkles, f as Send, g as MessageCircle, h as Phone, v as MapPin, y as Mail } from "../_libs/lucide-react.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { a as WHATSAPP_URL, i as SITE } from "./site-config-CByyk9Ud.mjs";
import { t as SiteLayout } from "./SiteLayout-CplRlhip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-U_CfJq4y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Envia o lead para o webhook configurado.
* - Se TELEGRAM_WEBHOOK_URL apontar para a API oficial do Telegram (sendMessage),
*   o corpo enviado será compatível.
* - Caso aponte para um webhook customizado, o JSON completo é encaminhado.
*/
async function sendLead(lead) {
	console.warn("[lead] TELEGRAM_WEBHOOK_URL não configurado — lead apenas registrado em console.", lead);
	return { ok: true };
}
var leadSchema = objectType({
	nome: stringType().trim().min(2, "Informe seu nome").max(100, "Máximo 100 caracteres"),
	cargo: stringType().trim().max(100, "Máximo 100 caracteres").optional(),
	empresa: stringType().trim().min(2, "Informe sua empresa").max(120, "Máximo 120 caracteres"),
	telefone: stringType().trim().min(8, "Telefone inválido").max(20, "Máximo 20 caracteres"),
	email: stringType().trim().email("E-mail inválido").max(160, "Máximo 160 caracteres"),
	desafio: stringType().trim().max(120, "Máximo 120 caracteres").optional(),
	faturamento: stringType().trim().max(80, "Máximo 80 caracteres").optional(),
	mensagem: stringType().trim().min(10, "Conte um pouco mais").max(1500, "Máximo 1500 caracteres")
});
var desafioOptions = [
	"Fluxo de caixa desorganizado",
	"Falta de relatórios gerenciais",
	"Margens e custos incertos",
	"Processos financeiros manuais",
	"Planejamento estratégico",
	"Outro"
];
var faturamentoOptions = [
	"Até R$ 100 mil",
	"R$ 100 mil - R$ 500 mil",
	"R$ 500 mil - R$ 2 milhões",
	"Acima de R$ 2 milhões"
];
function ContatoPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	async function onSubmit(e) {
		e.preventDefault();
		setErrors({});
		setErrorMsg("");
		const formData = new FormData(e.currentTarget);
		const payload = {
			nome: String(formData.get("nome") ?? ""),
			cargo: String(formData.get("cargo") ?? ""),
			empresa: String(formData.get("empresa") ?? ""),
			telefone: String(formData.get("telefone") ?? ""),
			email: String(formData.get("email") ?? ""),
			desafio: String(formData.get("desafio") ?? ""),
			faturamento: String(formData.get("faturamento") ?? ""),
			mensagem: String(formData.get("mensagem") ?? "")
		};
		const parsed = leadSchema.safeParse(payload);
		if (!parsed.success) {
			const fieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = String(issue.path[0]);
				if (!fieldErrors[key]) fieldErrors[key] = issue.message;
			}
			setErrors(fieldErrors);
			return;
		}
		setStatus("loading");
		const result = await sendLead(parsed.data);
		if (result.ok) {
			setStatus("success");
			e.target.reset();
		} else {
			setStatus("error");
			setErrorMsg(result.error ?? "Erro ao enviar. Tente novamente.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,oklch(0.71_0.13_285/0.18),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Contato"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl",
						children: [
							"Vamos conversar sobre o ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "futuro da sua empresa"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-pretty text-lg leading-relaxed text-muted-foreground",
						children: "Preencha o formulário e nossa equipe entrará em contato para agendar um diagnóstico inicial gratuito, de 30 minutos, sem compromisso."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: [
							"Atendemos empresas presencialmente em ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "São Paulo"
							}),
							" e remotamente em todo o Brasil."
						]
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-5 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-10 lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-5",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nome",
								name: "nome",
								type: "text",
								placeholder: "Seu nome completo",
								error: errors.nome
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Cargo",
									name: "cargo",
									type: "text",
									placeholder: "CEO, Diretor...",
									error: errors.cargo
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Empresa",
									name: "empresa",
									type: "text",
									placeholder: "Nome da empresa",
									error: errors.empresa
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Telefone",
									name: "telefone",
									type: "tel",
									placeholder: "(11) 00000-0000",
									error: errors.telefone
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "E-mail",
									name: "email",
									type: "email",
									placeholder: "voce@empresa.com",
									error: errors.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
									label: "Maior desafio financeiro hoje",
									name: "desafio",
									options: desafioOptions,
									error: errors.desafio
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
									label: "Faturamento mensal aproximado",
									name: "faturamento",
									options: faturamentoOptions,
									error: errors.faturamento
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "mensagem",
									className: "text-sm font-medium text-foreground",
									children: "Mensagem"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "mensagem",
									name: "mensagem",
									rows: 5,
									placeholder: "Conte um pouco sobre sua empresa e o que você gostaria de organizar.",
									className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
								}),
								errors.mensagem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 flex items-center gap-1.5 text-xs text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5" }), errors.mensagem]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: status === "loading",
								className: "group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary-deep hover:shadow-glow disabled:opacity-60",
								children: [status === "loading" ? "Enviando..." : "Enviar mensagem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							}),
							status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-xl border border-primary/30 bg-accent-soft/40 p-4 text-sm text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Mensagem enviada com sucesso!"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted-foreground",
									children: "Entraremos em contato em breve."
								})] })]
							}),
							status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Não foi possível enviar."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted-foreground",
									children: [errorMsg, " Tente novamente ou fale conosco no WhatsApp."]
								})] })]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.aside, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .1
					},
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-surface p-7 md:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl text-foreground",
								children: "Comece com um diagnóstico gratuito"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Uma conversa de 30 minutos, sem compromisso, para entender os principais gaps financeiros da sua empresa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs uppercase tracking-wider text-muted-foreground",
								children: [
									"Experiência prática em",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "Via Varejo"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-8 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
										icon: Phone,
										label: "Telefone",
										value: SITE.phoneDisplay
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
										icon: Mail,
										label: "E-mail",
										value: SITE.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
										icon: MessageCircle,
										label: "WhatsApp",
										value: "Falar agora",
										href: WHATSAPP_URL,
										external: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
										icon: MapPin,
										label: "Atendimento",
										value: "Brasil — online e presencial"
									})
								]
							})
						]
					})
				})]
			})
		})
	})] });
}
function Field({ label, name, type, placeholder, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "text-sm font-medium text-foreground",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			placeholder,
			className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 flex items-center gap-1.5 text-xs text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5" }), error]
		})
	] });
}
function SelectField({ label, name, options, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "text-sm font-medium text-foreground",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			id: name,
			name,
			defaultValue: "",
			className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Selecione..."
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option,
				children: option
			}, option))]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 flex items-center gap-1.5 text-xs text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5" }), error]
		})
	] });
}
function ContactItem({ icon: Icon, label, value, href, external }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 font-medium text-foreground",
			children: value
		})] })]
	});
	if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: content });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: external ? "_blank" : void 0,
		rel: external ? "noreferrer noopener" : void 0,
		className: "block transition-opacity hover:opacity-80",
		children: content
	}) });
}
//#endregion
export { ContatoPage as component };
