import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      {/* اختبار مكون من Bootstrap */}
      <h1 className="text-center">Welcome to My React App with Bootstrap & Font Awesome!</h1>

      {/* استخدام زر من Bootstrap */}
      <button className="btn btn-primary btn-lg">
        <i className="fas fa-thumbs-up"></i> Like
      </button>
      <br /><br />
      
      {/* استخدام أيقونة من Font Awesome */}
      <div className="text-center">
        <i className="fab fa-react fa-5x"></i>
        <h2>Font Awesome Icon Test</h2>
      </div>

      {/* مكون آخر من Bootstrap */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">This is a simple card example using Bootstrap components.</p>
                <a href="#" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Another card example with Bootstrap styling.</p>
                <a href="#" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Bootstrap card layout with images and buttons.</p>
                <a href="#" className="btn btn-secondary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);
}

export default App;
