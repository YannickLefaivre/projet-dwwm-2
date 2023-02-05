const template = document.createElement('template');
template.innerHTML = `
<style>
.filter {
  /* rectangle */
  display: flex;
  align-items: center;
  height: 95px;
  width: 1683px;
  border-radius: 10px;
  margin: 23px auto;
  background: #F3F3F3;
  }
img {
  height: 33.33333206176758px;
  width: 45.83333206176758px;
  margin:29.08px;
  }
p{
  font-family: Inter;
  font-size: 22px;
  font-weight: 600;
  line-height: 19px;
}
</style>
<div class="filter">
<div>
  <p></p>
</div>
</div>
`
class filterElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('data');
    this.shadowRoot.querySelector('img').style.backgroundImage = `url(${this.getAttribute('background')})`;
  }
}

window.onload = function() {
  customElements.define("filter-el", filterElement)};