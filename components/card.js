const template = document.createElement('template');
template.innerHTML = `
<style>
.card{
  width:544px ;
  height: 304px;
  
  background-size:cover;
  backdrop-filter:blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:5px;
}
.infos{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  height:100%;
  width : 100%;
  background :rgba(0,0,0,0.5);
  border: 1px solid ;
}
</style>
<div class="card">
<div class="infos">
  <h4> </h4>
  <p></p>
</div>
</div>`;

class CardEcoleImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h4').innerHTML = this.getAttribute('name');
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('localisation');
    this.shadowRoot.querySelector('.card').style.backgroundImage = `url(${this.getAttribute('background')})`;
  }
}

customElements.define("card-ecole-image", CardEcoleImage);
