import DropDownIcon from "@assets/icons/monochrome/drop-down.svg";
import ForumIcon from "@assets/icons/monochrome/forum.svg";

import { metaGen, storyGen } from "../../storybook_utils";
import { DropDown } from "@components/actions/DropDown";
import { NavButton } from "@components/actions/NavButton";
import { Container, IFrame, Icon, Text } from "@components/wrappers";

const meta = metaGen<typeof DropDown>({ component: DropDown })
  .withDecorators((story) => (
    <IFrame style={{ width: "100%", height: "30rem" }}>
      <Container orientation="vertical" align="center" padding="2rem">
        {story()}
      </Container>
    </IFrame>
  ))
  .withChildrenSelector({
    elements: {
      Default: (
        <Icon scalingMethod="square" scale={1.2}>
          <DropDownIcon />
        </Icon>
      ),
      Alternative: (
        <Icon scalingMethod="square" scale={1.2}>
          <ForumIcon />
        </Icon>
      ),
    },
    defaultValue: "Default",
  })
  .withChildrenSelector({
    elements: {
      Default: (
        <Text style={{ width: "16rem", padding: "1rem", boxSizing: "border-box", textAlign: "center" }}>
          Lorem ipsum dolor sit amet
        </Text>
      ),
      Buttons: (
        <Container orientation="vertical" width="16rem" spacing="normal" gap padding>
          <NavButton align="center">First option</NavButton>
          <NavButton align="center">Second option</NavButton>
          <NavButton align="center" color="gold">
            For rich people
          </NavButton>
          <NavButton align="center" color="red">
            Don't do that
          </NavButton>
        </Container>
      ),
    },
    defaultValue: "Default",
    argName: "dropDownMenu",
  })
  .withArgTypes({
    float: {
      options: ["top left", "top right", "bottom left", "bottom right", undefined],
      control: "select",
    },
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((props) => <DropDown {...props} />)
  .value();
