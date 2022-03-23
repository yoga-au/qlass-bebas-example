import { styled } from 'goober';

export interface ComponentProps {
  title: string;
}

const ContainerTitle = styled('div')`
  padding: 1.5em;
  background-color: fuchsia;
  color: white;
  font-family: sans-serif;
`;

export function Title({ title }: ComponentProps) {
  return (
    <ContainerTitle>
      <h1>{title}</h1>
    </ContainerTitle>
  );
}

export default Title;
