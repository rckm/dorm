import styled from 'styled-components';

export const RoomWrapper = styled.div`
  height: 100vh;
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
    font-family: 'Montserrat', sans-serif;
    color: #000;
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
    padding: 100px 0 0 0;
  }
`;

export const SvgRect = styled.rect.attrs(({ x, width }) => ({
  x: x,
  width: width
}))`
  position: relative;
  transition: 0.5s all;
  fill: ${props => props.gender};
  cursor: pointer;
  :hover {
    fill: gray;
  }
`;

export const DormStyle = styled.div`
  background-color: #ffffff;
  border-radius: 0.28571429rem;
  padding: 2rem;
  outline: none;
  background-image: none;
  display: flex;
  justify-content: center;
  overflow: auto;

  ul {
    padding: 0;
    margin: 0;
  }

  .svgwrapper {
    position: absolute;
    margin: auto;
    text-align: center;
  }

  .svg {
    width: 1080px;
    height: 666px;
  }

  .title {
    font-size: 24px;
  }

  .text {
    font-size: 16px;
    cursor: pointer;
  }

  .tooltip {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    display: flex;
    padding: 10px 10px;
    background-color: #fff;
    justify-content: space-between;

    span {
      margin-right: 10px;
      font-size: 16px;
    }

    .center-block {
      font-weight: bold;
    }

    .last-block {
      display: flex;
      > div {
        margin-right: 10px;
        position: relative;
        font-weight: bold;
        &::before {
          content: '';
          width: 18px;
          height: 18px;
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
          margin-right: 5px;
          margin-top: -2px;
          background-color: #e3f2fd;
        }
      }

      .free {
        color: #a5d6a7;
        &::before {
          background-color: #a5d6a7;
        }
      }
      .male {
        color: #90caf9;
        &::before {
          background-color: #90caf9;
        }
      }
      .female {
        color: #f48fb1;
        &::before {
          background-color: #f48fb1;
        }
      }
    }
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
