import { useParams, Route } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteDetail = () => {
  const DummyData = [
    { id: "q1", author: "Ayush", text: "This is my first quote of the day." },
    { id: "q2", author: "Mishra", text: "This is my second quote of the day." },
  ];

  let params = useParams();

  const quote = DummyData.find((element) => element.id === params.quoteId);

  if (!quote) {
    return (
      <Route path={`/quotes/${params.quoteId}`}>
        <NoQuotesFound></NoQuotesFound>
      </Route>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
