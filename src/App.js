import { useEffect, useState } from 'react';

//styles
import './App.css';

//components
import Header from './components/header/Header';
import Main from './components/main/root/Main';
import Services from './components/services/root/Services';
import About from './components/about/root/About';
import Comments from './components/comments/Comments';
import Blogs from './components/blogs/root/Blogs';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
})
 
  return (  
    <div>
       {
          (loader) ? <Loader /> : <>
                                    <Header />
                                    <Main />
                                    <Services />
                                    <About />
                                    <Comments />
                                    <Blogs />
                                    <Form />
                                    <Footer />
                                </>
       }
    </div>
  )
};

export default App;