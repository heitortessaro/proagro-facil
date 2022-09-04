import React from 'react';
import eventTypes from '../services/eventTypes';

export default function Select() {
  return (
    <div className="w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-state"
      >
        Evento Ocorrido
        <select
          className="
            block
            appearance-none
            w-full
            bg-gray-200 border
            border-gray-200
            text-gray-700
            py-3
            px-4
            pr-8
            rounded
            leading-tight
            focus:outline-none
            focus:bg-white focus:border-gray-500"
          id="grid-state"
        >
          {eventTypes.map((e) => <option key={ e }>{e}</option>)}
        </select>
      </label>
    </div>
  );
}
