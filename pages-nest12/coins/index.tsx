import Axios from "axios";

const CoinList = ({ coinData }: any) => {
  return (
    <div>
      {coinData.coins.map((coin: any) => {
        return (
          <div key={coin.id} className="flex items-center m-4">
            <span className="mr-4">{coin.name}</span>
            <img src={coin.icon} className="w-8 mr-4" />
            <span>{coin.price}</span>
          </div>
        );
      })}
    </div>
  );
};

/**
 * getStaticProps
 *   - renders the page at build time.
 *   - example of SSG - static site generation
 *
 *   To make this a dynamic route, pass {params} to the async function.
 */
// export const getStaticProps = async () => {
//   const data = await Axios.get(
//     "https://api.coinstats.app/public/v1/coins?skip=0"
//   );
//   return {
//     props: {
//       coinData: data.data,
//     },
//   };
// };

/**
 * getServerSideProps
 *  - fetch and renders the API response at request time
 *  - use case: utilize when data constantly changing
 */
export const getServerSideProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinList;
