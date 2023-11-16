import { metaGen, storyGen } from "../../storybook_utils";
import { Text } from "@components/wrappers";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus a libero euismod, a 
egestas lorem aliquam. Cras a urna condimentum, scelerisque justo id, scelerisque metus. Etiam interdum, ante in 
suscipit condimentum, lacus libero aliquet est, sed facilisis lorem orci at magna. Vivamus nulla ante, tempus nec 
dapibus sed, commodo id magna. Quisque tempus ut augue a sodales. Suspendisse eu consectetur tortor, nec congue sem. 
Proin imperdiet lacus nisi, ut placerat ligula fermentum vel. Pellentesque ut mattis lorem. Duis tincidunt neque vitae 
urna ultrices consequat. Aenean vel nisl eget neque vulputate placerat. Sed ultricies suscipit tristique. Ut rutrum 
pharetra euismod. Ut in ultricies turpis. Maecenas aliquam purus nec ligula porttitor, id venenatis lorem placerat.`;

const meta = metaGen<typeof Text>({ component: Text })
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
  .withRender((args) => <Text {...args} />)
  .value();
