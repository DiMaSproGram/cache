// import logo from '../logo.svg';
// import './App.css';
import React from 'react'
// require('./App.css');

const App = () => {

  // useEffect(() => {
  //
  //   const html = ReactDOMServer.renderToString(<App />);
  //   const robots = isRobot && "noindex, nofollow";
  //   const htmlContent = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="idth=device-width, initial-scale=1/>
  //       <link rel="shortcut icon" href="../public/logo192.png" />
  //       <meta id="robots" content=${robots} />
  //       <meta name="description" content="Some description." />
  //       <title>Luma</title>
  //     </head>
  //     <body>
  //       <div id="root">
  //         <p>${html}</p>
  //       </div>
  //     </body>
  //     </html>
  //   `;
  //   // axios.post("http://localhost:3030/save",{
  //   //   html: htmlContent
  //   // }).then((res) => {
  //   //   console.log("ok")
  //   // });
  //   download(htmlContent)
  // }, []);
  // const isRobot = false;

  return (
    <div className="App">
      <header className="AppHeader" style={{backgroundColor: "#282c34"}}>
        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


