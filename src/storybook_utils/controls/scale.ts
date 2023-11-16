import { Meta, StoryObj } from "@storybook/react";

export const ScaleSelectors = {
  defaultValue: "Use default value",
  string: "Use string value",
  number: "Use number value",
} as const;

export interface ScaleSelectorOptions {
  min?: number;
  max?: number;
  defaultString?: string;
  defaultNumber?: number;
  allow?: (typeof ScaleSelectors)[keyof typeof ScaleSelectors][];
  initial?: (typeof ScaleSelectors)[keyof typeof ScaleSelectors];
}

export interface ScaleArgs {
  scale: string | number;
  scaleString?: string;
  scaleNumber?: number;
}

export const renderScale = (scale: string, scaleString?: string, scaleNumber?: number) => {
  switch (scale) {
    case "Use string value":
      return scaleString ?? "1em";
    case "Use number value":
      return scaleNumber ?? 1;
    default:
      return undefined;
  }
};

const withDualScaleSelector = <T, R extends Meta<T> | StoryObj<T>>(src: R, options: ScaleSelectorOptions = {}): R => {
  const { min = 0, max = 20, defaultString, defaultNumber, initial, allow } = options;

  const selectorValues = allow ?? ["Use default value", "Use string value", "Use number value"];
  const initialSelectorValue = initial ?? selectorValues[0];

  return {
    ...src,
    args: {
      ...src?.args,
      scale: initialSelectorValue,
      scaleNumber: defaultNumber,
      scaleString: defaultString,
    },
    argTypes: {
      ...(src?.argTypes ?? {}),
      scale: {
        options: Object.values(selectorValues),
        control: "select",
      },
      scaleNumber: {
        name: "scale - value",
        if: { arg: "scale", eq: ScaleSelectors.number },
        control: {
          type: "number",
          min,
          max,
        },
        description: '<span style="color: #14ff00;">[Storybook Only]</span> Use a number value for the scale.',
      },
      scaleString: {
        name: "scale - value",
        if: { arg: "scale", eq: ScaleSelectors.string },
        control: "text",
        description: '<span style="color: #14ff00;">[Storybook Only]</span> Use a string (CSS) value for the scale.',
      },
    },
  };
};

const withNumberScaleSelector = <T, R extends Meta<T> | StoryObj<T>>(src: R, options: ScaleSelectorOptions = {}): R => {
  const { min = 0, max = 20, defaultNumber } = options;

  return {
    ...src,
    args: {
      ...src?.args,
      scale: defaultNumber,
    },
    argTypes: {
      ...(src?.argTypes ?? {}),
      scale: {
        control: {
          type: "number",
          min,
          max,
        },
      },
      scaleString: {
        table: { disable: true },
      },
      scaleNumber: {
        table: { disable: true },
      },
    },
  };
};

const withStringScaleSelector = <T, R extends Meta<T> | StoryObj<T>>(src: R, options: ScaleSelectorOptions = {}): R => {
  const { defaultString } = options;

  return {
    ...src,
    args: {
      ...src?.args,
      scale: defaultString,
    },
    argTypes: {
      ...(src?.argTypes ?? {}),
      scale: {
        control: "text",
      },
      scaleString: {
        table: { disable: true },
      },
      scaleNumber: {
        table: { disable: true },
      },
    },
  };
};

const withoutScaleSelector = <T, R extends Meta<T> | StoryObj<T>>(src: R): R => {
  return {
    ...src,
    argTypes: {
      ...(src?.argTypes ?? {}),
      scale: {
        table: { disable: true },
      },
      scaleString: {
        table: { disable: true },
      },
      scaleNumber: {
        table: { disable: true },
      },
    },
  };
};

export const withScaleSelector = <T, R extends Meta<T> | StoryObj<T>>(
  src: R,
  options: ScaleSelectorOptions = {},
): R => {
  const { allow } = options;

  if (allow?.length === 1) {
    if (allow[0] === ScaleSelectors.string) return withStringScaleSelector<T, R>(src, options);
    if (allow[0] === ScaleSelectors.number) return withNumberScaleSelector<T, R>(src, options);
    return withoutScaleSelector<T, R>(src);
  }

  return withDualScaleSelector<T, R>(src, options);
};
