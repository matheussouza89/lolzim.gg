import styled from 'styled-components'

interface DetailsProps {
  backgroundImage: string
}

export const Details = styled.div<DetailsProps>`
  & .champ-img {
    background-image: url(${(props) => props.backgroundImage});
    height: 600px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(8px);

    & img {
    }

    &:after {
      display: flex;
      justify-items: center;
      position: absolute;
      content: ' ';
    }
  }
`
