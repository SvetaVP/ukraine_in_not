import React from "react";
import "./styles/styles.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="logo-container col-sm-6">
              <a href="#" className="logo-wrapper">
                <img
                  src="./assets/logo.png"
                  className="logo"
                  alt="Logo der Wohltätigkeitsorganisation Ukraine in Not"
                />
              </a>
            </div>

            <nav className="col-sm-6">
              <ul className="row">
                <li className="nav-item-wrap">
                  <a href="#">Home</a>
                </li>
                <li className="nav-item-wrap">
                  <a href="#">Über uns</a>
                </li>
                <li className="nav-item-wrap">
                  <a href="#">Projekte</a>
                </li>
                <li className="nav-item-wrap">
                  <a href="#">Kontakte</a>
                </li>
                <li className="nav-item-wrap">
                  <a href="#">Spenden</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="header-content">
          <div className="header-content-text-wrapper">
            <div className="header-content-text">
              <h1>Hände reichen, Herzen öffnen, gemeinsam helfen</h1>
              <a href="#" className="btn btn-primary">
                Spenden
              </a>
            </div>
          </div>

          <div className="header-content-img-wrapper">
            <img src="./assets/header-img.jpg" alt="" />
          </div>
        </div>
      </header>
      <main className="container">
        <section className="row activity">
          <div className="col col-sm-4">
            <a href="" className="card card-vertical">
              <h3>Projekte:</h3>
              <div className="img-wrapper">
                <img src="./assets/projects.jpg" alt="" />
              </div>
              <button className="btn btn-secondary btn-thin card-btn">Weiterlesen</button>
            </a>
          </div>

          <div className="col col-sm-8 activity-cards">
            <a href="" className="card">
              <div className="img-wrapper-horizontal">
                <img src="./assets/geschichte.jpg" alt="" />
              </div>

              <div>
                <h3>Unsere Geschichte:</h3>
                <div>
                  <div>
                    Die Visionäre hinter unserer Mission. Erfahren Sie mehr über
                    unsere Gründer und die Geschichte unserer Organisation.
                  </div>
                  <button className="btn btn-secondary btn-thin card-btn">Weiterlesen</button>
                </div>
              </div>
            </a>
            <a href="" className="card">
              <div className="img-wrapper-horizontal">
                <img src="./assets/news.jpg" alt="" />
              </div>
              <div>
                <h3>Bleiben Sie informiert:</h3>
                <div>
                  <div>
                    Entdecken Sie die neuesten Updates und Geschichten aus unserer
                    Gemeinschaft.
                  </div>
                  <button className="btn btn-secondary btn-thin card-btn">Weiterlesen</button>
                </div>
              </div>
            </a>
            <a href="" className="card">
              <div className="img-wrapper-horizontal">
                <img src="./assets/partner.jpg" alt="" />
              </div>
              <div>
                <h3>Gemeinsam stark:</h3>
                <div>
                  <div>
                    Entdecken Sie unsere engagierten Partner, die uns bei unserer
                    Mission unterstützen.
                  </div>
                  <button className="btn btn-secondary btn-thin card-btn">Weiterlesen</button>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="row help">
          <div className="col col-sm-9 help-text-wrapper">
            <div>
              <strong>Jeder <span>kann helfen.</span></strong> 
              <p>
                Jede einzelne Spende ist von unschätzbarem Wert
                und bringt ein Stück Wärme und Hoffnung in die Häuser der vom Krieg
                betroffenen Menschen. Gemeinsam können wir das Leben derer, die
                alles verloren haben, ein Stück besser machen. Ihre Unterstützung
                zählt - lassen Sie uns zusammen Hoffnung schenken.
              </p>
            </div>
            <a href="#" className="btn btn-secondary">Spenden</a>
          </div>
          <div className="col col-sm-3">
            <img src="./assets/jeder_kann_helfen.jpg" alt="" />
          </div>
        </section>
        <section className="row">
          <div>Lorem, ipsum dolor.</div>
          <div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              Satzung
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              Freistellungsbescheid
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              Impressum
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              Datenschutz
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              Pressetext
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          Ukreine in not
          <div>
            Seit 2022 stehen wir an der Seite der Ukraine und helfen mit ganzem
            Herzen
          </div>
        </div>
        Kontakte
        <div>Copyright © 2023 Ukraine in Not</div>
      </footer>
    </div>
  );
}

export default App;
