import { metaGen, storyGen } from "../../storybook_utils";
import { InlineButton } from "@components/actions";
import { Container } from "@components/wrappers";

const meta = metaGen<typeof InlineButton>({ component: InlineButton })
  .withTextChildren("click me baby")
  .withColorSelector(false)
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <InlineButton {...args} />
    </Container>
  ))
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <InlineButton {...args} color="default" />
      <InlineButton {...args} color="blue" />
      <InlineButton {...args} color="green" />
      <InlineButton {...args} color="orange" />
      <InlineButton {...args} color="red" />
      <InlineButton {...args} color="purple" />
      <InlineButton {...args} color="gold" />
    </Container>
  ))
  .value();
