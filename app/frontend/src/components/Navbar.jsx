import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="
        max-w-[1000px]
        w-full
        flex
        justify-between
        items-center
        my-6
        "
    >
      <div>
        <img className="w-18" src="https://softfocus.com.br/wp-content/themes/softfocus/imagens/softfocus.svg" alt="softfocus" />
      </div>
      <h1 className="text-2xl font-bold self-center">Proagro Fácil</h1>
    </nav>
  );
}
