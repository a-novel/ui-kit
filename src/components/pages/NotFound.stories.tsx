import Pikachu from "@assets/icons/demo/pikachu.svg";

import { metaGen, storyGen } from "../../storybook_utils";
import { NotFoundPage } from "@components/pages";
import { IFrame } from "@components/wrappers";

const meta = metaGen<typeof NotFoundPage>({ component: NotFoundPage })
  .withDecorators((Story) => <IFrame style={{ width: "100%", height: "50vh" }}>{Story()}</IFrame>)
  .withArgTypes({
    title: {
      control: "text",
    },
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
    title: "A critical error occurred.",
    content: "Something went wrong. Please try again later.",
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((args) => <NotFoundPage {...args} />)
  .value();

export const CustomIcon = storyGen()
  .withArgs({
    icon: <Pikachu />,
  })
  .withRender((args) => <NotFoundPage {...args} />)
  .value();
