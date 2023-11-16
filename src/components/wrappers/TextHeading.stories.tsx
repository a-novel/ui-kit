import { metaGen, storyGen } from "../../storybook_utils";
import { TextHeading } from "@components/wrappers";

const LoremIpsum = "Hi, I'm your friendly neighbor title";

const meta = metaGen<typeof TextHeading>({ component: TextHeading })
  .withDecorators((Story) => <div style={{ padding: "2rem" }}>{Story()}</div>)
  .withArgs({ level: 1 })
  .withArgTypes({
    align: {
      options: ["left", "center", "right", undefined],
      control: "select",
    },
    bold: {
      control: "boolean",
    },
    italic: {
      control: "boolean",
    },
    ellipsis: {
      control: "boolean",
    },
    level: {
      control: {
        type: "number",
        min: 1,
        max: 6,
      },
    },
  })
  .withTextChildren(LoremIpsum)
  .withColorSelector()
  .value();

export default meta;

export const Primary = storyGen()
  .withScaleSelector({
    defaultString: "1em",
    defaultNumber: 1,
  })
  .withControlledStyle("maxWidth")
  .withRender((args) => <TextHeading {...args} />)
  .value();

export const Ellipsis = storyGen()
  .withArgs({
    ellipsis: true,
    // @ts-ignore
    maxWidth: "5ch",
  })
  .withScaleSelector({
    defaultString: "1em",
    defaultNumber: 1,
  })
  .withControlledStyle("maxWidth")
  .withRender((args) => <TextHeading {...args} />)
  .value();
