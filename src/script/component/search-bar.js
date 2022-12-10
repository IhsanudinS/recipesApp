class SearchBar extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render(){
    this.innerHTML = `
      <div class="search">
        <input type="text" placeholder="Search..." class="input" id="searchElement">
        <button type="submit" class="button" id="searchButtonElement">Q</button>
      </div>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);