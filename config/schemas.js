const desktopSchema = {
  device: "desktop",
  pages: {
    "dados-pessoais": {
      buttonText: "Continue",
      nextStep: "autenticacao-token",
    },
    "autenticacao-token": {
      buttonText: "Continue",
      nextStep: "documentos-pessoais",
    },
    "documentos-pessoais": {
      buttonText: "Continue",
      nextStep: "dados-complementares",
    },
    "dados-complementares": {
      buttonText: "Continue",
      nextStep: "endereco-pessoal",
    },
    "endereco-pessoal": {
      buttonText: "Continue",
      nextStep: "dados-patrimoniais",
    },
    "dados-patrimoniais": {},
  },
};

const mobileSchema = {
  device: "mobile",
  pages: {
    "dados-pessoais": {
      buttonText: "Continue",
      nextStep: "autenticacao-token",
    },
    "autenticacao-token": {
      buttonText: "Continue",
      nextStep: "documentos-pessoais",
    },
    "documentos-pessoais": {
      step: "documentos-pessoais",
      buttonText: "Continue",
    },
  },
};

export default {
  default: {
    brands: ["brand-a", "brand-b", "brand-c"],
    name: "default",
    desktop: desktopSchema,
    mobile: mobileSchema,
  },
};
