import { WebPlugin } from '@capacitor/core';
import { GetLatestPhotoPlugin } from './definitions';

export class GetLatestPhotoWeb extends WebPlugin implements GetLatestPhotoPlugin {
  constructor() {
    super({
      name: 'GetLatestPhoto',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const GetLatestPhoto = new GetLatestPhotoWeb();

export { GetLatestPhoto };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GetLatestPhoto);
