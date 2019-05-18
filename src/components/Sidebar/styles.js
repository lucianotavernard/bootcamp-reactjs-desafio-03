import styled from 'styled-components';

export const Aside = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 400px;
  height: 100vh;
  padding: 15px;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);

    li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;

      &:nth-child(1n + 2) {
        border-top: 1px solid #ddd;
      }

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
        border-radius: 50%;
      }

      .info {
        width: 210px;

        h4 {
          color: #333;
          font-size: 16px;
          font-family: 'Montserrat', 'sans-serif';
          font-weight: 600;
        }

        p {
          color: #666;
          font-size: 12px;
        }
      }

      .msg-info {
        color: #666;
        font-family: 'Montserrat', 'sans-serif';
      }

      button {
        border: 0;
        color: #dd0031;
        background-color: transparent;
      }

      .indicator {
        width: 20px;
        height: 20px;
        color: #777;
        cursor: pointer;
      }
    }
  }
`;
