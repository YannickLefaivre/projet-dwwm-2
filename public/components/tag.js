const template = document.createElement('template');
template.innerHTML = 
`<style>
p{
text-align:center;
background-color: #2274A5;
color:white;
border-radius:5px;
padding:5px;
width: max-content;
}
</style>
<p> </p>`;
class Tag extends HTMLElement{
  constructor() {
    super(); 
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('label');
  }
}

customElements.define("tag-component", Tag);
// tag componant