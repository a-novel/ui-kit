import { ComponentProps, JSX, JSXElementConstructor } from "react";

import {
  ChildrenCollection,
  ChildrenSelectorOptions,
  ScaleArgs,
  ScaleSelectorOptions,
  ScaleSelectors,
  renderScale,
  withChildrenSelector,
  withScaleSelector,
} from "./controls";
import { ArgTypes, Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { ArgsStoryFn, StoryContext } from "@storybook/types";

export class MetaGen<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  R extends Meta<T> | StoryObj<T>,
> {
  #meta: R;

  constructor(initial?: R) {
    this.#meta = (initial ?? {}) as R;
  }

  withChildrenSelector(options: ChildrenSelectorOptions<ChildrenCollection>) {
    this.#meta = withChildrenSelector<T, R, ChildrenCollection>(this.#meta, options);
    return this;
  }

  withScaleSelector(options: ScaleSelectorOptions) {
    this.#meta = withScaleSelector<T, R>(this.#meta, options);
    return this;
  }

  withColorSelector(visibility?: boolean) {
    if (visibility === false) {
      this.withArgTypes({
        color: {
          options: ["blue", "purple", "red", "green", "orange", "gold", undefined],
          control: "select",
        },
      } as Partial<ArgTypes<ComponentProps<T>>>);
    } else {
      this.withArgTypes({
        visibility: {
          options: ["primary", "secondary", "tertiary", "dark", undefined],
          control: "select",
        },
        color: {
          options: ["blue", "purple", "red", "green", "orange", "gold", undefined],
          control: "select",
        },
      } as Partial<ArgTypes<ComponentProps<T>>>);
    }

    return this;
  }

  withTextChildren(initial?: string) {
    this.withArgs({ children: initial } as unknown as Partial<ComponentProps<T>>);
    this.withArgTypes({ children: { control: "text" } } as Partial<ArgTypes<ComponentProps<T>>>);
    return this;
  }

  withArgTypes(args: Partial<ArgTypes<ComponentProps<T>>>) {
    this.#meta.argTypes = Object.assign(this.#meta.argTypes ?? {}, args);
    return this;
  }

  withArgs(args: Partial<ComponentProps<T>>) {
    this.#meta.args = Object.assign(this.#meta.args ?? {}, args);
    return this;
  }

  withDecorators(decorators: R["decorators"]) {
    this.#meta.decorators = decorators;
    return this;
  }

  set(params: Partial<R>) {
    this.#meta = { ...this.#meta, ...params };
    return this;
  }

  value(): R {
    return this.#meta;
  }
}

type ComputeArgs<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  XArgs extends ComponentProps<T>,
> = (args: XArgs) => ComponentProps<T>;

export class StoryGen<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  XArgs extends ComponentProps<T>,
  R extends StoryObj<T> = StoryObj<T>,
> extends MetaGen<T, R> {
  #renderers: ComputeArgs<T, XArgs>[] = [];

  constructor(initial?: R) {
    super(initial);
  }

  withRenderer(renderer: ComputeArgs<T, XArgs>) {
    this.#renderers.push(renderer);
    return this;
  }

  withScaleSelector(options: ScaleSelectorOptions) {
    super.withScaleSelector(options);

    this.withRenderer((args: ComponentProps<T> & ScaleArgs) => {
      const { scale, scaleString, scaleNumber, ...rest } = args;

      if (typeof scale === "string" && (Object.values(ScaleSelectors) as string[]).includes(scale)) {
        return { ...args, scale: renderScale(scale, scaleString, scaleNumber) };
      }

      return { ...rest, scale } as ComponentProps<T>;
    });

    return this;
  }

  withControlledStyle(key: string) {
    this.withRenderer((args: ComponentProps<T>) => {
      const { [key]: styleProp, ...rest } = args;

      if (styleProp == null || styleProp === "") return rest as ComponentProps<T>;

      return { ...rest, style: { ...(args.style ?? {}), [key]: styleProp } } as ComponentProps<T>;
    });

    return this;
  }

  renderArgs(args: XArgs): ComponentProps<T> {
    return this.#renderers?.reduce((acc, renderer) => renderer(acc), args) ?? args;
  }

  withRender(callback: ArgsStoryFn<ReactRenderer, ComponentProps<T>>) {
    if (callback == null) return this;

    this.set({
      render: (args: XArgs, ctx: StoryContext<ReactRenderer, XArgs>) => callback(this.renderArgs(args), ctx),
    } as Partial<R>);

    return this;
  }
}

export const metaGen = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(initial?: Meta<T>) =>
  new MetaGen<T, Meta<T>>(initial);

export const storyGen = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  XArgs extends ComponentProps<T> = ComponentProps<T>,
>(
  initial?: StoryObj<T>,
) => new StoryGen<T, XArgs, StoryObj<T>>(initial);
