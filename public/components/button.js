const template = document.createElement("template");

template.innerHTML = `
<style>
.button {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  padding: 0.75em 1.125em; /* 0.75em = 12px et 1.125em = 18px */
  border: transparent;
  border-radius: 6px;
  background-color: rgba(69, 87, 122, 1);
  color: #fff;
}

.button-icon {
  font-size: 1.375rem; /* 22px / body font-size (16px) */
}

.button-text {
  font-size: 1.375rem; /* 22px / body font-size (16px) */
}
.button:hover{
  background-color: rgba(69, 87, 122, 0.5)
}
</style>
<button class="button" type="submit">
</button>
`;

class Button extends HTMLElement{
  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.button = this.shadowRoot.querySelector('.button')
    this.button.innerHTML = this.getAttribute('label')
  }

  connectedCallback() {
    this.addEventListener("click", e => {
      e.preventDefault();
      this.closest("form").submit()
    });
  }


}

customElements.define("button-component", Button);