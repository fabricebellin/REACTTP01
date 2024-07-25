import React from 'react';

function MonFooter({ nom, prenom, session }) {
    return (
    <footer className="bg-gray-400 text-black p-4 text-xl">
        <p>{nom} {prenom} - Session: {session}</p>
    </footer>
    );
}

export default MonFooter;