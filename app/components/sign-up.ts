import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Language, type User } from 'front-vocab/types';
import { client } from 'front-vocab/utils/axios';
import { service } from '@ember/service';
import type { IAuthService } from 'front-vocab/services/auth';

export default class SignUpFormComponent extends Component {
  @service auth!: IAuthService;
  @service router;

  @tracked user: User = {
    username: '',
    password: '',
    email: '',
    language: Language.UA,
  };

  @action
  onChange(event: { target: HTMLInputElement }) {
    const { name, value } = event.target;
    this.user = {
      ...this.user,
      [name]: value,
    };
  }

  @action
  async signUp(event: Event) {
    event.preventDefault();

    const authData = await client
      .post('auth/sign-up', this.user)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    this.auth.storeToken(authData.access_token);
    this.router.transitionTo('vocab');
  }
}
