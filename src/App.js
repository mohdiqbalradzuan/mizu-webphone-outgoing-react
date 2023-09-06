// import logo from './logo.svg';
import * as FaIcons from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [callerId, setCallerId] = useState("Paste SIP CallerId here");
  const handleCallerIdChange = (e) => setCallerId(e.target.value);

  useEffect(() => {
    loadWebPhone();

    return function cleanup() {
      console.warn("App.js - Unmount component");
    };
  }, []); // Pass an empty array to only call the function once on mount.

  function loadWebPhone() {
    console.warn("App.js - webphone_api loaded");
    window.webphone_api.onAppStateChange(function (state) {
      if (state === "loaded") {
        //Webphone library is fully loaded here, don't touch any API before this event
        window.webphone_api.start();
      }
    });

    window.webphone_api.onCallStateChange(
      function (event, direction, peername, peerdisplayname, line, callid) {
        // Remove bracket from data by Mizu
        callid = callid.replace("[", "");
        callid = callid.replace("]", "");

        if (event === "setup") {
          // call init
          if (direction === 1) {
            // means it is an outgoing call
            console.warn(
              `PSIM - Outgoing call ${peername} - ${peerdisplayname}, Line No: ${line}, CallId: ${callid}`
            );
          } else if (direction === 2) {
            console.warn(
              `PSIM - Incoming call PeerName: ${peername}, DisplayName: ${peerdisplayname}, Line No: ${line}, CallId: ${callid}`
            );
          }
        } else if (event === "disconnected") {
          // call disconnect
          //you might hide Accept, Reject buttons by something like this:
          console.warn(
            `PSIM - Call disconnected PeerName: ${peername}, DisplayName: ${peerdisplayname}, Line No: ${line}, CallId: ${callid}`
          );
        }
      }
    );
  }

  function outgoingCallToNumber() {
    if (callerId !== "" && callerId !== "Paste SIP CallerId here") {
      window.webphone_api.setline(callerId);
      window.webphone_api.accept();
    } else {
      toast.warn(`Please paste a SIP Caller-Id before make call`, {
        position: "top-right",
        autoClose: true,
        closeOnClick: true,
      });
    }
  }

  function hangupOutgoingCall() {
    window.webphone_api.hangup();
  }

  return (
    <div className="App">
      <header className="App-header">
        Demo Outgoing Call using SIP Caller-Id
      </header>

      <div className="row m-0" >
        <header className="App-header">Outgoing Call using SIP Caller-Id</header>
        <div className="col-12 d-flex justify-content-center">
          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              value={callerId}
              onFocus={() => setCallerId("")}
              onChange={handleCallerIdChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="call-container">
            <button
              type="button"
              className="btn btn-primary call-button-square"
              onClick={outgoingCallToNumber}
            >
              <FaIcons.FaPhoneAlt size={50} />
            </button>

            <button
              type="button"
              className="btn btn-danger call-button-square"
              onClick={hangupOutgoingCall}
            >
              <FaIcons.FaPhoneSlash size={50} />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
