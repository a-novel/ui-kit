import css from "./Modal.module.css";

import CloseIcon from "@assets/icons/monochrome/close.svg";

import { MouseEventHandler, ReactNode, Ref, forwardRef, useEffect, useMemo } from "react";

import { Container } from "@components/wrappers";
import { useWindow } from "@contexts";
import { useCaptureMessage } from "@hooks";
import { createPortal } from "react-dom";

export interface ModalProps {
  children: ReactNode;
  /**
   * <span style="color: #32adff;">Reference the container at the center of the page (not the wrapper).</span>
   */
  containerRef?: Ref<HTMLDivElement>;
  /**
   * <span style="color: #32adff;">Display the modal.</span>
   *
   * Set false to hide the modal, or true to show it.
   */
  opened: boolean;
  /**
   * <span style="color: #32adff;">Title of the modal.</span>
   */
  title: ReactNode;
  /**
   * <span style="color: #32adff;">Close the modal.</span>
   *
   * Use this action to set opened to false, along with other cleanup.
   */
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const noPortalError =
  "Could not find the modals portal in DOM tree. " +
  "This is likely a configuration mistake. " +
  "Make sure the root layout is declaring a div with the id 'modals'.";

/**
 * <span style="color: #32adff;">Show a modal over the application.</span>
 *
 * The modal requires a portal with the id <span style="color: #ff9300;">"modal"</span>, at the root of the application
 * (to avoid conflicts with z-index).
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { children, opened, containerRef, title, onClose },
  externalRef,
) {
  const { document } = useWindow();

  useEffect(() => {
    if (document == null) return;

    // Prevent background scrolling when the modal is opened.
    document.body.style.overflow = opened ? "hidden" : "";
  }, [opened, document]);

  const modalsPortal = useMemo(() => document?.getElementById("modals"), [document]);

  // This means the application is not properly configured. Don't display anything.
  useCaptureMessage(noPortalError, document != null && modalsPortal == null);
  if (modalsPortal == null) {
    return null;
  }

  return createPortal(
    <Container
      ref={externalRef}
      className={`${css.wrapper} ${opened ? css.opened : css.closed}`}
      zIndex={1000000}
      background="blurry"
      orientation="vertical"
      selfAlign="center"
    >
      <Container
        orientation="vertical"
        radius="normal"
        background="plain"
        border
        align="center"
        width={40}
        ref={containerRef}
        className={css.container}
      >
        <Container
          orientation="horizontal"
          width="full"
          radius="normal normal 0 0"
          selfAlign="space-between"
          className={css.header}
          zIndex={100}
          background="blurry"
        >
          <div className={css.headerTitle}>{title}</div>
          <button className={css.headerClose} onClick={onClose}>
            <CloseIcon />
          </button>
        </Container>
        <div className={css.modalContent}>{children}</div>
      </Container>
    </Container>,
    modalsPortal,
  );
});
