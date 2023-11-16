import css from "./SystemNotifications.module.css";

import NotificationsEmptyIcon from "@assets/icons/monochrome/notifications-off.svg";

import { ReactNode, forwardRef, useMemo, useState } from "react";
import { JSX } from "react/jsx-runtime";

import Link from "next/link";

import { Modal } from "@components/layouts";
import {
  SystemNotificationContextDefault,
  SystemNotification as SystemNotificationData,
  useSystemNotifications,
} from "@contexts";

import IntrinsicElements = JSX.IntrinsicElements;

export interface SystemNotificationProps {
  /**
   * <span style="color: #32adff;">Content of the notification.</span>
   *
   * This value is received from the context.
   */
  notification: SystemNotificationData<SystemNotificationContextDefault>;
}

/**
 * <span style="color: #32adff;">Display a single notification.</span>
 *
 * Display container for system notifications.
 */
export const SystemNotification = forwardRef<any, SystemNotificationProps>(function SystemNotification(
  { notification },
  externalRef,
) {
  const [openInfos, setOpenInfos] = useState(false);

  // Add special css theming when the notification can trigger an action.
  const isInteractive = notification.context.modal != null || notification.context.href != null;

  const wrapperClassname = `
    ${css.notificationContainer} 
    ${css[notification.meta.color]} 
    ${isInteractive ? css.interactive : ""}
  `;

  const content = (
    <>
      <div className={css.notificationIcon}>{notification.context.icon}</div>
      <div className={css.notificationText}>
        <div className={css.notificationTitle}>{notification.context.title}</div>
        <div className={css.notificationBody}>{notification.context.content}</div>
      </div>
    </>
  );

  if (notification.context.href != null) {
    return (
      <Link ref={externalRef} href={notification.context.href} className={wrapperClassname}>
        {content}
      </Link>
    );
  }

  return (
    <>
      <div
        ref={externalRef}
        onClick={notification.context.modal && (() => setOpenInfos(true))}
        className={wrapperClassname}
      >
        {content}
      </div>
      {notification.context.modal && (
        <Modal {...notification.context.modal} onClose={() => setOpenInfos(false)} opened={openInfos} />
      )}
    </>
  );
});

/**
 * <span style="color: #32adff;">Display multiple notifications.</span>
 *
 * Wrapper for multiple notifications.
 */
export const SystemNotificationsList = forwardRef<HTMLDivElement, IntrinsicElements["div"]>(function NotificationsList(
  { className, ...props },
  externalRef,
) {
  return <div ref={externalRef} className={`${css.notificationsList} ${className ?? ""}`} {...props} />;
});

export interface SystemNotificationsCategoryProps {
  notifications: Record<string, SystemNotificationData<SystemNotificationContextDefault>>;
  title: string;
}

/**
 * <span style="color: #32adff;">Display a category of notifications.</span>
 *
 * Expand the <span style="color: #ffd600;">{@link SystemNotificationsList notifications list}</span> with a title and
 * metadata.
 */
export const SystemNotificationsCategory = forwardRef<HTMLDivElement, SystemNotificationsCategoryProps>(
  function SystemNotificationsCategory({ notifications, title }, externalRef) {
    const notificationsCount = useMemo(() => Object.keys(notifications).length, [notifications]);
    const renderedNotifications = useMemo(
      () =>
        Object.entries(notifications).map(([key, notification]) => (
          <SystemNotification key={key} notification={notification} />
        )),
      [notifications],
    );

    if (notificationsCount === 0) return null;

    return (
      <div ref={externalRef} className={css.notificationsCategory}>
        <div className={css.notificationsCategoryTitle}>
          {title} - {notificationsCount}
        </div>
        <SystemNotificationsList>{renderedNotifications}</SystemNotificationsList>
      </div>
    );
  },
);

export interface SystemNotificationsPlaceholderProps {
  placeholderText: ReactNode;
}

const SystemNotificationsPlaceholder = forwardRef<HTMLDivElement, SystemNotificationsPlaceholderProps>(
  function NotificationsPlaceholder({ placeholderText }, externalRef) {
    return (
      <div ref={externalRef} className={css.notificationsContainerPlaceholder}>
        <div className={css.notificationsPlaceholderIcon}>
          <NotificationsEmptyIcon />
        </div>
        <div className={css.notificationsPlaceholderText}>{placeholderText}</div>
      </div>
    );
  },
);

export interface SystemNotificationsMenuProps {}

export const SystemNotificationsMenu = forwardRef<HTMLDivElement, SystemNotificationsMenuProps>(
  function SystemNotificationsMenu({}, externalRef) {
    const { notifications, updateNotification } = useSystemNotifications();

    return null;
  },
);
