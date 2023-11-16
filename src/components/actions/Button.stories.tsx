import { metaGen, storyGen } from "../../storybook_utils";
import { Button } from "@components/actions";
import { Container } from "@components/wrappers";

const meta = metaGen<typeof Button>({ component: Button })
  .withDecorators((story) => (
    <Container orientation="vertical" spacing="2rem" gap padding selfAlign="center" height="full" width="full">
      {story()}
    </Container>
  ))
  .withTextChildren("Press me to win 1 million euros")
  .withArgs({ color: "blue" })
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
  .withRender(({ subText, ...args }) => <Button subText={subText || undefined} {...args} />)
  .value();

export const SubText = storyGen()
  .withArgTypes({ subText: { table: { disable: true } } })
  .withArgs({ subText: "A random person will die" })
  .withRender(({ subText, ...args }) => <Button subText={subText || undefined} {...args} />)
  .value();

export const Secondary = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withArgs({ secondary: true })
  .withRender(({ subText, ...args }) => <Button subText={subText || undefined} {...args} />)
  .value();

export const SecondaryWithSubText = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ secondary: true, subText: "A random person will die" })
  .withRender(({ subText, ...args }) => <Button subText={subText || undefined} {...args} />)
  .value();

export const Disabled = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } } })
  .withArgs({ disabled: true })
  .withRender(({ subText, ...args }) => <Button subText={subText || undefined} {...args} />)
  .value();

export const DisabledWithSubText = storyGen()
  .withArgTypes({ disabled: { table: { disable: true } }, subText: { table: { disable: true } } })
  .withArgs({ disabled: true, subText: "A random person will die" })
  .withRender((args) => <Button {...args} />)
  .value();

export const WrappedInZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Button subText={subText || undefined} {...args} />
      <Button subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const SecondaryWrappedInZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Button secondary subText={subText || undefined} {...args} />
      <Button secondary subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const WrappedInVerticalZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="30rem" orientation="vertical" spacing="normal" padding gap wrap>
      <Button subText={subText || undefined} {...args} />
      <Button subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const SecondaryWrappedInVerticalZone = storyGen()
  .withArgTypes({ secondary: { table: { disable: true } } })
  .withRender(({ subText, ...args }) => (
    <Container width="30rem" orientation="vertical" spacing="normal" padding gap wrap>
      <Button secondary subText={subText || undefined} {...args} />
      <Button secondary subText={subText || undefined} {...args} />
    </Container>
  ))
  .value();

export const AllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } }, secondary: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Button {...args} color="default" />
      <Button {...args} color="blue" />
      <Button {...args} color="green" />
      <Button {...args} color="orange" />
      <Button {...args} color="red" />
      <Button {...args} color="purple" />
      <Button {...args} color="gold" />
    </Container>
  ))
  .value();

export const SecondaryAllColors = storyGen()
  .withArgTypes({ color: { table: { disable: true } }, secondary: { table: { disable: true } } })
  .withRender((args) => (
    <Container width="40rem" orientation="horizontal" spacing="normal" padding gap wrap>
      <Button secondary {...args} color="default" />
      <Button secondary {...args} color="blue" />
      <Button secondary {...args} color="green" />
      <Button secondary {...args} color="orange" />
      <Button secondary {...args} color="red" />
      <Button secondary {...args} color="purple" />
      <Button secondary {...args} color="gold" />
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
      <Button {...args} color="default" />
      <Button {...args} color="blue" />
      <Button {...args} color="green" />
      <Button {...args} color="orange" />
      <Button {...args} color="red" />
      <Button {...args} color="purple" />
      <Button {...args} color="gold" />
    </Container>
  ))
  .value();
