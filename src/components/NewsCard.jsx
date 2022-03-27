import { NewsCardWrapper } from "./styled/NewsCard.styled";

export default function NewsCard({
    title,
    body
}) {
    return (
        <NewsCardWrapper>
            <h1>{title}</h1>
            {body}
        </NewsCardWrapper>
    );
}
