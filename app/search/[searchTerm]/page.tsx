type PageProps = {
  params: {
    searchTerm: string;
  };
};

type NewsItem = {
  id: string;
  title: string;
  source: string;
  description: string;
  link: string;
};

type NewsResults = {
  news: NewsItem[];
};

const FetchSearchResults = async (searchTerm: string) => {
  const data = await fetch(
    `https://api.coinstats.app/public/v1/news/${searchTerm}?skip=0&limit=20`
  );
  const results: NewsResults = await data.json();
  return results;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const results = await FetchSearchResults(searchTerm);

  return (
    <div>
      <p className="m-4">You searched for {searchTerm} news.</p>
      <ol>
        {results &&
          results.news &&
          results.news.map((item) => (
            <li key={item.id} className="m-4">
              <p className="font-bold">{item.title}</p>
              <p>{item.description}</p>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default SearchResults;
