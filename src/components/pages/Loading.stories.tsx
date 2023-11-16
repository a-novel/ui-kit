import Pikachu from "@assets/icons/demo/pikachu.svg";

import { metaGen, storyGen } from "../../storybook_utils";
import { LoadingPage } from "@components/pages";
import { IFrame } from "@components/wrappers";

const meta = metaGen<typeof LoadingPage>({ component: LoadingPage })
  .withDecorators((Story) => <IFrame style={{ width: "100%", height: "50vh" }}>{Story()}</IFrame>)
  .withArgTypes({
    content: {
      control: "text",
    },
  })
  .withChildrenSelector({
    argName: "icon",
    elements: { Default: undefined, Pikachu: <Pikachu /> },
    defaultValue: "Default",
  })
  .withArgs({
    content: "Please be patient, we'll be ready soon !",
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((args) => <LoadingPage {...args} />)
  .value();

export const CustomIcon = storyGen()
  .withArgs({
    icon: <Pikachu />,
  })
  .withRender((args) => <LoadingPage {...args} />)
  .value();
