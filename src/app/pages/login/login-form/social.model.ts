export interface SocialLink {
    readonly id: string;
    readonly href: string;
    readonly iconUrl: string;
    readonly hint: string;
    readonly onClick: Function;
}