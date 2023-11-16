import LockIcon from "@assets/icons/monochrome/lock.svg";
import NoSignalIcon from "@assets/icons/monochrome/no-signal.svg";

import { metaGen, storyGen } from "../../storybook_utils";
import { InlineButton } from "@components/actions";
import { InfoBox } from "@components/containers";
import { Container, Text } from "@components/wrappers";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus a libero euismod, a 
egestas lorem aliquam.`;

const LoremIpsumLong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus a libero euismod, a 
egestas lorem aliquam. Cras a urna condimentum, scelerisque justo id, scelerisque metus. Etiam interdum, ante in 
suscipit condimentum, lacus libero aliquet est, sed facilisis lorem orci at magna. Vivamus nulla ante, tempus nec 
dapibus sed, commodo id magna. Quisque tempus ut augue a sodales. Suspendisse eu consectetur tortor, nec congue sem. 
Proin imperdiet lacus nisi, ut placerat ligula fermentum vel. Pellentesque ut mattis lorem. Duis tincidunt neque vitae 
urna ultrices consequat. Aenean vel nisl eget neque vulputate placerat. Sed ultricies suscipit tristique. Ut rutrum 
pharetra euismod. Ut in ultricies turpis. Maecenas aliquam purus nec ligula porttitor, id venenatis lorem placerat.`;

const meta = metaGen<typeof InfoBox>({ component: InfoBox })
  .withDecorators((Story) => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        padding: "1rem",
        gridTemplateColumns: "repeat(auto-fill, 25rem)",
      }}
    >
      {Story()}
    </div>
  ))
  .withChildrenSelector({
    argName: "icon",
    elements: { Default: undefined, Lock: <LockIcon />, NoSignal: <NoSignalIcon /> },
    defaultValue: "Default",
  })
  .withColorSelector(false)
  .withTextChildren(LoremIpsum)
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((args) => <InfoBox {...args} />)
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } } })
  .withRender((args) => (
    <>
      <InfoBox {...args} color="default" />
      <InfoBox {...args} color="blue" />
      <InfoBox {...args} color="green" />
      <InfoBox {...args} color="orange" />
      <InfoBox {...args} color="red" />
      <InfoBox {...args} color="purple" />
      <InfoBox {...args} color="gold" />
    </>
  ))
  .value();

export const LargeText = storyGen()
  .withTextChildren(LoremIpsumLong)
  .withRender((args) => <InfoBox {...args} />)
  .value();

export const ReactChildren = storyGen()
  .withArgTypes({ children: { table: { disable: true } } })
  .withRender((args) => (
    <InfoBox {...args}>
      <Text>Hashire sori yo kaze no you ni tsukimihara wo</Text>
      <Container width="full" orientation="horizontal" spacing="normal" gap wrap>
        <InlineButton>PADORU</InlineButton>
        <InlineButton>PADORU</InlineButton>
      </Container>
    </InfoBox>
  ))
  .value();
