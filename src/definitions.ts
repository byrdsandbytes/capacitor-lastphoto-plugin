declare global  {
  interface PluginRegistry {
      GetLatestPhoto?: GetLatestPhoto;
  }
}

export interface GetLatestPhoto {
  getLastPhotoTaken(): Promise<any>;
}