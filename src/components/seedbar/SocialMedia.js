import React from "react";
import "../../assets/css/socialMedia/Social.css"
export default function SocialMedia() {
    let url=""
  return (
    <div>
      <div class="wrapper">
        <a href={url} className="icon facebook">
          <div class="tooltip">Facebook</div>
          <span>
            <i class="fab fa-facebook-f"></i>
          </span>
        </a>
        <a href={url} className="icon linkedin">
          <div class="tooltip">linkedin</div>
          <span>
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
        <a href={url} className="icon instagram">
          <div class="tooltip">Instagram</div>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
        </a>
        <a href={url} className="icon github">
          <div class="tooltip">Github</div>
          <span>
            <i class="fab fa-github"></i>
          </span>
        </a>
        <a href={url} className="icon youtube">
          <div class="tooltip">Youtube</div>
          <span>
            <i class="fab fa-youtube"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
