/* eslint-disable @typescript-eslint/no-explicit-any */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { client } from 'front-vocab/utils/axios';
import { service } from '@ember/service';

export default class YourComponentName extends Component {
  @tracked selectedTopic = null;
  @tracked selectedLevel = null;
  @service auth!: any;

  @action
  handleLevelClick(level: any) {
    this.selectedLevel = level;
  }

  @action
  handleTopicClick(topic: any) {
    this.selectedTopic = topic;
  }

  @action
  async compleatTopic(event: { target: HTMLInputElement }) {
    const { value, id: levelId } = event.target;

    await client
      .post(
        'user-progress',
        {
          topicId: Number(value),
          levelId: Number(levelId),
        },
        {
          headers: {
            Authorization: `Bearer ${this.auth.getToken()}`,
          },
        },
      )
      .catch((err) => console.log(err));
  }
}
