import Layout from "../layouts/Layout";

const Ourstory: React.FC<{}> = () => {
  return (
    <Layout>
      <div className="ourstory">
        <div>
          <img
            loading="lazy"
            src="https://media.istockphoto.com/photos/close-up-of-young-couple-toasting-with-glasses-of-red-wine-at-picture-id1184016689?k=20&m=1184016689&s=612x612&w=0&h=LurL6PKxIQpMFruzsRovL__GEOajw8Afn77uDmXn7GM="
            alt="wine-image-big"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.natgeofe.com/n/8a74878e-e6e2-419b-82d3-2d3c87e04f41/image_1_2x3.jpg"
            alt="wine-image-big"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://assets3.thrillist.com/v1/image/2953020/381x254/crop;webp=auto;jpeg_quality=60.jpg"
            alt="wine-image-big"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://listverse.com/wp-content/uploads/2014/08/0116.jpg"
            alt="wine-image-big"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://i.swncdn.com/media/400w/cms/CW/faith/14328-RedWineVineyard.1200w.tn.jpg"
            alt="wine-image-big"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://the-winestory.com/wp-content/uploads/2022/01/sparkling.jpeg"
            alt="wine-image-big"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Ourstory;
