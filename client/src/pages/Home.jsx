import React from 'react'
import Client from "../components/Client";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
        <div className="d-flex gap-3 mb-4"> 
        <AddClientModal />
        </div>
        <Projects />
        <hr />
        <Client />
    </div>
  )
}

export default Home