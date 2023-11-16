import loadingLottie from "@assets/lottie/loader.json";

import { ReactNode, forwardRef } from "react";

import { Page, Section } from "@components/layouts";
import { Container, Icon, Text } from "@components/wrappers";
import { Player } from "@lottiefiles/react-lottie-player";

export interface LoadingPageProps {
  /**
   * <span style="color: #32adff;">Alternative icon component to be displayed on the page.</span>
   *
   * You can use this component with lottie icons. To ensure compatibility, make sure the following property is present
   * on the lottie player: <span style="color: #ff9300;">rendererSettings={{ viewBoxOnly: true }}</span>.
   */
  icon?: ReactNode;
  /**
   * <span style="color: #32adff;">Content of the page.</span>
   *
   * Explain what is loading to the user.
   */
  content: ReactNode;
}

/**
 * <span style="color: #32adff;">A page to display while loading.</span>
 *
 * This component is designed to be used as part of NextJS loader handling. Since it uses a
 * <span style="color: #ffd600;">{@link Page}</span> component as a wrapper, you can also integrate it inside an
 * existing layout.
 */
export const LoadingPage = forwardRef<HTMLDivElement, LoadingPageProps>(function ErrorPage(
  { icon, content },
  externalRef,
) {
  return (
    <Page main ref={externalRef}>
      <Section fullScreen style={{ gap: "1rem", padding: "1rem" }}>
        <Container orientation="horizontal" selfAlign="center" width="full">
          <Icon scalingMethod="horizontal" scale={10}>
            {icon ?? <Player autoplay loop src={loadingLottie} rendererSettings={{ viewBoxOnly: true }} />}
          </Icon>
        </Container>
        <Container orientation="horizontal" selfAlign="center" width="full">
          <Text visibility="secondary" align="center">
            {content}
          </Text>
        </Container>
      </Section>
    </Page>
  );
});
