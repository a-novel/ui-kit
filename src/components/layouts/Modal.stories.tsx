import { metaGen, storyGen } from "../../storybook_utils";
import { Button } from "@components/actions";
import { Modal } from "@components/layouts/Modal";
import { Separator } from "@components/layouts/Separator";
import { Container, IFrame, Text } from "@components/wrappers";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus a libero euismod, a 
egestas lorem aliquam. Cras a urna condimentum, scelerisque justo id, scelerisque metus. Etiam interdum, ante in 
suscipit condimentum, lacus libero aliquet est, sed facilisis lorem orci at magna. Vivamus nulla ante, tempus nec 
dapibus sed, commodo id magna. Quisque tempus ut augue a sodales. Suspendisse eu consectetur tortor, nec congue sem. 
Proin imperdiet lacus nisi, ut placerat ligula fermentum vel. Pellentesque ut mattis lorem. Duis tincidunt neque vitae 
urna ultrices consequat. Aenean vel nisl eget neque vulputate placerat. Sed ultricies suscipit tristique. Ut rutrum 
pharetra euismod. Ut in ultricies turpis. Maecenas aliquam purus nec ligula porttitor, id venenatis lorem placerat.`;

const meta = metaGen<typeof Modal>({ component: Modal })
  .withDecorators((Story) => (
    <IFrame style={{ width: "100%", height: "50vh" }}>
      <div id="modals" data-portal="true" />
      {Story()}
    </IFrame>
  ))
  .withTextChildren(LoremIpsum)
  .withArgs({
    opened: true,
    title: "My awesome modal",
  })
  .withArgTypes({
    opened: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    title: {
      control: "text",
    },
    onClose: {
      control: false,
    },
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender(({ children, ...args }) => (
    <Modal
      onClose={() => {
        /* close and cleanup */
      }}
      {...args}
    >
      {children}
    </Modal>
  ))
  .value();

export const WithButtons = storyGen()
  .withRender(({ children, ...args }) => (
    <Modal
      onClose={() => {
        /* close and cleanup */
      }}
      {...args}
    >
      <Text>{children}</Text>
      <Separator orientation="vertical" size={1} />
      <Container orientation="horizontal" spacing="normal" gap wrap width="full">
        <Button align="center" secondary color="blue">
          Confirm
        </Button>
        <Button align="center" secondary color="red">
          Cancel
        </Button>
      </Container>
    </Modal>
  ))
  .value();

export const Overflow = storyGen()
  .withTextChildren(LoremIpsum + LoremIpsum + LoremIpsum + LoremIpsum + LoremIpsum + LoremIpsum)
  .withRender(({ children, ...args }) => (
    <Modal
      onClose={() => {
        /* close and cleanup */
      }}
      {...args}
    >
      {children}
    </Modal>
  ))
  .value();
