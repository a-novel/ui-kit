import { metaGen, storyGen } from "../../storybook_utils";
import { NavLink } from "@components/actions";
import { Container } from "@components/wrappers";

const meta = metaGen<typeof NavLink>({ component: NavLink })
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
  .withArgs({ href: "https://www.agoradesecrivains.fr" })
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
  .withRender(({ subText, ...args }) => <NavLink subText={subText || undefined} {...args} />)
  .value();

export const SubText = storyGen()
  .withArgTypes({ subText: { table: { disable: true } } })
  .withArgs({ subText: "A random person will die" })
  .withRender(({ subText, ...args }) => <NavLink subText={subText || undefined} {...args} />)
  .value();

export const Disabled = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } } })
  .withArgs({ disabled: true })
  .withRender(({ subText, ...args }) => <NavLink subText={subText || undefined} {...args} />)
  .value();

export const DisabledWithSubText = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ disabled: true, subText: "A random person will die" })
  .withRender((args) => <NavLink {...args} />)
  .value();

export const Active = storyGen()
  .withArgTypes({ active: { table: { disable: true } } })
  .withArgs({ active: true })
  .withRender(({ subText, ...args }) => <NavLink subText={subText || undefined} {...args} />)
  .value();

export const ActiveWithSubText = storyGen()
  .withArgTypes({ active: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ active: true, subText: "A random person will die" })
  .withRender((args) => <NavLink {...args} />)
  .value();

export const WrappedInZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavLink subText={subText || undefined} {...args} />
      <NavLink subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const WrappedInVerticalZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="30rem" orientation="vertical" spacing="normal" padding gap wrap>
      <NavLink subText={subText || undefined} {...args} />
      <NavLink subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } }, secondary: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavLink {...args} color="default" />
      <NavLink {...args} color="blue" />
      <NavLink {...args} color="green" />
      <NavLink {...args} color="orange" />
      <NavLink {...args} color="red" />
      <NavLink {...args} color="purple" />
      <NavLink {...args} color="gold" />
    </Container>
  ))
  .value();

export const AllColorsActive = storyGen()
  .withArgTypes({
    active: { table: { disable: true } },
    color: { table: { disable: true } },
    secondary: { table: { disable: true } },
  })
  .withArgs({ active: true })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavLink {...args} color="default" />
      <NavLink {...args} color="blue" />
      <NavLink {...args} color="green" />
      <NavLink {...args} color="orange" />
      <NavLink {...args} color="red" />
      <NavLink {...args} color="purple" />
      <NavLink {...args} color="gold" />
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
      <NavLink {...args} color="default" />
      <NavLink {...args} color="blue" />
      <NavLink {...args} color="green" />
      <NavLink {...args} color="orange" />
      <NavLink {...args} color="red" />
      <NavLink {...args} color="purple" />
      <NavLink {...args} color="gold" />
    </Container>
  ))
  .value();

export const AllColorsActiveWithSubText = storyGen()
  .withArgTypes({
    active: { table: { disable: true } },
    color: { table: { disable: true } },
    subText: { table: { disable: true } },
    children: { table: { disable: true } },
  })
  .withArgs({ subText: "A random person will die", active: true })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <NavLink {...args} color="default" />
      <NavLink {...args} color="blue" />
      <NavLink {...args} color="green" />
      <NavLink {...args} color="orange" />
      <NavLink {...args} color="red" />
      <NavLink {...args} color="purple" />
      <NavLink {...args} color="gold" />
    </Container>
  ))
  .value();
