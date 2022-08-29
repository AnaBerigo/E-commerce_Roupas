const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
            <img src="images/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="pesquisar marca, produto">
                    <button class="search-btn">buscar</button>
                </div>
                <a href="#"><img src="images/user.png" alt=""></a>
                <a href="#"><img src="images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">início</a></li>
            <li class="link-item"><a href="#" class="link">feminino</a></li>
            <li class="link-item"><a href="#" class="link">masculino</a></li>
            <li class="link-item"><a href="#" class="link">infantil</a></li>
            <li class="link-item"><a href="#" class="link">acessórios</a></li>
        </ul>`;
};

createNav();
