import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageurl
                ? "https://www.bing.com/th?id=OIP.J_r0IhJN3homvqJGp3AeUwHaCe&w=191&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="norefferer"
              href={newsurl}
              target="-blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
