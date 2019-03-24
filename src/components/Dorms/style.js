import styled from "styled-components";

export const RoomWrapper = styled.div`
  .ui.cards a.card:hover,
  .ui.link.card:hover,
  .ui.link.cards .card:hover,
  a.ui.card:hover {
    transform: translateY(-15px);
  }
  .title {
    background-color: transparent;
    font-size: 42px;
    text-transform: uppercase;
    text-align: center;
    padding: 30px;
  }

  .desc {
    text-align: center;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    color: #ffffff;
  }

  .ui.card > .image,
  .ui.cards > .card > .image {
    cursor: pointer;
  }
`;

export const DormStyle = styled.div`
  background-color: #ffffff;
  ul {
    padding: 0;
    margin: 0;
  }
  outline: none;
  background-image: none;
  display: flex;
  justify-content: center;
  .svg {
    width: 1080px;
    height: 666px;
    position: absolute;
  }
  .rectangle {
    position: relative;
    transition: 0.5s all;
    cursor: pointer;
    fill: transparent;
  }
  .rectangle:hover {
    fill: gray;
  }

  .hide {
    display: none;
  }
  .show {
    width: 200px;
    height: 200px;
    background-color: #000000;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 24px;
    color: #ffffff;
    top: 150px;
    bottom: 0;
    right: 0;
    left: 160px;
  }
  .show ul li {
    list-style-type: none;
    word-spacing: 1px;
  }
`;
