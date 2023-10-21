import styled from 'styled-components'

export const Card = styled.div`
  display: block;
  cursor: pointer;
  flex: 1 1 20%;
  max-width: 20%;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
  font-family: 'BeaufortforLOL-Bold', serif;
  width: 100%;

  @media (max-width: 1000px) {
    flex: 1 1 25%;
    max-width: 25%;
  }

  @media (max-width: 750px) {
    flex: 1 1 33%;
    max-width: 33%;
  }

  @media (max-width: 520px) {
    flex: 1 1 50%;
    max-width: 50%;
  }

  & a {
    text-decoration: none;
    width: 100%;

    & img {
      object-fit: cover;
      width: 100%;
    }

    & .champ-img {
      display: flex;
      flex-direction: row-reverse;
      overflow: hidden;
      transition: 0.5s;
    }

    & .champ-img::after {
      content: '';
      position: absolute;
      display: block;
      padding-top: 10px;
      transform: translate(50%, -50%) rotate(45deg);
      border-left: 10px solid #fff;
      border-right: 10px solid #fff;
      border-bottom: 10px solid #fff;
      transition: 0.5s;
    }

    & .champ-name {
      color: #fff;
      display: block;
      font-size: 20px;
      font-style: italic;
      font-weight: 800;
      letter-spacing: 0.08em;
      overflow: hidden;
      background-color: rgb(6, 28, 37);
      padding: 6% 8%;
      text-transform: uppercase;
      transition: 0.5s;
    }
  }

  & a:hover {
    & .champ-img::after {
      content: '';
      position: absolute;
      display: block;
      padding-top: 10px;
      transform: translate(90%, -90%) rotate(45deg);
    }

    & .champ-img img {
      transform: scale(1.2);
      transition: 0.5s;
    }

    & .champ-name {
      background-color: rgb(0, 102, 128);
      padding-left: 12%;
    }
  }

  & a:not(:hover) {
    & .champ-img img {
      transition: 0.5s;
    }
  }
`
