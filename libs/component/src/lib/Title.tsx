export interface ComponentProps {
  title: string;
}

export function Title({ title }: ComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
