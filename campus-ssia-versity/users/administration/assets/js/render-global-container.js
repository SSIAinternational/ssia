class globalContainer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
    <style>
    </style>

    <div class="global-container">
        <slot></slot>
    </div>
        `;
  }
}

customElements.define("global-container", globalContainer);
