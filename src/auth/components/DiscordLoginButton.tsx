const DiscordLoginButton = () => {
  const handleClickDiscord = (url: string) => {
    // URL de autorización de Discord
    // const authorizationUrl = 'https://discord.com/oauth2/authorize' +
    //   '?client_id=1216779662492041277' +
    //   '&redirect_uri=http://localhost:3000/api/auth' +
    //   '&response_type=token' +
    //   '&scope=guilds+identify';

    // const authorizationUrl = 'http://localhost:3000/api/auth'

    // Redirigir al usuario a Discord para iniciar sesión
    window.location.href = url;
  };

  return (
    <>
    <button onClick={() => handleClickDiscord('http://localhost:3000/api/auth/discord')}>
      Iniciar sesión con Discord
    </button>
    </>
  );
};

export default DiscordLoginButton;
