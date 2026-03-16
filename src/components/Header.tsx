import { Container } from "./Container";

export const Header = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <p>Logo</p>
          </div>
          <div></div>
          <div>
            <p>Login</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
