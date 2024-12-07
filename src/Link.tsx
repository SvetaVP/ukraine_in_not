import React, { Component } from 'react';

// Определение типов пропсов
interface LinkProps {
  href: string;
  target?: string;
  text: string;
}

// Классовый компонент Link с дефолтным значением для target
class Link extends Component<LinkProps> {
  static defaultProps = {
    target: '_self'
  };

  render() {
    const { href, target, text } = this.props;
    return (
      <a href={href} target={target}>
        {text}
      </a>
    );
  }
}