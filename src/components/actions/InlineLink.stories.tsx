import { metaGen, storyGen } from "../../storybook_utils";
import { InlineLink } from "@components/actions";
import { Container } from "@components/wrappers";

const meta = metaGen<typeof InlineLink>({
  component: InlineLink,
  parameters: {
    controls: { include: ["color", "href"] },
  },
})
  .withArgs({
    href: "https://www.agoradesecrivains.fr",
    target: "_blank",
  })
  .withArgTypes({
    href: { control: "text" },
  })
  .withTextChildren("click me baby")
  .withColorSelector(false)
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <InlineLink {...args} />
    </Container>
  ))
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <InlineLink {...args} color="default" />
      <InlineLink {...args} color="blue" />
      <InlineLink {...args} color="green" />
      <InlineLink {...args} color="orange" />
      <InlineLink {...args} color="red" />
      <InlineLink {...args} color="purple" />
      <InlineLink {...args} color="gold" />
    </Container>
  ))
  .value();
