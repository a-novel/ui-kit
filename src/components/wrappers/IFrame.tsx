import { DetailedHTMLProps, IframeHTMLAttributes, forwardRef, useEffect, useMemo, useState } from "react";

import { WindowProvider, useWindow } from "@contexts";
import { setRefs } from "@lib";
import { createPortal } from "react-dom";

/**
 * <span style="color: #32adff;">React iframe wrapper.</span>
 *
 * Allows to set the content of the iframe from React.
 */
export const IFrame = forwardRef<
  HTMLIFrameElement,
  DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>
>(function ({ children, style, ...props }, externalRef) {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const headNode = useMemo(() => contentRef?.contentWindow?.document?.head, [contentRef]);
  const mountNode = useMemo(() => contentRef?.contentWindow?.document?.body, [contentRef]);

  const { document } = useWindow();

  // Setup body.
  useEffect(() => {
    if (mountNode) {
      // Assign default styling.
      mountNode.style.margin = "0";
      mountNode.style.padding = "0";
      mountNode.style.minHeight = "100vh";
      mountNode.style.width = "100vw";
      mountNode.style.display = "flex";
      mountNode.style.flexDirection = "column";
    }
  }, [mountNode]);

  // Setup head.
  useEffect(() => {
    if (document == null) return;

    if (headNode) {
      // Inherit parent styles (like compiled css modules or local fonts).
      for (const style of Array.from(document.head.querySelectorAll("link"))) {
        headNode.appendChild(style.cloneNode(true));
      }
      for (const style of Array.from(document.head.querySelectorAll("style"))) {
        headNode.appendChild(style.cloneNode(true));
      }
    }
  }, [headNode, document]);

  return (
    <>
      <iframe
        {...props}
        style={{ border: "none", ...style }}
        ref={setRefs<HTMLIFrameElement>(setContentRef, externalRef)}
      />
      {mountNode
        ? createPortal(
            <WindowProvider window={contentRef!.contentWindow!} document={contentRef!.contentWindow!.document!}>
              {children}
            </WindowProvider>,
            mountNode,
          )
        : null}
    </>
  );
});
