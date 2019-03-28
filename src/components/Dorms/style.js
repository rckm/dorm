import styled from "styled-components";

export const RoomWrapper = styled.div`
  height: 100%;
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
  .ui.card .meta,
  .ui.cards > .card .meta {
    color: black;
    font-size: 16px;
  }

  .card-group {
    padding: 100px 0;
  }
`;

export const DormStyle = styled.div`
  background-color: #ffffff;
  border-radius: 0.28571429rem;
  padding: 2rem;
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

  .title {
    font-size: 24px;
  }

  .hide {
    display: none;
  }
  .text {
    font-size: 16px;
    cursor: pointer;
  }
  .show {
    width: 300px;
    height: 270px;
    background-color: #b1b1b1;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 24px;
    color: #ffffff;
    top: 70px;
    bottom: 0;
    right: 0;
    left: 105px;
  }
  .show ul li {
    list-style-type: none;
    line-height: 40px;
    font-size: 14px;
  }

  .select-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
`;
