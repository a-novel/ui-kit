import { ReactNode } from "react";
import { Color } from "../components/common";
import { ModalProps } from "../components/layouts";
export interface SystemNotification<Context> {
    /**
     * <span style="color: #32adff;">Provide generic information about the notification.</span>
     */
    meta: SystemNotificationMetadata;
    /**
     * <span style="color: #32adff;">Provide the current state of the notification.</span>
     *
     * State is used for applying special display effects to the notification.
     */
    state: SystemNotificationState;
    /**
     * <span style="color: #32adff;">Provide the context of the notification.</span>
     *
     * Context is the data that will be used to display the notification. It is custom to each notification.
     */
    context: Context;
}
export interface SystemNotificationMetadata {
    /**
     * <span style="color: #32adff;">Mark the notification as important.</span>
     *
     * An important notification should use more aggressive delivery toward the user, as it may not miss it.
     */
    important?: boolean;
    /**
     * <span style="color: #32adff;">Provide the color of the notification.</span>
     *
     * Use different colors for different levels of importance.
     */
    color: Exclude<Color, "default">;
    /**
     * <span style="color: #32adff;">Provide the timeout after which the notification will be deleted.</span>
     *
     * Use this timeout to display smooth transitions when the notification is deleted.
     */
    deleteTimeout?: number;
}
export interface SystemNotificationState {
    /**
     * <span style="color: #32adff;">Mark the notification as being deleted.</span>
     *
     * This property is used to apply smooth transitions when the notification is deleted.
     */
    isDeleting: boolean;
}
export type UpdateNotificationAction<Context> = {
    method: "upsert";
    meta: SystemNotificationMetadata;
    context: Context;
} | {
    method: "delete";
};
export type NotificationUpdater<Context> = null | UpdateNotificationAction<Context> | ((key: string, previousNotification?: SystemNotification<Context>) => UpdateNotificationAction<Context> | null);
export interface SystemNotificationsContextType {
    notifications: Map<string, SystemNotification<SystemNotificationContextDefault>>;
    updateNotification: (key: string, updater: NotificationUpdater<SystemNotificationContextDefault>) => void;
}
export declare const SystemNotificationsContext: import("react").Context<SystemNotificationsContextType>;
export interface SystemNotificationsProviderProps {
    children: ReactNode;
}
export declare const SystemNotificationsProvider: ({ children }: SystemNotificationsProviderProps) => import("react").JSX.Element;
export declare const useSystemNotifications: () => SystemNotificationsContextType;
export interface SystemNotificationContextDefault {
    /**
     * <span style="color: #32adff;">Icon of the notification.</span>
     *
     * This is the required icon shown in the left part of the notification.
     */
    icon: ReactNode;
    /**
     * <span style="color: #32adff;">Title of the notification.</span>
     *
     * Should be short and catchy, instantly giving the user an idea of what the notification is about.
     */
    title: ReactNode;
    /**
     * <span style="color: #32adff;">Content of the notification.</span>
     *
     * Give a short description of the notification, to add more context. If you need a larger context, use the
     * notification modal property.
     */
    content: ReactNode;
    /**
     * <span style="color: #32adff;">Mark the notification as read.</span>
     *
     * A read notification should not be displayed again to the user.
     */
    read?: boolean;
    /**
     * <span style="color: #32adff;">Provide extra data to the notification.</span>
     */
    extra?: unknown;
    /**
     * <span style="color: #32adff;">Provide a modal to display when the notification is clicked.</span>
     *
     * This property should not be set together with the href property.
     */
    modal?: Pick<ModalProps, "children" | "title">;
    /**
     * <span style="color: #32adff;">Provide a link to redirect to when the notification is clicked.</span>
     *
     * This property should not be set together with the modal property.
     */
    href?: string;
}
//# sourceMappingURL=system-notification.d.ts.map