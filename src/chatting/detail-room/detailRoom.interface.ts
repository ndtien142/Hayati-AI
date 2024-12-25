export interface IAttachment {
  type: string;
  url: string;
  isLocked?: boolean;
}

export interface IChatMessage {
  sender: string;
  timestamp: string;
  message: string;
  avatarUrl: string;
  isSender: boolean;
  attachment?: IAttachment;
}

export interface IChatroomInfo {
  title: string;
  subtitle: string;
  image: string;
  imageBackground: string;
}
