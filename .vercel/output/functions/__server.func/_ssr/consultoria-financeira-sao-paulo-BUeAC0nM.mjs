import { o as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { F as ChevronDown, I as Check, _ as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as formBenefits, c as pillars, i as faqs, l as steps, n as aboutStats, o as heroStats, r as benefits, s as pains, t as SITE, u as whatsappLink } from "./site-B6pKJFdk.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consultoria-financeira-sao-paulo-BUeAC0nM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-brand text-white shadow-[0_6px_24px_rgba(134,121,230,0.4)] hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(134,121,230,0.5)]",
			dark: "bg-ink text-white hover:bg-ink-light hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(30,27,107,0.35)]",
			ghost: "border border-white/20 bg-transparent text-white/85 hover:border-white/60 hover:text-white",
			outline: "border border-ink/15 bg-transparent text-ink hover:bg-ink/5",
			link: "text-brand underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-6 py-2.5",
			sm: "h-9 rounded-md px-4 text-[13px]",
			lg: "h-14 rounded-xl px-9 text-[15px] font-bold",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var links = [
	{
		href: "#solucao",
		label: "Solução"
	},
	{
		href: "#processo",
		label: "Como Funciona"
	},
	{
		href: "#faq",
		label: "FAQ"
	}
];
function scrollTo$5(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const go = (id) => {
		setOpen(false);
		scrollTo$5(id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "fixed inset-x-0 top-0 z-[999] flex h-[70px] items-center justify-between border-b border-brand/20 bg-ink/[0.97] px-[5%] backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "flex items-center",
				onClick: (e) => {
					e.preventDefault();
					window.scrollTo({
						top: 0,
						behavior: "smooth"
					});
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/efreire-landing-sp-logo.png",
					alt: "Efreire Assessoria e Serviços Especializados",
					className: "h-[38px] w-auto"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "hidden items-center gap-[30px] md:flex",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go(l.href.slice(1)),
					className: "text-sm font-medium text-white/70 transition-colors hover:text-lilac",
					children: l.label
				}) }, l.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					className: "h-auto px-6 py-2.5",
					onClick: () => go("formulario"),
					children: "Diagnóstico Gratuito"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "flex size-11 items-center justify-center text-white md:hidden",
				"aria-label": open ? "Fechar menu" : "Abrir menu",
				onClick: () => setOpen((v) => !v),
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 top-[70px] flex flex-col gap-1 border-b border-white/10 bg-ink/[0.98] px-[5%] pb-4 pt-2 backdrop-blur-md md:hidden",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go(l.href.slice(1)),
					className: "border-b border-white/10 py-3.5 text-left text-[15px] text-white/80",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-3",
					onClick: () => go("formulario"),
					children: "Diagnóstico Gratuito"
				})]
			})
		]
	});
}
function scrollTo$4(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function renderValue(v) {
	const m = v.match(/^(\+?)(\d+)(%?)$/);
	if (!m) return v;
	const [, plus, num, pct] = m;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		plus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-brand",
			children: plus
		}),
		num,
		pct && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-brand",
			children: pct
		})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		id: "top",
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-[5%] pb-20 pt-[130px] text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(134,121,230,.22) 0%, transparent 65%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				className: "relative z-10 flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-[30px] inline-flex items-center gap-2 rounded-full border border-brand/45 px-[18px] py-[7px] text-xs font-semibold uppercase tracking-[1.5px] text-lilac",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-brand" }),
							"Assessoria Financeira Especializada — ",
							SITE.cidade
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mb-6 max-w-[880px] text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.1] tracking-[-1.2px] text-white",
						children: ["Visibilidade total do seu caixa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lilac",
							children: "em 30 dias"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-11 max-w-[600px] text-[clamp(16px,1.8vw,19px)] leading-[1.75] text-white/60",
						children: "Transformamos a desordem financeira da sua empresa em processos claros, rentabilidade crescente e decisões baseadas em dados reais."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							onClick: () => scrollTo$4("formulario"),
							children: "Agendar Diagnóstico Gratuito"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "ghost",
							onClick: () => scrollTo$4("solucao"),
							children: "Conhecer a solução"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mt-[66px] flex flex-wrap justify-center gap-x-14 gap-y-8 border-t border-white/10 pt-12",
				children: heroStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "block text-[44px] font-extrabold leading-none tracking-[-1px] text-white",
						children: renderValue(s.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "mt-2 block text-[13px] text-white/45",
						children: s.label
					})]
				}, s.label))
			})
		]
	});
}
function Reveal({ children, delay = 0, y = 24, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.21,
				.5,
				.3,
				1
			]
		},
		...props,
		children
	});
}
function Eyebrow({ children, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand" + (center ? " text-center" : ""),
		children
	});
}
function SectionTitle({ children, center, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-ink" + (center ? " mx-auto max-w-[720px] text-center" : " max-w-[600px]") + (className ? " " + className : ""),
		children
	});
}
function PainSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-white px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Identificação" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "max-w-[600px] text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-ink",
				children: [
					"Você reconhece alguma",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"dessas situações?"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3.5 max-w-[540px] text-base leading-[1.75] text-muted-ink",
				children: "Esses são os sinais mais comuns de que sua empresa precisa de estrutura financeira."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5",
			children: pains.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full rounded-2xl border border-line bg-[#FAFAFE] p-7 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_8px_28px_rgba(45,46,143,0.1)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex size-[46px] items-center justify-center rounded-xl bg-brand/10 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
								className: "size-6",
								strokeWidth: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 text-[15px] font-bold text-ink",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-[1.65] text-muted-ink",
							children: p.text
						})
					]
				})
			}, p.title))
		})]
	});
}
function scrollTo$3(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function SolutionSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "solucao",
		className: "bg-ink px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand",
				children: "Nossa Abordagem"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "max-w-[600px] text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-white",
				children: [
					"7 pilares para transformar",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"sua gestão financeira"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3.5 max-w-[540px] text-base leading-[1.75] text-white/45",
				children: "Uma metodologia completa, construída para empresas que querem crescer com solidez."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-13 grid grid-cols-1 overflow-hidden rounded-[18px] border border-brand/15 md:grid-cols-2 lg:grid-cols-3",
			children: [pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-r border-brand/10 bg-white/[0.03] p-8 transition-colors hover:bg-brand/[0.07]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3.5 text-[13px] font-bold tracking-wide text-brand",
						children: [p.num, " —"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2.5 text-base font-bold text-white",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-[1.65] text-white/50",
						children: p.text
					})
				]
			}, p.num)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center border-b border-r border-brand/10 bg-brand/10 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-lg font-bold text-white",
						children: "Pronto para começar?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm leading-[1.65] text-white/60",
						children: "Agende um diagnóstico gratuito e descubra por onde começar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						className: "h-auto self-start px-5 py-2.5",
						onClick: () => scrollTo$3("formulario"),
						children: "Falar agora →"
					})
				]
			})]
		})]
	});
}
function BenefitsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "beneficios",
		className: "bg-cream px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Resultados" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "O que muda na sua empresa" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-13 grid max-w-[880px] grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2",
			children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-[18px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-[34px] shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-[17px]",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 text-[15px] font-bold text-ink",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] leading-[1.55] text-muted-ink",
						children: b.text
					})] })]
				})
			}, b.title))
		})]
	});
}
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "processo",
		className: "bg-white px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				center: true,
				children: "Como Funciona"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionTitle, {
				center: true,
				children: [
					"Do primeiro contato",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"aos resultados"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-[12.5%] right-[12.5%] top-[29px] hidden h-0.5 lg:block",
				style: { background: "linear-gradient(90deg, #8679E6, rgba(134,121,230,.2))" }
			}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * .1,
				className: "relative z-10 px-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-5 flex size-[58px] items-center justify-center rounded-full border-[3px] border-brand bg-ink text-[22px] font-extrabold text-white",
						children: s.num
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 text-[15px] font-bold text-ink",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] leading-[1.6] text-muted-ink",
						children: s.text
					})
				]
			}, s.num))]
		})]
	});
}
function scrollTo$2(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col items-start gap-12 px-[5%] py-24 lg:flex-row lg:items-center lg:gap-20",
		style: { background: "linear-gradient(135deg, #1E1B6B 0%, #2D2A8C 100%)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand",
					children: "Quem somos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-white",
					children: [
						"+15 anos transformando",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"gestões financeiras"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3.5 max-w-[480px] text-base leading-[1.75] text-white/55",
					children: "A Efreire Assessoria e Serviços Especializados atua com gestão financeira de pequenas e médias empresas em diversos setores, com atendimento presencial e remoto."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => scrollTo$2("formulario"),
						children: "Falar com um especialista"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid w-full grid-cols-2 gap-5 lg:w-[360px] lg:shrink-0",
			children: aboutStats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .07,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-2xl border border-brand/25 bg-white/5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "block text-[34px] font-extrabold tracking-[-1px] text-lilac",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1.5 block text-[13px] leading-[1.4] text-white/50",
						children: s.label
					})]
				})
			}, s.label))
		})]
	});
}
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "depoimentos",
		className: "bg-cream px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				center: true,
				children: "Depoimentos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				center: true,
				children: "O que dizem nossos clientes"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-3",
			children: [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D6D2F0] bg-white px-8 py-11 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#9C97B8]",
						children: "Depoimento a inserir"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-[13px] text-brand",
						children: "Nome · Cargo · Empresa"
					})]
				})
			}, i))
		})]
	});
}
function scrollTo$1(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function CtaMid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-brand px-[5%] py-[66px] text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.5px] text-white",
				children: "Sua empresa merece clareza financeira agora"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 text-base text-white/80",
				children: "Diagnóstico gratuito, sem compromisso. 30 minutos que podem mudar a trajetória do seu negócio."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				variant: "dark",
				onClick: () => scrollTo$1("formulario"),
				children: "Quero meu diagnóstico gratuito →"
			})
		] })
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-line", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-[15px] font-bold text-ink outline-none transition-all hover:text-brand [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-[18px] shrink-0 text-brand transition-transform duration-300" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 pr-8 leading-[1.75] text-muted-ink", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "bg-white px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				center: true,
				children: "FAQ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				center: true,
				children: "Perguntas frequentes"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto mt-12 max-w-[740px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
				}, i))
			})
		})]
	});
}
var leadSchema = objectType({
	nome: stringType().min(2, "Informe seu nome"),
	cargo: stringType().optional().or(literalType("")),
	empresa: stringType().min(2, "Informe a empresa"),
	telefone: stringType().min(8, "Informe um WhatsApp válido"),
	email: stringType().email("E-mail inválido").optional().or(literalType("")),
	desafio: stringType().optional().or(literalType("")),
	faturamento: stringType().optional().or(literalType(""))
});
var LABELS = {
	nome: "Nome",
	cargo: "Cargo",
	empresa: "Empresa",
	telefone: "Telefone/WhatsApp",
	email: "E-mail",
	desafio: "Maior desafio",
	faturamento: "Faturamento"
};
function montarTexto(dados, origem) {
	const linhas = ["🚀 <b>Novo Lead — Efreire</b>", ""];
	Object.keys(LABELS).forEach((k) => {
		if (dados[k]) linhas.push(`<b>${LABELS[k]}:</b> ${dados[k]}`);
	});
	linhas.push("", `Origem: ${origem}`, `Data: ${(/* @__PURE__ */ new Date()).toLocaleString("pt-BR")}`);
	return linhas.join("\n");
}
async function enviarLead(dados, origem = "Landing Page") {
	const tarefas = [];
	if (tarefas.length === 0) {
		console.info("[Efreire] Lead capturado (sem canal configurado):\n" + montarTexto(dados, origem));
		await new Promise((r) => setTimeout(r, 700));
		return {
			ok: true,
			simulated: true,
			canais: []
		};
	}
	const resultados = await Promise.allSettled(tarefas);
	const ok = resultados.filter((r) => r.status === "fulfilled");
	if (ok.length === 0) throw resultados.find((r) => r.status === "rejected")?.reason ?? /* @__PURE__ */ new Error("Falha no envio");
	return {
		ok: true,
		simulated: false,
		canais: ok.map((r) => r.value)
	};
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		ref,
		className: cn("flex h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus-visible:border-brand disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/60 peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
	...props
}));
Label.displayName = Root.displayName;
function LeadForm() {
	const [status, setStatus] = (0, import_react.useState)(null);
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: a(leadSchema),
		defaultValues: {
			nome: "",
			cargo: "",
			empresa: "",
			telefone: "",
			email: "",
			desafio: "",
			faturamento: ""
		}
	});
	const onSubmit = async (data) => {
		setStatus(null);
		try {
			await enviarLead(data, "Landing Page — Tráfego Pago");
			setStatus("ok");
			reset();
		} catch (err) {
			console.error(err);
			setStatus("err");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[18px] border border-brand/20 bg-white/[0.04] p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 text-[22px] font-extrabold tracking-[-0.5px] text-white",
				children: "Fale com um especialista"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-7 text-sm text-white/45",
				children: "Preencha o formulário e entraremos em contato em até 24h."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit(onSubmit),
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nome *",
						error: errors.nome?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Seu nome",
							...register("nome")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Empresa *",
						error: errors.empresa?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Nome da empresa",
							...register("empresa")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "WhatsApp *",
							error: errors.telefone?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "tel",
								placeholder: "(11) 00000-0000",
								...register("telefone")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "E-mail",
							error: errors.email?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								placeholder: "seu@email.com",
								...register("email")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "mt-2 w-full",
						disabled: isSubmitting,
						children: isSubmitting ? "Enviando..." : "Agendar Diagnóstico Gratuito →"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[11px] text-white/30",
						children: "Seus dados são confidenciais e não serão compartilhados."
					}),
					status === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-lg border border-brand/40 bg-brand/15 px-4 py-3.5 text-[13.5px] leading-[1.55] text-[#D9D4FA]",
						children: "✓ Recebemos seus dados! Nossa equipe entra em contato em até 24h."
					}),
					status === "err" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-lg border border-[#e67878]/35 bg-[#e67878]/10 px-4 py-3.5 text-[13.5px] leading-[1.55] text-[#F2C6C6]",
						children: "Não foi possível enviar agora. Tente novamente ou fale no WhatsApp."
					})
				]
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[11px] text-[#F2A6A6]",
				children: error
			})
		]
	});
}
function LeadSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "formulario",
		className: "bg-ink px-[5%] py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand",
			children: "Contato"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-white",
			children: [
				"Agende seu diagnóstico",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"gratuito agora"
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid grid-cols-1 items-start gap-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [formBenefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3.5 border-b border-white/8 py-4 last:border-b-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-brand/[0.18] text-lilac",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, {
						className: "size-[19px]",
						strokeWidth: 2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-0.5 text-sm font-bold text-white",
					children: b.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] leading-[1.5] text-white/45",
					children: b.text
				})] })]
			}, b.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-t border-white/8 pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-xs font-bold uppercase tracking-wide text-white/40",
						children: "Contato direto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-2.5 block text-[15px] text-white/70",
						children: SITE.telefoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-2.5 block text-[15px] text-white/70",
						children: SITE.email
					})
				]
			})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
			})]
		})]
	});
}
function scrollTo(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink-dark px-[5%] pb-8 pt-13 text-white/45",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-10 border-b border-white/10 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/efreire-landing-sp-logo.png",
					alt: "Efreire",
					className: "mb-4 h-10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[300px] text-[13px] leading-[1.7]",
					children: "Efreire Assessoria e Serviços Especializados Ltda. Transformamos gestão financeira em crescimento sustentável."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-3.5 text-[13px] font-bold uppercase tracking-wide text-white/70",
						children: "Contato"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-2.5 block text-sm text-white/50",
						children: SITE.telefoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-2.5 block text-sm text-white/50",
						children: SITE.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink,
						target: "_blank",
						rel: "noopener",
						className: "mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac",
						children: "WhatsApp"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-3.5 text-[13px] font-bold uppercase tracking-wide text-white/70",
						children: "Navegação"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo("solucao"),
						className: "mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac",
						children: "Solução"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo("processo"),
						className: "mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac",
						children: "Como funciona"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo("faq"),
						className: "mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo("formulario"),
						className: "mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac",
						children: "Diagnóstico Gratuito"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-2 pt-6 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-white/30",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Efreire Assessoria e Serviços Especializados Ltda."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-white/30",
				children: "Todos os direitos reservados."
			})]
		})]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappLink,
		target: "_blank",
		rel: "noopener",
		title: "Falar no WhatsApp",
		className: "fixed bottom-7 right-7 z-[998] flex size-[60px] items-center justify-center rounded-full bg-whatsapp shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110",
		style: { animation: "pulse-ring 2.5s infinite" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-[30px] fill-white",
			xmlns: "http://www.w3.org/2000/svg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
		})
	});
}
function ConsultoriaFinanceiraSaoPauloPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "landing-sp",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PainSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BenefitsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaMid, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { ConsultoriaFinanceiraSaoPauloPage as component };
