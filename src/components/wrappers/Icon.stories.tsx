import Burger from "@assets/icons/demo/burger.svg";
import Pikachu from "@assets/icons/demo/pikachu.svg";

import { metaGen, storyGen } from "../../storybook_utils";
import { ScaleSelectors } from "../../storybook_utils/controls";
import { Icon, Text } from "@components/wrappers";

const meta = metaGen<typeof Icon>({ component: Icon })
  .withDecorators((Story) => (
    <div
      style={{
        display: "block",
        borderRadius: "var(--radius)",
        width: "fit-content",
        margin: "auto",
      }}
    >
      {Story()}
    </div>
  ))
  .withArgTypes({
    scalingMethod: {
      options: ["vertical", "horizontal", "square", undefined],
      control: "select",
    },
  })
  .withChildrenSelector({
    elements: { Burger: <Burger />, Pikachu: <Pikachu /> },
    defaultValue: "Burger",
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withScaleSelector({
    defaultString: "1em",
    defaultNumber: 1,
  })
  .withRender((args) => <Icon {...args} />)
  .value();

export const ScaledNumber = storyGen()
  .withScaleSelector({
    defaultNumber: 10,
    allow: [ScaleSelectors.number],
  })
  .withRender((args) => <Icon {...args} />)
  .value();

export const ScaledCSS = storyGen()
  .withScaleSelector({
    defaultString: "10rem",
    allow: [ScaleSelectors.string],
  })
  .withRender((args) => <Icon {...args} />)
  .value();

export const Inline = storyGen()
  .withScaleSelector({
    defaultString: "1em",
    defaultNumber: 1,
  })
  .withRender((args) => (
    <Text>
      This is a fabulous <Icon {...args} /> icon.
    </Text>
  ))
  .value();
