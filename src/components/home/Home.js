import React from "react";

const Home = () => {
    const backgroundImage = "url('/bemcuidar2.webp')";

    return (
        <div
            style={{
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '3em',
                color: 'white',
            }}
        >
            Bem Vindo ao Bem Cuidar!
        </div>
    );
};

export default Home;