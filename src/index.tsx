import * as React from "react"
import ReactDOM from "react-dom"

const App: React.FC = () => {

  const [showModal, setShowModal] = React.useState(false)

  function hideAddress() {
    // window.scrollTo(0, 100)
    // don't know how to hide address yet
  }

  return (
    <div className="wrapper">
      <div className="menu">
        {new Array(50).fill("MENU").map((d, key) => <p key={key}>{d}</p>)}
      </div>
      <div className="content">
        <button onClick={() => setShowModal(true)}>MODAL</button>
        <button onClick={hideAddress}>HIDE</button>
        {new Array(50).fill("CONTENT").map((d, key) => <p key={key}>{d}</p>)}
      </div>
      {showModal &&
        <div className="modal">
          <button className="close" onClick={() => setShowModal(false)}>X</button>
          {new Array(50).fill("MODAL").map((d, key) => <p key={key}>{d}</p>)}
        </div>}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
