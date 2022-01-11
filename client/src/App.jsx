import {
  Loader,
  Welcome,
  Navbar,
  Footer,
  Transactions,
  Services,
} from './components';

const App = () => {
  return (
    <div className='min-h-screen bg-green'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
