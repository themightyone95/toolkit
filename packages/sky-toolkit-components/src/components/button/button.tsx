import { Component, Prop } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'sky-button',
  styleUrl: 'button.scss'
})
export class SkyButton {

  @Prop() modifier: string = 'primary';
  @Prop() stateModifier: string;
  @Prop() content: string;
  @Prop() className: string;

  render() {
    const classNames = classnames(
      'c-btn',
      {
        [`c-btn--${this.modifier}`]: typeof this.modifier !== 'undefined'
      },
      this.className
    );

    return (
      <button class={classNames}>
        {this.content}
      </button>
    );
  }
}
