import { ReactNode } from "react";

import { Meta, StoryObj } from "@storybook/react";

export type ChildrenCollection = Record<string, ReactNode>;

export interface ChildrenSelectorOptions<Elements extends ChildrenCollection> {
  elements: Elements;
  defaultValue?: keyof Elements;
  argName?: string;
  labels?: Record<keyof Elements, string>;
}

export const withChildrenSelector = <T, R extends Meta<T> | StoryObj<T>, Elements extends ChildrenCollection>(
  src: R,
  options: ChildrenSelectorOptions<Elements>,
): R => {
  const { elements, defaultValue, argName = "children", labels } = options;

  return {
    ...src,
    args: {
      ...src?.args,
      [argName]: defaultValue ? elements[defaultValue] : undefined,
    },
    argTypes: {
      ...(src?.argTypes ?? {}),
      [argName]: {
        options: Object.keys(elements),
        mapping: elements,
        control: {
          type: "select",
          labels: labels ?? Object.keys(elements).reduce((acc, key) => ({ ...acc, [key]: key }), {}),
        },
      },
    },
  };
};
