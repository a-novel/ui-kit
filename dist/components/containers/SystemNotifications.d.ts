import { ReactNode } from "react";
import { SystemNotificationContextDefault, SystemNotification as SystemNotificationData } from "../../contexts";
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
export declare const SystemNotification: import("react").ForwardRefExoticComponent<SystemNotificationProps & import("react").RefAttributes<any>>;
/**
 * <span style="color: #32adff;">Display multiple notifications.</span>
 *
 * Wrapper for multiple notifications.
 */
export declare const SystemNotificationsList: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
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
export declare const SystemNotificationsCategory: import("react").ForwardRefExoticComponent<SystemNotificationsCategoryProps & import("react").RefAttributes<HTMLDivElement>>;
export interface SystemNotificationsPlaceholderProps {
    placeholderText: ReactNode;
}
export interface SystemNotificationsMenuProps {
}
export declare const SystemNotificationsMenu: import("react").ForwardRefExoticComponent<SystemNotificationsMenuProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SystemNotifications.d.ts.map