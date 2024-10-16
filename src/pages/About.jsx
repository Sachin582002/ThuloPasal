import Title from "../components/Title";

const About = () => {
  return (
    <section className="py-12 min-h-[80vh]">
      <div className="max-w-screen-xl mx-auto">
        <Title label="About Us" />
        <h2 className="mt-8 mb-4 text-3xl">Introduction</h2>
        <p className="text-justify">
        ThuloPasal is one of the prominent e-commerce platforms in Nepal, offering a wide range of products and services online.ThuloPasal offers categories such as electronics, groceries, fashion, home appliances, personal care, and much more, making it a one-stop destination for online shoppers.The platform provides special attention to local sellers and products, promoting Nepali-made goods alongside international brands. This helps small and medium enterprises in Nepal to reach a wider audience.

        </p>
        <h2 className="mt-8 mb-4 text-3xl">Aims & Objectives</h2>
        <p>
        The main aim of ThuloPasal is to become a leading e-commerce platform in Nepal by providing a digital marketplace that caters to the diverse needs of both customers and sellers. It aims to simplify the shopping experience, offer a wide variety of products, and support local businesses in their digital transformation.
        </p>
        <p>
        The main Objectives of ThuloPasal is to Provide a Comprehensive Online Marketplace Offer a wide range of products, from groceries to electronics, ensuring that customers have access to almost anything they need on a single platform.

        </p>
      </div>
    </section>
  );
};

export default About;