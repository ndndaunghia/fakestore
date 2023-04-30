import React from "react";
import styled from "styled-components";
import "./styles.css";

const FooterItem = styled.footer`
  background-color: black;
`;

const RowItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding: 20px;
`;

const ColItem = styled.div`
  color: white;
  flex: 1 1 25%;
  height: 100%;
  & h5 {
    text-transform: uppercase;
  }
  & a {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <FooterItem>
      <div className="container">
        <RowItem className="row">
          <ColItem className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <h5>about us</h5>
            <div className="footer-item">
              <a target="_blank " href="">
                Who we are
              </a>
            </div>
            <div className="footer-item">
              <a target="_blank " href="">
                Quality in the details
              </a>
            </div>
            <div className="footer-item">
              <a href="" target="_blank ">
                Customer Reviews
              </a>
            </div>
          </ColItem>
          <ColItem className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="">
              <h5>departments</h5>
              <div className="footer-item">
                <a target="_blank " href="">
                  Woman fashion
                </a>
              </div>
              <div className="footer-item">
                <a target="_blank " href="">
                  Men fashion
                </a>
              </div>
              <div className="footer-item">
                <a href="" target="_blank ">
                  Home
                </a>
              </div>
            </div>
          </ColItem>
          <ColItem className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="footer-center">
              <h5>help</h5>
              <div className="footer-item">
                <a target="_blank " href="">
                  Customer service
                </a>
              </div>
              <div className="footer-item">
                <a target="_blank " href="">
                  Size guide
                </a>
              </div>
              <div className="footer-item">
                <a href="" target="_blank ">
                  Contact us
                </a>
              </div>
            </div>
          </ColItem>
          <ColItem className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="footer-center">
              <h5>payment</h5>
              <div className="footer-item">
                <a target="_blank " href="">
                  Purchase items
                </a>
              </div>
              <div className="footer-item">
                <a target="_blank " href="">
                  Guarantee
                </a>
              </div>
              <div className="footer-item">
                <a href="" target="_blank ">
                  Contact us
                </a>
              </div>
            </div>
          </ColItem>
        </RowItem>
      </div>
    </FooterItem>
  );
}
