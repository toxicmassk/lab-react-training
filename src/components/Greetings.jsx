const Greetings = (props) => {
  const { lang, children } = props;
  const getGreeting = (language) => {
    switch (language) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Ola';
    }
  };
  return (
    <div className="lang">
      <span>{getGreeting(lang) + ' ' + children}</span>
    </div>
  );
};

export default Greetings;
