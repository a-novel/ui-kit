import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { ModuleOptions } from "webpack";

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

type RuleFN = (rule: ArrayElement<ModuleOptions["rules"]>) => ArrayElement<ModuleOptions["rules"]>;

const alterRules =
  (...callbacks: RuleFN[]) =>
  (rule: ArrayElement<ModuleOptions["rules"]>) => {
    return callbacks.reduce((acc, callback) => callback(acc), rule);
  };

const disableFileLoader = (fileType: string) => (rule: ArrayElement<ModuleOptions["rules"]>) => {
  if (rule == null || typeof rule !== "object") return rule;

  if (rule.test != null && rule.test instanceof RegExp && rule.test.test(fileType)) {
    return { ...rule, exclude: new RegExp(`\\${fileType}$`) };
  }

  return rule;
};

const forceCamelCaseExports = (rule: ArrayElement<ModuleOptions["rules"]>) => {
  if (rule == null || typeof rule !== "object") return rule;

  if (!rule.use || !Array.isArray(rule.use)) return rule;

  rule.use.forEach((use) => {
    if (use == null || typeof use !== "object" || use.loader == null || !use.loader.includes("css-loader")) return;

    if (use.options == null || typeof use.options === "string") {
      use.options = {
        modules: {
          exportLocalsConvention: "camelCase",
        },
      };
    } else {
      use.options = {
        ...use.options,
        modules: {
          ...use.options.modules,
          exportLocalsConvention: "camelCase",
        },
      };
    }
  });

  return rule;
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: async (config) => {
    const rules = (config?.module?.rules ?? []).map(alterRules(disableFileLoader(".svg"), forceCamelCaseExports));

    rules.unshift({
      test: /\.svg$/,
      enforce: "pre",
      use: ["@svgr/webpack"],
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@lib": path.resolve(__dirname, "../src/lib"),
          "@hooks": path.resolve(__dirname, "../src/hooks"),
          "@contexts": path.resolve(__dirname, "../src/contexts"),
          "@components": path.resolve(__dirname, "../src/components"),
          "@assets": path.resolve(__dirname, "../src/assets"),
        },
        fallback: {
          ...config.resolve?.fallback,
          zlib: require.resolve("browserify-zlib"),
        },
      },
      module: { ...config.module, rules },
    };
  },
  swc: (config, _) => {
    return {
      ...config,
      exclude: [".*\\.test\\.tsx?$"],
      jsc: {
        ...config.jsc,
        transform: {
          react: {
            runtime: "automatic",
            importSource: "react",
          },
        },
        parser: {
          syntax: "typescript",
          tsx: true,
        },
      },
    };
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  features: {
    storyStoreV7: false, // 👈 Opt out of on-demand story loading
  },
};
export default config;
