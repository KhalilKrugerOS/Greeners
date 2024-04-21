import Feed from "../components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        عاون ولاد بلادك <br className="max-md:hidden" />
        <span className="green_gradient text-center">
          وساهم في بناء مستقبل جديد
        </span>
      </h1>
      <p className="desc text-center">
        GreenGrowth Foundation is a Tunisian Charity company that aims to
        support the growth small businesses, small farmers, provide education
        and support local communities instead of Taxe to goverment, you monitor
        your own spendings
      </p>
      <Feed />
    </section>
  );
};

export default Home;
