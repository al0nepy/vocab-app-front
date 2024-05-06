import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type { IAuthService } from 'front-vocab/services/auth';
import { client } from 'front-vocab/utils/axios';

export default class VocabRoute extends Route {
  @service auth!: IAuthService;

  async model() {
    return client
      .get('/levels', {
        headers: {
          Authorization: `Bearer ${this.auth.getToken()}`,
        },
      })
      .then((res) => res.data);
  }
}
