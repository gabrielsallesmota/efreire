import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CplRlhip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-CE-UUXhf.js
var import_jsx_runtime = require_jsx_runtime();
function ErrorView({ reset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-32 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl text-foreground",
			children: "Não foi possível carregar este insight."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: reset,
			className: "mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
			children: "Tentar novamente"
		})]
	}) });
}
//#endregion
export { ErrorView as errorComponent };
