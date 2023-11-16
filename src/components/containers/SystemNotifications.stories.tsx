import NoSignalIcon from "@assets/icons/monochrome/no-signal.svg";

import { metaGen, storyGen } from "../../storybook_utils";
import { Button } from "@components/actions";
import { SystemNotification, SystemNotificationsList } from "@components/containers";
import { Separator } from "@components/layouts";
import { Container, IFrame, Text } from "@components/wrappers";

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus a libero euismod, a 
egestas lorem aliquam. Cras a urna condimentum, scelerisque justo id, scelerisque metus. Etiam interdum, ante in 
suscipit condimentum, lacus libero aliquet est, sed facilisis lorem orci at magna. Vivamus nulla ante, tempus nec 
dapibus sed, commodo id magna. Quisque tempus ut augue a sodales. Suspendisse eu consectetur tortor, nec congue sem. 
Proin imperdiet lacus nisi, ut placerat ligula fermentum vel. Pellentesque ut mattis lorem. Duis tincidunt neque vitae 
urna ultrices consequat. Aenean vel nisl eget neque vulputate placerat. Sed ultricies suscipit tristique. Ut rutrum 
pharetra euismod. Ut in ultricies turpis. Maecenas aliquam purus nec ligula porttitor, id venenatis lorem placerat.`;

const meta = metaGen({ component: SystemNotification })
  .withDecorators((Story) => (
    <IFrame style={{ width: "100%", height: "50vh" }}>
      <div id="modals" data-portal="true" />
      <SystemNotificationsList style={{ width: "22rem", margin: "auto" }}>{Story()}</SystemNotificationsList>
    </IFrame>
  ))
  .withArgTypes({
    notification: {
      control: false,
    },
  })
  .withArgs({
    notification: {
      meta: {
        color: "blue",
      },
      context: {
        icon: <NoSignalIcon />,
        title: "What happened ?",
        content: "Well, he took his gun like this, and...",
        modal: {
          title: "I am here to explain everything",
          children: (
            <>
              <Text>{LoremIpsum}</Text>
              <Separator orientation="vertical" size={1} />
              <Container orientation="horizontal" spacing="normal" padding gap wrap>
                <Button align="center" secondary color="blue">
                  Confirm
                </Button>
                <Button align="center" secondary color="red">
                  Cancel
                </Button>
              </Container>
            </>
          ),
        },
      },
    },
  })
  .value();

export default meta;

export const Primary = storyGen()
  .withRender((args) => <SystemNotification {...args} />)
  .value();

export const LongContent = storyGen()
  .withArgTypes({
    "notification.context.title": {
      control: false,
    },
    "notification.context.content": {
      control: false,
    },
  })
  .withArgs({
    notification: {
      meta: {
        color: "blue",
      },
      context: {
        icon: <NoSignalIcon />,
        title: LoremIpsum,
        content: LoremIpsum,
      },
    },
  })
  .withRender((args) => <SystemNotification {...args} />)
  .value();

export const AllColors = storyGen()
  .withArgTypes({
    "notification.meta.color": {
      control: false,
    },
  })
  .withRender((args) => (
    <>
      <SystemNotification notification={{ ...args.notification, meta: { ...args.notification.meta, color: "blue" } }} />
      <SystemNotification
        notification={{ ...args.notification, meta: { ...args.notification.meta, color: "green" } }}
      />
      <SystemNotification
        notification={{ ...args.notification, meta: { ...args.notification.meta, color: "orange" } }}
      />
      <SystemNotification notification={{ ...args.notification, meta: { ...args.notification.meta, color: "red" } }} />
      <SystemNotification
        notification={{ ...args.notification, meta: { ...args.notification.meta, color: "purple" } }}
      />
      <SystemNotification notification={{ ...args.notification, meta: { ...args.notification.meta, color: "gold" } }} />
    </>
  ))
  .value();
