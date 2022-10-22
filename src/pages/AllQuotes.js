import QuoteList from "../components/quotes/QuoteList";

const AllQuotes = () => {
  const DummyData = [
    { id: "q1", author: "Ayush", text: "This is my first quote of the day." },
    { id: "q2", author: "Ayush", text: "This is my second quote of the day." },
  ];

  return (
    <>
      <QuoteList quotes={DummyData} />
    </>
  );
};

export default AllQuotes;
