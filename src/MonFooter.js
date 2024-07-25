import React from 'react';

function MonFooter({ prenom, nom, formation }) {
    return (
    <footer className="bg-gray-400 text-black p-4 text-xl">
        <p>{prenom} {nom} | Formation : {formation}</p>
    </footer>
    );
}

export default MonFooter;