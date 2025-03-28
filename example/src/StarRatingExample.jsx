import * as React from "react";
import { StarRating, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function StarRatingExample({ theme }) {
  const [rating, setRating] = React.useState(0.5);

  return (
    <Container style={{ backgroundColor: theme.colors.background.base }}>
      <Section title="Star Rating">
        <StarRating rating={3.5} />
      </Section>
      <Section title="Star Rating Interactive">
        <StarRating
          maxStars={10}
          starSize={48}
          isEditable={true}
          rating={4}
          activeColor="#ff0000"
          backgroundColor="#000000"
        />
      </Section>
    </Container>
  );
}

export default withTheme(StarRatingExample);
