export class KitchenConfiguratorElement extends HTMLElement {
  connectedCallback() {
    this.innerText = 'kitchen-configurator placeholder';
  }
}

export function defineKitchenConfiguratorElement() {
  if (!customElements.get('kitchen-configurator')) {
    customElements.define('kitchen-configurator', KitchenConfiguratorElement);
  }
}

