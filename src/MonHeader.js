
import React from 'react';

function MonHeader() {
    return <header className="bg-gray-400 text-black p-4 text-xl">{new Date().toLocaleString('fr-FR')}</header>;
}

export default MonHeader;