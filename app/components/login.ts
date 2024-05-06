/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/login-form.ts

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import type { IAuthService } from 'front-vocab/services/auth';
import { client } from 'front-vocab/utils/axios';
import type { UserLoginData } from 'front-vocab/types';

export default class LoginFormComponent extends Component {
  @service auth!: IAuthService;
  @service router!: any;

  @tracked user: UserLoginData = {
    password: '',
    email: '',
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
  async login(event: Event) {
    event.preventDefault();

    const authData = await client
      .post('auth/sign-in', this.user)
      .then((res) => res.data);

    this.auth.storeToken(authData.access_token);
    this.router.transitionTo('vocab');
  }
}
