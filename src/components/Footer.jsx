import React from "react";
import styled from "styled-components";
import "./style.css";
import {MdKeyboardArrowDown} from 'react-icons/md'
export default function Footer() {
  return (
    <Container>
      <div className="footer-wrapper centered">
        <div className="footer-divider"></div>
        <div className="site-footer">
          <p class="footer-top">
            Questions? Call
            <a class="footer-top-a" href="tel:000-800-919-1694">
                000-800-919-1694
            </a>
          </p>

          <ul class="footer-links structural">
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_faq_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/support/412"
                placeholder="footer_responsive_link_faq"
              >
                <span id="" data-uia="data-uia-footer-label">
                  FAQ
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_help_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com"
                placeholder="footer_responsive_link_help"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Help Centre
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_terms_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/termsofuse"
                placeholder="footer_responsive_link_terms"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Terms of Use
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_privacy_separate_link_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/privacy"
                placeholder="footer_responsive_link_privacy_separate_link"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Privacy
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_cookies_separate_link_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="#"
                placeholder="footer_responsive_link_cookies_separate_link"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Cookie Preferences
                </span>
              </a>
            </li>
            <li
              class="footer-link-item"
              placeholder="footer_responsive_link_corporate_information_item"
            >
              <a
                class="footer-link"
                data-uia="footer-link"
                href="https://help.netflix.com/legal/corpinfo"
                placeholder="footer_responsive_link_corporate_information"
              >
                <span id="" data-uia="data-uia-footer-label">
                  Corporate Information
                </span>
              </a>
            </li>
          </ul>

          <div class="lang-selection-container" id="lang-switcher">
            <div data-uia="language-picker+container" class="ui-select-wrapper">
              <label for="lang-switcher-select" class="ui-label">
                <span class="ui-label-text">Select Language 
                <MdKeyboardArrowDown/></span>
              </label>
              <div class="select-arrow medium prefix globe">
                <select
                  data-uia="language-picker"
                  class="ui-select medium"
                  id="lang-switcher-select"
                  tabindex="0"
                  placeholder="lang-switcher"
                >
                  <option
                    selected=""
                    lang="en"
                    value="/in/login"
                    data-language="en"
                    data-country="IN"
                  >
                    English
                  </option>
                  <option
                    lang="hi"
                    value="/in-hi/login"
                    data-language="hi"
                    data-country="IN"
                  >
                    हिन्दी
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
