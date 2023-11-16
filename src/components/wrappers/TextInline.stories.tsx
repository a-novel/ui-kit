import { metaGen, storyGen } from "../../storybook_utils";
import { TextInline } from "@components/wrappers";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus a libero euismod, a 
egestas lorem aliquam.`;

const meta = metaGen<typeof TextInline>({ component: TextInline })
  .withDecorators((Story) => <div style={{ padding: "2rem" }}>{Story()}</div>)
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
  .withRender((args) => <TextInline {...args} />)
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
  .withRender((args) => <TextInline {...args} />)
  .value();
