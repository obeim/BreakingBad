import React, { Component } from "react";
import Spinner from "../layouts/Spinner";
import Quote from "./Quote";
import { motion } from "framer-motion";

class Quotes extends Component {
  componentDidMount() {
    this.props.getQuotes();
  }
  render() {
    const { quotes } = this.props;
    console.log(this.props.loading);
    if (this.props.loading) return <Spinner />;
    return (
      <motion.div
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 container  md:mx-auto gap-10 my-10'
      >
        {quotes.map((quote) => (
          <Quote key={quote.quote_id} quote={quote} />
        ))}
      </motion.div>
    );
  }
}

export default Quotes;
