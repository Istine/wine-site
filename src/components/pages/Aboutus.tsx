import Layout from "../layouts/Layout";

const Aboutus: React.FC<{}> = () => {
  return (
    <Layout>
      <div className="about-us">
        <section>
          <img
            loading="lazy"
            src="https://media.istockphoto.com/photos/close-up-of-young-couple-toasting-with-glasses-of-red-wine-at-picture-id1184016689?k=20&m=1184016689&s=612x612&w=0&h=LurL6PKxIQpMFruzsRovL__GEOajw8Afn77uDmXn7GM="
            alt="wine-image-big"
          />
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            delectus porro eveniet corrupti consequuntur illum facilis quas
            rerum repellendus! Obcaecati provident aliquid debitis est eveniet
            nesciunt nulla iste qui eos! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Officia, delectus porro eveniet corrupti
            consequuntur illum facilis quas rerum repellendus! Obcaecati
            provident aliquid debitis est eveniet nesciunt nulla iste qui eos!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            delectus porro eveniet corrupti consequuntur illum facilis quas
            rerum repellendus! Obcaecati provident aliquid debitis est eveniet
            nesciunt nulla iste qui eos! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Officia, delectus porro eveniet corrupti
            consequuntur illum facilis quas rerum repellendus! Obcaecati
            provident aliquid debitis est eveniet nesciunt nulla iste qui eos!
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Aboutus;
