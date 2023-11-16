import { metaGen, storyGen } from "../../storybook_utils";
import { NavButton } from "@components/actions";
import { Container } from "@components/wrappers";

const meta = metaGen<typeof NavButton>({ component: NavButton })
  .withDecorators((story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
        height: "100%",
      }}
    >
      {story()}
    </div>
  ))
  .withTextChildren("Press me to win 1 million euros")
  .withColorSelector(false)
  .withArgTypes({
    disabled: {
      control: "boolean",
    },
    subText: {
      control: "text",
    },
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender(({ subText, ...args }) => <NavButton subText={subText || undefined} {...args} />)
  .value();

export const SubText = storyGen()
  .withArgTypes({ subText: { table: { disable: true } } })
  .withArgs({ subText: "A random person will die" })
  .withRender(({ subText, ...args }) => <NavButton subText={subText || undefined} {...args} />)
  .value();

export const Disabled = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } } })
  .withArgs({ disabled: true })
  .withRender(({ subText, ...args }) => <NavButton subText={subText || undefined} {...args} />)
  .value();

export const DisabledWithSubText = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ disabled: true, subText: "A random person will die" })
  .withRender((args) => <NavButton {...args} />)
  .value();

export const WrappedInZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavButton subText={subText || undefined} {...args} />
      <NavButton subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const WrappedInVerticalZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="30rem" orientation="vertical" spacing="normal" padding gap wrap>
      <NavButton subText={subText || undefined} {...args} />
      <NavButton subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } }, secondary: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavButton {...args} color="default" />
      <NavButton {...args} color="blue" />
      <NavButton {...args} color="green" />
      <NavButton {...args} color="orange" />
      <NavButton {...args} color="red" />
      <NavButton {...args} color="purple" />
      <NavButton {...args} color="gold" />
    </Container>
  ))
  .value();

export const AllColorsActive = storyGen()
  .withArgTypes({
    color: { table: { disable: true } },
    secondary: { table: { disable: true } },
    active: { table: { disable: true } },
  })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavButton {...args} active color="default" />
      <NavButton {...args} active color="blue" />
      <NavButton {...args} active color="green" />
      <NavButton {...args} active color="orange" />
      <NavButton {...args} active color="red" />
      <NavButton {...args} active color="purple" />
      <NavButton {...args} active color="gold" />
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
      <NavButton {...args} color="default" />
      <NavButton {...args} color="blue" />
      <NavButton {...args} color="green" />
      <NavButton {...args} color="orange" />
      <NavButton {...args} color="red" />
      <NavButton {...args} color="purple" />
      <NavButton {...args} color="gold" />
    </Container>
  ))
  .value();

export const AllColorsActiveWithSubText = storyGen()
  .withArgTypes({
    color: { table: { disable: true } },
    subText: { table: { disable: true } },
    children: { table: { disable: true } },
    active: { table: { disable: true } },
  })
  .withArgs({ subText: "A random person will die" })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavButton {...args} active color="default" />
      <NavButton {...args} active color="blue" />
      <NavButton {...args} active color="green" />
      <NavButton {...args} active color="orange" />
      <NavButton {...args} active color="red" />
      <NavButton {...args} active color="purple" />
      <NavButton {...args} active color="gold" />
    </Container>
  ))
  .value();
