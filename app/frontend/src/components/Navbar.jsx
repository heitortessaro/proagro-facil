import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="
        w-full
        h-[60px]
        flex
        justify-between
        items-center
        mx-auto
        px-10
        py-2
        lg:px-32
        "
    >
      <div>
        <img className="w-16" src="https://softfocus.com.br/wp-content/themes/softfocus/imagens/softfocus.svg" alt="softfocus" />
      </div>
      <h1 className="text-2xl font-bold">Proagro Fácil</h1>
      <ul className="flex space-x-6 items-center">
        <li>
          <a href="/">Cadastro/Atualização</a>
        </li>
        <li>
          <a href="/busca">Busca</a>
        </li>
        <li>
          <a href="/cadastro">Remoção</a>
        </li>
      </ul>
    </nav>
  );
}
