import { metaGen, storyGen } from "../../storybook_utils";
import { Link } from "@components/actions";
import { Container } from "@components/wrappers";

const meta = metaGen<typeof Link>({ component: Link })
  .withDecorators((story) => (
    <Container orientation="vertical" spacing="2rem" gap padding selfAlign="center" height="full" width="full">
      {story()}
    </Container>
  ))
  .withTextChildren("Press me to win 1 million euros")
  .withArgs({ color: "blue", href: "https://www.agoradesecrivains.fr" })
  .withColorSelector(false)
  .withArgTypes({
    disabled: {
      control: "boolean",
    },
    subText: {
      control: "text",
    },
    secondary: {
      control: "boolean",
    },
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender(({ subText, ...args }) => <Link subText={subText || undefined} {...args} />)
  .value();

export const SubText = storyGen()
  .withArgTypes({ subText: { table: { disable: true } } })
  .withArgs({ subText: "A random person will die" })
  .withRender(({ subText, ...args }) => <Link subText={subText || undefined} {...args} />)
  .value();

export const Secondary = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withArgs({ secondary: true })
  .withRender(({ subText, ...args }) => <Link subText={subText || undefined} {...args} />)
  .value();

export const SecondaryWithSubText = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ secondary: true, subText: "A random person will die" })
  .withRender(({ subText, ...args }) => <Link subText={subText || undefined} {...args} />)
  .value();

export const Disabled = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } } })
  .withArgs({ disabled: true })
  .withRender(({ subText, ...args }) => <Link subText={subText || undefined} {...args} />)
  .value();

export const DisabledWithSubText = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ disabled: true, subText: "A random person will die" })
  .withRender((args) => <Link {...args} />)
  .value();

export const WrappedInZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Link subText={subText || undefined} {...args} />
      <Link subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const SecondaryWrappedInZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Link secondary subText={subText || undefined} {...args} />
      <Link secondary subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const WrappedInVerticalZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="30rem" orientation="vertical" spacing="normal" padding gap wrap>
      <Link subText={subText || undefined} {...args} />
      <Link subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const SecondaryWrappedInVerticalZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="30rem" orientation="vertical" spacing="normal" padding gap wrap>
      <Link secondary subText={subText || undefined} {...args} />
      <Link secondary subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } }, secondary: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Link {...args} color="default" />
      <Link {...args} color="blue" />
      <Link {...args} color="green" />
      <Link {...args} color="orange" />
      <Link {...args} color="red" />
      <Link {...args} color="purple" />
      <Link {...args} color="gold" />
    </Container>
  ))
  .value();

export const SecondaryAllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } }, secondary: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Link secondary {...args} color="default" />
      <Link secondary {...args} color="blue" />
      <Link secondary {...args} color="green" />
      <Link secondary {...args} color="orange" />
      <Link secondary {...args} color="red" />
      <Link secondary {...args} color="purple" />
      <Link secondary {...args} color="gold" />
    </Container>
  ))
  .value();

export const AllColorsWithSubText = storyGen()
  .withArgTypes({
    color: { table: { disable: true } },
    subText: { table: { disable: true } },
    children: { table: { disable: true } },
  })
  .withArgs({ subText: "A random person will die" })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Link {...args} color="default" />
      <Link {...args} color="blue" />
      <Link {...args} color="green" />
      <Link {...args} color="orange" />
      <Link {...args} color="red" />
      <Link {...args} color="purple" />
      <Link {...args} color="gold" />
    </Container>
  ))
  .value();
