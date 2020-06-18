export interface YoutubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: string;
  snippet: Video;
}

export enum ItemKind {
  YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
  publishedAt: Date;
  channelId: ChannelID;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: ChannelTitle;
  playlistId: PlaylistID;
  position: number;
  resourceId: ResourceID;
}

export enum ChannelID {
  UCfhkGjoF4I8Y3NBX5WpF94Q = "UCfhkGjoF4I8y3nBX5wpF94Q",
}

export enum ChannelTitle {
  GolDNakama = "GolD Nakama",
}

export enum PlaylistID {
  UUfhkGjoF4I8Y3NBX5WpF94Q = "UUfhkGjoF4I8y3nBX5wpF94Q",
}

export interface ResourceID {
  kind: ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres?: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
