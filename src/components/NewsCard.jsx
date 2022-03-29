import { NewsCardWrapperStyled } from "./styled/NewsCard.styled";

export default function NewsCard({
    title,
    body
}) {
    return (
        <NewsCardWrapperStyled>
            <h1>{title}</h1>
            <p>{body}</p>
        </NewsCardWrapperStyled>
    );
}
