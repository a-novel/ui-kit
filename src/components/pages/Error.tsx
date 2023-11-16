import errorLottie from "@assets/lottie/error.json";
import notFoundLottie from "@assets/lottie/not-found.json";

import { ReactNode, forwardRef } from "react";

import { Page, Section } from "@components/layouts";
import { Container, Icon, Text, TextHeading } from "@components/wrappers";
import { Player } from "@lottiefiles/react-lottie-player";

export interface ErrorPageProps {
  /**
   * <span style="color: #32adff;">Alternative icon component to be displayed on the page.</span>
   *
   * You can use this component with lottie icons. To ensure compatibility, make sure the following property is present
   * on the lottie player: <span style="color: #ff9300;">rendererSettings={{ viewBoxOnly: true }}</span>.
   */
  icon?: ReactNode;
  /**
   * <span style="color: #32adff;">Title of the page.</span>
   *
   * It should be a short text explaining immediately why the user is seeing this page.
   */
  title: ReactNode;
  /**
   * <span style="color: #32adff;">Content of the page.</span>
   *
   * Expand the title to clarify things for the user, and what actions it should take.
   */
  content: ReactNode;
}

/**
 * <span style="color: #32adff;">A page to display when an error occurs.</span>
 *
 * This component is designed to be used as part of NextJS error handling. Since it uses a
 * <span style="color: #ffd600;">{@link Page}</span> component as a wrapper, you can also integrate it inside an
 * existing layout.
 */
export const ErrorPage = forwardRef<HTMLDivElement, ErrorPageProps>(function ErrorPage(
  { icon, title, content },
  externalRef,
) {
  return (
    <Page main ref={externalRef}>
      <Section fullScreen style={{ gap: "1rem", padding: "1rem" }}>
        <Container orientation="horizontal" selfAlign="center" width="full">
          <Icon scalingMethod="horizontal" scale={10}>
            {icon ?? <Player autoplay loop src={errorLottie} rendererSettings={{ viewBoxOnly: true }} />}
          </Icon>
        </Container>
        <Container orientation="vertical" width="full">
          <TextHeading level={1} scale={1.2} color="red" align="center" style={{ width: "100%" }}>
            {title}
          </TextHeading>
          <Text align="center" style={{ width: "100%" }}>
            {content}
          </Text>
        </Container>
      </Section>
    </Page>
  );
});

/**
 * <span style="color: #32adff;">A page to display when a not-found error occurs.</span>
 *
 * This component is designed to be used as part of NextJS error handling. Since it uses a
 * <span style="color: #ffd600;">{@link Page}</span> component as a wrapper, you can also integrate it inside an
 * existing layout.
 */
export const NotFoundPage = forwardRef<HTMLDivElement, ErrorPageProps>(function NotFoundPage(
  { icon, title, content },
  externalRef,
) {
  return (
    <ErrorPage
      ref={externalRef}
      icon={icon ?? <Player autoplay loop src={notFoundLottie} rendererSettings={{ viewBoxOnly: true }} />}
      title={title}
      content={content}
    />
  );
});
