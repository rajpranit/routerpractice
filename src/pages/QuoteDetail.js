import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteDetail = () => {
  const match = useRouteMatch();
  console.log(match);

  const DummyData = [
    { id: "q1", author: "Ayush", text: "This is my first quote of the day." },
    { id: "q2", author: "Mishra", text: "This is my second quote of the day." },
  ];

  let params = useParams();

  const quote = DummyData.find((element) => element.id === params.quoteId);

  if (!quote) {
    return (
      <Route path={`${match.path}`}>
        <NoQuotesFound></NoQuotesFound>
      </Route>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
