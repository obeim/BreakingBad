import React, { Component } from "react";
import Character from "./Character";
import Spinner from "../layouts/Spinner";
import { motion } from "framer-motion";
class Characters extends Component {
  componentDidMount() {
    this.props.getChs();
  }
  render() {
    const { characters } = this.props;
    if (this.props.loading) return <Spinner />;
    return (
      <motion.div
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        className='grid container mx-auto lg:grid-cols-3 gap-3  md:grid-cols-2 grid-cols-1 items-center justify-items-center'
      >
        {characters.map((ch) => (
          <Character key={ch.char_id} ch={ch} />
        ))}
      </motion.div>
    );
  }
}

export default Characters;
