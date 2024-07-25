import React from 'react';

function MonFooter({ prenom, nom, session }) {
    return (
    <footer className="bg-gray-400 text-black p-4 text-xl">
        <p>{nom} {nom} | {session}</p>
    </footer>
    );
}

export default MonFooter;